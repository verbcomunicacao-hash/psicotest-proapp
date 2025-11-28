
import { Questionnaire, FeedbackType } from '../types';

export const testsPart3: Questionnaire[] = [
  // 14. --- Teste de Habilidades Sociais ---
  {
    id: 'social-skills-01',
    title: '14. Teste de Habilidades Sociais (Versão Completa)',
    description: 'Avalie comunicação assertiva, empatia, escuta ativa e adaptação social.',
    introduction: 'Este teste avalia o nível de desenvolvimento das principais habilidades sociais. Para cada pergunta, selecione a alternativa que mais se parece com você.',
    applicatorInstructions: 'Múltipla escolha (A, B, C, D). O sistema traçará um perfil baseado em 4 tendências: Assertividade, Passividade, Empatia e Dificuldade/Agressividade.',
    sources: 'Baseado em escalas de competência social e assertividade.',
    version: 1,
    feedback: {
      type: FeedbackType.MultiCategorySum,
      categoryConfig: {
        'A': { name: 'Assertividade / Desenvoltura' },
        'B': { name: 'Passividade / Insegurança' },
        'C': { name: 'Empatia / Diplomacia' },
        'D': { name: 'Agressividade / Impulsividade' }
      },
      devolutiva: {
        'A': { name: 'Perfil Assertivo', description: 'Você se comunica de forma clara e direta.', interpretation: 'Possui facilidade em ambientes sociais e em expressar suas opiniões com respeito.' },
        'B': { name: 'Perfil Passivo', description: 'Tendência a evitar conflitos e se anular.', interpretation: 'Pode ter dificuldade em dizer não ou expressar seus sentimentos por medo de julgamento.' },
        'C': { name: 'Perfil Empático', description: 'Foco no outro e na harmonia.', interpretation: 'Excelente ouvinte e mediador, mas cuidado para não absorver problemas alheios.' },
        'D': { name: 'Perfil Reativo/Impulsivo', description: 'Comunicação intensa, por vezes ríspida.', interpretation: 'Pode ter dificuldade em controlar impulsos ou ler sinais sociais sutis, gerando atritos.' }
      }
    },
    questions: [
      { id: 'ss-q1', text: 'Ambientes Sociais', options: [{ text: 'Fico à vontade em qualquer ambiente', category: 'A', value: 1 }, { text: 'Evito situações com muitas pessoas', category: 'B', value: 1 }, { text: 'Confortável com amigos próximos', category: 'C', value: 1 }, { text: 'Gosto de observar antes', category: 'D', value: 1 }] },
      { id: 'ss-q2', text: 'Expressão de Ideias', options: [{ text: 'Consigo influenciar opiniões', category: 'A', value: 1 }, { text: 'Dificuldade em expressar', category: 'B', value: 1 }, { text: 'Prefiro ouvir primeiro', category: 'C', value: 1 }, { text: 'Falo bem e claramente', category: 'D', value: 1 }] },
      { id: 'ss-q3', text: 'Conversas', options: [{ text: 'Mantenho conversas com estranhos', category: 'A', value: 1 }, { text: 'Fico nervoso em grupos', category: 'B', value: 1 }, { text: 'Bom em ouvir e entender', category: 'C', value: 1 }, { text: 'Gosto do controle da conversa', category: 'D', value: 1 }] },
      { id: 'ss-q4', text: 'Emoções', options: [{ text: 'Expresso com facilidade', category: 'A', value: 1 }, { text: 'Escondo para não incomodar', category: 'B', value: 1 }, { text: 'Observo os outros', category: 'C', value: 1 }, { text: 'Dificuldade em reconhecer', category: 'D', value: 1 }] },
      { id: 'ss-q5', text: 'Conexão', options: [{ text: 'Conecto rapidamente', category: 'A', value: 1 }, { text: 'Preciso de tempo', category: 'B', value: 1 }, { text: 'Sigo protocolos, evito conflito', category: 'C', value: 1 }, { text: 'Não gosto do superficial', category: 'D', value: 1 }] },
      { id: 'ss-q6', text: 'Fala', options: [{ text: 'Clareza e convicção', category: 'A', value: 1 }, { text: 'Medo de falar errado', category: 'B', value: 1 }, { text: 'Deixo outros falarem', category: 'C', value: 1 }, { text: 'Falo rápido, não me escutam', category: 'D', value: 1 }] },
      { id: 'ss-q7', text: 'Adaptação', options: [{ text: 'Me adapto bem', category: 'A', value: 1 }, { text: 'Me fecho às vezes', category: 'B', value: 1 }, { text: 'Respeito e busco conexão', category: 'C', value: 1 }, { text: 'Dificuldade com opinião contrária', category: 'D', value: 1 }] },
      { id: 'ss-q8', text: 'Escuta', options: [{ text: 'Sei ouvir profundamente', category: 'A', value: 1 }, { text: 'Me perco em conversas', category: 'B', value: 1 }, { text: 'Escuto mais que falo', category: 'C', value: 1 }, { text: 'Falo demais às vezes', category: 'D', value: 1 }] },
      { id: 'ss-q9', text: 'Linguagem Corporal', options: [{ text: 'Uso para conectar', category: 'A', value: 1 }, { text: 'Inseguro em ambientes novos', category: 'B', value: 1 }, { text: 'Observo e me adapto', category: 'C', value: 1 }, { text: 'Perco o foco visual', category: 'D', value: 1 }] },
      { id: 'ss-q10', text: 'Conflitos', options: [{ text: 'Resolvo com calma', category: 'A', value: 1 }, { text: 'Evito a todo custo', category: 'B', value: 1 }, { text: 'Entendo todos os lados', category: 'C', value: 1 }, { text: 'Me irrito fácil', category: 'D', value: 1 }] },
      { id: 'ss-q11', text: 'Iniciativa', options: [{ text: 'Inicio com naturalidade', category: 'A', value: 1 }, { text: 'Espero me incluírem', category: 'B', value: 1 }, { text: 'Sigo o fluxo', category: 'C', value: 1 }, { text: 'Falo demais por ansiedade', category: 'D', value: 1 }] },
      { id: 'ss-q12', text: 'Articulação', options: [{ text: 'Articulo ideias complexas', category: 'A', value: 1 }, { text: 'Travo se for importante', category: 'B', value: 1 }, { text: 'Prefiro escrever', category: 'C', value: 1 }, { text: 'Falo rápido demais', category: 'D', value: 1 }] },
      { id: 'ss-q13', text: 'Tom de Voz', options: [{ text: 'Uso para passar confiança', category: 'A', value: 1 }, { text: 'Falo baixo às vezes', category: 'B', value: 1 }, { text: 'Adapto à situação', category: 'C', value: 1 }, { text: 'Falo alto demais', category: 'D', value: 1 }] },
      { id: 'ss-q14', text: 'Humor', options: [{ text: 'Uso humor e carisma', category: 'A', value: 1 }, { text: 'Receio de ser inconveniente', category: 'B', value: 1 }, { text: 'Espero momento certo', category: 'C', value: 1 }, { text: 'Digo sem pensar', category: 'D', value: 1 }] },
      { id: 'ss-q15', text: 'Melhoria', options: [{ text: 'Busco melhorar sempre', category: 'A', value: 1 }, { text: 'Sou suficiente assim', category: 'B', value: 1 }, { text: 'Não penso nisso', category: 'C', value: 1 }, { text: 'Vergonha de tentar', category: 'D', value: 1 }] },
      { id: 'ss-q16', text: 'Posicionamento', options: [{ text: 'Firmeza e respeito', category: 'A', value: 1 }, { text: 'Fico quieto para não ofender', category: 'B', value: 1 }, { text: 'Penso muito antes', category: 'C', value: 1 }, { text: 'Falo demais e exagero', category: 'D', value: 1 }] },
      { id: 'ss-q17', text: 'Desconhecidos', options: [{ text: 'Aproximo com naturalidade', category: 'A', value: 1 }, { text: 'Só falo com conhecidos', category: 'B', value: 1 }, { text: 'Gosto de ser apresentado', category: 'C', value: 1 }, { text: 'Fico sem saber o que dizer', category: 'D', value: 1 }] },
      { id: 'ss-q18', text: 'Contato Visual', options: [{ text: 'Facilidade em manter', category: 'A', value: 1 }, { text: 'Desvio por insegurança', category: 'B', value: 1 }, { text: 'Moderado', category: 'C', value: 1 }, { text: 'Desconfortável, desvio', category: 'D', value: 1 }] },
      { id: 'ss-q19', text: 'Sorriso', options: [{ text: 'Espontâneo e cativante', category: 'A', value: 1 }, { text: 'Sorrio pouco', category: 'B', value: 1 }, { text: 'Por educação', category: 'C', value: 1 }, { text: 'Forçado às vezes', category: 'D', value: 1 }] },
      { id: 'ss-q20', text: 'Clareza', options: [{ text: 'Adapto para ser claro', category: 'A', value: 1 }, { text: 'Repito se não entendem', category: 'B', value: 1 }, { text: 'Modifico conforme público', category: 'C', value: 1 }, { text: 'Uso jargões demais', category: 'D', value: 1 }] },
      { id: 'ss-q21', text: 'Interpretação', options: [{ text: 'Sei ler gestos', category: 'A', value: 1 }, { text: 'Leio errado às vezes', category: 'B', value: 1 }, { text: 'Observo mas não sei', category: 'C', value: 1 }, { text: 'Ignoro sinais corporais', category: 'D', value: 1 }] },
      { id: 'ss-q22', text: 'Fluidez', options: [{ text: 'Conduzo com fluidez', category: 'A', value: 1 }, { text: 'Me perco', category: 'B', value: 1 }, { text: 'Acompanho o ritmo', category: 'C', value: 1 }, { text: 'Interrompo', category: 'D', value: 1 }] },
      { id: 'ss-q23', text: 'Histórias', options: [{ text: 'Gosto de ouvir e aprender', category: 'A', value: 1 }, { text: 'Sinto invadindo privacidade', category: 'B', value: 1 }, { text: 'Ouço sem perguntar', category: 'C', value: 1 }, { text: 'Prefiro falar', category: 'D', value: 1 }] },
      { id: 'ss-q24', text: 'Pessoas Difíceis', options: [{ text: 'Mantenho a conversa', category: 'A', value: 1 }, { text: 'Evito', category: 'B', value: 1 }, { text: 'Tento acalmar', category: 'C', value: 1 }, { text: 'Me irrito', category: 'D', value: 1 }] },
      { id: 'ss-q25', text: 'Simplicidade', options: [{ text: 'Articulo com simplicidade', category: 'A', value: 1 }, { text: 'Uso termos técnicos', category: 'B', value: 1 }, { text: 'Repito a mesma coisa', category: 'C', value: 1 }, { text: 'Medo de errar pronúncia', category: 'D', value: 1 }] },
      { id: 'ss-q26', text: 'Variação Vocal', options: [{ text: 'Mudo conforme situação', category: 'A', value: 1 }, { text: 'Fico monótono', category: 'B', value: 1 }, { text: 'Adapto, mas pouco', category: 'C', value: 1 }, { text: 'Falo alto e assusto', category: 'D', value: 1 }] },
      { id: 'ss-q27', text: 'Perguntas', options: [{ text: 'Faço perguntas certas', category: 'A', value: 1 }, { text: 'Interrompo por empolgação', category: 'B', value: 1 }, { text: 'Espero terminar para falar', category: 'C', value: 1 }, { text: 'Medo de perguntar errado', category: 'D', value: 1 }] },
      { id: 'ss-q28', text: 'Carisma', options: [{ text: 'Ajuda a conectar', category: 'A', value: 1 }, { text: 'Dificuldade em aproximar', category: 'B', value: 1 }, { text: 'Levo tempo', category: 'C', value: 1 }, { text: 'Falo demais, esqueço de ouvir', category: 'D', value: 1 }] },
      { id: 'ss-q29', text: 'Criatividade', options: [{ text: 'Uso metáforas', category: 'A', value: 1 }, { text: 'Preso na literalidade', category: 'B', value: 1 }, { text: 'Raramente uso', category: 'C', value: 1 }, { text: 'Falo complicado', category: 'D', value: 1 }] },
      { id: 'ss-q30', text: 'Resumo', options: [{ text: 'Clara e inspiradora', category: 'A', value: 1 }, { text: 'Ríspida sem querer', category: 'B', value: 1 }, { text: 'Medo de ser mal interpretado', category: 'C', value: 1 }, { text: 'Perco o foco', category: 'D', value: 1 }] }
    ]
  },

  // 15. --- Teste de Avaliação de Burnout ---
  {
    id: 'burnout-assessment-01',
    title: '15. Teste de Avaliação de Burnout',
    description: 'Avalie os níveis de Exaustão Emocional, Despersonalização e Baixa Realização Profissional. Baseado no Maslach Burnout Inventory (MBI).',
    introduction: 'Este teste identifica as três dimensões principais do Burnout: Exaustão Emocional (esgotamento), Despersonalização (cinismo/distanciamento) e Baixa Realização Pessoal (ineficácia).',
    applicatorInstructions: 'Escala 0 (Nunca) a 6 (Diariamente). Some os pontos por categoria. Atenção: Pontuação alta em Exaustão e Despersonalização e baixa em Realização indicam risco.',
    sources: 'Maslach Burnout Inventory (MBI), Oldenburg Burnout Inventory (OBI).',
    version: 1,
    feedback: {
      type: FeedbackType.MultiCategorySum,
      categoryConfig: {
        'EE': { name: 'Exaustão Emocional' },
        'DP': { name: 'Despersonalização / Cinismo' },
        'RP': { name: 'Realização Pessoal (Invertido)' }
      },
      devolutiva: {
        'EE': { name: 'Exaustão Emocional', description: 'Sensação de estar esgotado e sobrecarregado.', interpretation: '0-16: Baixa. 17-26: Moderada. 27-54: Alta (Risco crítico).' },
        'DP': { name: 'Despersonalização', description: 'Atitude de distanciamento e indiferença.', interpretation: '0-5: Baixa. 6-11: Moderada. 12-42: Alta (Cinismo elevado).' },
        'RP': { name: 'Realização Pessoal', description: 'Sensação de competência e sucesso.', interpretation: '0-19: Baixa Realização (Risco Alto). 20-29: Moderada. 30-48: Alta Realização (Saudável).' }
      }
    },
    questions: [
      // Exaustão Emocional (1-9)
      { id: 'bo-ee-1', category: 'EE', text: 'Sinto-me emocionalmente esgotado(a) pelo meu trabalho.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'bo-ee-2', category: 'EE', text: 'Sinto-me esgotado(a) no final do dia de trabalho.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'bo-ee-3', category: 'EE', text: 'Sinto-me cansado(a) quando me levanto de manhã para trabalhar.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'bo-ee-4', category: 'EE', text: 'Sinto que meu trabalho me consome.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'bo-ee-5', category: 'EE', text: 'Sinto-me frustrado(a) com meu trabalho.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'bo-ee-6', category: 'EE', text: 'Sinto que estou no limite das minhas forças.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'bo-ee-7', category: 'EE', text: 'Sinto que estou trabalhando demais.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'bo-ee-8', category: 'EE', text: 'Sinto que cada dia de trabalho é um fardo.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'bo-ee-9', category: 'EE', text: 'Sinto que minhas energias estão se esgotando.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      // Despersonalização (10-16)
      { id: 'bo-dp-1', category: 'DP', text: 'Tornei-me mais cínico(a) em relação ao meu trabalho.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'bo-dp-2', category: 'DP', text: 'Tenho me tornado mais insensível com as pessoas.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'bo-dp-3', category: 'DP', text: 'Trato alguns colegas ou clientes como objetos impessoais.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'bo-dp-4', category: 'DP', text: 'Não me importo realmente com o que acontece com alguns colegas.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'bo-dp-5', category: 'DP', text: 'Sinto que estou endurecendo emocionalmente.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'bo-dp-6', category: 'DP', text: 'Sinto que me tornei mais distante das pessoas no trabalho.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'bo-dp-7', category: 'DP', text: 'Sinto que as pessoas me culpam por coisas que não são minha responsabilidade.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      // Realização Pessoal (17-24)
      { id: 'bo-rp-1', category: 'RP', text: 'Sinto que estou realizando coisas eficazes no meu trabalho.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'bo-rp-2', category: 'RP', text: 'Sinto que sou um(a) profissional competente.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'bo-rp-3', category: 'RP', text: 'Sinto que estou influenciando positivamente a vida das pessoas.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'bo-rp-4', category: 'RP', text: 'Sinto que consigo lidar eficazmente com os problemas das pessoas.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'bo-rp-5', category: 'RP', text: 'Sinto que estou alcançando coisas importantes no meu trabalho.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'bo-rp-6', category: 'RP', text: 'Sinto que estou contribuindo para algo significativo.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'bo-rp-7', category: 'RP', text: 'Sinto que sou capaz de resolver os problemas que surgem.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
      { id: 'bo-rp-8', category: 'RP', text: 'Sinto que estou progredindo em minha carreira.', options: [0, 1, 2, 3, 4, 5, 6].map(v => ({ text: v.toString(), value: v })) },
    ]
  }
];
