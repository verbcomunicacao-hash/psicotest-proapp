
import { Questionnaire, FeedbackType, TestScores } from '../types';

export const testsPart13: Questionnaire[] = [
  // 36. --- Diagnóstico de Gestão de Tempo, Foco e Disciplina ---
  {
    id: 'time-management-focus-01',
    title: '36. Diagnóstico de Gestão de Tempo, Foco e Disciplina',
    description: 'Avalie sua organização, capacidade de foco e disciplina. Identifique ladrões de tempo, procrastinação e nível de autorregulação.',
    introduction: `Este instrumento tem como objetivo avaliar a maneira como você organiza seu tempo, mantém o foco diante de distrações e aplica disciplina em suas rotinas pessoais e profissionais. A gestão eficaz do tempo não se limita a agendas, mas envolve autorregulação emocional e clareza de prioridades.

**Baseado em:**
*   **Stephen Covey:** Matriz do Tempo.
*   **Cal Newport:** Deep Work (Trabalho Focado).
*   **Roy Baumeister:** Força de Vontade.`,
    applicatorInstructions: 'Escala Likert de 1 (Nunca) a 5 (Sempre). O sistema inverte automaticamente a pontuação de perguntas negativas para gerar um score final de produtividade.',
    sources: 'Covey, Newport, Clear, Baumeister, Allen (GTD).',
    version: 1,
    feedback: {
      type: FeedbackType.Sum,
      feedbackTextGenerator: (scores: TestScores) => {
        const total = scores['total'] || 0;
        
        if (total <= 69) {
            return `**30–69 pontos: Baixa Autorregulação Temporal**

**Interpretação:** Indica sobrecarga crônica, possível burnout ou desalinhamento entre valores e ações diárias. Seu tempo é frequentemente dominado por urgências externas e interrupções.

**Recomendação:** É essencial trabalhar com suporte profissional (coaching ou terapia) para reconstruir relações saudáveis com tempo, energia e limites.`;
        }
        if (total <= 99) {
            return `**70–99 pontos: Gestão Reativa e Fragmentada**

**Interpretação:** Seu tempo é frequentemente dominado por urgências externas. Há sinais de procrastinação, multitarefa ineficaz e dificuldade em manter rotinas consistentes.

**Recomendação:** Intervenções focadas em "mindset" de produtividade e construção de micro-hábitos são indicadas.`;
        }
        if (total <= 129) {
            return `**100–129 pontos: Gestão Funcional com Pontos de Melhoria**

**Interpretação:** Você tem bases sólidas, mas oscila sob pressão ou diante de distrações digitais. Geralmente consegue entregar, mas pode custar mais energia do que o necessário.

**Recomendação:** Recomenda-se fortalecer hábitos de planejamento semanal, estabelecer limites claros com tecnologia e pausas restauradoras.`;
        }
        return `**130–150 pontos: Alto Nível de Gestão Consciente**

**Interpretação:** Você demonstra excelente autorregulação, clareza de prioridades e habilidade para proteger seu foco. Sua disciplina é flexível e adaptável, não rígida.

**Recomendação:** Pode aprofundar sua prática com desafios de "alta performance sustentável" e mentoria para outros.`;
      }
    },
    questions: [
      // Perguntas Positivas (Sempre = 5 pontos)
      { id: 'tm-01', text: 'Quando tenho uma tarefa importante, consigo resistir ao impulso de checar redes sociais.', options: [{ text: '1 - Nunca', value: 1 }, { text: '2 - Raramente', value: 2 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 4 }, { text: '5 - Sempre', value: 5 }] },
      { id: 'tm-02', text: 'Planejo meu dia com antecedência, estabelecendo 1 a 3 prioridades essenciais.', options: [{ text: '1 - Nunca', value: 1 }, { text: '2 - Raramente', value: 2 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 4 }, { text: '5 - Sempre', value: 5 }] },
      { id: 'tm-03', text: 'Quando fico sobrecarregado, reavalio minhas tarefas e delego ou adio o que não é urgente.', options: [{ text: '1 - Nunca', value: 1 }, { text: '2 - Raramente', value: 2 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 4 }, { text: '5 - Sempre', value: 5 }] },
      { id: 'tm-04', text: 'Evito multitarefa intencionalmente, focando em uma atividade por vez.', options: [{ text: '1 - Nunca', value: 1 }, { text: '2 - Raramente', value: 2 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 4 }, { text: '5 - Sempre', value: 5 }] },
      
      // Pergunta Negativa (Invertida: Sempre = 1 ponto)
      { id: 'tm-05', text: 'Tenho dificuldade em começar tarefas que considero desagradáveis (procrastinação).', options: [{ text: '1 - Nunca', value: 5 }, { text: '2 - Raramente', value: 4 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 2 }, { text: '5 - Sempre', value: 1 }] },
      
      // Positivas
      { id: 'tm-06', text: 'Respeito meus horários de descanso e lazer como partes essenciais do meu dia.', options: [{ text: '1 - Nunca', value: 1 }, { text: '2 - Raramente', value: 2 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 4 }, { text: '5 - Sempre', value: 5 }] },
      { id: 'tm-07', text: 'Quando me distraio e perco tempo, me sinto frustrado(a) (consciência).', options: [{ text: '1 - Nunca', value: 1 }, { text: '2 - Raramente', value: 2 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 4 }, { text: '5 - Sempre', value: 5 }] },
      { id: 'tm-08', text: 'Consigo dizer "não" a compromissos que não se alinham com minhas metas.', options: [{ text: '1 - Nunca', value: 1 }, { text: '2 - Raramente', value: 2 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 4 }, { text: '5 - Sempre', value: 5 }] },
      { id: 'tm-09', text: 'Uso ferramentas (agenda, app, planner) de forma consistente.', options: [{ text: '1 - Nunca', value: 1 }, { text: '2 - Raramente', value: 2 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 4 }, { text: '5 - Sempre', value: 5 }] },
      
      // Negativa
      { id: 'tm-10', text: 'Me pego frequentemente "ocupado(a)", mas sem avanço real nas metas principais.', options: [{ text: '1 - Nunca', value: 5 }, { text: '2 - Raramente', value: 4 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 2 }, { text: '5 - Sempre', value: 1 }] },
      
      // Positiva
      { id: 'tm-11', text: 'Quando fico doente ou cansado(a), adapto minhas expectativas.', options: [{ text: '1 - Nunca', value: 1 }, { text: '2 - Raramente', value: 2 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 4 }, { text: '5 - Sempre', value: 5 }] },
      
      // Negativa
      { id: 'tm-12', text: 'Preciso de estímulos externos (prazos apertados, pressão) para me concentrar.', options: [{ text: '1 - Nunca', value: 5 }, { text: '2 - Raramente', value: 4 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 2 }, { text: '5 - Sempre', value: 1 }] },
      
      // Positiva
      { id: 'tm-13', text: 'Reviso meus objetivos semanalmente e ajusto meu planejamento.', options: [{ text: '1 - Nunca', value: 1 }, { text: '2 - Raramente', value: 2 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 4 }, { text: '5 - Sempre', value: 5 }] },
      
      // Negativa
      { id: 'tm-14', text: 'Meus horários de sono e refeições são irregulares.', options: [{ text: '1 - Nunca', value: 5 }, { text: '2 - Raramente', value: 4 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 2 }, { text: '5 - Sempre', value: 1 }] },
      
      // Positiva
      { id: 'tm-15', text: 'Quando começo uma tarefa, tenho clareza do resultado esperado.', options: [{ text: '1 - Nunca', value: 1 }, { text: '2 - Raramente', value: 2 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 4 }, { text: '5 - Sempre', value: 5 }] },
      
      // Negativa
      { id: 'tm-16', text: 'Fico ansioso(a) ao pensar que "não estou fazendo nada" nos momentos de ócio.', options: [{ text: '1 - Nunca', value: 5 }, { text: '2 - Raramente', value: 4 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 2 }, { text: '5 - Sempre', value: 1 }] },
      
      // Positivas
      { id: 'tm-17', text: 'Consigo manter foco por pelo menos 60 minutos em tarefas exigentes.', options: [{ text: '1 - Nunca', value: 1 }, { text: '2 - Raramente', value: 2 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 4 }, { text: '5 - Sempre', value: 5 }] },
      { id: 'tm-18', text: 'Recebo elogios por ser uma pessoa organizada e pontual.', options: [{ text: '1 - Nunca', value: 1 }, { text: '2 - Raramente', value: 2 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 4 }, { text: '5 - Sempre', value: 5 }] },
      
      // Negativa
      { id: 'tm-19', text: 'Deixo tarefas importantes para a última hora.', options: [{ text: '1 - Nunca', value: 5 }, { text: '2 - Raramente', value: 4 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 2 }, { text: '5 - Sempre', value: 1 }] },
      
      // Positivas
      { id: 'tm-20', text: 'Identifico e limito minhas "armadilhas de tempo" pessoais.', options: [{ text: '1 - Nunca', value: 1 }, { text: '2 - Raramente', value: 2 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 4 }, { text: '5 - Sempre', value: 5 }] },
      { id: 'tm-21', text: 'Meus intervalos de descanso são curtos e intencionais.', options: [{ text: '1 - Nunca', value: 1 }, { text: '2 - Raramente', value: 2 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 4 }, { text: '5 - Sempre', value: 5 }] },
      
      // Negativa
      { id: 'tm-22', text: 'Me cobro excessivamente por pequenas falhas na organização.', options: [{ text: '1 - Nunca', value: 5 }, { text: '2 - Raramente', value: 4 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 2 }, { text: '5 - Sempre', value: 1 }] },
      
      // Positivas
      { id: 'tm-23', text: 'Minha agenda reflete minhas prioridades reais.', options: [{ text: '1 - Nunca', value: 1 }, { text: '2 - Raramente', value: 2 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 4 }, { text: '5 - Sempre', value: 5 }] },
      { id: 'tm-24', text: 'Uso o tempo de deslocamento de forma produtiva ou restauradora.', options: [{ text: '1 - Nunca', value: 1 }, { text: '2 - Raramente', value: 2 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 4 }, { text: '5 - Sempre', value: 5 }] },
      { id: 'tm-25', text: 'Tenho metas claras de curto, médio e longo prazo.', options: [{ text: '1 - Nunca', value: 1 }, { text: '2 - Raramente', value: 2 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 4 }, { text: '5 - Sempre', value: 5 }] },
      
      // Negativa
      { id: 'tm-26', text: 'Sinto que vivo no "modo automático", reagindo a demandas.', options: [{ text: '1 - Nunca', value: 5 }, { text: '2 - Raramente', value: 4 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 2 }, { text: '5 - Sempre', value: 1 }] },
      
      // Positiva
      { id: 'tm-27', text: 'Consigo retomar o foco rapidamente após uma interrupção.', options: [{ text: '1 - Nunca', value: 1 }, { text: '2 - Raramente', value: 2 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 4 }, { text: '5 - Sempre', value: 5 }] },
      
      // Negativa
      { id: 'tm-28', text: 'Tenho dificuldade em manter hábitos saudáveis por mais de 2 semanas.', options: [{ text: '1 - Nunca', value: 5 }, { text: '2 - Raramente', value: 4 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 2 }, { text: '5 - Sempre', value: 1 }] },
      
      // Positivas
      { id: 'tm-29', text: 'Quando falho, reflito sobre o que deu errado em vez de me culpar.', options: [{ text: '1 - Nunca', value: 1 }, { text: '2 - Raramente', value: 2 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 4 }, { text: '5 - Sempre', value: 5 }] },
      { id: 'tm-30', text: 'Minha energia mental é distribuída de forma equilibrada.', options: [{ text: '1 - Nunca', value: 1 }, { text: '2 - Raramente', value: 2 }, { text: '3 - Às vezes', value: 3 }, { text: '4 - Frequentemente', value: 4 }, { text: '5 - Sempre', value: 5 }] },
    ]
  }
];
