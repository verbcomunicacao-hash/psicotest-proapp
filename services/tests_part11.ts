
import { Questionnaire, FeedbackType, TestScores } from '../types';

export const testsPart11: Questionnaire[] = [
  // 28. --- Teste de Maturidade Empreendedora ---
  {
    id: 'entrepreneurial-maturity-01',
    title: '28. Teste de Maturidade Empreendedora',
    description: 'Avalie sua maturidade em eixos Pessoais (resiliência, propósito) e Empresariais (gestão, estratégia). Baseado em Effectuation, Porter e Kotler.',
    introduction: `Este teste avalia o nível de maturidade empreendedora de indivíduos e negócios. Ele combina dimensões psicológicas e estratégicas.

**Eixos Avaliados:**
1.  **Pessoal:** Resiliência, motivação, autoconhecimento.
2.  **Empresarial:** Gestão, finanças, estratégia, marketing.

**Fontes:**
- Sarasvathy (Effectuation)
- Porter (Estratégia)
- Kotler (Marketing)
- Chiavenato (Empreendedorismo)`,
    applicatorInstructions: 'Escala de 1 (Nunca) a 5 (Sempre/Concordo Totalmente). O resultado separa a pontuação Pessoal da Empresarial.',
    sources: 'Sarasvathy, Porter, Kotler, Chiavenato, Marcos Conta.',
    version: 1,
    feedback: {
      type: FeedbackType.MultiCategorySum,
      categoryConfig: {
        'Pessoal': { name: 'Eixo Pessoal' },
        'Empresarial': { name: 'Eixo Empresarial' }
      },
      devolutiva: {
        'Pessoal': {
          name: 'Eixo Pessoal (Mindset e Comportamento)',
          description: 'Avalia a resiliência, liderança e preparo emocional.',
          interpretation: '**<25:** Baixa maturidade psicológica. Foco em resiliência e propósito.\n**25–35:** Intermediário. Foco em autoconhecimento.\n**36–50:** Alta maturidade. Base sólida para desafios.'
        },
        'Empresarial': {
          name: 'Eixo Empresarial (Estratégia e Gestão)',
          description: 'Avalia a solidez do negócio, finanças e mercado.',
          interpretation: '**<50:** Fundamentos frágeis. Alto risco em crises.\n**50–75:** Boa base, mas com lacunas de gestão.\n**76–100:** Maturidade avançada. Preparado para escalar.'
        }
      }
    },
    questions: [
      // Eixo Pessoal (1-10)
      { id: 'emp-p01', category: 'Pessoal', text: 'Resiliência: Consigo me reorganizar emocionalmente em até 7 dias após uma falha grave.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-p02', category: 'Pessoal', text: 'Superação: Já enfrentei crises mantendo responsabilidades sem desistir do propósito.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-p03', category: 'Pessoal', text: 'Motivação: Invisto tempo em ideias mesmo sem recompensa imediata.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-p04', category: 'Pessoal', text: 'Autoconhecimento: Identifico limites e peço ajuda antes de uma situação crítica.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-p05', category: 'Pessoal', text: 'Propósito: Minha motivação vai além do dinheiro (causas, legado).', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-p06', category: 'Pessoal', text: 'Aprendizagem: Busco ativamente livros/cursos mesmo sem pressão externa.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-p07', category: 'Pessoal', text: 'Gestão Emocional: Tomo decisões com clareza em momentos de alto estresse.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-p08', category: 'Pessoal', text: 'Rede de Apoio: Tenho mentores/amigos para conversar sobre desafios reais.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-p09', category: 'Pessoal', text: 'Adaptabilidade: Reconfiguro a estratégia rapidamente quando o mercado muda.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-p10', category: 'Pessoal', text: 'Ambiguidade: Consigo decidir mesmo com informações incompletas.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      
      // Eixo Empresarial (11-30)
      { id: 'emp-e11', category: 'Empresarial', text: 'Stakeholders Internos: Mantenho comunicação clara com a equipe em crises.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-e12', category: 'Empresarial', text: 'Stakeholders Externos: Tenho plano para relacionamento com investidores/fornecedores.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-e13', category: 'Empresarial', text: 'Concorrência: Monitoro concorrentes para diferenciar meu valor.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-e14', category: 'Empresarial', text: 'Posicionamento: Meu negócio ocupa um espaço claro na mente do cliente.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-e15', category: 'Empresarial', text: 'Financeiro: Mantenho reserva de caixa para 3 a 6 meses.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-e16', category: 'Empresarial', text: 'Risco: Já simulei cenários de crise e tenho planos alternativos.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-e17', category: 'Empresarial', text: 'Modelo de Negócio: Meu Canvas reflete a realidade atual de valor.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-e18', category: 'Empresarial', text: 'Effectuation: Tomo decisões baseadas nos recursos que tenho hoje.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-e19', category: 'Empresarial', text: 'Parcerias: Busco co-criar para dividir riscos.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-e20', category: 'Empresarial', text: 'Risco Aceitável: Defino o que posso perder antes de agir.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-e21', category: 'Empresarial', text: 'Customer-centric: Ajusto produtos com base em feedback real.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-e22', category: 'Empresarial', text: 'Valor: Conheço quanto o cliente valoriza meu produto (além do custo).', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-e23', category: 'Empresarial', text: 'Estratégia: Sei qual minha vantagem (custo, diferenciação ou foco).', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-e24', category: 'Empresarial', text: 'Marketing: Meu plano 4Ps está alinhado com o público.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-e25', category: 'Empresarial', text: 'Intraempreendedorismo: Consigo propor inovações usando influência.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-e26', category: 'Empresarial', text: 'Gestão de Tempo: Dedico tempo semanal para estratégia.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-e27', category: 'Empresarial', text: 'Escala Consciente: Considero sustentabilidade ao expandir.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-e28', category: 'Empresarial', text: 'Social: Considero impacto social/ambiental nas decisões.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-e29', category: 'Empresarial', text: 'Inovação: Lanço melhorias significativas regularmente.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'emp-e30', category: 'Empresarial', text: 'Legado: Penso no longo prazo (10 anos) para decidir hoje.', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
    ]
  },

  // 29. --- Teste Integrado de Níveis de Depressão (TIND - Versão Clínica 60 Itens) ---
  {
    id: 'depression-clinical-60',
    title: '29. Teste Integrado de Níveis de Depressão (TIND - 60 Itens)',
    description: 'Versão clínica expandida. Rastreamento detalhado, avaliação dimensional e estratificação de risco. Baseado em DSM-5-TR, CID-11, BDI-II, PHQ-9.',
    introduction: `Este instrumento foi desenvolvido para auxiliar profissionais no rastreamento e avaliação dimensional de quadros depressivos em adultos. 

Baseia-se em critérios diagnósticos do **DSM-5-TR** e **CID-11**, integrando constructos do **BDI-II**, **PHQ-9**, **Hamilton (HAM-D)** e **MADRS**. 

A versão expandida (60 itens) mapeia tristeza, irritabilidade, desesperança, sintomas físicos e risco de suicídio, oferecendo segurança para a tomada de decisão clínica.`,
    applicatorInstructions: 'Considerar a última semana. Escala 0-3. ATENÇÃO: Respostas >0 nos itens de risco (pensamentos de morte) exigem intervenção imediata.',
    sources: 'DSM-5-TR, CID-11, BDI-II, PHQ-9, MADRS, C-SSRS.',
    version: 2, // Versão atualizada
    analysisPrompt: 'Analise o resultado do TIND (60 itens). Calcule a severidade. Identifique domínios mais afetados (afetivo, cognitivo, somático). ALERTA: Verifique itens de ideação suicida. Forneça diretrizes de risco e encaminhamento baseadas nos guidelines da CANMAT e APA.',
    feedback: {
      type: FeedbackType.Sum,
      feedbackTextGenerator: (scores: TestScores) => {
        const total = scores['total'] || 0;
        
        let riskText = "";
        if (total <= 14) riskText = `**0–14 pontos: Sintomas Mínimos ou Ausentes**\n\nQuadro estável. Acompanhamento leve se necessário.`;
        else if (total <= 29) riskText = `**15–29 pontos: Depressão Leve a Moderada**\n\nIndica sofrimento significativo. Psicoterapia semanal recomendada.`;
        else if (total <= 44) riskText = `**30–44 pontos: Depressão Moderada a Grave**\n\nRisco funcional elevado. Avaliação psiquiátrica fortemente recomendada.`;
        else riskText = `**45+ pontos: Depressão Grave com Alto Risco Clínico**\n\nSofrimento intenso e generalizado. Intervenção multiprofissional necessária.`;

        return `${riskText}\n\n**Nota ao Profissional:** Verifique especificamente as respostas aos itens sobre desesperança e pensamentos de morte. Qualquer pontuação positiva nesses itens exige protocolo de risco.`;
      }
    },
    questions: [
      { id: 'tind-01', text: 'Senti-me triste, vazio ou à beira das lágrimas sem motivo aparente.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-02', text: 'Perdi o interesse ou prazer em atividades que antes me davam alegria.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-03', text: 'Tive dificuldade para sentir qualquer emoção positiva, mesmo em situações boas.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-04', text: 'Senti que a vida perdeu o sentido ou a cor.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-05', text: 'Chorei com frequência, mesmo por coisas pequenas.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-06', text: 'Fiquei irritado ou impaciente com facilidade.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-07', text: 'Senti que nada do que eu faça vai melhorar minha situação.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-08', text: 'Acreditei que o futuro será só sofrimento, sem esperança de mudança.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-09', text: 'Me culpei excessivamente por erros pequenos ou fora do meu controle.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-10', text: 'Senti que sou um peso ou um fardo para minha família ou amigos.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-11', text: 'Tive pensamentos como "não sirvo para nada" ou "sou inútil".', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-12', text: 'Me puni mentalmente por falhas do passado.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-13', text: 'Ignorei ou rejeitei elogios ou gestos de carinho.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-14', text: 'Evitei lembrar de momentos bons do passado por medo da dor.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-15', text: 'Tive dificuldade para tomar decisões simples (o que vestir, comer).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-16', text: 'Não consegui me concentrar em leitura, conversas ou tarefas.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-17', text: 'Senti minha mente "embaçada" ou lenta.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-18', text: 'Tive dificuldade para lembrar de compromissos ou nomes.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-19', text: 'Senti-me agitado por dentro, incapaz de ficar parado.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-20', text: 'Senti meu corpo "pesado como chumbo" (lentidão psicomotora).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-21', text: 'Fiquei tão cansado que tarefas simples pareciam impossíveis.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-22', text: 'Dormi mal: insônia ou acordar muito cedo sem conseguir voltar.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-23', text: 'Dormi demais (hipersonia) mas acordei exausto.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-24', text: 'Comi muito menos do que o normal, sem fome.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-25', text: 'Comi compulsivamente, mesmo sem fome.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-26', text: 'Senti dores físicas sem explicação médica (cabeça, corpo).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-27', text: 'Negligenciei meu autocuidado (banho, higiene, roupas).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-28', text: 'Deixei de cumprir obrigações importantes (trabalho, contas).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-29', text: 'Tive dificuldade para manter rotinas básicas.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-30', text: 'Evitei contato com outras pessoas (isolamento).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-31', text: 'Senti que ninguém me entende ou que estou sozinho no mundo.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-32', text: 'Tive medo de me aproximar emocionalmente de alguém.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-33', text: 'Senti que minha presença atrapalha ou incomoda.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-34', text: 'Percebi que meu desempenho no trabalho/estudos caiu muito.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-35', text: 'Tive dificuldade em manter relacionamentos (fechar-se ou irritar-se).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-36', text: 'Senti que não contribuo para nada nem ninguém.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-37', text: 'Pensei que seria melhor estar morto ou não me importaria se algo acontecesse.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-38', text: 'Imaginei cenas em que não estou mais vivo (funeral, sumir).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-39', text: 'Tive pensamentos específicos sobre me matar (métodos, quando).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-40', text: 'Planejei, mesmo que vagamente, como se matar.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-41', text: 'Tive impulsos súbitos de me machucar ou assumir riscos.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-42', text: 'Já tentei me matar alguma vez na vida.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-43', text: 'Sinto que não tenho forças para continuar vivendo.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-44', text: 'Sinto que não há mais nada que me segure aqui.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-45', text: 'Tive pensamentos frequentes sobre morte (desejo de descanso eterno).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-46', text: 'Sinto que minha dor é insuportável e não vai passar.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-47', text: 'Já comuniquei (ou quis comunicar) a alguém que quero morrer.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-48', text: 'Sinto alívio ao pensar no suicídio como "saída de emergência".', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-49', text: 'Comecei a me despedir simbolicamente ou resolver pendências.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-50', text: 'Sinto que sou um fracasso total na vida.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-51', text: 'Perdi a capacidade de me alegrar com o sucesso alheio.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-52', text: 'Sinto um vazio profundo que nenhuma distração preenche.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-53', text: 'Tive ataques de ansiedade junto com a tristeza.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-54', text: 'Sinto que minha mente não para (preocupações obsessivas).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-55', text: 'Tenho dificuldade para relaxar ou me sentir seguro.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-56', text: 'Dormi mal por ansiedade/medo dos pensamentos.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-57', text: 'Sinto que minha tristeza é "mais real" que a dos outros.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-58', text: 'Pensei que talvez não tenha vocação para viver.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-59', text: 'Sinto que o mundo é hostil e ser feliz é ingenuidade.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'tind-60', text: 'Sinto uma dor constante por dentro, mesmo parecendo bem.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
    ]
  }
];
