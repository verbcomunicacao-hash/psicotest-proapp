
import { Admin, Professional, Client, UserRole, TestResult } from '../types';

export const firstClientTestResult: TestResult = {
  id: 'result1',
  userId: 'client1',
  // Fix: Corrected questionnaireId to match an existing test id
  questionnaireId: 'disc-full-01',
  scores: { D: 8, I: 6, S: 4, C: 2 },
  analysis: 'Este é um exemplo de análise gerada para o cliente de teste. O perfil indica uma forte Dominância (D), sugerindo uma pessoa assertiva, orientada para resultados e que gosta de desafios. A Influência (I) moderada aponta para boas habilidades de comunicação e persuasão. A Estabilidade (S) e Cautela (C) mais baixas indicam uma preferência por ambientes dinâmicos e de ritmo acelerado, com menos foco em rotinas e detalhes minuciosos.',
  summary: 'Perfil Dominante-Influente. Assertivo, focado em resultados e comunicativo.',
  completedAt: new Date().toISOString(),
  answers: {
    'q1': 3, 'q2': 2, 'q3': 1, 'q4': 0, 'q5': 3, 'q6': 2, 'q7': 1, 'q8': 0, 'q9': 3, 'q10': 2, 'q11': 1, 'q12': 0, 'q13': 3, 'q14': 2, 'q15': 1, 'q16': 0
  },
};

const client1: Client = {
  id: 'client1',
  name: 'Ana Silva',
  email: 'ana.silva@example.com',
  role: UserRole.USER,
  professionalId: 'prof1',
  testResult: firstClientTestResult,
  demographics: {
    age: 28,
    gender: 'Feminino',
    education: 'Superior Completo'
  },
  attachments: [
    { name: 'Notas da Sessão - 12-07-2024.pdf', size: 125829, type: 'application/pdf' }
  ]
};

const client2: Client = {
  id: 'client2',
  name: 'Bruno Costa',
  email: 'bruno.costa@example.com',
  role: UserRole.USER,
  professionalId: 'prof1',
  testResult: null,
    demographics: {
    age: 35,
    gender: 'Masculino',
    education: 'Pós-graduação'
  }
};

const client3: Client = {
  id: 'client3',
  name: 'Carla Dias',
  email: 'carla.dias@example.com',
  role: UserRole.USER,
  professionalId: 'prof2',
  testResult: null,
};


export const professionalUsers: Professional[] = [
  {
    id: 'prof1',
    name: 'Dr. Carlos Ferreira',
    email: 'carlos.ferreira@clinic.com',
    role: UserRole.PROFESSIONAL,
    clients: [client1, client2],
    profession: 'Psicólogo Clínico com foco em TCC',
  },
  {
    id: 'prof2',
    name: 'Dra. Sofia Mendes',
    email: 'sofia.mendes@clinic.com',
    role: UserRole.PROFESSIONAL,
    clients: [client3],
    profession: 'Coach de Carreira e Liderança',
  },
];

export const adminUser: Admin = {
  id: 'admin1',
  name: 'Admin',
  email: 'admin@psicotestpro.com',
  role: UserRole.ADMIN,
};