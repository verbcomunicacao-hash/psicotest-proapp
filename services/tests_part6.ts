
import { Questionnaire, FeedbackType, TestScores } from '../types';

export const testsPart6: Questionnaire[] = [
  // 16. --- Teste de Sistemas Representacionais da PNL ---
  {
    id: 'pnl-representational-sys-01',
    title: '16. Teste de Sistemas Representacionais da PNL',
    description: 'Descubra seu canal sensorial predominante (Visual, Auditivo, Cinestésico ou Digital) para otimizar comunicação e aprendizado.',
    introduction: `Este teste baseia-se na Programação Neurolinguística (PNL) para identificar como você processa informações.
    
*   **Visual:** Processamento por imagens.
*   **Auditivo:** Processamento por sons e palavras.
*   **Cinestésico:** Processamento por sensações e toque.
*   **Digital:** Processamento por lógica e diálogo interno.`,
    applicatorInstructions: 'O respondente deve escolher uma única opção por pergunta que melhor o descreve.',
    sources: 'Programação Neurolinguística (PNL).',
    version: 1,
    analysisPrompt: 'Analise o perfil de Sistema Representacional da PNL. Categorias: Visual, Auditivo, Cinestésico, Digital. Identifique o sistema predominante e o secundário. Forneça dicas de como essa pessoa aprende melhor e como se comunicar com ela de forma eficaz.',
    feedback: {
      type: FeedbackType.MultiCategorySum,
      categoryConfig: {
        'Visual': { name: 'Visual' },
        'Auditivo': { name: 'Auditivo' },
        'Cinestésico': { name: 'Cinestésico' },
        'Digital': { name: 'Digital (Auditivo Digital)' }
      },
      devolutiva: {
        'Visual': {
          name: 'Visual',
          description: 'Pessoas com predominância visual pensam em imagens.',
          interpretation: 'Você tende a ser rápido, organizado e observador. Aprende melhor vendo gráficos, diagramas e demonstrações. Use termos como "vejo", "claro", "brilhante".'
        },
        'Auditivo': {
          name: 'Auditivo',
          description: 'Pessoas com predominância auditiva pensam em sons e palavras.',
          interpretation: 'Você é um bom ouvinte e se expressa bem verbalmente. Aprende melhor ouvindo explicações e discutindo ideias. Se incomoda com ruídos e tons de voz desagradáveis.'
        },
        'Cinestésico': {
          name: 'Cinestésico',
          description: 'Pessoas com predominância cinestésica pensam em sensações e movimentos.',
          interpretation: 'Você valoriza o conforto, o toque e a experiência prática. Aprende fazendo ("mão na massa"). Suas decisões são baseadas em como você se "sente" sobre algo.'
        },
        'Digital': {
          name: 'Digital (Auditivo Digital)',
          description: 'Pessoas com predominância digital pensam em lógica e dados.',
          interpretation: 'Você busca sentido, lógica e fatos. Mantém diálogos internos constantes. Aprende analisando sistemas e entendendo o "porquê" das coisas.'
        }
      }
    },
    questions: [
      { id: 'pnl-01', text: 'Quando você está aprendendo algo novo, o que funciona melhor para você?', options: [{ text: 'a) Ver diagramas, gráficos ou demonstrações.', category: 'Visual', value: 1 }, { text: 'b) Ouvir explicações, palestras ou discussões.', category: 'Auditivo', value: 1 }, { text: 'c) Fazer anotações, praticar ou experimentar.', category: 'Cinestésico', value: 1 }, { text: 'd) Analisar a lógica, os fatos e os detalhes.', category: 'Digital', value: 1 }] },
      { id: 'pnl-02', text: 'Ao se lembrar de um evento passado, o que vem primeiro à sua mente?', options: [{ text: 'a) As imagens, cores e o cenário.', category: 'Visual', value: 1 }, { text: 'b) Os sons, vozes e conversas.', category: 'Auditivo', value: 1 }, { text: 'c) As sensações, emoções e o que você sentiu.', category: 'Cinestésico', value: 1 }, { text: 'd) A sequência lógica dos acontecimentos e os fatos.', category: 'Digital', value: 1 }] },
      { id: 'pnl-03', text: 'Quando você está se comunicando, qual é a sua preferência?', options: [{ text: 'a) Usar gestos, expressões faciais e contato visual.', category: 'Visual', value: 1 }, { text: 'b) Usar um tom de voz expressivo e prestar atenção ao que é dito.', category: 'Auditivo', value: 1 }, { text: 'c) Usar toques, movimentos e sentir a interação.', category: 'Cinestésico', value: 1 }, { text: 'd) Usar palavras precisas, lógica e argumentos bem estruturados.', category: 'Digital', value: 1 }] },
      { id: 'pnl-04', text: 'Ao tomar uma decisão importante, o que mais influencia você?', options: [{ text: 'a) A visão geral da situação e como ela se encaixa.', category: 'Visual', value: 1 }, { text: 'b) O que as pessoas dizem e como soa a decisão.', category: 'Auditivo', value: 1 }, { text: 'c) O "sentimento" que você tem sobre a decisão.', category: 'Cinestésico', value: 1 }, { text: 'd) A análise racional dos prós e contras.', category: 'Digital', value: 1 }] },
      { id: 'pnl-05', text: 'Quando você está relaxando, o que você prefere fazer?', options: [{ text: 'a) Assistir a um filme, ver paisagens ou ler.', category: 'Visual', value: 1 }, { text: 'b) Ouvir música, podcasts ou conversar.', category: 'Auditivo', value: 1 }, { text: 'c) Praticar esportes, cozinhar ou fazer algo manual.', category: 'Cinestésico', value: 1 }, { text: 'd) Resolver quebra-cabeças, planejar ou estudar.', category: 'Digital', value: 1 }] },
      { id: 'pnl-06', text: 'Ao descrever algo, o que você tende a enfatizar?', options: [{ text: 'a) A aparência, o tamanho, a cor e a forma.', category: 'Visual', value: 1 }, { text: 'b) O som, o volume, o ritmo e a melodia.', category: 'Auditivo', value: 1 }, { text: 'c) A textura, a temperatura, o peso e as sensações.', category: 'Cinestésico', value: 1 }, { text: 'd) A função, a estrutura, a lógica e a utilidade.', category: 'Digital', value: 1 }] },
      { id: 'pnl-07', text: 'Em uma discussão, o que mais te incomoda?', options: [{ text: 'a) A falta de clareza ou a confusão visual.', category: 'Visual', value: 1 }, { text: 'b) O tom de voz agressivo ou a interrupção.', category: 'Auditivo', value: 1 }, { text: 'c) A sensação de desconforto ou a falta de conexão.', category: 'Cinestésico', value: 1 }, { text: 'd) A ilogicidade ou a falta de argumentos sólidos.', category: 'Digital', value: 1 }] },
      { id: 'pnl-08', text: 'Quando você está motivado, o que te impulsiona?', options: [{ text: 'a) A imagem do sucesso e dos resultados.', category: 'Visual', value: 1 }, { text: 'b) As palavras de encorajamento e o feedback positivo.', category: 'Auditivo', value: 1 }, { text: 'c) A sensação de realização e o prazer de fazer.', category: 'Cinestésico', value: 1 }, { text: 'd) A compreensão lógica do objetivo e do plano.', category: 'Digital', value: 1 }] },
      { id: 'pnl-09', text: 'Ao expressar afeto, o que você prefere?', options: [{ text: 'a) Olhar nos olhos, sorrir e demonstrar visualmente.', category: 'Visual', value: 1 }, { text: 'b) Dizer palavras carinhosas e elogios.', category: 'Auditivo', value: 1 }, { text: 'c) Abraçar, tocar e demonstrar fisicamente.', category: 'Cinestésico', value: 1 }, { text: 'd) Fazer algo prático ou resolver um problema para a pessoa.', category: 'Digital', value: 1 }] },
      { id: 'pnl-10', text: 'Qual destas frases melhor descreve sua forma de pensar?', options: [{ text: 'a) "Eu vejo o que você quer dizer."', category: 'Visual', value: 1 }, { text: 'b) "Eu ouço o que você está dizendo."', category: 'Auditivo', value: 1 }, { text: 'c) "Eu sinto o que você está passando."', category: 'Cinestésico', value: 1 }, { text: 'd) "Eu entendo a sua lógica."', category: 'Digital', value: 1 }] },
      { id: 'pnl-11', text: 'Quando você está sob estresse, como você reage?', options: [{ text: 'a) Fica com a mente "em branco" ou com imagens confusas.', category: 'Visual', value: 1 }, { text: 'b) Fica com um "diálogo interno" negativo ou com ruídos na cabeça.', category: 'Auditivo', value: 1 }, { text: 'c) Sente-se inquieto, tenso ou com sensações físicas desagradáveis.', category: 'Cinestésico', value: 1 }, { text: 'd) Tenta analisar a situação excessivamente, mas não encontra solução.', category: 'Digital', value: 1 }] },
      { id: 'pnl-12', text: 'Ao planejar o futuro, o que é mais importante para você?', options: [{ text: 'a) Visualizar os resultados e o cenário ideal.', category: 'Visual', value: 1 }, { text: 'b) Conversar sobre os planos e ouvir opiniões.', category: 'Auditivo', value: 1 }, { text: 'c) Sentir-se confortável e seguro com o caminho.', category: 'Cinestésico', value: 1 }, { text: 'd) Ter um plano detalhado e lógico.', category: 'Digital', value: 1 }] },
      { id: 'pnl-13', text: 'Qual tipo de arte você mais aprecia?', options: [{ text: 'a) Pinturas, esculturas e fotografia.', category: 'Visual', value: 1 }, { text: 'b) Música, poesia e teatro.', category: 'Auditivo', value: 1 }, { text: 'c) Dança, culinária e artesanato.', category: 'Cinestésico', value: 1 }, { text: 'd) Arquitetura, design industrial e engenharia.', category: 'Digital', value: 1 }] },
      { id: 'pnl-14', text: 'Quando você está aprendendo uma nova habilidade física, o que é mais útil?', options: [{ text: 'a) Observar alguém fazendo.', category: 'Visual', value: 1 }, { text: 'b) Ouvir as instruções.', category: 'Auditivo', value: 1 }, { text: 'c) Praticar repetidamente.', category: 'Cinestésico', value: 1 }, { text: 'd) Ler o manual de instruções.', category: 'Digital', value: 1 }] },
      { id: 'pnl-15', text: 'Ao escolher roupas, o que é mais importante?', options: [{ text: 'a) A aparência e o estilo.', category: 'Visual', value: 1 }, { text: 'b) O som que o tecido faz ou como ele se ajusta.', category: 'Auditivo', value: 1 }, { text: 'c) O conforto e a sensação no corpo.', category: 'Cinestésico', value: 1 }, { text: 'd) A funcionalidade e a durabilidade.', category: 'Digital', value: 1 }] },
      { id: 'pnl-16', text: 'Qual é a sua reação típica a um novo ambiente?', options: [{ text: 'a) Observar os detalhes visuais e a organização.', category: 'Visual', value: 1 }, { text: 'b) Prestar atenção aos sons e à atmosfera sonora.', category: 'Auditivo', value: 1 }, { text: 'c) Sentir a temperatura, o cheiro e a energia do local.', category: 'Cinestésico', value: 1 }, { text: 'd) Tentar entender a função e a lógica do espaço.', category: 'Digital', value: 1 }] },
      { id: 'pnl-17', text: 'Ao dar instruções a alguém, como você prefere fazê-lo?', options: [{ text: 'a) Mostrando ou desenhando.', category: 'Visual', value: 1 }, { text: 'b) Explicando verbalmente, passo a passo.', category: 'Auditivo', value: 1 }, { text: 'c) Fazendo junto com a pessoa.', category: 'Cinestésico', value: 1 }, { text: 'd) Dando um manual ou um roteiro detalhado.', category: 'Digital', value: 1 }] },
      { id: 'pnl-18', text: 'Qual é a sua forma preferida de se expressar?', options: [{ text: 'a) Através de imagens, desenhos ou fotografias.', category: 'Visual', value: 1 }, { text: 'b) Através da fala, da música ou da escrita.', category: 'Auditivo', value: 1 }, { text: 'c) Através de ações, movimentos ou expressões corporais.', category: 'Cinestésico', value: 1 }, { text: 'd) Através de argumentos lógicos, dados e fatos.', category: 'Digital', value: 1 }] },
      { id: 'pnl-19', text: 'Quando você está com um problema, o que você faz primeiro?', options: [{ text: 'a) Tenta visualizar a solução.', category: 'Visual', value: 1 }, { text: 'b) Conversa sobre o problema com alguém.', category: 'Auditivo', value: 1 }, { text: 'c) Tenta "sentir" qual é a melhor abordagem.', category: 'Cinestésico', value: 1 }, { text: 'd) Analisa o problema de forma lógica e busca informações.', category: 'Digital', value: 1 }] },
      { id: 'pnl-20', text: 'Qual é a sua principal característica?', options: [{ text: 'a) Sou observador e atento aos detalhes visuais.', category: 'Visual', value: 1 }, { text: 'b) Sou um bom ouvinte e presto atenção ao que é dito.', category: 'Auditivo', value: 1 }, { text: 'c) Sou sensível e atento às minhas sensações e emoções.', category: 'Cinestésico', value: 1 }, { text: 'd) Sou lógico, analítico e busco a razão em tudo.', category: 'Digital', value: 1 }] },
      { id: 'pnl-21', text: 'Ao se lembrar de uma pessoa, o que você recorda mais facilmente?', options: [{ text: 'a) A imagem dela, suas roupas, seu rosto.', category: 'Visual', value: 1 }, { text: 'b) A voz dela, o que ela dizia, o som da risada.', category: 'Auditivo', value: 1 }, { text: 'c) A sensação de estar perto dela, o toque, o cheiro.', category: 'Cinestésico', value: 1 }, { text: 'd) Os fatos sobre ela, suas ideias, suas realizações.', category: 'Digital', value: 1 }] },
      { id: 'pnl-22', text: 'Qual tipo de presente você mais gosta de receber?', options: [{ text: 'a) Algo bonito e visualmente atraente.', category: 'Visual', value: 1 }, { text: 'b) Algo que faça um som agradável ou que possa ser ouvido.', category: 'Auditivo', value: 1 }, { text: 'c) Algo que possa ser tocado, usado ou experimentado.', category: 'Cinestésico', value: 1 }, { text: 'd) Algo útil, prático ou que resolva um problema.', category: 'Digital', value: 1 }] },
      { id: 'pnl-23', text: 'Em um ambiente de trabalho, o que é mais importante para você?', options: [{ text: 'a) Um ambiente organizado e visualmente agradável.', category: 'Visual', value: 1 }, { text: 'b) Um ambiente tranquilo, com pouca interrupção sonora.', category: 'Auditivo', value: 1 }, { text: 'c) Um ambiente confortável e que permita movimento.', category: 'Cinestésico', value: 1 }, { text: 'd) Um ambiente lógico, eficiente e com processos claros.', category: 'Digital', value: 1 }] },
      { id: 'pnl-24', text: 'Ao aprender uma nova língua, o que é mais fácil para você?', options: [{ text: 'a) Ver as palavras escritas e as imagens associadas.', category: 'Visual', value: 1 }, { text: 'b) Ouvir os nativos e repetir as frases.', category: 'Auditivo', value: 1 }, { text: 'c) Praticar a conversação e a imersão.', category: 'Cinestésico', value: 1 }, { text: 'd) Estudar a gramática e a estrutura da língua.', category: 'Digital', value: 1 }] },
      { id: 'pnl-25', text: 'Qual é a sua reação a uma nova ideia?', options: [{ text: 'a) Tento visualizá-la em minha mente.', category: 'Visual', value: 1 }, { text: 'b) Gosto de discuti-la e ouvir diferentes pontos de vista.', category: 'Auditivo', value: 1 }, { text: 'c) Preciso "sentir" se ela faz sentido para mim.', category: 'Cinestésico', value: 1 }, { text: 'd) Analiso a lógica e a viabilidade da ideia.', category: 'Digital', value: 1 }] },
      { id: 'pnl-26', text: 'Ao escolher um hobby, o que mais te atrai?', options: [{ text: 'a) Fotografia, pintura, design.', category: 'Visual', value: 1 }, { text: 'b) Tocar um instrumento, cantar, podcasting.', category: 'Auditivo', value: 1 }, { text: 'c) Dança, jardinagem, culinária, esportes.', category: 'Cinestésico', value: 1 }, { text: 'd) Xadrez, programação, pesquisa.', category: 'Digital', value: 1 }] },
      { id: 'pnl-27', text: 'Quando você está lendo, o que te ajuda a compreender melhor?', options: [{ text: 'a) Sublinhar, fazer anotações e usar cores.', category: 'Visual', value: 1 }, { text: 'b) Ler em voz alta ou ouvir a leitura.', category: 'Auditivo', value: 1 }, { text: 'c) Gesticular ou mover-se enquanto lê.', category: 'Cinestésico', value: 1 }, { text: 'd) Analisar a estrutura do texto e os argumentos.', category: 'Digital', value: 1 }] },
      { id: 'pnl-28', text: 'Qual é a sua principal preocupação ao viajar?', options: [{ text: 'a) A beleza dos lugares e as oportunidades de fotos.', category: 'Visual', value: 1 }, { text: 'b) Os sons e a música local.', category: 'Auditivo', value: 1 }, { text: 'c) As sensações e experiências físicas.', category: 'Cinestésico', value: 1 }, { text: 'd) O planejamento, a logística e a eficiência da viagem.', category: 'Digital', value: 1 }] },
      { id: 'pnl-29', text: 'Ao ensinar algo a alguém, qual é a sua abordagem preferida?', options: [{ text: 'a) Usar recursos visuais e exemplos.', category: 'Visual', value: 1 }, { text: 'b) Explicar claramente e responder a perguntas.', category: 'Auditivo', value: 1 }, { text: 'c) Deixar a pessoa praticar e experimentar.', category: 'Cinestésico', value: 1 }, { text: 'd) Apresentar a teoria e a lógica por trás do conceito.', category: 'Digital', value: 1 }] },
      { id: 'pnl-30', text: 'Qual é a sua forma preferida de receber feedback?', options: [{ text: 'a) Ver exemplos do que precisa ser melhorado.', category: 'Visual', value: 1 }, { text: 'b) Ouvir uma explicação clara e direta.', category: 'Auditivo', value: 1 }, { text: 'c) Sentir o impacto do feedback e a emoção envolvida.', category: 'Cinestésico', value: 1 }, { text: 'd) Receber uma análise lógica e dados concretos.', category: 'Digital', value: 1 }] },
      { id: 'pnl-31', text: 'Quando você está em um ambiente social, o que você mais percebe?', options: [{ text: 'a) As expressões faciais, a linguagem corporal e o visual das pessoas.', category: 'Visual', value: 1 }, { text: 'b) O tom de voz, as conversas e os sons do ambiente.', category: 'Auditivo', value: 1 }, { text: 'c) As sensações, a energia do grupo e o toque.', category: 'Cinestésico', value: 1 }, { text: 'd) A dinâmica social, as interações e a lógica das conversas.', category: 'Digital', value: 1 }] },
      { id: 'pnl-32', text: 'Ao resolver um problema, o que você faz primeiro?', options: [{ text: 'a) Desenha um esquema ou um mapa mental.', category: 'Visual', value: 1 }, { text: 'b) Conversa com alguém sobre o problema.', category: 'Auditivo', value: 1 }, { text: 'c) Tenta "sentir" a melhor solução.', category: 'Cinestésico', value: 1 }, { text: 'd) Quebra o problema em partes menores e analisa cada uma.', category: 'Digital', value: 1 }] },
      { id: 'pnl-33', text: 'Qual é a sua reação a uma mudança inesperada?', options: [{ text: 'a) Preciso de tempo para visualizar a nova situação.', category: 'Visual', value: 1 }, { text: 'b) Preciso conversar sobre a mudança para entender.', category: 'Auditivo', value: 1 }, { text: 'c) Preciso de tempo para me adaptar e "sentir" a nova realidade.', category: 'Cinestésico', value: 1 }, { text: 'd) Preciso de uma explicação lógica para a mudança.', category: 'Digital', value: 1 }] },
      { id: 'pnl-34', text: 'Ao se lembrar de uma música, o que vem primeiro à sua mente?', options: [{ text: 'a) A imagem do artista ou do clipe.', category: 'Visual', value: 1 }, { text: 'b) A melodia e a letra.', category: 'Auditivo', value: 1 }, { text: 'c) A sensação que a música te traz.', category: 'Cinestésico', value: 1 }, { text: 'd) A estrutura musical e a harmonia.', category: 'Digital', value: 1 }] },
      { id: 'pnl-35', text: 'Qual é a sua forma preferida de se organizar?', options: [{ text: 'a) Usando listas, agendas visuais e cores.', category: 'Visual', value: 1 }, { text: 'b) Falando sobre o que precisa ser feito.', category: 'Auditivo', value: 1 }, { text: 'c) Organizando fisicamente os objetos.', category: 'Cinestésico', value: 1 }, { text: 'd) Criando sistemas lógicos e eficientes.', category: 'Digital', value: 1 }] },
      { id: 'pnl-36', text: 'Ao escolher um destino de férias, o que é mais importante?', options: [{ text: 'a) As paisagens e as atrações visuais.', category: 'Visual', value: 1 }, { text: 'b) Os sons do lugar e a cultura local.', category: 'Auditivo', value: 1 }, { text: 'c) As atividades físicas e as experiências sensoriais.', category: 'Cinestésico', value: 1 }, { text: 'd) A logística, o custo-benefício e o planejamento.', category: 'Digital', value: 1 }] },
      { id: 'pnl-37', text: 'Quando você está com raiva, como você se expressa?', options: [{ text: 'a) Com expressões faciais e gestos intensos.', category: 'Visual', value: 1 }, { text: 'b) Com um tom de voz elevado ou gritos.', category: 'Auditivo', value: 1 }, { text: 'c) Com sensações físicas de tensão ou agitação.', category: 'Cinestésico', value: 1 }, { text: 'd) Com argumentos lógicos e racionais sobre o motivo da raiva.', category: 'Digital', value: 1 }] },
      { id: 'pnl-38', text: 'Qual é a sua principal fonte de informação?', options: [{ text: 'a) Livros, revistas, internet (com foco visual).', category: 'Visual', value: 1 }, { text: 'b) Rádio, podcasts, conversas, palestras.', category: 'Auditivo', value: 1 }, { text: 'c) Experiências práticas, workshops, demonstrações.', category: 'Cinestésico', value: 1 }, { text: 'd) Artigos científicos, relatórios, análises de dados.', category: 'Digital', value: 1 }] },
      { id: 'pnl-39', text: 'Ao se sentir feliz, como você demonstra?', options: [{ text: 'a) Com um sorriso largo e olhos brilhantes.', category: 'Visual', value: 1 }, { text: 'b) Com risadas e palavras de alegria.', category: 'Auditivo', value: 1 }, { text: 'c) Com abraços, pulos ou outras expressões físicas.', category: 'Cinestésico', value: 1 }, { text: 'd) Com uma sensação de bem-estar e equilíbrio interno.', category: 'Digital', value: 1 }] },
      { id: 'pnl-40', text: 'Qual é a sua principal habilidade?', options: [{ text: 'a) Sou bom em observar e perceber detalhes.', category: 'Visual', value: 1 }, { text: 'b) Sou bom em ouvir e compreender o que é dito.', category: 'Auditivo', value: 1 }, { text: 'c) Sou bom em fazer e experimentar coisas.', category: 'Cinestésico', value: 1 }, { text: 'd) Sou bom em analisar e resolver problemas logicamente.', category: 'Digital', value: 1 }] },
    ]
  },

  // 17. --- Teste de Inteligência Emocional ---
  {
    id: 'emotional-intelligence-01',
    title: '17. Teste de Inteligência Emocional',
    description: 'Avalie sua capacidade de identificar, gerenciar e utilizar suas emoções de forma eficaz (Autoconsciência, Autogestão, Empatia, Habilidades Sociais).',
    introduction: `A inteligência emocional refere-se à capacidade de identificar e gerenciar as próprias emoções e as dos outros. Compreender seu nível de IE é crucial para o desenvolvimento pessoal e profissional.

**Escala:**
1 - Nunca
2 - Raramente
3 - Às vezes
4 - Frequentemente
5 - Sempre`,
    applicatorInstructions: 'Oriente o cliente a responder com honestidade sobre seus sentimentos e comportamentos habituais.',
    sources: 'Daniel Goleman.',
    version: 1,
    analysisPrompt: 'Analise o nível de Inteligência Emocional. Pontuação total indica maturidade. Identifique pontos fortes e áreas de melhoria em Autoconsciência, Autogestão, Empatia e Habilidades Sociais.',
    feedback: {
      type: FeedbackType.Sum,
      feedbackTextGenerator: (scores: TestScores) => {
        const total = scores['total'] || 0;
        if (total <= 70) {
            return `**35 - 70 pontos: Inteligência Emocional em Desenvolvimento**

**Interpretação:** O indivíduo pode estar em um estágio inicial de desenvolvimento da inteligência emocional. Pode haver dificuldades em identificar e gerenciar as próprias emoções, bem como em compreender as emoções dos outros. Impulsividade e dificuldade em lidar com o estresse podem ser observados.

**Orientação:** Foco no desenvolvimento das habilidades emocionais básicas. Trabalhe a identificação e nomeação das emoções e técnicas de regulação.`;
        }
        if (total <= 105) {
            return `**71 - 105 pontos: Inteligência Emocional Moderada**

**Interpretação:** O indivíduo demonstra um nível moderado de inteligência emocional. Possui alguma consciência de suas emoções, mas pode enfrentar desafios em situações de alta pressão ou relacionamentos complexos.

**Orientação:** Explore áreas de menor pontuação. Foque em estratégias para aprimorar a autogestão e a resolução de conflitos.`;
        }
        if (total <= 140) {
            return `**106 - 140 pontos: Inteligência Emocional Desenvolvida**

**Interpretação:** O indivíduo possui um bom nível de inteligência emocional. É capaz de identificar e gerenciar suas emoções de forma eficaz, demonstrando empatia e habilidades sociais. Lida bem com o estresse.

**Orientação:** Foco no aprimoramento contínuo. Incentive a busca por novos desafios que exijam liderança e inspiração de outros.`;
        }
        return `**141 - 175 pontos: Inteligência Emocional Elevada**

**Interpretação:** O indivíduo demonstra um nível excepcional de inteligência emocional. Possui profunda autoconsciência, autogestão exemplar, alta motivação e empatia aguçada. É um líder natural.

**Orientação:** Este cliente pode atuar como mentor. Explore como ele pode compartilhar seu conhecimento para ajudar no desenvolvimento de outros.`;
      }
    },
    questions: [
      { id: 'ie-01', text: 'Consigo identificar e nomear minhas emoções com precisão.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-02', text: 'Entendo o que causa minhas emoções.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-03', text: 'Consigo diferenciar emoções semelhantes, como tristeza e melancolia.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-04', text: 'Sou capaz de expressar minhas emoções de forma adequada.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-05', text: 'Consigo controlar meus impulsos emocionais.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-06', text: 'Mantenho a calma em situações de pressão.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-07', text: 'Consigo me recuperar rapidamente de contratempos emocionais.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-08', text: 'Sou capaz de me motivar mesmo diante de desafios.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-09', text: 'Persisto em meus objetivos apesar das frustrações.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-10', text: 'Consigo adiar a gratificação para alcançar metas maiores.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-11', text: 'Sou sensível aos sentimentos dos outros.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-12', text: 'Consigo me colocar no lugar de outras pessoas (empatia).', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-13', text: 'Percebo as emoções não-verbais dos outros (linguagem corporal).', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-14', text: 'Consigo construir e manter relacionamentos saudáveis.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-15', text: 'Sou um bom ouvinte.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-16', text: 'Consigo resolver conflitos de forma construtiva.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-17', text: 'Sou capaz de influenciar positivamente o humor dos outros.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-18', text: 'Consigo trabalhar bem em equipe.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-19', text: 'Lido bem com críticas e feedback.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-20', text: 'Consigo me adaptar a mudanças e novas situações.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-21', text: 'Mantenho uma atitude positiva mesmo em momentos difíceis.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-22', text: 'Consigo gerenciar o estresse de forma eficaz.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-23', text: 'Sou consciente das minhas forças e fraquezas emocionais.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-24', text: 'Busco o autoconhecimento emocional continuamente.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-25', text: 'Consigo aprender com meus erros emocionais.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-26', text: 'Sou capaz de perdoar a mim mesmo e aos outros.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-27', text: 'Consigo estabelecer limites saudáveis em meus relacionamentos.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-28', text: 'Expresso gratidão regularmente.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-29', text: 'Consigo manter o foco em minhas tarefas, mesmo com distrações.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-30', text: 'Sou capaz de tomar decisões racionais, mesmo sob forte emoção.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-31', text: 'Consigo inspirar e motivar as pessoas ao meu redor.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-32', text: 'Sou capaz de lidar com a pressão social e manter convicções.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-33', text: 'Consigo expressar minhas necessidades de forma assertiva.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-34', text: 'Sou capaz de valorizar as emoções dos outros.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'ie-35', text: 'Consigo manter a perspectiva em situações desafiadoras.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
    ]
  },

  // 18. --- Teste de Sabotadores ---
  {
    id: 'saboteurs-01',
    title: '18. Teste de Sabotadores',
    description: 'Identifique os Sabotadores Mentais que impedem seu potencial (Crítico, Insistente, Vítima, Controlador, etc). Baseado na Inteligência Positiva.',
    introduction: 'Sabotadores são padrões de pensamento automáticos que nos limitam. Identificá-los é o primeiro passo para fortalecer seu "Sábio" interior.',
    applicatorInstructions: 'Responda com frequência (1-5). O teste avalia 11 padrões de sabotagem.',
    sources: 'Shirzad Chamine, Inteligência Positiva.',
    version: 1,
    analysisPrompt: 'Analise os Sabotadores Mentais. Identifique os sabotadores com maior pontuação (Crítico, Insistente, Vítima, etc.). Explique como eles agem e sugira formas de enfraquecê-los.',
    feedback: {
      type: FeedbackType.MultiCategorySum,
      categoryConfig: {
        'Critico': { name: 'Crítico' },
        'Insistente': { name: 'Insistente (Perfeccionista)' },
        'Prestativo': { name: 'Prestativo' },
        'Controlador': { name: 'Controlador' },
        'HiperRealizador': { name: 'Hiper-Realizador' },
        'Vitima': { name: 'Vítima' },
        'Hipervigilante': { name: 'Hipervigilante' },
        'Inquieto': { name: 'Inquieto' },
        'Esquivo': { name: 'Esquivo' },
        'HiperRacional': { name: 'Hiper-Racional' },
        'Rigido': { name: 'Rígido' }
      },
      devolutiva: {
        'Critico': { name: 'Crítico', description: 'Busca constante por falhas.', interpretation: 'Gera ansiedade e culpa. Principal inimigo interno.' },
        'Insistente': { name: 'Insistente', description: 'Perfeccionismo e ordem.', interpretation: 'Gera frustração quando as coisas não saem como planejado.' },
        'Prestativo': { name: 'Prestativo', description: 'Busca aceitação ajudando.', interpretation: 'Pode levar ao esquecimento das próprias necessidades.' },
        'Controlador': { name: 'Controlador', description: 'Necessidade de controlar tudo.', interpretation: 'Gera ansiedade e conflitos quando perde o controle.' },
        'HiperRealizador': { name: 'Hiper-Realizador', description: 'Dependência de desempenho.', interpretation: 'Workaholism e dificuldade em relaxar.' },
        'Vitima': { name: 'Vítima', description: 'Foco no sofrimento.', interpretation: 'Busca atenção através da dor ou problemas.' },
        'Hipervigilante': { name: 'Hipervigilante', description: 'Ansiedade constante.', interpretation: 'Sempre esperando o pior acontecer.' },
        'Inquieto': { name: 'Inquieto', description: 'Busca por novidade.', interpretation: 'Dificuldade em manter foco e estar presente.' },
        'Esquivo': { name: 'Esquivo', description: 'Foge de conflitos.', interpretation: 'Procrastinação e dificuldade em conversas difíceis.' },
        'HiperRacional': { name: 'Hiper-Racional', description: 'Foco exclusivo na lógica.', interpretation: 'Dificuldade em conectar emocionalmente.' },
        'Rigido': { name: 'Rígido', description: 'Inflexibilidade.', interpretation: 'Dificuldade com mudanças e novos pontos de vista.' }
      }
    },
    questions: [
      // Crítico
      { id: 'sab-01', category: 'Critico', text: 'Eu me culpo constantemente por meus erros e imperfeições.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-02', category: 'Critico', text: 'Eu me preocupo excessivamente com os erros dos outros.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-03', category: 'Critico', text: 'Eu me sinto compelido a apontar falhas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-04', category: 'Critico', text: 'Tenho um senso de que nada é bom o suficiente.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-05', category: 'Critico', text: 'Eu me sinto ansioso e insatisfeito com frequência.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Insistente
      { id: 'sab-06', category: 'Insistente', text: 'Eu me esforço para ser perfeito em tudo o que faço.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-07', category: 'Insistente', text: 'Eu me irrito com a desorganização.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-08', category: 'Insistente', text: 'Eu me sinto frustrado quando as coisas não saem como planejado.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-09', category: 'Insistente', text: 'Eu me preocupo em cometer erros e ser julgado.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-10', category: 'Insistente', text: 'Eu me sinto compelido a seguir regras rigorosamente.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Prestativo
      { id: 'sab-11', category: 'Prestativo', text: 'Sinto obrigação de ajudar, mesmo que me sobrecarregue.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-12', category: 'Prestativo', text: 'Sinto-me culpado quando digo "não".', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-13', category: 'Prestativo', text: 'Preocupo-me mais com os outros do que comigo.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-14', category: 'Prestativo', text: 'Busco aprovação através da ajuda.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-15', category: 'Prestativo', text: 'Sinto ressentimento quando não sou reconhecido.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Controlador
      { id: 'sab-16', category: 'Controlador', text: 'Sinto-me compelido a controlar pessoas e situações.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-17', category: 'Controlador', text: 'Irrito-me quando as coisas não estão sob meu controle.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-18', category: 'Controlador', text: 'Sinto ansiedade quando não consigo prever resultados.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-19', category: 'Controlador', text: 'Tento convencer os outros do que é melhor.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-20', category: 'Controlador', text: 'Fico frustrado quando não seguem minhas orientações.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Hiper-Realizador
      { id: 'sab-21', category: 'HiperRealizador', text: 'Sinto que preciso estar sempre ocupado e produtivo.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-22', category: 'HiperRealizador', text: 'Sinto ansiedade quando não estou realizando algo.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-23', category: 'HiperRealizador', text: 'Me defino pelo meu sucesso e conquistas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-24', category: 'HiperRealizador', text: 'Sinto pressão para ser o melhor em tudo.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-25', category: 'HiperRealizador', text: 'Sinto-me exausto devido ao excesso de trabalho.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Vítima
      { id: 'sab-26', category: 'Vitima', text: 'Sinto-me frequentemente incompreendido e injustiçado.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-27', category: 'Vitima', text: 'Sinto-me impotente diante dos desafios.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-28', category: 'Vitima', text: 'Me queixo com frequência sobre minhas dificuldades.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-29', category: 'Vitima', text: 'Busco atenção através da minha dor.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-30', category: 'Vitima', text: 'Sinto-me preso em situações difíceis.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Hipervigilante
      { id: 'sab-31', category: 'Hipervigilante', text: 'Preocupo-me excessivamente com o que pode dar errado.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-32', category: 'Hipervigilante', text: 'Sinto-me constantemente em alerta e tenso.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-33', category: 'Hipervigilante', text: 'Sinto medo de que algo ruim aconteça.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-34', category: 'Hipervigilante', text: 'Preparo-me para o pior cenário sempre.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-35', category: 'Hipervigilante', text: 'Sinto-me exausto devido à preocupação.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Inquieto
      { id: 'sab-36', category: 'Inquieto', text: 'Sinto-me entediado com a rotina.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-37', category: 'Inquieto', text: 'Busco constantemente novas experiências.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-38', category: 'Inquieto', text: 'Sinto-me impaciente quando as coisas estão lentas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-39', category: 'Inquieto', text: 'Me distraio facilmente.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-40', category: 'Inquieto', text: 'Sinto-me frustrado quando não consigo me mover.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Esquivo
      { id: 'sab-41', category: 'Esquivo', text: 'Evito confrontos e discussões.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-42', category: 'Esquivo', text: 'Sinto-me desconfortável com emoções intensas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-43', category: 'Esquivo', text: 'Busco manter a paz a todo custo.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-44', category: 'Esquivo', text: 'Evito expressar opiniões para não gerar conflito.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-45', category: 'Esquivo', text: 'Sinto ressentimento por não ter necessidades atendidas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Controlador (Revisitado) - Mapeado para a mesma categoria Controlador para somar
      { id: 'sab-46', category: 'Controlador', text: 'Sinto-me responsável por garantir que coisas sejam feitas do meu jeito.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-47', category: 'Controlador', text: 'Fico frustrado quando não seguem minhas instruções.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-48', category: 'Controlador', text: 'Sinto ansiedade sem controle da situação.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-49', category: 'Controlador', text: 'Sinto-me compelido a organizar tudo nos mínimos detalhes.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-50', category: 'Controlador', text: 'Sinto-me sobrecarregado por tentar controlar tudo.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Hiper-Racional
      { id: 'sab-51', category: 'HiperRacional', text: 'Sinto-me desconfortável com demonstrações de emoção.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-52', category: 'HiperRacional', text: 'Sinto-me compelido a analisar tudo logicamente.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-53', category: 'HiperRacional', text: 'Fico frustrado quando agem com base em emoções.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-54', category: 'HiperRacional', text: 'Sinto-me superior por ser mais lógico.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-55', category: 'HiperRacional', text: 'Sinto-me isolado por dificuldade em conexão emocional.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      // Rígido
      { id: 'sab-56', category: 'Rigido', text: 'Compelido a seguir regras e padrões rígidos.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-57', category: 'Rigido', text: 'Desconfortável com espontaneidade.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-58', category: 'Rigido', text: 'Frustrado quando não fazem "do jeito certo".', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-59', category: 'Rigido', text: 'Sinto ansiedade quando há incerteza.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'sab-60', category: 'Rigido', text: 'Crítico com quem não segue regras.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
    ]
  }
];
