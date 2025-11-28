
import { Questionnaire, FeedbackType, TestScores } from '../types';

// Helper para gerar feedback do MBTI
const mbtiFeedbackGenerator = (scores: TestScores) => {
  const E = scores['E'] || 0;
  const I = scores['I'] || 0;
  const S = scores['S'] || 0;
  const N = scores['N'] || 0;
  const T = scores['T'] || 0;
  const F = scores['F'] || 0;
  const J = scores['J'] || 0;
  const P = scores['P'] || 0;

  const dim1 = E >= I ? 'E' : 'I';
  const dim2 = S >= N ? 'S' : 'N';
  const dim3 = T >= F ? 'T' : 'F';
  const dim4 = J >= P ? 'J' : 'P';

  const type = `${dim1}${dim2}${dim3}${dim4}`;

  const profiles: Record<string, string> = {
    'ISTJ': 'O Logístico: Prático, focado em fatos e muito confiável.',
    'ISFJ': 'O Defensor: Protetor, dedicado e acolhedor.',
    'INFJ': 'O Advogado: Idealista, organizado e com profunda visão de valores.',
    'INTJ': 'O Arquiteto: Pensador estratégico, imaginativo e com plano para tudo.',
    'ISTP': 'O Virtuoso: Experimentador ousado e prático, mestre em ferramentas.',
    'ISFP': 'O Aventureiro: Artista flexível e charmoso, sempre pronto para explorar.',
    'INFP': 'O Mediador: Poético, bondoso e altruísta.',
    'INTP': 'O Lógico: Inventor inovador com sede insaciável de conhecimento.',
    'ESTP': 'O Empresário: Inteligente, enérgico e muito perceptivo.',
    'ESFP': 'O Animador: Entusiasmado, espontâneo e a vida da festa.',
    'ENFP': 'O Ativista: Espírito livre, criativo, sociável e entusiasmado.',
    'ENTP': 'O Debatedor: Pensador esperto e curioso que não resiste a um desafio intelectual.',
    'ESTJ': 'O Executivo: Administrador excelente, inigualável em gerenciar coisas ou pessoas.',
    'ESFJ': 'O Cônsul: Extraordinariamente atencioso, social e popular.',
    'ENFJ': 'O Protagonista: Líder carismático e inspirador, capaz de cativar ouvintes.',
    'ENTJ': 'O Comandante: Líder ousado, imaginativo e de vontade forte.'
  };

  return `**Seu Tipo MBTI: ${type}**\n\n${profiles[type] || 'Perfil em análise.'}\n\n**Detalhamento das Dimensões:**\n\n*   **Energia:** Extroversão (${E}) vs Introversão (${I}) -> **${dim1}**\n*   **Percepção:** Sensação (${S}) vs Intuição (${N}) -> **${dim2}**\n*   **Decisão:** Pensamento (${T}) vs Sentimento (${F}) -> **${dim3}**\n*   **Estilo de Vida:** Julgamento (${J}) vs Percepção (${P}) -> **${dim4}**`;
};

