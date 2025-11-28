
import { Questionnaire, FeedbackType } from '../types';

// Reusable DISC 40 questions
const disc40Questions = [
      { id: 'd40-g1', text: 'Grupo 1', options: [{ text: 'Aventureiro', value: 1 }, { text: 'Animado', value: 2 }, { text: 'Adaptável', value: 3 }, { text: 'Analítico', value: 4 }] },
      { id: 'd40-g2', text: 'Grupo 2', options: [{ text: 'Franco', value: 1 }, { text: 'Otimista', value: 2 }, { text: 'Serviçal', value: 3 }, { text: 'Ordeiro', value: 4 }] },
      { id: 'd40-g3', text: 'Grupo 3', options: [{ text: 'Líder', value: 1 }, { text: 'Ativo', value: 2 }, { text: 'Ouvinte', value: 3 }, { text: 'Leal', value: 4 }] },
      { id: 'd40-g4', text: 'Grupo 4', options: [{ text: 'Impaciente', value: 1 }, { text: 'Inoportuno', value: 2 }, { text: 'Indeciso', value: 3 }, { text: 'Inseguro', value: 4 }] },
      { id: 'd40-g5', text: 'Grupo 5', options: [{ text: 'Mandão', value: 1 }, { text: 'Desorganizado', value: 2 }, { text: 'Confuso', value: 3 }, { text: 'Deprimido', value: 4 }] },
      { id: 'd40-g6', text: 'Grupo 6', options: [{ text: 'Energético', value: 1 }, { text: 'Sociável', value: 2 }, { text: 'Submisso', value: 3 }, { text: 'Doador', value: 4 }] },
      { id: 'd40-g7', text: 'Grupo 7', options: [{ text: 'Audacioso', value: 1 }, { text: 'Encantador', value: 2 }, { text: 'Diplomático', value: 3 }, { text: 'Minucioso', value: 4 }] },
      { id: 'd40-g8', text: 'Grupo 8', options: [{ text: 'Produtivo', value: 1 }, { text: 'Popular', value: 2 }, { text: 'Agradável', value: 3 }, { text: 'Perfeccionista', value: 4 }] },
      { id: 'd40-g9', text: 'Grupo 9', options: [{ text: 'Cabeçudo', value: 1 }, { text: 'Casual', value: 2 }, { text: 'Hesitante', value: 3 }, { text: 'Insatisfeito', value: 4 }] },
      { id: 'd40-g10', text: 'Grupo 10', options: [{ text: 'Manipulador', value: 1 }, { text: 'Desordenado', value: 2 }, { text: 'Resmungão', value: 3 }, { text: 'Triste', value: 4 }] },
      { id: 'd40-g11', text: 'Grupo 11', options: [{ text: 'Habilidoso', value: 1 }, { text: 'Estimulante', value: 2 }, { text: 'Reservado', value: 3 }, { text: 'Respeitoso', value: 4 }] },
      { id: 'd40-g12', text: 'Grupo 12', options: [{ text: 'Independente', value: 1 }, { text: 'Inspirado', value: 2 }, { text: 'Inofensivo', value: 3 }, { text: 'Idealista', value: 4 }] },
      { id: 'd40-g13', text: 'Grupo 13', options: [{ text: 'Autoritário', value: 1 }, { text: 'Metido', value: 2 }, { text: 'Tranquilo', value: 3 }, { text: 'Acanhado', value: 4 }] },
      { id: 'd40-g14', text: 'Grupo 14', options: [{ text: 'Discutidor', value: 1 }, { text: 'Esquentado', value: 2 }, { text: 'Incerto', value: 3 }, { text: 'Alienado', value: 4 }] },
      { id: 'd40-g15', text: 'Grupo 15', options: [{ text: 'Tirânico', value: 1 }, { text: 'Barulhento', value: 2 }, { text: 'Preguiçoso', value: 3 }, { text: 'Solitário', value: 4 }] },
      { id: 'd40-g16', text: 'Grupo 16', options: [{ text: 'Positivo', value: 1 }, { text: 'Charmoso', value: 2 }, { text: 'Paciente', value: 3 }, { text: 'Planejador', value: 4 }] },
      { id: 'd40-g17', text: 'Grupo 17', options: [{ text: 'Ativo', value: 1 }, { text: 'Desavergonhado', value: 2 }, { text: 'Mediador', value: 3 }, { text: 'Musical', value: 4 }] },
      { id: 'd40-g18', text: 'Grupo 18', options: [{ text: 'Inflexível', value: 1 }, { text: 'Repetitivo', value: 2 }, { text: 'Relutante', value: 3 }, { text: 'Ressentido', value: 4 }] },
      { id: 'd40-g19', text: 'Grupo 19', options: [{ text: 'Trabalhador', value: 1 }, { text: 'Egoísta', value: 2 }, { text: 'Preocupado', value: 3 }, { text: 'Retraído', value: 4 }] },
      { id: 'd40-g20', text: 'Grupo 20', options: [{ text: 'Imprudente', value: 1 }, { text: 'Agitado', value: 2 }, { text: 'Relutante', value: 3 }, { text: 'Vingativo', value: 4 }] },
      { id: 'd40-g21', text: 'Grupo 21', options: [{ text: 'Persuasivo', value: 1 }, { text: 'Brincalhão', value: 2 }, { text: 'Sereno', value: 3 }, { text: 'Persistente', value: 4 }] },
      { id: 'd40-g22', text: 'Grupo 22', options: [{ text: 'Vigoroso', value: 1 }, { text: 'Engraçado', value: 2 }, { text: 'Amigável', value: 3 }, { text: 'Fiel', value: 4 }] },
      { id: 'd40-g23', text: 'Grupo 23', options: [{ text: 'Chefe', value: 1 }, { text: 'Atraente', value: 2 }, { text: 'Contente', value: 3 }, { text: 'Detalhista', value: 4 }] },
      { id: 'd40-g24', text: 'Grupo 24', options: [{ text: 'Frio', value: 1 }, { text: 'Imprevisível', value: 2 }, { text: 'Desligado', value: 3 }, { text: 'Impopular', value: 4 }] },
      { id: 'd40-g25', text: 'Grupo 25', options: [{ text: 'Intolerante', value: 1 }, { text: 'Inconstante', value: 2 }, { text: 'Apático', value: 3 }, { text: 'Introvertido', value: 4 }] },
      { id: 'd40-g26', text: 'Grupo 26', options: [{ text: 'Competitivo', value: 1 }, { text: 'Convincente', value: 2 }, { text: 'Controlado', value: 3 }, { text: 'Atencioso', value: 4 }] },
      { id: 'd40-g27', text: 'Grupo 27', options: [{ text: 'Confiante', value: 1 }, { text: 'Alegre', value: 2 }, { text: 'Previsível', value: 3 }, { text: 'Culto', value: 4 }] },
      { id: 'd40-g28', text: 'Grupo 28', options: [{ text: 'Valente', value: 1 }, { text: 'Vivaz', value: 2 }, { text: 'Equilibrado', value: 3 }, { text: 'Comportado', value: 4 }] },
      { id: 'd40-g29', text: 'Grupo 29', options: [{ text: 'Orgulhoso', value: 1 }, { text: 'Permissivo', value: 2 }, { text: 'Simples', value: 3 }, { text: 'Cauteloso', value: 4 }] },
      { id: 'd40-g30', text: 'Grupo 30', options: [{ text: 'Obstinado', value: 1 }, { text: 'Convencido', value: 2 }, { text: 'Lento', value: 3 }, { text: 'Cético', value: 4 }] },
      { id: 'd40-g31', text: 'Grupo 31', options: [{ text: 'Autossuficiente', value: 1 }, { text: 'Espirituoso', value: 2 }, { text: 'Satisfeito', value: 3 }, { text: 'Sensível', value: 4 }] },
      { id: 'd40-g32', text: 'Grupo 32', options: [{ text: 'Decidido', value: 1 }, { text: 'Demonstrativo', value: 2 }, { text: 'Profundo', value: 3 }, { text: 'Irônico', value: 4 }] },
      { id: 'd40-g33', text: 'Grupo 33', options: [{ text: 'Insensível', value: 1 }, { text: 'Indisciplinado', value: 2 }, { text: 'Desinteressado', value: 3 }, { text: 'Rancoroso', value: 4 }] },
      { id: 'd40-g34', text: 'Grupo 34', options: [{ text: 'Ousado', value: 1 }, { text: 'Ingênuo', value: 2 }, { text: 'Indiferente', value: 3 }, { text: 'Negativo', value: 4 }] },
      { id: 'd40-g35', text: 'Grupo 35', options: [{ text: 'Irritável', value: 1 }, { text: 'Distraído', value: 2 }, { text: 'Vagaroso', value: 3 }, { text: 'Desconfiado', value: 4 }] },
      { id: 'd40-g36', text: 'Grupo 36', options: [{ text: 'Seguro', value: 1 }, { text: 'Espontâneo', value: 2 }, { text: 'Tímido', value: 3 }, { text: 'Organizado', value: 4 }] },
      { id: 'd40-g37', text: 'Grupo 37', options: [{ text: 'Firme', value: 1 }, { text: 'Conversador', value: 2 }, { text: 'Tolerante', value: 3 }, { text: 'Pensativo', value: 4 }] },
      { id: 'd40-g38', text: 'Grupo 38', options: [{ text: 'Mandão', value: 1 }, { text: 'Esquecido', value: 2 }, { text: 'Medroso', value: 3 }, { text: 'Complicado', value: 4 }] },
      { id: 'd40-g39', text: 'Grupo 39', options: [{ text: 'Indelicado', value: 1 }, { text: 'Tagarela', value: 2 }, { text: 'Tímido', value: 3 }, { text: 'Sensível', value: 4 }] },
      { id: 'd40-g40', text: 'Grupo 40', options: [{ text: 'Astuto', value: 1 }, { text: 'Instável', value: 2 }, { text: 'Acomodado', value: 3 }, { text: 'Crítico', value: 4 }] }
];

