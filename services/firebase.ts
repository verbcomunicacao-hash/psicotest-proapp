
/**
 * Arquivo de Configuração e Serviços do Firebase
 */

import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  doc,
  setDoc,
  getDoc,
  updateDoc
} from 'firebase/firestore';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile,
  User as FirebaseUser
} from 'firebase/auth';
import { TestResult, UserRole, LoggedInUser, Client } from '../types';

// --- ÁREA DE CONFIGURAÇÃO ---
// Chaves reais do projeto PsicoTest-Pro
const firebaseConfig = {
  apiKey: "AIzaSyCYvXwpAEbgqsw5w1vDueQFBXBoKV0rzG0",
  authDomain: "psicotest-pro.firebaseapp.com",
  projectId: "psicotest-pro",
  storageBucket: "psicotest-pro.firebasestorage.app",
  messagingSenderId: "779261409416",
  appId: "1:779261409416:web:c1c9ede697370196d3c73d"
};
// ------------------------------------------------------------------

// Inicializa o Firebase
let app;
let db: any;
let auth: any;
let isFirebaseReady = false;

try {
    // Inicializa com as chaves fornecidas
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);
    isFirebaseReady = true;
    console.log("✅ Firebase conectado com sucesso!");
} catch (error) {
    console.error("❌ Erro ao inicializar Firebase.", error);
}

// --- Serviços de Autenticação ---

export const loginUser = async (email: string, pass: string) => {
    if (!isFirebaseReady) throw new Error("Erro de conexão com o banco de dados.");
    return await signInWithEmailAndPassword(auth, email, pass);
};

export const registerUser = async (email: string, pass: string, name: string, role: UserRole = UserRole.USER) => {
    if (!isFirebaseReady) throw new Error("Erro de conexão com o banco de dados.");
    
    // 1. Criar o usuário na autenticação (Email/Senha)
    const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
    const user = userCredential.user;
    
    // 2. Atualizar nome no perfil de Auth
    await updateProfile(user, { displayName: name });

    // 3. Salvar dados extras no Firestore (banco de dados) para persistência do perfil
    // Isso cria o documento do usuário na coleção 'users'
    try {
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            name,
            email,
            role,
            createdAt: new Date().toISOString()
        });
    } catch (e) {
        console.error("Erro ao salvar perfil do usuário no Firestore:", e);
        // Não impede o registro, mas loga o erro
    }

    return user;
};

export const logoutUser = async () => {
    if (!isFirebaseReady) return;
    await signOut(auth);
};

export const subscribeToAuth = (callback: (user: LoggedInUser | null) => void) => {
    if (!isFirebaseReady) return () => {};
    
    return onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
            // Buscar role (tipo de usuário) no banco de dados
            try {
                const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
                
                let role = UserRole.USER; // Padrão
                
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    role = userData.role || UserRole.USER;
                }

                // Se for o email do admin (hardcoded para segurança inicial), força admin
                if (firebaseUser.email === 'admin@psicotestpro.com') {
                    role = UserRole.ADMIN;
                }
                
                const appUser: LoggedInUser = {
                    id: firebaseUser.uid,
                    name: firebaseUser.displayName || "Usuário",
                    email: firebaseUser.email || "",
                    role: role, 
                    clients: [], // Em um app real, buscaríamos isso do banco
                    professionalId: 'prof1' // Mock para manter compatibilidade
                };
                callback(appUser);
            } catch (e) {
                console.error("Erro ao buscar perfil do usuário", e);
                // Fallback em caso de erro no banco
                callback({
                    id: firebaseUser.uid,
                    name: firebaseUser.displayName || "Usuário",
                    email: firebaseUser.email || "",
                    role: UserRole.USER
                } as LoggedInUser);
            }
        } else {
            callback(null);
        }
    });
};

// --- Serviços de Banco de Dados (Firestore) ---

export const saveTestResultToFirebase = async (result: TestResult) => {
    if (!isFirebaseReady) {
        alert("Erro de conexão com o banco de dados.");
        return;
    }
    try {
        // Salva na coleção 'results'
        await addDoc(collection(db, "results"), result);
        console.log("Resultado salvo na nuvem!");
    } catch (e) {
        console.error("Erro ao salvar resultado:", e);
        alert("Erro ao salvar resultado na nuvem. Verifique sua conexão.");
        throw e;
    }
};

export const updateTestResult = async (resultId: string, analysis: string, summary: string) => {
    if (!isFirebaseReady) throw new Error("Firebase não conectado");
    
    // Como o ID local pode não ser o ID do documento do Firestore (se foi criado offline ou é mock),
    // precisamos verificar. Se o ID começar com "result_", é provável que seja o ID do documento se foi salvo pelo Firestore,
    // mas nossa implementação de saveTestResultToFirebase usa addDoc que gera IDs aleatórios.
    // O ideal seria guardar o ID do documento. 
    // Para simplificar aqui: vamos tentar atualizar diretamente se o ID parecer válido, 
    // ou buscar pelo ID interno se necessário.
    
    try {
        // Assumindo que resultId é o ID do documento (se veio do getUserResultsFromFirebase)
        // Se o ID for complexo/gerado pelo Firestore, funciona.
        // Se for 'result1' (mock), vai falhar, mas estamos em produção agora.
        
        const resultRef = doc(db, "results", resultId);
        await updateDoc(resultRef, {
            analysis: analysis,
            summary: summary
        });
        console.log("Resultado atualizado com sucesso!");
    } catch (e) {
        console.error("Erro ao atualizar resultado:", e);
        throw e;
    }
};

export const getUserResultsFromFirebase = async (userId: string): Promise<TestResult[]> => {
    if (!isFirebaseReady) return [];
    try {
        const q = query(collection(db, "results"), where("userId", "==", userId));
        const querySnapshot = await getDocs(q);
        const results: TestResult[] = [];
        querySnapshot.forEach((doc) => {
            // Converte os dados do Firestore para o nosso tipo TestResult
            const data = doc.data();
            results.push({ 
                id: doc.id, // Importante: Usar o ID do documento do Firestore para permitir atualizações futuras
                userId: data.userId,
                questionnaireId: data.questionnaireId,
                scores: data.scores,
                analysis: data.analysis,
                summary: data.summary,
                completedAt: data.completedAt,
                startedAt: data.startedAt,
                durationSeconds: data.durationSeconds,
                clientFeedback: data.clientFeedback,
                answers: data.answers
            } as TestResult);
        });
        // Ordenar por data (mais recente primeiro)
        return results.sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime());
    } catch (e) {
        console.error("Erro ao buscar resultados:", e);
        return [];
    }
};

export { db, auth, isFirebaseReady };