export const testsPart12: Questionnaire[] = [
  // 30. --- Teste de Ciúmes Relacional (TCR-30) ---
  {
    id: 'jealousy-tcr-30',
    title: '30. Teste de Ciúmes Relacional (TCR-30)',
    description: 'Avaliação clínica do espectro do ciúmes – do afetivo ao patológico. Identifica ciúmes reativo, ansioso e obsessivo.',
    introduction: `O Teste de Ciúmes Relacional (TCR-30) foi desenvolvido para identificar o grau, a natureza e a intensidade do ciúmes em relacionamentos amorosos.

Este instrumento diferencia:
*   **Ciúmes reativo:** Desencadeado por ameaças reais.
*   **Ciúmes ansioso:** Baseado em inseguranças internas.
*   **Ciúmes obsessivo:** Com ideação fixa e comportamentos invasivos.`,
    applicatorInstructions: 'Escala de 0 (Nunca) a 3 (Quase sempre). O teste não é diagnóstico, mas um instrumento de triagem.',
    sources: 'Literatura clínica internacional, David M. Buss, Augusto Cury, Beatriz Barboza.',
    version: 1,
    feedback: {
      type: FeedbackType.Sum,
      feedbackTextGenerator: (scores: TestScores) => {
        const total = scores['total'] || 0;
        if (total <= 30) return `**0–30 pontos: Ciúmes Mínimo ou Saudável**\n\nSeu nível de ciúmes é baixo e provavelmente não interfere na qualidade do relacionamento. Indica segurança e confiança.`;
        if (total <= 60) return `**31–60 pontos: Ciúmes Moderado (Ansioso/Inseguro)**\n\nVocê apresenta sinais de insegurança que geram desconforto. O ciúmes pode estar ligado a medo de abandono ou baixa autoestima. Vale a pena dialogar e refletir.`;
        if (total <= 90) return `**61–90 pontos: Ciúmes Intenso**\n\nRisco de comportamentos disfuncionais. A intensidade do ciúmes pode estar prejudicando a confiança e a liberdade no relacionamento.`;
        return `**>90 pontos: Ciúmes Patológico**\n\n**Atenção:** Nível crítico. Indica pensamentos obsessivos e comportamentos de controle que podem ser destrutivos. Recomenda-se avaliação psicológica aprofundada.`;
      }
    },
    questions: [
      { id: 'tcr-01', text: 'Quando seu parceiro(a) conversa animadamente com outra pessoa, você se sente desconfortável a ponto de interromper?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-02', text: 'Pede para apagar comentários ou bloquear pessoas que elogiam seu parceiro(a) nas redes?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-03', text: 'Se sente incomodado(a) ao saber que ele(a) mantém contato amigável com um ex?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-04', text: 'Fica ansioso(a) se ele(a) menciona colegas do sexo oposto de trabalho/estudo?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-05', text: 'Questiona com quem ele(a) conversou em atividades de grupo (igreja, ONG)?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-06', text: 'Checa o celular dele(a) sem permissão?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-07', text: 'Exige saber a todo momento onde e com quem ele(a) está?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-08', text: 'Se ele(a) curte fotos de outros, você se sente traído(a)?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-09', text: 'Fica com raiva ao ouvir histórias do passado amoroso dele(a)?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-10', text: 'Já terminou relacionamento por suspeitar de traição sem provas?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-11', text: 'Reage com irritação a "brincadeiras" de flerte de terceiros?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-12', text: 'Tenta limitar amizades dele(a) com pessoas "atraentes"?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-13', text: 'Desconfia das intenções de quem dá presentes a ele(a)?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-14', text: 'Insiste em ir junto a reencontros de ex-colegas dele(a)?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-15', text: 'Fica horas sem falar (punição) por ele(a) ter conversado com outros?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-16', text: 'Sente ciúmes até de fantasias sexuais que ele(a) possa ter?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-17', text: 'Já pediu provas de fidelidade (mostrar conversas)?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-18', text: 'Sente ciúmes de objetos/presentes de relacionamentos anteriores?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-19', text: 'Se sente ameaçado(a) se ele(a) recebe muita atenção em grupo?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-20', text: 'Interpreta sonhos dele(a) com outros como desejo real?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-21', text: 'Pede para apagar fotos antigas de ex-namorados(as)?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-22', text: 'Se ele(a) responde mensagens rápido no jantar, assume que é alguém "especial"?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-23', text: 'Fica inseguro(a) com relatos de experiências sexuais passadas?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-24', text: 'Já se comparou obsessivamente com ex-parceiros(as) dele(a)?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-25', text: 'Já criou perfis falsos para testar a fidelidade?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-26', text: 'O ciúmes causa reações físicas (taquicardia, insônia)?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-27', text: 'Justifica ciúmes dizendo "melhor prevenir que remediar"?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-28', text: 'Já pediu para não usar roupas que "chamam atenção"?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-29', text: 'Fica com ciúmes retroativo (antes de vocês se conhecerem)?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tcr-30', text: 'Já pressionou para ele(a) se afastar de amigos/família?', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
    ]
  },

  // 31. --- Teste de Eneagrama (Versão Prática - 60 Itens) ---
  {
    id: 'enneagram-practical-60',
    title: '31. Teste de Eneagrama Prático',
    description: 'Identificação dos 9 tipos de personalidade com base em situações reais do cotidiano. Inclui análise de asas e níveis de estresse.',
    introduction: `O Eneagrama descreve nove estilos básicos de personalidade, cada um com motivações inconscientes e padrões de comportamento. Este teste utiliza situações práticas para facilitar a identificação do seu tipo predominante.`,
    applicatorInstructions: 'Escala de 1 (Nunca) a 5 (Sempre). O sistema somará os pontos por tipo.',
    sources: 'Riso & Hudson, Helen Palmer, Claudio Naranjo.',
    version: 2,
    feedback: {
      type: FeedbackType.MultiCategorySum,
      categoryConfig: {
        'Tipo1': { name: 'Tipo 1: O Perfeccionista' },
        'Tipo2': { name: 'Tipo 2: O Ajudador' },
        'Tipo3': { name: 'Tipo 3: O Realizador' },
        'Tipo4': { name: 'Tipo 4: O Individualista' },
        'Tipo5': { name: 'Tipo 5: O Investigador' },
        'Tipo6': { name: 'Tipo 6: O Lealista' },
        'Tipo7': { name: 'Tipo 7: O Entusiasta' },
        'Tipo8': { name: 'Tipo 8: O Desafiador' },
        'Tipo9': { name: 'Tipo 9: O Pacificador' }
      },
      devolutiva: {
        'Tipo1': { name: 'Tipo 1: O Perfeccionista', description: 'Racional, idealista, com forte senso de certo e errado.', interpretation: 'Busca a perfeição e correção. Cuidado com a crítica excessiva.' },
        'Tipo2': { name: 'Tipo 2: O Ajudador', description: 'Afetuoso, demonstrativo e voltado para pessoas.', interpretation: 'Busca ser amado e necessário. Cuidado para não esquecer de si mesmo.' },
        'Tipo3': { name: 'Tipo 3: O Realizador', description: 'Pragmático, orientado para o sucesso e imagem.', interpretation: 'Busca admiração e resultados. Cuidado com o workaholism.' },
        'Tipo4': { name: 'Tipo 4: O Individualista', description: 'Expressivo, dramático e introspectivo.', interpretation: 'Busca identidade e significado único. Cuidado com a melancolia.' },
        'Tipo5': { name: 'Tipo 5: O Investigador', description: 'Perceptivo, inovador e reservado.', interpretation: 'Busca conhecimento e competência. Cuidado com o isolamento.' },
        'Tipo6': { name: 'Tipo 6: O Lealista', description: 'Engajado, responsável e ansioso.', interpretation: 'Busca segurança e apoio. Cuidado com a dúvida e o medo.' },
        'Tipo7': { name: 'Tipo 7: O Entusiasta', description: 'Espontâneo, versátil e otimista.', interpretation: 'Busca felicidade e novas experiências. Cuidado com a impulsividade.' },
        'Tipo8': { name: 'Tipo 8: O Desafiador', description: 'Poderoso, dominador e autoconfiante.', interpretation: 'Busca controle e justiça. Cuidado com a agressividade.' },
        'Tipo9': { name: 'Tipo 9: O Pacificador', description: 'Fácil de conviver, modesto e agradável.', interpretation: 'Busca paz e harmonia. Cuidado com a complacência e inércia.' }
      }
    },
    questions: [
      // Tipo 1
      { id: 'ene-t1-1', category: 'Tipo1', text: 'Fico incomodado(a) com erros e repasso mentalmente o que poderia ter feito melhor.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t1-2', category: 'Tipo1', text: 'Sinto-me irritado(a) com injustiças ou falta de ética.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t1-3', category: 'Tipo1', text: 'Prefiro regras claras e fico ansioso(a) no caos.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t1-4', category: 'Tipo1', text: 'Tenho dificuldade em relaxar se não fui produtivo(a).', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t1-5', category: 'Tipo1', text: 'Evito elogiar se acho que não é plenamente merecido.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t1-6', category: 'Tipo1', text: 'Costumo corrigir os outros para "ajudar".', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Tipo 2
      { id: 'ene-t2-1', category: 'Tipo2', text: 'Ofereço ajuda antes que peçam.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t2-2', category: 'Tipo2', text: 'Fico magoado(a) se não demonstram gratidão.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t2-3', category: 'Tipo2', text: 'Percebo necessidades emocionais dos outros facilmente.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t2-4', category: 'Tipo2', text: 'Evito falar das minhas necessidades para não ser "pesado(a)".', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t2-5', category: 'Tipo2', text: 'Sinto-me valorizado(a) quando estou cuidando.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t2-6', category: 'Tipo2', text: 'Já cancelei planos porque alguém precisava de mim.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Tipo 3
      { id: 'ene-t3-1', category: 'Tipo3', text: 'Planejo minha imagem pública com cuidado.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t3-2', category: 'Tipo3', text: 'Desconfortável quando não estou sendo produtivo(a) ou sem metas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t3-3', category: 'Tipo3', text: 'Adapto meu comportamento para agradar diferentes grupos.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t3-4', category: 'Tipo3', text: 'Evito mostrar falhas para não perder admiração.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t3-5', category: 'Tipo3', text: 'Meu valor está ligado ao que conquisto.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t3-6', category: 'Tipo3', text: 'Comparo-me com outros para medir meu sucesso.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Tipo 4
      { id: 'ene-t4-1', category: 'Tipo4', text: 'Sinto que sou diferente e poucos me entendem.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t4-2', category: 'Tipo4', text: 'Abalado(a) por críticas que tocam minha identidade.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t4-3', category: 'Tipo4', text: 'Idealizo relacionamentos e me decepciono.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t4-4', category: 'Tipo4', text: 'Meus estados emocionais mudam com frequência.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t4-5', category: 'Tipo4', text: 'Busco expressar minha identidade de forma única.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t4-6', category: 'Tipo4', text: 'Inveja de quem vive uma vida mais autêntica.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Tipo 5
      { id: 'ene-t5-1', category: 'Tipo5', text: 'Prefiro observar antes de me envolver.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t5-2', category: 'Tipo5', text: 'Sinto-me esgotado com muita interação social.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t5-3', category: 'Tipo5', text: 'Sinto-me seguro quando domino um assunto.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t5-4', category: 'Tipo5', text: 'Evito demonstrar emoções para não ficar vulnerável.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t5-5', category: 'Tipo5', text: 'Dificuldade em compartilhar meu tempo ou espaço.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t5-6', category: 'Tipo5', text: 'Em conflitos, me torno racional e frio.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Tipo 6
      { id: 'ene-t6-1', category: 'Tipo6', text: 'Imagino cenários de erro antes de decidir.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t6-2', category: 'Tipo6', text: 'Confio mais em regras ou autoridades do que na intuição.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t6-3', category: 'Tipo6', text: 'Fico ansioso(a) com promessas vagas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t6-4', category: 'Tipo6', text: 'Tenho um grupo de segurança próximo.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t6-5', category: 'Tipo6', text: 'Em crise, penso em Planos B, C e D.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t6-6', category: 'Tipo6', text: 'Duvido das intenções alheias ("pressentimento ruim").', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Tipo 7
      { id: 'ene-t7-1', category: 'Tipo7', text: 'Tenho dificuldade em ficar parado, sempre planejo o próximo passo.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t7-2', category: 'Tipo7', text: 'Evito sentimentos dolorosos buscando distrações prazerosas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t7-3', category: 'Tipo7', text: 'Vejo o lado positivo de quase tudo.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t7-4', category: 'Tipo7', text: 'Começo vários projetos e tenho dificuldade em acabar.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t7-5', category: 'Tipo7', text: 'Prefiro conversas leves a discussões profundas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t7-6', category: 'Tipo7', text: 'Sinto-me preso em rotinas rígidas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Tipo 8
      { id: 'ene-t8-1', category: 'Tipo8', text: 'Prefiro resolver problemas sozinho, sem depender de ninguém.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t8-2', category: 'Tipo8', text: 'Reajo com firmeza ou agressividade se sinto manipulação.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t8-3', category: 'Tipo8', text: 'Facilidade em tomar decisões difíceis.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t8-4', category: 'Tipo8', text: 'Protejo os vulneráveis, mesmo que traga problemas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t8-5', category: 'Tipo8', text: 'Evito mostrar vulnerabilidade.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t8-6', category: 'Tipo8', text: 'Assumo o controle em situações caóticas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Tipo 9
      { id: 'ene-t9-1', category: 'Tipo9', text: 'Evito conflitos a todo custo.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t9-2', category: 'Tipo9', text: 'Concordo com os outros para manter a paz.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t9-3', category: 'Tipo9', text: 'Torno-me "invisível" em discussões.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t9-4', category: 'Tipo9', text: 'Meu ritmo é mais lento, não gosto de pressa.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t9-5', category: 'Tipo9', text: 'Procrastino escolhendo atividades secundárias.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-t9-6', category: 'Tipo9', text: 'Feliz quando todos estão em harmonia.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Perguntas Integrativas (Mapeadas para o tipo que elas indicam movimento/asa)
      { id: 'ene-int-1', category: 'Tipo4', text: 'Em segurança, me torno mais criativo e introspectivo.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-int-2', category: 'Tipo1', text: 'Sob estresse, fico mais crítico e rígido.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-int-3', category: 'Tipo8', text: 'Em crise, me torno mais prático e assertivo.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-int-4', category: 'Tipo5', text: 'Quando seguro, consigo relaxar sem buscar estímulo constante.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-int-5', category: 'Tipo2', text: 'Em confiança, cuido dos outros genuinamente.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ene-int-6', category: 'Tipo8', text: 'Quando equilibrado, lidero com empatia e firmeza.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
    ]
  },

  // 32. --- Teste MBTI Clínico (60 Itens) ---
  {
    id: 'mbti-clinical-60',
    title: '32. Teste MBTI Clínico (60 Itens)',
    description: 'Adaptação clínica do indicador de tipos psicológicos (Jung/Myers-Briggs). Avalia 4 eixos: E/I, S/N, T/F, J/P.',
    introduction: `Este teste é uma adaptação clínica baseada na teoria dos tipos psicológicos de Carl Jung e Myers-Briggs. Ele identifica suas preferências naturais em quatro dimensões:

1.  **Energia:** Extroversão (E) vs Introversão (I)
2.  **Percepção:** Sensação (S) vs Intuição (N)
3.  **Decisão:** Pensamento (T) vs Sentimento (F)
4.  **Estilo de Vida:** Julgamento (J) vs Percepção (P)`,
    applicatorInstructions: 'O respondente deve escolher a opção (A ou B) que melhor descreve seu comportamento habitual.',
    sources: 'Myers & Briggs Foundation, Carl Jung, Literatura Acadêmica Brasileira.',
    version: 1,
    feedback: {
      type: FeedbackType.MultiCategorySum,
      categoryConfig: {
        'E': { name: 'Extroversão (E)' },
        'I': { name: 'Introversão (I)' },
        'S': { name: 'Sensação (S)' },
        'N': { name: 'Intuição (N)' },
        'T': { name: 'Pensamento (T)' },
        'F': { name: 'Sentimento (F)' },
        'J': { name: 'Julgamento (J)' },
        'P': { name: 'Percepção (P)' }
      },
      feedbackTextGenerator: mbtiFeedbackGenerator
    },
    questions: [
      // Eixo 1: E vs I
      { id: 'mbti-01', text: 'Após um dia cansativo:', options: [{ text: 'A) Sair com amigos para conversar.', category: 'E', value: 1 }, { text: 'B) Ficar sozinho em casa lendo/ouvindo música.', category: 'I', value: 1 }] },
      { id: 'mbti-02', text: 'Em uma festa:', options: [{ text: 'A) Conversar com várias pessoas diferentes.', category: 'E', value: 1 }, { text: 'B) Conversar profundamente com poucas pessoas.', category: 'I', value: 1 }] },
      { id: 'mbti-03', text: 'Sente-se mais vivo:', options: [{ text: 'A) No meio de um grupo animado.', category: 'E', value: 1 }, { text: 'B) Quando tem tempo para refletir sozinho.', category: 'I', value: 1 }] },
      { id: 'mbti-04', text: 'Processamento:', options: [{ text: 'A) Fala pensamentos em voz alta.', category: 'E', value: 1 }, { text: 'B) Pensa bem antes de falar.', category: 'I', value: 1 }] },
      { id: 'mbti-05', text: 'Resolução de problemas:', options: [{ text: 'A) Discutindo com outras pessoas.', category: 'E', value: 1 }, { text: 'B) Refletindo internamente.', category: 'I', value: 1 }] },
      { id: 'mbti-06', text: 'Feedback rápido:', options: [{ text: 'A) Responde na hora com ideias espontâneas.', category: 'E', value: 1 }, { text: 'B) Pede tempo para pensar.', category: 'I', value: 1 }] },
      { id: 'mbti-07', text: 'Trabalho:', options: [{ text: 'A) Equipe e troca constante.', category: 'E', value: 1 }, { text: 'B) Sozinho, autonomia e silêncio.', category: 'I', value: 1 }] },
      { id: 'mbti-08', text: 'Aprender algo novo:', options: [{ text: 'A) Explicar logo para alguém.', category: 'E', value: 1 }, { text: 'B) Processar internamente antes de falar.', category: 'I', value: 1 }] },
      { id: 'mbti-09', text: 'Celular tocando:', options: [{ text: 'A) Atende animado.', category: 'E', value: 1 }, { text: 'B) Pensa se quer interromper o momento.', category: 'I', value: 1 }] },
      { id: 'mbti-10', text: 'Viagens:', options: [{ text: 'A) Locais movimentados e interação.', category: 'E', value: 1 }, { text: 'B) Lugares calmos para observar.', category: 'I', value: 1 }] },
      // Eixo 2: S vs N
      { id: 'mbti-11', text: 'Manual de instruções:', options: [{ text: 'A) Segue passo a passo exato.', category: 'S', value: 1 }, { text: 'B) Tenta entender o "espírito" da coisa.', category: 'N', value: 1 }] },
      { id: 'mbti-12', text: 'Reunião:', options: [{ text: 'A) Foca em dados e detalhes práticos.', category: 'S', value: 1 }, { text: 'B) Foca em ideias inovadoras e quadro geral.', category: 'N', value: 1 }] },
      { id: 'mbti-13', text: 'Histórias:', options: [{ text: 'A) Eventos reais e detalhes sensoriais.', category: 'S', value: 1 }, { text: 'B) Simbolismos e metáforas.', category: 'N', value: 1 }] },
      { id: 'mbti-14', text: 'Planejar jantar:', options: [{ text: 'A) Lista exata de ingredientes e horários.', category: 'S', value: 1 }, { text: 'B) Pensa no clima e na experiência.', category: 'N', value: 1 }] },
      { id: 'mbti-15', text: 'Confiança:', options: [{ text: 'A) Experiências passadas.', category: 'S', value: 1 }, { text: 'B) Insights e palpites.', category: 'N', value: 1 }] },
      { id: 'mbti-16', text: 'Curso:', options: [{ text: 'A) Anota tudo palavra por palavra.', category: 'S', value: 1 }, { text: 'B) Anota ideias principais e conexões.', category: 'N', value: 1 }] },
      { id: 'mbti-17', text: 'Música:', options: [{ text: 'A) Melodia, ritmo e voz.', category: 'S', value: 1 }, { text: 'B) O que ela representa ou evoca.', category: 'N', value: 1 }] },
      { id: 'mbti-18', text: 'Instruções:', options: [{ text: 'A) Claras: "faça isso, depois aquilo".', category: 'S', value: 1 }, { text: 'B) Liberdade para interpretar.', category: 'N', value: 1 }] },
      { id: 'mbti-19', text: 'Regras:', options: [{ text: 'A) Incomoda-se quando ignoradas.', category: 'S', value: 1 }, { text: 'B) Devem ser flexíveis se houver ideia melhor.', category: 'N', value: 1 }] },
      { id: 'mbti-20', text: 'Trabalho ideal:', options: [{ text: 'A) Tarefas definidas e previsíveis.', category: 'S', value: 1 }, { text: 'B) Desafios novos e abertos.', category: 'N', value: 1 }] },
      // Eixo 3: T vs F
      { id: 'mbti-21', text: 'Feedback:', options: [{ text: 'A) Foca no erro, mesmo que chateie.', category: 'T', value: 1 }, { text: 'B) Escolhe palavras para não magoar.', category: 'F', value: 1 }] },
      { id: 'mbti-22', text: 'Conflito:', options: [{ text: 'A) Identificar quem está certo pelos fatos.', category: 'T', value: 1 }, { text: 'B) Acalmar ânimos e restaurar harmonia.', category: 'F', value: 1 }] },
      { id: 'mbti-23', text: 'Decisões:', options: [{ text: 'A) Critérios justos e consistentes.', category: 'T', value: 1 }, { text: 'B) Necessidades e sentimentos de cada um.', category: 'F', value: 1 }] },
      { id: 'mbti-24', text: 'Conselho:', options: [{ text: 'A) Analisa prós e contras objetivos.', category: 'T', value: 1 }, { text: 'B) Pergunta como a pessoa se sente.', category: 'F', value: 1 }] },
      { id: 'mbti-25', text: 'Valor:', options: [{ text: 'A) Verdade é mais importante que gentileza.', category: 'T', value: 1 }, { text: 'B) Gentileza é mais importante que verdade.', category: 'F', value: 1 }] },
      { id: 'mbti-26', text: 'Equipe:', options: [{ text: 'A) Valoriza competência técnica.', category: 'T', value: 1 }, { text: 'B) Valoriza cooperação e clima.', category: 'F', value: 1 }] },
      { id: 'mbti-27', text: 'Avaliação:', options: [{ text: 'A) Isso é lógico e eficaz?', category: 'T', value: 1 }, { text: 'B) Isso afeta bem as pessoas?', category: 'F', value: 1 }] },
      { id: 'mbti-28', text: 'Crítica recebida:', options: [{ text: 'A) Ser "frio" ou "direto demais".', category: 'T', value: 1 }, { text: 'B) Ser "mole" ou "evitar conflitos".', category: 'F', value: 1 }] },
      { id: 'mbti-29', text: 'Negociação:', options: [{ text: 'A) Melhor acordo racional.', category: 'T', value: 1 }, { text: 'B) Consenso onde todos se sintam respeitados.', category: 'F', value: 1 }] },
      { id: 'mbti-30', text: 'Julgamento moral:', options: [{ text: 'A) Justiça.', category: 'T', value: 1 }, { text: 'B) Compaixão.', category: 'F', value: 1 }] },
      // Eixo 4: J vs P
      { id: 'mbti-31', text: 'Fim de semana:', options: [{ text: 'A) Planos definidos com antecedência.', category: 'J', value: 1 }, { text: 'B) Decidir na hora.', category: 'P', value: 1 }] },
      { id: 'mbti-32', text: 'Lista de tarefas:', options: [{ text: 'A) Ansioso sem lista organizada.', category: 'J', value: 1 }, { text: 'B) Preso com lista rígida.', category: 'P', value: 1 }] },
      { id: 'mbti-33', text: 'Projetos:', options: [{ text: 'A) Termina com antecedência.', category: 'J', value: 1 }, { text: 'B) Trabalha melhor sob pressão/prazo.', category: 'P', value: 1 }] },
      { id: 'mbti-34', text: 'Decisão:', options: [{ text: 'A) Decidir rápido e seguir.', category: 'J', value: 1 }, { text: 'B) Manter opções abertas.', category: 'P', value: 1 }] },
      { id: 'mbti-35', text: 'Viagens:', options: [{ text: 'A) Planeja cada dia e horário.', category: 'J', value: 1 }, { text: 'B) Deixa o dia fluir.', category: 'P', value: 1 }] },
      { id: 'mbti-36', text: 'Ambiente:', options: [{ text: 'A) Desordem atrapalha.', category: 'J', value: 1 }, { text: 'B) Bagunça tem lógica própria.', category: 'P', value: 1 }] },
      { id: 'mbti-37', text: 'Conclusão:', options: [{ text: 'A) Gosta de fechar e por ponto final.', category: 'J', value: 1 }, { text: 'B) Gosta de revisitar ideias.', category: 'P', value: 1 }] },
      { id: 'mbti-38', text: 'Mantra:', options: [{ text: 'A) Planeje o trabalho, execute o plano.', category: 'J', value: 1 }, { text: 'B) Mantenha-se aberto ao inesperado.', category: 'P', value: 1 }] },
      { id: 'mbti-39', text: 'Mudança de planos:', options: [{ text: 'A) Frustra-se com mudanças de última hora.', category: 'J', value: 1 }, { text: 'B) Acha natural mudar.', category: 'P', value: 1 }] },
      { id: 'mbti-40', text: 'Avaliação:', options: [{ text: 'A) Saber com antecedência o que será cobrado.', category: 'J', value: 1 }, { text: 'B) Ser surpreendido e adaptar-se.', category: 'P', value: 1 }] },
      // Perguntas Complementares (41-60) para reforçar
      { id: 'mbti-41', text: 'Energia social:', options: [{ text: 'A) Inicia conversas facilmente.', category: 'E', value: 1 }, { text: 'B) Espera que venham falar com você.', category: 'I', value: 1 }] },
      { id: 'mbti-42', text: 'Foco:', options: [{ text: 'A) Realidade presente.', category: 'S', value: 1 }, { text: 'B) Possibilidades futuras.', category: 'N', value: 1 }] },
      { id: 'mbti-43', text: 'Lógica:', options: [{ text: 'A) Convincente.', category: 'T', value: 1 }, { text: 'B) Tocante.', category: 'F', value: 1 }] },
      { id: 'mbti-44', text: 'Prazo:', options: [{ text: 'A) Cumprir rigorosamente.', category: 'J', value: 1 }, { text: 'B) Flexível se necessário.', category: 'P', value: 1 }] },
      { id: 'mbti-45', text: 'Interação:', options: [{ text: 'A) Amplas amizades.', category: 'E', value: 1 }, { text: 'B) Poucas e profundas.', category: 'I', value: 1 }] },
      { id: 'mbti-46', text: 'Dados:', options: [{ text: 'A) Literais.', category: 'S', value: 1 }, { text: 'B) Figurativos.', category: 'N', value: 1 }] },
      { id: 'mbti-47', text: 'Análise:', options: [{ text: 'A) Impessoal.', category: 'T', value: 1 }, { text: 'B) Pessoal.', category: 'F', value: 1 }] },
      { id: 'mbti-48', text: 'Organização:', options: [{ text: 'A) Agenda.', category: 'J', value: 1 }, { text: 'B) Espontaneidade.', category: 'P', value: 1 }] },
      { id: 'mbti-49', text: 'Ação:', options: [{ text: 'A) Agir primeiro, pensar depois.', category: 'E', value: 1 }, { text: 'B) Pensar primeiro, agir depois.', category: 'I', value: 1 }] },
      { id: 'mbti-50', text: 'Inovação:', options: [{ text: 'A) Melhorar o que existe.', category: 'S', value: 1 }, { text: 'B) Criar algo novo.', category: 'N', value: 1 }] },
      { id: 'mbti-51', text: 'Justiça:', options: [{ text: 'A) Regras iguais para todos.', category: 'T', value: 1 }, { text: 'B) Exceções baseadas em circunstâncias.', category: 'F', value: 1 }] },
      { id: 'mbti-52', text: 'Controle:', options: [{ text: 'A) Controlar o ambiente.', category: 'J', value: 1 }, { text: 'B) Adaptar-se ao ambiente.', category: 'P', value: 1 }] },
      { id: 'mbti-53', text: 'Expressão:', options: [{ text: 'A) Fácil de conhecer.', category: 'E', value: 1 }, { text: 'B) Difícil de conhecer.', category: 'I', value: 1 }] },
      { id: 'mbti-54', text: 'Detalhes:', options: [{ text: 'A) Nota detalhes.', category: 'S', value: 1 }, { text: 'B) Nota padrões.', category: 'N', value: 1 }] },
      { id: 'mbti-55', text: 'Decisão difícil:', options: [{ text: 'A) Cabeça.', category: 'T', value: 1 }, { text: 'B) Coração.', category: 'F', value: 1 }] },
      { id: 'mbti-56', text: 'Trabalho:', options: [{ text: 'A) Primeiro trabalho, depois lazer.', category: 'J', value: 1 }, { text: 'B) Lazer pode vir antes.', category: 'P', value: 1 }] },
      { id: 'mbti-57', text: 'Apoio:', options: [{ text: 'A) Soluções práticas.', category: 'T', value: 1 }, { text: 'B) Apoio emocional.', category: 'F', value: 1 }] },
      { id: 'mbti-58', text: 'Metas:', options: [{ text: 'A) Revisar mensalmente.', category: 'J', value: 1 }, { text: 'B) Evoluir naturalmente.', category: 'P', value: 1 }] },
      { id: 'mbti-59', text: 'Social:', options: [{ text: 'A) Inicia interação.', category: 'E', value: 1 }, { text: 'B) Reage à interação.', category: 'I', value: 1 }] },
      { id: 'mbti-60', text: 'Foco:', options: [{ text: 'A) O que é.', category: 'S', value: 1 }, { text: 'B) O que poderia ser.', category: 'N', value: 1 }] },
    ]
  }
];