export const testsPart1: Questionnaire[] = [
  // 1. --- Teste DISC (Versão Padrão - 15 Grupos) ---
  {
    id: 'disc-full-01',
    title: '1. TESTE DISC – Perfil Comportamental (Rápido)',
    description: 'Identifica seu perfil comportamental dominante (Dominância, Influência, Estabilidade, Conformidade). Versão rápida com 15 grupos.',
    introduction: 'Em cada grupo de 4 palavras abaixo, escolha aquela que mais se assemelha ao seu comportamento no ambiente de trabalho.',
    applicatorInstructions: 'Oriente o respondente a escolher uma palavra por grupo rapidamente.',
    sources: 'Baseado no modelo original de William Moulton Marston.',
    version: 2,
    analysisPrompt: 'Analise o perfil DISC (D, I, S, C). Identifique pontos fortes, motivadores e ambiente ideal.',
    feedback: {
      type: FeedbackType.ForcedChoiceDisc,
      devolutiva: {
        'D': { name: 'Dominância', description: 'Direto, determinado, ousado.', interpretation: 'Foco em resultados e rapidez.' },
        'I': { name: 'Influência', description: 'Comunicativo, otimista, persuasivo.', interpretation: 'Foco em pessoas e interação.' },
        'S': { name: 'Estabilidade', description: 'Paciente, leal, confiável.', interpretation: 'Foco em segurança e planejamento.' },
        'C': { name: 'Conformidade', description: 'Preciso, analítico, perfeccionista.', interpretation: 'Foco em qualidade e regras.' }
      }
    },
    questions: [
      { id: 'disc-g1', text: 'Grupo 1', options: [{ text: 'Aventureiro', value: 1 }, { text: 'Animado', value: 2 }, { text: 'Adaptável', value: 3 }, { text: 'Analítico', value: 4 }] },
      { id: 'disc-g2', text: 'Grupo 2', options: [{ text: 'Franco', value: 1 }, { text: 'Otimista', value: 2 }, { text: 'Serviçal', value: 3 }, { text: 'Ordeiro', value: 4 }] },
      { id: 'disc-g3', text: 'Grupo 3', options: [{ text: 'Líder', value: 1 }, { text: 'Ativo', value: 2 }, { text: 'Ouvinte', value: 3 }, { text: 'Leal', value: 4 }] },
      { id: 'disc-g4', text: 'Grupo 4', options: [{ text: 'Impaciente', value: 1 }, { text: 'Inoportuno', value: 2 }, { text: 'Indeciso', value: 3 }, { text: 'Inseguro', value: 4 }] },
      { id: 'disc-g5', text: 'Grupo 5', options: [{ text: 'Mandão', value: 1 }, { text: 'Desorganizado', value: 2 }, { text: 'Confuso', value: 3 }, { text: 'Deprimido', value: 4 }] },
      { id: 'disc-g6', text: 'Grupo 6', options: [{ text: 'Energético', value: 1 }, { text: 'Sociável', value: 2 }, { text: 'Submisso', value: 3 }, { text: 'Doador', value: 4 }] },
      { id: 'disc-g7', text: 'Grupo 7', options: [{ text: 'Audacioso', value: 1 }, { text: 'Encantador', value: 2 }, { text: 'Diplomático', value: 3 }, { text: 'Minucioso', value: 4 }] },
      { id: 'disc-g8', text: 'Grupo 8', options: [{ text: 'Produtivo', value: 1 }, { text: 'Popular', value: 2 }, { text: 'Agradável', value: 3 }, { text: 'Perfeccionista', value: 4 }] },
      { id: 'disc-g9', text: 'Grupo 9', options: [{ text: 'Direto', value: 1 }, { text: 'Casual', value: 2 }, { text: 'Hesitante', value: 3 }, { text: 'Insatisfeito', value: 4 }] },
      { id: 'disc-g10', text: 'Grupo 10', options: [{ text: 'Competitivo', value: 1 }, { text: 'Desordenado', value: 2 }, { text: 'Resmungão', value: 3 }, { text: 'Metódico', value: 4 }] },
      { id: 'disc-g11', text: 'Grupo 11', options: [{ text: 'Ousado', value: 1 }, { text: 'Expressivo', value: 2 }, { text: 'Compreensivo', value: 3 }, { text: 'Cauteloso', value: 4 }] },
      { id: 'disc-g12', text: 'Grupo 12', options: [{ text: 'Determinado', value: 1 }, { text: 'Convincente', value: 2 }, { text: 'Bondoso', value: 3 }, { text: 'Disciplinado', value: 4 }] },
      { id: 'disc-g13', text: 'Grupo 13', options: [{ text: 'Independente', value: 1 }, { text: 'Estimulante', value: 2 }, { text: 'Calmo', value: 3 }, { text: 'Preciso', value: 4 }] },
      { id: 'disc-g14', text: 'Grupo 14', options: [{ text: 'Firme', value: 1 }, { text: 'Alegre', value: 2 }, { text: 'Paciente', value: 3 }, { text: 'Formal', value: 4 }] },
      { id: 'disc-g15', text: 'Grupo 15', options: [{ text: 'Enérgico', value: 1 }, { text: 'Comunicativo', value: 2 }, { text: 'Apoiador', value: 3 }, { text: 'Sistemático', value: 4 }] }
    ]
  },

  // 2. --- Teste DISC (Versão Avançada - 40 Questões) ---
  {
    id: 'disc-full-40-01',
    title: '2. TESTE DISC – Perfil Comportamental (Completo)',
    description: 'Versão de alta precisão com 40 grupos de palavras. Identifica Dominância, Influência, Estabilidade e Conformidade.',
    introduction: 'Em cada grupo de 4 palavras abaixo, escolha apenas uma que mais se assemelha a você — mesmo que não seja perfeita. Marque a opção que melhor te descreve.',
    applicatorInstructions: 'O respondente deve escolher uma opção por grupo. Não há respostas certas ou erradas.',
    sources: 'Baseado no modelo original de William Moulton Marston.',
    version: 2,
    analysisPrompt: 'Analise profundamente o perfil DISC (40 questões). Identifique o perfil primário e secundário com base nas pontuações: D (Dominância), I (Influência), S (Estabilidade), C (Conformidade). Utilize as palavras de ordem: D=CALMA, I=ACABATIVA, S=VAI, C=FLEXIBILIDADE. Descreva pontos fortes, pontos de atenção e estilo de trabalho.',
    feedback: {
      type: FeedbackType.ForcedChoiceDisc,
      devolutiva: {
        'D': { 
          name: 'Dominância (A - Executor)', 
          description: 'Direto, determinado, ousado, focado em resultados.', 
          interpretation: '**Palavra de ordem: CALMA** – Vá mais devagar com as pessoas.\n\nVocê é direto(a) e focado(a) em resultados. Cuidado com falar sem pensar, impaciência, dificuldade em delegar e ouvir feedback.' 
        },
        'I': { 
          name: 'Influência (B - Comunicador)', 
          description: 'Comunicativo, entusiasmado, otimista, persuasivo.', 
          interpretation: '**Palavra de ordem: ACABATIVA** – Termine o que começou!\n\nVocê é comunicativo(a) e persuasivo(a). Cuidado com falar demais, desorganização, confiar demais e abandonar tarefas.' 
        },
        'S': { 
          name: 'Estabilidade (C - Planejador)', 
          description: 'Paciente, leal, confiável, calmo, bom ouvinte.', 
          interpretation: '**Palavra de ordem: VAI** – Depois que começa, vá até o fim!\n\nVocê é paciente e leal. Cuidado com resistência a mudanças, falta de iniciativa e guardar rancor.' 
        },
        'C': { 
          name: 'Conformidade (D - Analista)', 
          description: 'Preciso, analítico, perfeccionista, lógico, disciplinado.', 
          interpretation: '**Palavra de ordem: FLEXIBILIDADE** – Pare de buscar os 110%! Comece logo.\n\nVocê é preciso(a) e analítico(a). Cuidado com exigir muitos dados, ser crítico(a) demais, rigidez e lentidão.' 
        }
      }
    },
    questions: disc40Questions
  },

  // 3. --- Teste Motivógrama ---
  {
    id: 'motivograma-01',
    title: '3. MOTIVÓGRAMA – Fontes de Motivação no Trabalho',
    description: 'Descubra o que realmente te motiva no ambiente profissional. Avalie suas necessidades de segurança, pertencimento, estima, autonomia e autorealização.',
    introduction: 'Para cada par de frases abaixo, distribua 3 pontos entre as duas opções. Você pode dividir como: 3-0, 2-1, 1-2 ou 0-3. Escolha a combinação que melhor reflete o que é mais importante para você.',
    applicatorInstructions: 'Explique que não há respostas certas. O total de pontos por questão deve ser sempre 3.',
    sources: 'Baseado na hierarquia de necessidades e teorias motivacionais.',
    version: 1,
    analysisPrompt: 'Analise o Motivógrama. Categorias: V (Fisiológicas/Segurança Básica), W (Segurança Organizacional), X (Pertencimento/Social), Y (Estima/Reconhecimento), Z (Autorealização). Identifique a fonte de motivação primária e secundária. Explique o que motiva esse profissional e como líderes devem gerenciá-lo.',
    feedback: {
      type: FeedbackType.PairedStatementPointDistribution,
      categoryConfig: {
        'V': { name: 'Necessidades Básicas' },
        'W': { name: 'Segurança' },
        'X': { name: 'Pertencimento' },
        'Y': { name: 'Autoestima' },
        'Z': { name: 'Autorealização' }
      },
      devolutiva: {
        'V': { 
            name: 'Fisiológicas / Segurança Básica', 
            description: 'Foco em condições materiais e sobrevivência.', 
            interpretation: 'Sua principal motivação está relacionada a salário, condições físicas de trabalho e conforto básico. Você busca garantias tangíveis pelo seu esforço.' 
        },
        'W': { 
            name: 'Segurança Organizacional', 
            description: 'Foco em estabilidade e ordem.', 
            interpretation: 'Você valoriza regras claras, estabilidade no emprego, benefícios e uma liderança previsível. Ambientes caóticos ou riscos excessivos te desmotivam.' 
        },
        'X': { 
            name: 'Pertencimento / Relacionamento', 
            description: 'Foco em conexão humana e ambiente social.', 
            interpretation: 'O clima organizacional e o relacionamento com colegas são cruciais. Você se motiva por aceitação, harmonia e trabalho em equipe.' 
        },
        'Y': { 
            name: 'Reconhecimento / Autoestima', 
            description: 'Foco em prestígio e valorização.', 
            interpretation: 'Você busca reconhecimento, status, promoções e feedback positivo. Sentir-se importante e respeitado é o combustível para sua performance.' 
        },
        'Z': { 
            name: 'Autorealização / Desafio', 
            description: 'Foco em crescimento e autonomia.', 
            interpretation: 'Sua motivação vem de desafios, autonomia para criar, inovação e superação de limites. A rotina te entedia; você quer deixar um legado ou testar suas capacidades.' 
        }
      }
    },
    questions: [
      { id: 'mot-01', text: 'Par 1', options: [{ text: 'Um salário compatível com minhas necessidades básicas e da minha família.', category: 'V', value: 0 }, { text: 'A oportunidade de testar minha própria capacidade e ter acesso aos meus resultados.', category: 'Z', value: 0 }] },
      { id: 'mot-02', text: 'Par 2', options: [{ text: 'Me oferecer normas claras, estabilidade e bom plano de saúde.', category: 'W', value: 0 }, { text: 'Me proporcionar autonomia para criar, liberdade para experimentar e autoridade para inovar.', category: 'Z', value: 0 }] },
      { id: 'mot-03', text: 'Par 3', options: [{ text: 'Não valoriza boas condições ambientais de trabalho.', category: 'V', value: 0 }, { text: 'Não me oferece o devido respeito e consideração.', category: 'Y', value: 0 }] },
      { id: 'mot-04', text: 'Par 4', options: [{ text: 'Um salário compatível com minhas necessidades básicas.', category: 'V', value: 0 }, { text: 'Manter relacionamento cordial e harmonioso com colegas e superiores.', category: 'X', value: 0 }] },
      { id: 'mot-05', text: 'Par 5', options: [{ text: 'Me oferecer normas claras, estabilidade e plano de saúde.', category: 'W', value: 0 }, { text: 'Me conferir mais prestígio e poder.', category: 'Y', value: 0 }] },
      { id: 'mot-06', text: 'Par 6', options: [{ text: 'Ficar privado de compartilhar meus problemas e ideias com colegas.', category: 'X', value: 0 }, { text: 'Minhas responsabilidades deixarem de representar um desafio.', category: 'Z', value: 0 }] },
      { id: 'mot-07', text: 'Par 7', options: [{ text: 'Me oferecerem reconhecimento exclusivamente por meus méritos.', category: 'Y', value: 0 }, { text: 'Ter um supervisor confiável, ambiente organizado e previsível.', category: 'W', value: 0 }] },
      { id: 'mot-08', text: 'Par 8', options: [{ text: 'Fazer parte de uma equipe com excelentes relações entre os membros.', category: 'X', value: 0 }, { text: 'Oferecer boas condições físicas de trabalho (ambiente, restaurante, etc).', category: 'V', value: 0 }] },
      { id: 'mot-09', text: 'Par 9', options: [{ text: 'Não me oferecer respeito e consideração.', category: 'Y', value: 0 }, { text: 'Resistir a colaborar comigo na experimentação de novas ideias.', category: 'Z', value: 0 }] },
      { id: 'mot-10', text: 'Par 10', options: [{ text: 'Testar minha própria capacidade e ter acesso aos resultados.', category: 'Z', value: 0 }, { text: 'Ter um superior confiável e ambiente previsível.', category: 'W', value: 0 }] },
      { id: 'mot-11', text: 'Par 11', options: [{ text: 'Me conferir maior prestígio e poder.', category: 'Y', value: 0 }, { text: 'Oferecer boas condições físicas de trabalho.', category: 'V', value: 0 }] },
      { id: 'mot-12', text: 'Par 12', options: [{ text: 'Minhas responsabilidades deixarem de representar um desafio.', category: 'Z', value: 0 }, { text: 'Ter que sacrificar meu horário de almoço ou saída sistematicamente.', category: 'V', value: 0 }] },
      { id: 'mot-13', text: 'Par 13', options: [{ text: 'Um salário compatível com minhas necessidades.', category: 'V', value: 0 }, { text: 'Um supervisor confiável e ambiente organizado.', category: 'W', value: 0 }] },
      { id: 'mot-14', text: 'Par 14', options: [{ text: 'Normas claras, estabilidade e plano de saúde.', category: 'W', value: 0 }, { text: 'Fazer parte de uma equipe com ótimas relações.', category: 'X', value: 0 }] },
      { id: 'mot-15', text: 'Par 15', options: [{ text: 'É antissocial e confunde sociabilidade com "puxa-saquismo".', category: 'X', value: 0 }, { text: 'Não pensa no dia de amanhã.', category: 'W', value: 0 }] },
      { id: 'mot-16', text: 'Par 16', options: [{ text: 'Me conferem reconhecimento por meus méritos.', category: 'Y', value: 0 }, { text: 'Me proporcionam oportunidade de testar minha capacidade.', category: 'Z', value: 0 }] },
      { id: 'mot-17', text: 'Par 17', options: [{ text: 'Normas claras, estabilidade e plano de saúde.', category: 'W', value: 0 }, { text: 'Boas condições físicas de trabalho.', category: 'V', value: 0 }] },
      { id: 'mot-18', text: 'Par 18', options: [{ text: 'Ficar privado de compartilhar problemas com colegas.', category: 'X', value: 0 }, { text: 'Outro profissional menos qualificado ser promovido por favoritismo.', category: 'Y', value: 0 }] },
      { id: 'mot-19', text: 'Par 19', options: [{ text: 'Me oferecerem reconhecimento por meus méritos.', category: 'Y', value: 0 }, { text: 'Manter relacionamento cordial e harmonioso com a equipe.', category: 'X', value: 0 }] },
      { id: 'mot-20', text: 'Par 20', options: [{ text: 'Autonomia para criar, liberdade para experimentar.', category: 'Z', value: 0 }, { text: 'Oferecer cargo com maior prestígio e poder.', category: 'Y', value: 0 }] },
      { id: 'mot-21', text: 'Par 21', options: [{ text: 'Não valoriza boas condições ambientais.', category: 'V', value: 0 }, { text: 'É antissocial e confunde sociabilidade com "puxa-saquismo".', category: 'X', value: 0 }] },
      { id: 'mot-22', text: 'Par 22', options: [{ text: 'Testar minha própria capacidade e ver resultados.', category: 'Z', value: 0 }, { text: 'Manter relacionamento harmonioso com a equipe.', category: 'X', value: 0 }] },
      { id: 'mot-23', text: 'Par 23', options: [{ text: 'Boas condições físicas de trabalho.', category: 'V', value: 0 }, { text: 'Autonomia para criar, liberdade para experimentar.', category: 'Z', value: 0 }] },
      { id: 'mot-24', text: 'Par 24', options: [{ text: 'Outro profissional menos qualificado ser promovido por favoritismo.', category: 'Y', value: 0 }, { text: 'Perder confiança no chefe ou temer pela estabilidade do cargo.', category: 'W', value: 0 }] },
      { id: 'mot-25', text: 'Par 25', options: [{ text: 'Salário compatível com minhas necessidades.', category: 'V', value: 0 }, { text: 'Reconhecimento exclusivamente por meus méritos.', category: 'Y', value: 0 }] },
      { id: 'mot-26', text: 'Par 26', options: [{ text: 'Cargo com maior prestígio e poder.', category: 'Y', value: 0 }, { text: 'Fazer parte de uma equipe com ótimas relações.', category: 'X', value: 0 }] },
      { id: 'mot-27', text: 'Par 27', options: [{ text: 'Não pensa no dia de amanhã.', category: 'W', value: 0 }, { text: 'Resiste a colaborar comigo em novas ideias.', category: 'Z', value: 0 }] },
      { id: 'mot-28', text: 'Par 28', options: [{ text: 'Relacionamento cordial e harmonioso com a equipe.', category: 'X', value: 0 }, { text: 'Ter um supervisor confiável e ambiente previsível.', category: 'W', value: 0 }] },
      { id: 'mot-29', text: 'Par 29', options: [{ text: 'Autonomia para criar, liberdade para experimentar.', category: 'Z', value: 0 }, { text: 'Fazer parte de uma equipe com ótimas relações.', category: 'X', value: 0 }] },
      { id: 'mot-30', text: 'Par 30', options: [{ text: 'Sacrificar horário de almoço/saída sistematicamente.', category: 'V', value: 0 }, { text: 'Perder confiança no chefe ou temer pela estabilidade da organização.', category: 'W', value: 0 }] }
    ]
  },

  // 4. --- Teste Estilo de Negociação ---
  {
    id: 'negotiation-style-01',
    title: '4. ESTILO DE NEGOCIAÇÃO (Baseado no DISC)',
    description: 'Descubra seu estilo natural de negociação, suas forças e riscos na hora de fechar acordos. Utiliza a metodologia DISC.',
    introduction: 'Em cada grupo de 4 palavras abaixo, escolha apenas uma que mais se assemelha a você. Seja honesto sobre como você age em situações de decisão e interação.',
    applicatorInstructions: 'O respondente deve escolher uma opção por grupo. As respostas revelarão o estilo de negociação.',
    sources: 'Adaptação do modelo DISC para Negociação.',
    version: 1,
    analysisPrompt: 'Analise o estilo de negociação com base no perfil DISC. D=Dominância (Negociador Direto), I=Influência (Negociador Persuasivo), S=Estabilidade (Negociador Conciliador), C=Conformidade (Negociador Analítico). Descreva como essa pessoa se comporta em uma mesa de negociação, seus pontos fortes (ex: rapidez, conexão) e riscos (ex: agressividade, ceder demais).',
    feedback: {
      type: FeedbackType.ForcedChoiceDisc,
      devolutiva: {
        'D': { 
          name: 'Dominância (Negociador Direto)', 
          description: 'Direto, objetivo, focado em resultados.', 
          interpretation: '**Estilo:** Resolve rápido, não perde tempo.\n**Força:** Foco no resultado final e agilidade.\n**Risco:** Pode parecer agressivo, impaciente ou atropelar detalhes importantes.' 
        },
        'I': { 
          name: 'Influência (Negociador Persuasivo)', 
          description: 'Persuasivo, carismático, usa emoção.', 
          interpretation: '**Estilo:** Cria conexão e vende ideias com entusiasmo.\n**Força:** Ótimo em quebrar o gelo e motivar o outro lado.\n**Risco:** Pode ceder demais para manter o clima amistoso ou prometer o que não pode cumprir.' 
        },
        'S': { 
          name: 'Estabilidade (Negociador Conciliador)', 
          description: 'Paciente, busca consenso, evita conflito.', 
          interpretation: '**Estilo:** Ouve muito, busca segurança e acordos duradouros.\n**Força:** Gera confiança e lealdade a longo prazo.\n**Risco:** Dificuldade em dizer "não" e pode evitar decisões difíceis ou confrontos necessários.' 
        },
        'C': { 
          name: 'Conformidade (Negociador Analítico)', 
          description: 'Analítico, busca dados, foco em regras.', 
          interpretation: '**Estilo:** Baseia-se em fatos, lógica e procedimentos.\n**Força:** Precisão, qualidade e minimização de riscos contratuais.\n**Risco:** Pode travar a negociação por excesso de análise (paralisia por análise) ou rigidez.' 
        }
      }
    },
    questions: disc40Questions
  },

  // 5. --- Teste Âncoras de Carreira ---
  {
    id: 'career-anchors-01',
    title: '5. Âncoras de Carreira (Edgar Schein)',
    description: 'Identifique seus valores, necessidades e competências reais na carreira. Descubra o que realmente motiva suas decisões profissionais.',
    introduction: 'Leia cada afirmação abaixo e atribua uma nota de 1 a 6, onde 1 é "Nunca verdadeiro" e 6 é "Sempre verdadeiro". Seja honesto com seus sentimentos atuais.',
    applicatorInstructions: 'O respondente deve classificar cada item de 1 a 6. O cálculo é feito pela média de cada categoria.',
    sources: 'Edgar Schein',
    version: 1,
    analysisPrompt: 'Analise os resultados das Âncoras de Carreira de Schein. As categorias são: TF (Técnico-Funcional), GG (Gerência Geral), AI (Autonomia), SE (Segurança), CE (Criatividade Empreendedora), SD (Serviço/Dedicação), DP (Desafio Puro), EV (Estilo de Vida). Identifique a âncora dominante (maior pontuação) e explique o que ela significa para a carreira do usuário, sugerindo tipos de trabalho ideais.',
    feedback: {
      type: FeedbackType.MultiCategoryAverage,
      categoryConfig: {
        'TF': { name: 'Competência Técnico-Funcional' },
        'GG': { name: 'Competência para Gerência Geral' },
        'AI': { name: 'Autonomia e Independência' },
        'SE': { name: 'Segurança e Estabilidade' },
        'CE': { name: 'Criatividade Empreendedora' },
        'SD': { name: 'Serviço e Dedicação a uma Causa' },
        'DP': { name: 'Desafio Puro' },
        'EV': { name: 'Estilo de Vida' }
      },
      devolutiva: {
        'TF': { 
            name: 'Competência Técnico-Funcional', 
            description: 'Sua motivação vem de ser especialista em sua área.', 
            interpretation: 'Você valoriza o reconhecimento pelo seu conhecimento técnico e habilidade. Gerenciamento de pessoas só lhe interessa se for para liderar na sua área técnica.' 
        },
        'GG': { 
            name: 'Competência para Gerência Geral', 
            description: 'Sua motivação é subir na hierarquia e liderar.', 
            interpretation: 'Você quer ser responsável por grandes resultados, integrar funções e gerenciar pessoas e recursos. O sucesso é medido por promoções e alta renda.' 
        },
        'AI': { 
            name: 'Autonomia e Independência', 
            description: 'Você precisa fazer as coisas do seu jeito e no seu tempo.', 
            interpretation: 'Regras organizacionais rígidas são desmotivadoras. Você busca flexibilidade e liberdade para definir seu próprio trabalho, possivelmente como consultor ou freelancer.' 
        },
        'SE': { 
            name: 'Segurança e Estabilidade', 
            description: 'Você busca previsibilidade e garantia de emprego.', 
            interpretation: 'Benefícios, estabilidade financeira e longo prazo são cruciais. Você prefere organizações que ofereçam um "porto seguro" e lealdade em troca de seu trabalho.' 
        },
        'CE': { 
            name: 'Criatividade Empreendedora', 
            description: 'Você quer criar novos negócios ou produtos.', 
            interpretation: 'Não é apenas autonomia, é a necessidade de construir algo próprio e assumir riscos financeiros para ver sua ideia prosperar e ser reconhecida como sua criação.' 
        },
        'SD': { 
            name: 'Serviço e Dedicação a uma Causa', 
            description: 'Sua carreira deve refletir seus valores centrais.', 
            interpretation: 'Você quer melhorar o mundo, ajudar os outros ou trabalhar por uma causa. O alinhamento de valores é mais importante que o salário ou a posição.' 
        },
        'DP': { 
            name: 'Desafio Puro', 
            description: 'Você busca superar obstáculos impossíveis.', 
            interpretation: 'O sucesso é definido por vencer guerras, resolver problemas insolúveis ou superar oponentes difíceis. A rotina é entediante; você precisa de novidade e dificuldade.' 
        },
        'EV': { 
            name: 'Estilo de Vida', 
            description: 'Você busca integração entre trabalho e vida pessoal.', 
            interpretation: 'O sucesso não é apenas carreira, mas como ela se encaixa na sua vida familiar e pessoal. Flexibilidade para equilibrar essas demandas é a prioridade máxima.' 
        }
      }
    },
    questions: [
      // Bloco 1
      { id: 'ca-q1', category: 'TF', text: 'Sonho em ser tão bom no que faço, que meus conhecimentos especializados sejam constantemente procurados.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q2', category: 'GG', text: 'Sinto-me mais realizado em meu trabalho quando sou capaz de integrar e gerenciar o esforço dos outros.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q3', category: 'AI', text: 'Sonho em ter uma carreira que me dê liberdade de fazer o trabalho à minha maneira e no tempo por mim programado.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q4', category: 'SE', text: 'Segurança e estabilidade são mais importantes que liberdade e autonomia.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q5', category: 'CE', text: 'Estou procurando ideias que me permitam iniciar meu próprio negócio.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q6', category: 'SD', text: 'Sinto-me bem na carreira apenas quando tenho a sensação de ter feito uma contribuição real para a sociedade.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q7', category: 'DP', text: 'Sonho com uma carreira na qual eu possa solucionar problemas ou vencer situações extremamente desafiadoras.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q8', category: 'EV', text: 'Preferiria deixar meu emprego do que ser colocado em um trabalho que comprometesse minha capacidade de me dedicar aos assuntos pessoais e familiares.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      
      // Bloco 2
      { id: 'ca-q9', category: 'TF', text: 'Sinto-me bem-sucedido na carreira apenas quando posso desenvolver minhas habilidades técnicas ou funcionais em nível de competência muito alto.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q10', category: 'GG', text: 'Sonho em dirigir uma organização complexa e tomar decisões que afetem a vida de muitas pessoas.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q11', category: 'AI', text: 'Sinto-me realizado no trabalho quando tenho total liberdade de definir minhas próprias tarefas, horários e procedimentos.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q12', category: 'SE', text: 'Preferiria deixar meu emprego do que aceitar uma tarefa que pudesse colocar em risco minha segurança na organização.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q13', category: 'CE', text: 'Montar meu próprio negócio é mais importante para mim do que atingir uma alta posição gerencial como empregado.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q14', category: 'SD', text: 'Sinto-me mais realizado na carreira quando posso utilizar meus talentos a serviço dos outros.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q15', category: 'DP', text: 'Sinto-me mais realizado na carreira apenas quando enfrento e supero desafios extremamente difíceis.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q16', category: 'EV', text: 'Sonho com uma carreira que me permita integrar minhas necessidades pessoais, familiares e de trabalho.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },

      // Bloco 3
      { id: 'ca-q17', category: 'TF', text: 'Tornar-me gerente técnico em minha área de especialização é mais atraente para mim do que tornar-me gerente geral.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q18', category: 'GG', text: 'Sentir-me-ei bem-sucedido na carreira apenas quando me tornar um gerente geral em alguma organização.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q19', category: 'AI', text: 'Sentir-me-ei bem-sucedido apenas quando alcançar total autonomia e liberdade.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q20', category: 'SE', text: 'Procuro trabalho em organizações que me dêem senso de segurança e estabilidade.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q21', category: 'CE', text: 'Sinto-me realizado na carreira quando tenho a oportunidade de construir alguma coisa que seja resultado unicamente de minhas próprias ideias e esforços.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q22', category: 'SD', text: 'Utilizar minhas ideias para tornar o mundo um lugar melhor para se viver e trabalhar é mais importante para mim do que alcançar uma posição gerencial de alto nível.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q23', category: 'DP', text: 'Sinto-me mais realizado na carreira quando soluciono problemas aparentemente insolúveis ou venço o que aparentemente é impossível de ser vencido.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q24', category: 'EV', text: 'Sinto-me bem-sucedido na vida apenas quando sou capaz de equilibrar minhas necessidades pessoais, familiares e de carreira.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },

      // Bloco 4
      { id: 'ca-q25', category: 'TF', text: 'Preferiria deixar meu emprego do que aceitar uma tarefa de rodízio que me afastasse da minha área de competência.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q26', category: 'GG', text: 'Tornar-me um gerente geral é mais atraente do que tornar-me um gerente técnico em minha área de especialização.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q27', category: 'AI', text: 'Poder fazer um trabalho à minha própria maneira, sem regras e restrições, é mais importante do que ter segurança.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q28', category: 'SE', text: 'Sinto-me mais realizado profissionalmente quando percebo que tenho total estabilidade financeira e segurança no mercado.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q29', category: 'CE', text: 'Sinto-me bem-sucedido em meu trabalho apenas quando posso criar ou construir alguma coisa que seja inteiramente de minha autoria.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q30', category: 'SD', text: 'Sonho em ter uma carreira que faça uma real contribuição à humanidade e à sociedade.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q31', category: 'DP', text: 'Procuro oportunidades de trabalho que desafiem fortemente minhas habilidades de solucionar problemas.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q32', category: 'EV', text: 'Equilibrar as exigências da minha vida pessoal e profissional é mais importante do que alcançar alta posição gerencial.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },

      // Bloco 5
      { id: 'ca-q33', category: 'TF', text: 'Sinto-me plenamente realizado em meu trabalho quando sou capaz de empregar minhas habilidades e talentos especiais.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q34', category: 'GG', text: 'Preferiria deixar minha organização do que aceitar um emprego que me afastasse da trajetória de gerência geral.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q35', category: 'AI', text: 'Preferiria deixar minha organização do que aceitar um emprego que reduzisse minha autonomia e liberdade.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q36', category: 'SE', text: 'Sonho em ter uma carreira que me dê senso de segurança e estabilidade.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q37', category: 'CE', text: 'Sonho em iniciar e montar meu próprio negócio.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q38', category: 'SD', text: 'Preferiria deixar minha organização do que aceitar uma tarefa que prejudicasse minha capacidade de servir aos outros.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q39', category: 'DP', text: 'Trabalhar em problemas praticamente insolúveis é mais importante do que alcançar uma posição gerencial de alto nível.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ca-q40', category: 'EV', text: 'Sempre procurei oportunidades de trabalho que minimizassem interferências com assuntos pessoais e familiares.', options: [1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) }
    ]
  }
];
