
import { Questionnaire, FeedbackType, TestScores } from '../types';

export const testsPart10: Questionnaire[] = [
  // 24. --- Teste de Identificação de Relacionamento Tóxico (Adultos) ---
  {
    id: 'toxic-relationship-pro-adult',
    title: '24. Teste de Identificação de Relacionamento Tóxico (Pro)',
    description: 'Avaliação aprofundada de padrões de controle, manipulação, gaslighting e abuso emocional em relacionamentos adultos.',
    introduction: `Este teste auxilia na identificação de padrões tóxicos em relacionamentos afetivos. Relacionamentos tóxicos são aqueles que, de forma repetida, prejudicam o bem-estar emocional ou físico.

**Fontes Bibliográficas:**
- WHO (World Health Organization).
- APA (American Psychological Association).
- Stern, R. (2007). The Gaslight Effect.
- Instituições brasileiras: Instituto Maria da Penha, Observatório da Mulher.`,
    applicatorInstructions: 'Responda com a frequência que ocorre: 0 (Nunca) a 4 (Sempre). Pontuações altas indicam risco.',
    sources: 'WHO, APA, Instituto Maria da Penha.',
    version: 1,
    feedback: {
      type: FeedbackType.Sum,
      feedbackTextGenerator: (scores: TestScores) => {
        const total = scores['total'] || 0;
        if (total <= 30) return `**0–30 pontos: Relacionamento Saudável ou Baixo Risco**\n\nSeu relacionamento apresenta poucos sinais de toxicidade. Continue cultivando o respeito e a comunicação.`;
        if (total <= 60) return `**31–60 pontos: Sinais Moderados**\n\nHá padrões preocupantes que merecem reflexão. Avalie se você se sente livre e respeitado(a). Pequenas atitudes tóxicas podem escalar.`;
        if (total <= 90) return `**61–90 pontos: Alto Risco de Toxicidade**\n\nSeu bem-estar emocional está sendo afetado. Há sinais claros de manipulação ou controle. Busque apoio profissional e fortaleça sua rede de apoio.`;
        return `**91–120 pontos: Relacionamento Altamente Tóxico**\n\n**ATENÇÃO:** Risco significativo à saúde mental e/ou física. Há indicativos de abuso severo. Recomenda-se buscar ajuda especializada imediatamente (Psicólogo, Disque 180, CVV).`;
      }
    },
    questions: [
      { id: 'txa-01', text: 'Seu parceiro(a) o(a) faz sentir que está "exagerando" ao expressar emoções?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-02', text: 'Ele(a) tenta controlar com quem você sai ou fala?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-03', text: 'Você sente que precisa "andar sobre ovos" para não irritá-lo(a)?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-04', text: 'Ele(a) já usou ameaças (de abandono ou se machucar) para conseguir o que quer?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-05', text: 'Você se sente culpado(a) por coisas que não fez?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-06', text: 'Ele(a) compara você negativamente com outras pessoas?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-07', text: 'Ele(a) ignora suas necessidades ou minimiza seus problemas?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-08', text: 'Você já foi humilhado(a) em público por ele(a)?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-09', text: 'Ele(a) revisa seu celular ou redes sociais sem permissão?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-10', text: 'Ele(a) culpa você por todos os problemas do relacionamento?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-11', text: 'Você já foi forçado(a) a fazer algo contra sua vontade?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-12', text: 'Ele(a) isola você de sua família ou amigos?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-13', text: 'Você sente que perdeu sua identidade desde que começou o relacionamento?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-14', text: 'Seu parceiro(a) mente com frequência?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-15', text: 'Ele(a) demonstra carinho apenas quando quer algo em troca?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-16', text: 'Você se sente ansioso(a) ou com medo perto dele(a)?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-17', text: 'Ele(a) usa dinheiro para controlar você?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-18', text: 'Você já foi proibido(a) de trabalhar ou estudar?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-19', text: 'Ele(a) reage com raiva desproporcional a pequenas falhas?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-20', text: 'Ele(a) diz que "ninguém mais vai te querer"?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-21', text: 'Você precisa justificar cada ação sua?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-22', text: 'Ele(a) faz promessas de mudança que nunca cumpre?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-23', text: 'Ele(a) demonstra ciúmes excessivo sem motivo?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-24', text: 'Você já foi ameaçado(a) fisicamente?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-25', text: 'Ele(a) distorce fatos para fazer você duvidar da sua memória (gaslighting)?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-26', text: 'Você sente alívio quando ele(a) não está por perto?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-27', text: 'Ele(a) culpa outros pelos próprios erros?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-28', text: 'Ele(a) usa seu passado ou traumas contra você?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-29', text: 'Você já pensou em se machucar devido ao sofrimento no relacionamento?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txa-30', text: 'Você se sente preso(a), sem saída?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
    ]
  },

  // 25. --- Teste de Relacionamento Saudável (Adolescentes) ---
  {
    id: 'toxic-relationship-teen',
    title: '25. Teste de Relacionamento Saudável? (Adolescentes)',
    description: 'Versão adaptada para jovens (12-17 anos) para identificar bullying, controle digital e toxicidade em namoros ou amizades.',
    introduction: `Relacionamentos fazem parte da vida, mas nem todo vínculo é saudável. Este teste ajuda você a perceber se está sendo controlado(a), humilhado(a) ou desrespeitado(a).

**Você merece respeito e liberdade.**`,
    applicatorInstructions: 'Linguagem jovem. Escala 0 (Nunca) a 4 (Sempre). Se houver risco, acione um adulto de confiança.',
    sources: 'Adaptação de protocolos de proteção à infância e juventude.',
    version: 1,
    feedback: {
      type: FeedbackType.Sum,
      feedbackTextGenerator: (scores: TestScores) => {
        const total = scores['total'] || 0;
        if (total <= 30) return `**Baixo Risco (0-30)**\n\nSeu relacionamento parece tranquilo. Continue mantendo seus limites.`;
        if (total <= 60) return `**Moderado (31-60)**\n\nTem coisas aí que não são legais. Você se sente livre de verdade? Fique atento(a).`;
        if (total <= 90) return `**Alto Risco (61-90)**\n\nIsso não é saudável. Você está sofrendo e não precisa passar por isso sozinho(a). Fale com alguém.`;
        return `**Gravíssimo (91-120)**\n\n**CUIDADO:** Há sinais perigosos. Se houver ameaças ou medo, peça ajuda a um adulto ou ligue 100/180.`;
      }
    },
    questions: [
      { id: 'txt-01', text: 'Ele(a) diz que você só é legal por causa dele(a)?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-02', text: 'Exige ver suas mensagens ou senhas?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-03', text: 'Já te zoou ou humilhou na frente da galera ou na internet?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-04', text: 'Fica bravo(a) se você fala com outras pessoas?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-05', text: 'Você deixou de sair com amigos porque ele(a) não gostou?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-06', text: 'Ameaçou se machucar se você terminar?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-07', text: 'Você fica ansioso(a) quando ele(a) demora a responder?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-08', text: 'Postou algo seu sem permissão?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-09', text: 'Te obrigou a mandar nudes ou fotos íntimas?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-10', text: 'Controla o que você veste ou assiste?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-11', text: 'Você perdeu notas ou faltou aula por causa de brigas?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-12', text: 'Espalhou boatos sobre você?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-13', text: 'Sente que precisa ser "perfeito(a)" para ele(a)?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-14', text: 'Te compara com ex ou influencers?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-15', text: 'Já mentiu para pais/professores para protegê-lo(a)?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-16', text: 'Ameaçou "vazar" coisas suas?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-17', text: 'Se sente menos confiante desde que começou a relação?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-18', text: 'Fica com raiva se você elogia outra pessoa?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-19', text: 'Você apagou redes sociais por medo dele(a)?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-20', text: 'Te culpa pelo ciúmes dele(a)?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-21', text: 'Deixou de contar coisas importantes por medo de julgamento?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-22', text: 'Te isolou da família?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-23', text: 'Se sente cansado(a) depois de falar com ele(a)?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-24', text: 'Usa o "amor" para manipular ("se me amasse faria")?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-25', text: 'Perdoou algo grave rápido só para não brigar?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-26', text: 'Faz você duvidar da sua memória ("você tá louco(a)")?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-27', text: 'Evita falar dele(a) com adultos por medo?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-28', text: 'Fala mal de você pelas costas?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-29', text: 'Já pensou em fugir por causa dele(a)?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'txt-30', text: 'Tem medo de terminar?', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
    ]
  },

  // 26. --- Teste de Dependência Emocional (TDE) - Versão Pro ---
  {
    id: 'emotional-dependency-pro-01',
    title: '26. Teste de Dependência Emocional (TDE)',
    description: 'Identifique traços de apego excessivo, insegurança e perda de autonomia em relacionamentos.',
    introduction: `A dependência emocional caracteriza-se por um apego excessivo, medo intenso de abandono e dificuldade em manter a autonomia. Este teste, baseado em Bowlby e pesquisas recentes, ajuda a mapear esses padrões.

**Fontes:**
- Bowlby (Teoria do Apego).
- Castro & Pfeifer (2004).
- Bornholdt & Wagner (2020).`,
    applicatorInstructions: 'Escala: 0 (Nunca) a 4 (Sempre).',
    sources: 'Bowlby, Castro & Pfeifer, Bornholdt & Wagner.',
    version: 1,
    feedback: {
      type: FeedbackType.Sum,
      feedbackTextGenerator: (scores: TestScores) => {
        const total = scores['total'] || 0;
        if (total <= 40) return `**0–40 pontos: Baixa Dependência Emocional**\n\nVocê demonstra autonomia e segurança. Mantém sua identidade e respeita limites.`;
        if (total <= 70) return `**41–70 pontos: Dependência Moderada**\n\nHá sinais de insegurança e apego ansioso. Reflita sobre seus padrões para fortalecer sua autoestima.`;
        return `**71–120 pontos: Dependência Elevada**\n\nO apego excessivo está impactando sua saúde emocional e autonomia. Recomenda-se acompanhamento psicológico para desenvolver segurança interna.`;
      }
    },
    questions: [
      { id: 'tde-01', text: 'Fico extremamente ansioso(a) quando o parceiro demora a responder.', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-02', text: 'Minha felicidade depende diretamente do meu relacionamento.', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-03', text: 'Evito discordar para ele(a) não se afastar.', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-04', text: 'Preciso ouvir constantemente que sou amado(a).', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-05', text: 'Sinto-me perdido(a) ou vazio(a) quando estou sozinho(a).', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-06', text: 'Cancelei planos com amigos só para ficar com ele(a).', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-07', text: 'Tenho medo de terminar, mesmo infeliz.', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-08', text: 'Meus pensamentos giram quase exclusivamente em torno dele(a).', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-09', text: 'Sinto ciúmes mesmo sem motivo real.', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-10', text: 'Preciso saber onde ele(a) está o tempo todo.', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-11', text: 'Sinto que não consigo viver sem essa pessoa.', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-12', text: 'Mudo gostos ou opiniões para agradar.', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-13', text: 'Fico deprimido(a) com frieza emocional mínima.', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-14', text: 'Minha autoestima varia conforme o humor dele(a).', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-15', text: 'Dificuldade em decidir sem consultar o outro.', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-16', text: 'Sinto que sou responsável pela felicidade dele(a).', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-17', text: 'Medo de que ele(a) nunca mais fale comigo após briga.', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-18', text: 'Priorizo o outro mesmo que me faça mal.', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-19', text: 'Pânico de pensar em ficar solteiro(a).', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-20', text: 'Mantive relação por pena ou medo de machucar.', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-21', text: 'Preciso de demonstrações constantes de carinho.', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-22', text: 'Evito estar sozinho(a) a todo custo.', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-23', text: 'Sinto que ele(a) é a única pessoa que me entende.', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-24', text: 'Não imagino futuro sem ele(a).', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-25', text: 'Raiva de mim mesmo se sou rejeitado.', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-26', text: 'Medo de ser trocado se não me esforçar.', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-27', text: 'Dificuldade em reconhecer meus desejos.', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-28', text: 'Sintomas físicos (insônia, tremores) com ciúmes.', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-29', text: 'Sinto que mereço menos amor que outros.', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tde-30', text: 'Idealizo a pessoa mesmo após o término.', options: [0, 1, 2, 3, 4].map(v => ({ text: v.toString(), value: v })) },
    ]
  },

  // 27. --- Teste de Rastreio para TDAH em Adultos ---
  {
    id: 'adhd-adult-screen-01',
    title: '27. Teste de Rastreio para TDAH em Adultos',
    description: 'Identifique sinais de desatenção, hiperatividade e impulsividade. Baseado no ASRS-v1.1 e DSM-5.',
    introduction: `Este teste identifica sinais compatíveis com TDAH em adultos (desorganização, falta de foco, impulsividade). Não é um diagnóstico, mas um rastreio poderoso.

**Fontes:**
- WHO (ASRS-v1.1).
- APA (DSM-5).
- Barkley, R. A. (2015).`,
    applicatorInstructions: 'Responda com base nos últimos 6 meses. Pontuação considera a frequência dos sintomas. Opções: Nunca, Raramente, Às vezes, Frequentemente, Muito Frequentemente.',
    sources: 'ASRS-v1.1, DSM-5.',
    version: 1,
    feedback: {
      type: FeedbackType.Sum,
      feedbackTextGenerator: (scores: TestScores) => {
        const total = scores['total'] || 0; // Aqui o 'total' será a contagem de respostas 'Frequentemente' ou 'Muito Freq'
        if (total <= 9) return `**Baixa Probabilidade (0-9 sinais frequentes)**\n\nSeus sintomas não indicam um padrão consistente de TDAH. Considere outras causas como ansiedade ou sono.`;
        if (total <= 17) return `**Risco Moderado (10-17 sinais frequentes)**\n\nVocê apresenta vários comportamentos compatíveis com TDAH. Se isso causa sofrimento, uma avaliação clínica é recomendada.`;
        return `**Alto Risco (18+ sinais frequentes)**\n\n**Indicativo Forte de TDAH.** Você relata uma frequência alta de sintomas que provavelmente impactam sua vida. Encaminhamento para neuropsicólogo ou psiquiatra é fortemente recomendado.`;
      }
    },
    questions: [
      // Lógica especial para TDAH: Pontua 1 se a resposta for Frequentemente (3) ou Muito Frequentemente (4). Caso contrário 0.
      { id: 'adhd-01', text: 'Dificuldade em manter atenção em tarefas rotineiras.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-02', text: 'Esquecer compromissos frequentemente.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-03', text: 'Iniciar muitos projetos sem concluir.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-04', text: 'Ficar inquieto ("ligado no 220V").', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-05', text: 'Interromper os outros com frequência.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-06', text: 'Perder objetos essenciais.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-07', text: 'Evitar tarefas de esforço mental prolongado.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-08', text: 'Dificuldade para ouvir atentamente ("mente viaja").', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-09', text: 'Escolhas impulsivas com consequências negativas.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-10', text: 'Sentir-se facilmente entediado.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-11', text: 'Procrastinar sistematicamente.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-12', text: 'Impaciência em filas ou trânsito.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-13', text: 'Erros por descuido em detalhes.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-14', text: 'Dificuldade organizacional.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-15', text: 'Sentir-se mentalmente sobrecarregado por coisas simples.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-16', text: 'Falar demais socialmente.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-17', text: 'Mudança rápida de humor por frustração.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-18', text: 'Não conseguir relaxar de verdade.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-19', text: 'Esquecer o combinado em conversas.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-20', text: 'Assumir riscos desnecessários.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-21', text: 'Perder prazos frequentemente.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-22', text: 'Dificuldade em seguir sequências de instruções.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-23', text: 'Sentir-se subestimado ("ninguém vê meu potencial").', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-24', text: 'Histórico de dificuldades escolares.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-25', text: 'Evitar responder mensagens por dias (paralisia).', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-26', text: 'Hiperfoco (esquecer de comer/dormir).', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-27', text: 'Problemas financeiros recorrentes.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-28', text: 'Descrito como "desatento" desde a infância.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-29', text: 'Vergonha por não conseguir manter rotina.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
      { id: 'adhd-30', text: 'Sintomas afetam pelo menos dois contextos da vida.', options: [{ text: 'Nunca', value: 0 }, { text: 'Raramente', value: 0 }, { text: 'Às vezes', value: 0 }, { text: 'Frequentemente', value: 1 }, { text: 'Muito frequentemente', value: 1 }] },
    ]
  }
];
