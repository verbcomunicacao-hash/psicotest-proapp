
import { Questionnaire, FeedbackType, TestScores } from '../types';

export const testsPart9: Questionnaire[] = [
  // 22. --- Teste de Traços Narcisistas (TTN-30) ---
  {
    id: 'narcissism-ttn-30',
    title: '22. Teste de Traços Narcisistas (TTN-30)',
    description: 'Rastreamento inicial de traços comportamentais, cognitivos e emocionais associados ao narcisismo grandioso e vulnerável.',
    introduction: `O Teste de Traços Narcisistas (TTN-30) foi desenvolvido com base em pesquisas contemporâneas sobre personalidade narcisista. Este instrumento tem como objetivo identificar tendências que podem impactar relações interpessoais e autoimagem.

**Importante:** O narcisismo é um traço de personalidade contínuo. Este teste não substitui diagnóstico clínico de Transtorno da Personalidade Narcisista (TPN).

**Fontes Bibliográficas:**
- American Psychiatric Association. (2013). DSM-5.
- Pincus, A. L., & Lukowitsky, M. R. (2010). Pathological Narcissism and Narcissistic Personality Disorder.
- Krizan, Z., & Herlache, A. D. (2018). The Narcissism Spectrum Model.
- Jauk, E., & Kaufman, S. B. (2024). The bright and dark sides of narcissism.`,
    applicatorInstructions: 'Oriente o cliente a responder com sinceridade na escala de 1 (Nunca) a 5 (Sempre). O teste é uma ferramenta de autoconhecimento e rastreamento.',
    sources: 'DSM-5, Pincus & Lukowitsky, Krizan & Herlache.',
    version: 1,
    analysisPrompt: 'Analise os traços narcisistas identificados. Pontuação alta indica necessidade de atenção clínica. Diferencie traços grandiosos (busca de admiração) de vulneráveis (hipersensibilidade). Forneça feedback empático focado em autoconhecimento e regulação da autoestima.',
    feedback: {
      type: FeedbackType.Sum,
      feedbackTextGenerator: (scores: TestScores) => {
        const total = scores['total'] || 0;
        if (total <= 60) {
            return `**30 – 60 pontos: Baixos Traços Narcisistas**

**Interpretação:** Seus resultados indicam um nível baixo de traços narcisistas. Você demonstra uma autoimagem equilibrada e capacidade de se relacionar sem a necessidade excessiva de validação externa.

**Orientação:** Continue cultivando a saúde relacional e o equilíbrio narcísico saudável (autoestima realista).`;
        }
        if (total <= 90) {
            return `**61 – 90 pontos: Nível Moderado**

**Interpretação:** Seus traços estão dentro da variação normal da personalidade. É comum buscar algum reconhecimento ou sentir-se frustrado com críticas ocasionalmente, mas isso não parece dominar sua vida ou prejudicar significativamente suas relações.

**Orientação:** Trabalhe a autoconsciência e a empatia em situações de conflito para manter relações saudáveis.`;
        }
        if (total <= 120) {
            return `**91 – 120 pontos: Indicativo de Traços Significativos**

**Interpretação:** Há presença de padrões narcisistas que merecem reflexão, como uma busca intensa por validação, dificuldade com críticas ou sentimentos de superioridade/inferioridade oscilantes. Isso pode estar impactando a qualidade de suas conexões.

**Orientação:** A terapia pode ajudar a entender se esses traços são defesas contra inseguranças. Trabalhe a tolerância à frustração e a escuta genuína do outro.`;
        }
        return `**121 – 150 pontos: Alto Nível de Traços Narcisistas**

**Interpretação:** A pontuação sugere um padrão rígido de funcionamento que pode causar sofrimento a você ou às pessoas ao seu redor. Pode haver dificuldades significativas em manter relações profundas, empatia reduzida e uma necessidade constante de admiração.

**Orientação:** **Recomenda-se avaliação clínica aprofundada.** Um profissional especializado pode ajudar a transformar essas dinâmicas em relações mais autênticas e a construir uma autoestima que não dependa tanto do olhar alheio.`;
      }
    },
    questions: [
      { id: 'narc-01', text: 'Sinto-me frustrado(a) quando não recebo elogios por algo que fiz bem.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-02', text: 'Acredito que sou mais inteligente ou talentoso(a) do que a maioria das pessoas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-03', text: 'Fico incomodado(a) quando alguém é elogiado em vez de mim.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-04', text: 'Tenho necessidade constante de que as pessoas me admirem.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-05', text: 'Acho que mereço tratamento especial em restaurantes, filas ou atendimento.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-06', text: 'Dificilmente reconheço meus erros, mesmo quando claramente errado(a).', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-07', text: 'Me sinto vazio(a) ou inseguro(a) quando não estou sendo o centro das atenções.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-08', text: 'Uso relacionamentos para obter vantagens pessoais (status, dinheiro, contatos).', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-09', text: 'Fico com raiva ou humilhado(a) quando alguém critica meu trabalho ou aparência.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-10', text: 'Acho que minhas experiências emocionais são mais profundas que as dos outros.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-11', text: 'Tenho dificuldade em me alegrar sinceramente com o sucesso dos outros.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-12', text: 'Preciso que meus parceiros românticos me admirem constantemente.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-13', text: 'Evito mostrar fraquezas porque acho que isso me tornaria inferior.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-14', text: 'Sinto que as regras não se aplicam a mim.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-15', text: 'Fico ressentido(a) quando não recebo o que acredito merecer.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-16', text: 'Meus sentimentos de autoestima dependem muito da validação alheia.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-17', text: 'Acho que as pessoas comuns não me compreendem porque sou “diferente”.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-18', text: 'Tenho dificuldade em ouvir os problemas dos outros sem desviar para os meus.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-19', text: 'Me preocupo excessivamente com minha imagem nas redes sociais.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-20', text: 'Sinto inveja de pessoas bem-sucedidas, mesmo admirando-as publicamente.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-21', text: 'Acredito que mereço sucesso sem precisar de esforço proporcional.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-22', text: 'Quando erram comigo, exijo desculpas imediatas e dramáticas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-23', text: 'Evito situações em que posso parecer comum ou mediano.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-24', text: 'Tenho fantasias frequentes sobre poder, fama ou sucesso ilimitado.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-25', text: 'Meus relacionamentos costumam ser curtos porque as pessoas “não me valorizam”.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-26', text: 'Fico ansioso(a) antes de eventos sociais, temendo não ser notado(a).', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-27', text: 'Acho que posso “ler” as pessoas melhor que elas mesmas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-28', text: 'Meu humor muda drasticamente com base em elogios ou críticas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-29', text: 'Dificilmente me coloco no lugar do outro em conflitos.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'narc-30', text: 'Sinto que, no fundo, sou superior aos outros, mesmo que não demonstre.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
    ]
  },

  // 23. --- Teste de Rastreamento Borderline (TR-TLP-30) ---
  {
    id: 'borderline-tr-tlp-30',
    title: '23. Teste de Rastreamento Borderline (TR-TLP-30)',
    description: 'Rastreamento de padrões de instabilidade emocional, medo de abandono, impulsividade e identidade fragmentada.',
    introduction: `O Transtorno de Personalidade Borderline (TPB) é marcado por intensa dor emocional, medo de abandono e instabilidade. Este teste, baseado em critérios do DSM-5 e pesquisas sobre regulação emocional, auxilia na identificação de padrões que merecem atenção.

**Importante:** Este teste é educativo e de triagem. O diagnóstico formal requer avaliação clínica especializada.

**Fontes Bibliográficas:**
- American Psychiatric Association. (2013). DSM-5.
- Linehan, M. M. (1993). Cognitive-Behavioral Treatment of Borderline Personality Disorder.
- Bateman, A., & Fonagy, P. (2016). Mentalization-Based Treatment.
- Winsper, C. et al. (2024). Long-term outcomes in borderline personality disorder.`,
    applicatorInstructions: 'Oriente o cliente a responder com sinceridade sobre suas experiências recentes (semanas/meses). Escala 1 (Nunca) a 5 (Sempre).',
    sources: 'DSM-5, Linehan, Bateman & Fonagy.',
    version: 1,
    analysisPrompt: 'Analise os traços borderline identificados. Identifique áreas críticas como medo de abandono, instabilidade afetiva, impulsividade e autoimagem. Forneça feedback acolhedor, não patologizante, sugerindo estratégias de regulação emocional (baseadas em DBT) e busca de apoio profissional.',
    feedback: {
      type: FeedbackType.Sum,
      feedbackTextGenerator: (scores: TestScores) => {
        const total = scores['total'] || 0;
        if (total <= 60) {
            return `**30 – 60 pontos: Baixos Traços Borderline**

**Interpretação:** Você apresenta estabilidade emocional e segurança nos relacionamentos. Os traços associados ao espectro borderline são mínimos ou ausentes.

**Orientação:** Continue investindo em seu autoconhecimento e na manutenção de vínculos saudáveis.`;
        }
        if (total <= 90) {
            return `**61 – 90 pontos: Nível Moderado**

**Interpretação:** Você pode estar passando por um período de maior sensibilidade emocional ou instabilidade situacional. Alguns comportamentos podem gerar desconforto, mas não necessariamente indicam um transtorno de personalidade.

**Orientação:** Atenção ao estresse e à regulação emocional. Práticas de mindfulness e diálogo aberto podem ajudar a estabilizar o humor.`;
        }
        if (total <= 120) {
            return `**91 – 120 pontos: Indicativo de Padrões Significativos**

**Interpretação:** Seus resultados sugerem a presença de padrões emocionais intensos, medo de abandono ou impulsividade que podem estar prejudicando sua qualidade de vida e relacionamentos. É um sinal de alerta importante.

**Orientação:** Buscar apoio psicológico é altamente recomendado. Terapias focadas em regulação emocional (como a DBT) podem oferecer ferramentas valiosas para lidar com essa intensidade.`;
        }
        return `**121 – 150 pontos: Alto Nível de Traços Borderline**

**Interpretação:** A pontuação indica um sofrimento emocional intenso e padrões que correspondem fortemente às características do espectro borderline. Você pode sentir que vive em uma "montanha-russa" emocional constante.

**Orientação:** **Não enfrente isso sozinho(a).** Recomenda-se fortemente avaliação psicológica especializada. O TLP é tratável, e o suporte profissional é o caminho para construir uma vida que valha a pena ser vivida, com mais estabilidade e menos dor.`;
      }
    },
    questions: [
      { id: 'border-01', text: 'Tenho medo extremo de ser abandonado(a), mesmo quando não há motivo real.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-02', text: 'Meus relacionamentos costumam ser intensos, mas terminam de forma dramática.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-03', text: 'Minha autoimagem muda constantemente — um dia me acho incrível, no outro, inútil.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-04', text: 'Já me envolvi em comportamentos impulsivos que depois me arrependi (gastos, direção, etc).', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-05', text: 'Já tive pensamentos de querer morrer ou me machucar para aliviar a dor emocional.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-06', text: 'Meu humor muda rapidamente — posso passar de euforia para desespero em horas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-07', text: 'Sinto um vazio constante, como se faltasse algo dentro de mim.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-08', text: 'Quando fico com raiva, perco o controle — grito, quebro coisas ou digo palavras que machucam.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-09', text: 'Em momentos de estresse, sinto que “nada é real” ou que estou fora do meu corpo.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-10', text: 'Exijo proximidade extrema dos outros, mas depois me sinto sufocado(a) e quero distância.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-11', text: 'Tenho dificuldade em confiar nas intenções das pessoas — acho que vão me trair.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-12', text: 'Meus planos de vida mudam constantemente (carreira, cidade, estilo).', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-13', text: 'Já me automutilado(a) (ex: cortes, queimaduras) para lidar com emoções fortes.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-14', text: 'Fico desesperado(a) se alguém que amo não responde minhas mensagens.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-15', text: 'Tenho dificuldade em estar sozinho(a) — me sinto perdido(a) sem alguém por perto.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-16', text: 'Já tive explosões de raiva que assustaram amigos ou familiares.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-17', text: 'Sinto que sou “muito” em tudo: muito intenso, muito sensível, muito exigente.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-18', text: 'Meus sentimentos por alguém mudam radicalmente após um desentendimento.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-19', text: 'Já tentei suicídio ou fiz gestos suicidas (ameaças, atos arriscados).', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-20', text: 'Sinto que ninguém me entende ou que sou “estranho(a) demais” para pertencer.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-21', text: 'Quando me sinto inseguro(a), faço coisas extremas para manter a outra pessoa por perto.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-22', text: 'Tenho medo de que, se alguém me conhecer de verdade, vai me rejeitar.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-23', text: 'Fico paralisado(a) ou entorpecido(a) emocionalmente após conflitos.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-24', text: 'Já me envolvi em relações sexuais arriscadas por impulso ou para me sentir amado(a).', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-25', text: 'Meus padrões de sono, alimentação ou energia mudam conforme meu estado emocional.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-26', text: 'Tenho dificuldade em aceitar críticas — mesmo construtivas, as vejo como ataques.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-27', text: 'Sinto que minha vida é caótica e sem direção clara.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-28', text: 'Evito situações que exigem paciência ou tolerância à frustração.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-29', text: 'Já idealizei alguém como “salvador(a)” e depois me senti traído(a) por falhas normais.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'border-30', text: 'Mesmo com pessoas que me amam, sinto que não sou “digno(a)” de afeto.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
    ]
  }
];
