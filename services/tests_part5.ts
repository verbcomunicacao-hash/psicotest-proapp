
import { Questionnaire, FeedbackType } from '../types';

export const testsPart5: Questionnaire[] = [
  // 10. --- Teste de Dominância Cerebral de Ned Herrmann ---
  {
    id: 'herrmann-brain-dominance-01',
    title: '10. Teste de Dominância Cerebral (Ned Herrmann)',
    description: 'Identifique seu estilo de pensamento predominante: Lógico, Organizacional, Relacional ou Experimental, baseado no modelo HBDI.',
    introduction: `Este teste baseia-se no modelo de Ned Herrmann (HBDI), que propõe quatro quadrantes cerebrais associados a diferentes modos de processamento: Lógico (Analítico), Organizacional (Sequencial), Relacional (Interpessoal) e Experimental (Holístico). Compreender sua dominância ajuda a otimizar aprendizado, comunicação e resolução de problemas.`,
    applicatorInstructions: 'O respondente deve indicar o quanto concorda com cada afirmação (1-5). O resultado revela o quadrante dominante.',
    sources: 'Herrmann Brain Dominance Instrument (HBDI).',
    version: 1,
    analysisPrompt: 'Analise o perfil de Dominância Cerebral de Herrmann. Quadrantes: A (Lógico/Analítico), B (Organizacional/Sequencial), C (Relacional/Emocional), D (Experimental/Holístico). Identifique a dominância primária e secundária. Discuta como esse perfil toma decisões, se comunica e aprende.',
    feedback: {
      type: FeedbackType.MultiCategorySum,
      categoryConfig: {
        'A': { name: 'A: Lógico (Analítico)' },
        'B': { name: 'B: Organizacional (Sequencial)' },
        'C': { name: 'C: Relacional (Emocional)' },
        'D': { name: 'D: Experimental (Intuitivo)' }
      },
      devolutiva: {
        'A': {
          name: 'Quadrante A: Lógico (Analítico, Racional)',
          description: 'Focado em fatos, lógica e análise crítica.',
          interpretation: 'Você valoriza precisão, objetividade e dados. É bom em resolver problemas complexos e tomar decisões baseadas em evidências. Pode parecer frio ou distante às vezes.'
        },
        'B': {
          name: 'Quadrante B: Organizacional (Sequencial, Detalhista)',
          description: 'Focado em estrutura, planejamento e organização.',
          interpretation: 'Você valoriza ordem, regras e previsibilidade. É excelente em implementar planos e garantir que os detalhes estejam corretos. Pode ter dificuldade com mudanças bruscas.'
        },
        'C': {
          name: 'Quadrante C: Relacional (Interpessoal, Emocional)',
          description: 'Focado em pessoas, sentimentos e colaboração.',
          interpretation: 'Você valoriza a harmonia e o bem-estar do grupo. É empático, comunicativo e bom em construir relacionamentos. Pode ter dificuldade em tomar decisões impopulares.'
        },
        'D': {
          name: 'Quadrante D: Experimental (Holístico, Intuitivo)',
          description: 'Focado em inovação, visão de futuro e criatividade.',
          interpretation: 'Você valoriza a liberdade e ideias novas. É bom em ver o "quadro geral" e pensar fora da caixa. Pode ser visto como desorganizado ou impulsivo.'
        }
      }
    },
    questions: [
      // Quadrante A
      { id: 'hbdi-q1', category: 'A', text: 'Eu me sinto mais confortável lidando com fatos e dados concretos.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q2', category: 'A', text: 'Minhas decisões são baseadas principalmente na lógica e na razão.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q3', category: 'A', text: 'Gosto de analisar problemas de forma crítica e objetiva.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q4', category: 'A', text: 'Sou bom em resolver problemas complexos através de uma abordagem sistemática.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q5', category: 'A', text: 'Prefiro informações claras, concisas e baseadas em evidências.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q6', category: 'A', text: 'Sou cético em relação a ideias que não são apoiadas por dados.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q7', category: 'A', text: 'Gosto de debater e argumentar com base em fatos.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q8', category: 'A', text: 'Sou bom em identificar falhas e inconsistências em argumentos.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q9', category: 'A', text: 'A precisão e a exatidão são muito importantes para mim.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q10', category: 'A', text: 'Eu me sinto satisfeito quando consigo desvendar a causa raiz de um problema.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Quadrante B
      { id: 'hbdi-q11', category: 'B', text: 'Gosto de planejar e organizar minhas tarefas de forma detalhada.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q12', category: 'B', text: 'Prefiro seguir um cronograma e ter uma rotina bem definida.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q13', category: 'B', text: 'Sou bom em gerenciar projetos e garantir que tudo esteja em ordem.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q14', category: 'B', text: 'A organização e a pontualidade são muito importantes para mim.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q15', category: 'B', text: 'Gosto de criar listas, procedimentos e manuais.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q16', category: 'B', text: 'Eu me sinto mais seguro quando tenho todas as informações e detalhes.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q17', category: 'B', text: 'Sou bom em implementar planos e garantir que as coisas sejam feitas corretamente.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q18', category: 'B', text: 'Prefiro trabalhar em ambientes estruturados e previsíveis.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q19', category: 'B', text: 'Sou atento aos detalhes e dificilmente deixo algo passar.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q20', category: 'B', text: 'Eu me sinto satisfeito quando consigo concluir uma tarefa de forma eficiente e organizada.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Quadrante C
      { id: 'hbdi-q21', category: 'C', text: 'Eu me preocupo com o bem-estar e os sentimentos das outras pessoas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q22', category: 'C', text: 'Sou bom em construir relacionamentos e trabalhar em equipe.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q23', category: 'C', text: 'Gosto de ajudar os outros e sou empático com suas necessidades.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q24', category: 'C', text: 'A harmonia e a colaboração são muito importantes para mim.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q25', category: 'C', text: 'Prefiro interagir com as pessoas e me sinto energizado por elas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q26', category: 'C', text: 'Sou bom em mediar conflitos e encontrar soluções que agradem a todos.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q27', category: 'C', text: 'Eu me sinto mais confortável expressando minhas emoções abertamente.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q28', category: 'C', text: 'Gosto de criar um ambiente de apoio e confiança.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q29', category: 'C', text: 'Sou sensível às emoções dos outros e consigo me conectar facilmente.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q30', category: 'C', text: 'Eu me sinto satisfeito quando consigo ajudar alguém ou fortalecer um relacionamento.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Quadrante D
      { id: 'hbdi-q31', category: 'D', text: 'Gosto de explorar novas ideias e abordagens criativas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q32', category: 'D', text: 'Sou bom em ver o "quadro geral" e fazer conexões inesperadas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q33', category: 'D', text: 'Prefiro pensar de forma não linear e buscar soluções inovadoras.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q34', category: 'D', text: 'A intuição e a imaginação são muito importantes para mim.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q35', category: 'D', text: 'Gosto de correr riscos e experimentar coisas novas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q36', category: 'D', text: 'Eu me sinto mais confortável com a ambiguidade e a incerteza.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q37', category: 'D', text: 'Sou bom em gerar ideias e pensar "fora da caixa".', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q38', category: 'D', text: 'Prefiro trabalhar em ambientes flexíveis e com poucas regras.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q39', category: 'D', text: 'Sou atraído por desafios que exigem criatividade e originalidade.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'hbdi-q40', category: 'D', text: 'Eu me sinto satisfeito quando consigo criar algo novo ou encontrar uma solução disruptiva.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
    ]
  },

  // 12. --- Teste 4D da NASA ---
  {
    id: 'nasa-4d-leadership',
    title: '12. Teste 4D da NASA – Estilos de Liderança',
    description: 'Identifique seu estilo de liderança e atuação em equipes técnicas: Cultivador (Azul), Visionário (Amarelo), Diretor (Vermelho) ou Inclusivo (Verde).',
    introduction: 'Desenvolvido por Charles Pellerin para a NASA, este teste avalia 4 dimensões de liderança cruciais para o sucesso de projetos e equipes.',
    applicatorInstructions: 'Escala 1-5 (Frequência). 1=Nunca, 5=Sempre.',
    sources: 'Charles Pellerin, NASA 4D System.',
    version: 1,
    analysisPrompt: 'Analise o perfil 4D da NASA. Cores: Azul (Relacionador/Emoção), Amarelo (Sonhador/Visão), Vermelho (Executor/Ação), Verde (Analítico/Dados). Identifique a cor predominante e a menos desenvolvida. Sugira como equilibrar o estilo de liderança.',
    feedback: {
      type: FeedbackType.MultiCategorySum,
      categoryConfig: {
        'Azul': { name: 'RELACIONADOR (Azul)' },
        'Amarelo': { name: 'SONHADOR (Amarelo)' },
        'Vermelho': { name: 'EXECUTOR (Vermelho)' },
        'Verde': { name: 'ANALÍTICO (Verde)' }
      },
      devolutiva: {
        'Azul': { name: 'RELACIONADOR (Azul)', description: 'Foco em pessoas e emoções.', interpretation: 'Alto em empatia e comunicação. Contribui com coesão.' },
        'Amarelo': { name: 'SONHADOR (Amarelo)', description: 'Foco em visão e futuro.', interpretation: 'Alto em criatividade e estratégia. Contribui com inovação.' },
        'Vermelho': { name: 'EXECUTOR (Vermelho)', description: 'Foco em ação e resultados.', interpretation: 'Alto em decisão e energia. Contribui com produtividade.' },
        'Verde': { name: 'ANALÍTICO (Verde)', description: 'Foco em dados e processos.', interpretation: 'Alto em precisão e lógica. Contribui com qualidade técnica.' }
      }
    },
    questions: [
      { id: 'nasa-q1', category: 'Azul', text: 'Eu me preocupo com o impacto das minhas ações sobre os outros membros da equipe.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q2', category: 'Verde', text: 'Eu gosto de trabalhar com dados, números e análises detalhadas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q3', category: 'Vermelho', text: 'Eu sou motivado por metas claras e prazos definidos.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q4', category: 'Amarelo', text: 'Eu gosto de explorar novas possibilidades e cenários futuros.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q5', category: 'Azul', text: 'Eu valorizo muito as conexões humanas e o clima de equipe.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q6', category: 'Verde', text: 'Eu prefiro seguir processos estabelecidos e procedimentos padronizados.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q7', category: 'Vermelho', text: 'Eu tenho facilidade para mobilizar pessoas em prol de objetivos comuns.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q8', category: 'Vermelho', text: 'Eu costumo agir rapidamente para resolver problemas e tomar decisões.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q9', category: 'Amarelo', text: 'Eu gosto de questionar o status quo e propor soluções inovadoras.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q10', category: 'Azul', text: 'Eu me sinto desconfortável com conflitos e busco sempre a harmonia.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q11', category: 'Verde', text: 'Eu preciso de informações concretas antes de tomar uma decisão.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q12', category: 'Amarelo', text: 'Eu me empolgo facilmente com novas ideias e projetos ambiciosos.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q13', category: 'Vermelho', text: 'Eu me concentro mais em completar tarefas do que em desenvolver relacionamentos.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q14', category: 'Azul', text: 'Eu sou sensível às necessidades emocionais dos outros.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q15', category: 'Verde', text: 'Eu prefiro trabalhar com planos detalhados e cronogramas bem definidos.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q16', category: 'Vermelho', text: 'Eu sou impaciente quando as coisas não progridem rapidamente.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q17', category: 'Amarelo', text: 'Eu gosto de pensar em longo prazo e visualizar futuros desejáveis.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q18', category: 'Azul', text: 'Eu me sinto realizado quando mantenho boas relações interpessoais.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q19', category: 'Verde', text: 'Eu analiso cuidadosamente todas as alternativas antes de agir.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q20', category: 'Vermelho', text: 'Eu sou direto e objetivo nas minhas comunicações.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q21', category: 'Azul', text: 'Eu me preocupo com o bem-estar emocional da equipe.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q22', category: 'Verde', text: 'Eu gosto de sistemas e métodos que garantem qualidade e precisão.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q23', category: 'Vermelho', text: 'Eu me sento confortável assumindo riscos calculados para alcançar resultados.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'nasa-q24', category: 'Amarelo', text: 'Eu me inspiro com visões grandiosas e possibilidades ilimitadas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
    ]
  }
];
