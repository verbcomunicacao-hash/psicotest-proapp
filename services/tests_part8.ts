
import { Questionnaire, FeedbackType } from '../types';

export const testsPart8: Questionnaire[] = [
  // 20. --- Teste de Perfil de Liderança ---
  {
    id: 'leadership-profile-01',
    title: '20. Teste de Perfil de Liderança',
    description: 'Identifique seu estilo predominante de liderança: Diretivo, Colaborativo, Harmonioso ou Analítico. Baseado em 60 indicadores comportamentais.',
    introduction: `Este teste identifica o seu estilo natural de liderança com base em quatro perfis complementares:

*   **Diretivo (A):** Foco em ação, decisão e resultados.
*   **Colaborativo (B):** Foco em pessoas, empatia e desenvolvimento.
*   **Harmonioso (C):** Foco em equilíbrio, cooperação e estabilidade.
*   **Analítico (D):** Foco em dados, planejamento e precisão.

O objetivo é reconhecer seus pontos fortes e identificar oportunidades de crescimento para uma gestão mais eficaz.`,
    applicatorInstructions: 'Peça ao líder para avaliar cada afirmação de 1 a 5, onde 5 é "Muito parecido comigo".',
    sources: 'Modelos de Liderança Situacional e Comportamental.',
    version: 1,
    feedback: {
      type: FeedbackType.MultiCategorySum,
      categoryConfig: {
        'A': { name: 'Perfil A: Diretivo' },
        'B': { name: 'Perfil B: Colaborativo' },
        'C': { name: 'Perfil C: Harmonioso' },
        'D': { name: 'Perfil D: Analítico' }
      },
      devolutiva: {
        'A': {
          name: 'Perfil Diretivo (A)',
          description: 'Foco em ação, decisão e resultados.',
          interpretation: '**Pontos Fortes:** Toma decisões rápidas, assume responsabilidade, não foge da pressão.\n**Atenção:** Pode parecer autoritário ou impaciente. Precisa ouvir mais a equipe antes de agir.'
        },
        'B': {
          name: 'Perfil Colaborativo (B)',
          description: 'Foco em pessoas, empatia e conexão.',
          interpretation: '**Pontos Fortes:** Cria times coesos, desenvolve talentos, promove inclusão.\n**Atenção:** Pode evitar decisões difíceis para não magoar. Precisa equilibrar empatia com assertividade.'
        },
        'C': {
          name: 'Perfil Harmonioso (C)',
          description: 'Foco em equilíbrio, cooperação e estabilidade.',
          interpretation: '**Pontos Fortes:** Mantém o clima saudável, media conflitos, valoriza a consistência.\n**Atenção:** Pode resistir a mudanças ou ser passivo. Precisa assumir mais protagonismo.'
        },
        'D': {
          name: 'Perfil Analítico (D)',
          description: 'Foco em dados, planejamento e precisão.',
          interpretation: '**Pontos Fortes:** Garante qualidade, planeja com detalhes, baseia-se em fatos.\n**Atenção:** Pode demorar para decidir (paralisia por análise). Precisa combinar lógica com agilidade.'
        }
      }
    },
    questions: [
      { id: 'lid-01', category: 'A', text: 'Tomo decisões rápidas e vou direto ao ponto', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-02', category: 'B', text: 'Levo tempo pra decidir e considero todos os lados', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-03', category: 'C', text: 'Deixo a equipe decidir pra manter harmonia', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-04', category: 'D', text: 'Analiso dados e critérios antes de agir', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-05', category: 'A', text: 'Gosto de assumir responsabilidade e dar ordens claras', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-06', category: 'B', text: 'Trabalho melhor em equipes colaborativas', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-07', category: 'C', text: 'Evito conflitos e busco consenso', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-08', category: 'D', text: 'Preciso de informações concretas pra tomar decisões', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-09', category: 'A', text: 'Sei motivar e inspirar minha equipe com energia', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-10', category: 'B', text: 'Faço parte da equipe, não fico no topo', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-11', category: 'C', text: 'Deixo os outros decidirem pra não me expor', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-12', category: 'D', text: 'Sei organizar processos e cumprir prazos', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-13', category: 'A', text: 'Sei delegar com clareza e firmeza', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-14', category: 'B', text: 'Gosto de trabalhar junto com a equipe', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-15', category: 'C', text: 'Evito delegar, prefiro fazer eu mesmo(a) para não incomodar', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-16', category: 'D', text: 'Gosto de planejar tudo antes de delegar', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-17', category: 'A', text: 'Sei liderar em momentos de crise', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-18', category: 'B', text: 'Fico mais tranquilo(a) quando a equipe está bem', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-19', category: 'C', text: 'Busco equilíbrio e evito extremos', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-20', category: 'D', text: 'Sei avaliar riscos e antecipar problemas', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-21', category: 'A', text: 'Gosto de dar feedback direto e objetivo', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-22', category: 'B', text: 'Dou feedback com cuidado e empatia', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-23', category: 'C', text: 'Evito dar feedback pra não magoar', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-24', category: 'D', text: 'Costumo anotar e ter dados antes de falar', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-25', category: 'A', text: 'Tomo a frente e assumo responsabilidade', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-26', category: 'B', text: 'Trabalho melhor em grupo e valorizo colaboração', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-27', category: 'C', text: 'Deixo os outros tomarem a frente se preferirem', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-28', category: 'D', text: 'Planejo antes de agir e busco segurança', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-29', category: 'A', text: 'Inspiro a equipe com visão e energia', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-30', category: 'B', text: 'Conecto a equipe com empatia e apoio', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-31', category: 'C', text: 'Mantenho o time unido e harmônico', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-32', category: 'D', text: 'Garanto qualidade e eficiência nos processos', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-33', category: 'A', text: 'Tenho senso de urgência e gosto de agir rápido', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-34', category: 'B', text: 'Valorizo o diálogo e o consenso', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-35', category: 'C', text: 'Evito pressa e busco o equilíbrio', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-36', category: 'D', text: 'Reviso tudo antes de tomar uma decisão', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-37', category: 'A', text: 'Encaro mudanças como oportunidades', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-38', category: 'B', text: 'Levo a equipe comigo nas mudanças', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-39', category: 'C', text: 'Sigo o ritmo da equipe e adapto-me às mudanças', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-40', category: 'D', text: 'Avalio os impactos e riscos antes de mudar algo', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-41', category: 'A', text: 'Sou bom em motivar e tirar o melhor da equipe', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-42', category: 'B', text: 'Sei ouvir e apoiar os membros do time', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-43', category: 'C', text: 'Promovo integração e cooperação', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-44', category: 'D', text: 'Organizo processos e busco padrões claros', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-45', category: 'A', text: 'Decido rápido e tomo a frente nas crises', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-46', category: 'B', text: 'Converso com a equipe antes de decidir', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-47', category: 'C', text: 'Deixo os outros decidirem pra manter paz', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-48', category: 'D', text: 'Analiso dados antes de tomar posição', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-49', category: 'A', text: 'Sei liderar times multidisciplinares com autoridade', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-50', category: 'B', text: 'Trabalho melhor em equipes horizontais e colaborativas', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-51', category: 'C', text: 'Gosto de integrar e manter harmonia', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-52', category: 'D', text: 'Sei organizar tarefas e garantir produtividade', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-53', category: 'A', text: 'Tomo decisões difíceis sem hesitar', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-54', category: 'B', text: 'Considero os sentimentos antes de decidir', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-55', category: 'C', text: 'Deixo a equipe decidir pra evitar conflitos', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-56', category: 'D', text: 'Preciso de dados pra tomar uma posição', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-57', category: 'A', text: 'Gosto de inovar e buscar resultados rápidos', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-58', category: 'B', text: 'Apoio o crescimento individual dos liderados', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-59', category: 'C', text: 'Valorizo a rotina e o equilíbrio da equipe', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
      { id: 'lid-60', category: 'D', text: 'Priorizo organização e eficiência', options: [1, 2, 3, 4, 5].map(v => ({ text: v.toString(), value: v })) },
    ]
  },

  // 21. --- Teste de Estilos de Resolução de Conflitos ---
  {
    id: 'conflict-resolution-01',
    title: '21. Teste de Estilos de Resolução de Conflitos',
    description: 'Descubra como você lida com divergências: Competição, Colaboração, Compromisso, Evitação ou Acomodação. Baseado no TKI.',
    introduction: 'Conflitos são naturais, mas a forma como lidamos com eles define nossos relacionamentos. Este teste explora os cinco modos principais de gestão de conflitos.',
    applicatorInstructions: 'O respondente deve escolher entre duas afirmações (A ou B) a que melhor descreve seu comportamento típico.',
    sources: 'Thomas-Kilmann Conflict Mode Instrument (TKI).',
    version: 1,
    feedback: {
      type: FeedbackType.DominantCategory,
      categoryConfig: {
        'Competicao': { name: 'Competição' },
        'Colaboracao': { name: 'Colaboração' },
        'Compromisso': { name: 'Compromisso' },
        'Evitacao': { name: 'Evitação' },
        'Acomodacao': { name: 'Acomodação' }
      },
      devolutiva: {
        'Competicao': { name: 'Competição (Assertivo, Não-Cooperativo)', description: 'Busca impor sua solução e defender seus interesses.', interpretation: 'Útil em emergências ou decisões impopulares. Cuidado com a agressividade e dano aos relacionamentos.' },
        'Colaboracao': { name: 'Colaboração (Assertivo, Cooperativo)', description: 'Busca solução que satisfaça plenamente a todos.', interpretation: 'Gera soluções criativas e fortalece laços. Exige tempo e paciência.' },
        'Compromisso': { name: 'Compromisso (Meio-Termo)', description: 'Busca soluções "ganha-perde / ganha-perde" rápidas.', interpretation: 'Útil para acordos temporários ou sob pressão de tempo. Pode não resolver a raiz do problema.' },
        'Evitacao': { name: 'Evitação (Não-Assertivo, Não-Cooperativo)', description: 'Adia ou se retira do conflito.', interpretation: 'Útil quando o conflito é trivial ou os ânimos estão exaltados. O uso excessivo acumula problemas.' },
        'Acomodacao': { name: 'Acomodação (Não-Assertivo, Cooperativo)', description: 'Cede aos desejos do outro.', interpretation: 'Útil quando a harmonia é vital ou você está errado. Cuidado para não se anular constantemente.' }
      }
    },
    questions: [
      { id: 'conf-01', text: 'Em uma discussão:', options: [{ text: 'A. Busco impor minha própria solução.', category: 'Competicao', value: 1 }, { text: 'B. Tento acomodar os desejos dos outros.', category: 'Acomodacao', value: 1 }] },
      { id: 'conf-02', text: 'Diante de diferenças:', options: [{ text: 'A. Exploro as diferenças para satisfazer a todos.', category: 'Colaboracao', value: 1 }, { text: 'B. Tento evitar a discussão.', category: 'Evitacao', value: 1 }] },
      { id: 'conf-03', text: 'Na busca por solução:', options: [{ text: 'A. Tento encontrar um meio-termo aceitável.', category: 'Compromisso', value: 1 }, { text: 'B. Tento satisfazer minhas próprias necessidades.', category: 'Competicao', value: 1 }] },
      { id: 'conf-04', text: 'Estratégia inicial:', options: [{ text: 'A. Tento adiar a discussão para pensar.', category: 'Evitacao', value: 1 }, { text: 'B. Tento encontrar uma solução conjunta.', category: 'Colaboracao', value: 1 }] },
      { id: 'conf-05', text: 'Em tensão:', options: [{ text: 'A. Tento evitar tensões desnecessárias.', category: 'Evitacao', value: 1 }, { text: 'B. Tento convencer o outro da minha lógica.', category: 'Competicao', value: 1 }] },
      { id: 'conf-06', text: 'Tipo de solução:', options: [{ text: 'A. Procuro um compromisso entre as posições.', category: 'Compromisso', value: 1 }, { text: 'B. Trago todas as preocupações para a mesa.', category: 'Colaboracao', value: 1 }] },
      { id: 'conf-07', text: 'Postura:', options: [{ text: 'A. Tento ser atencioso com os desejos do outro.', category: 'Acomodacao', value: 1 }, { text: 'B. Apresento meus argumentos para defender minha posição.', category: 'Competicao', value: 1 }] },
      { id: 'conf-08', text: 'Objetivo:', options: [{ text: 'A. Encontrar solução mutuamente aceitável.', category: 'Compromisso', value: 1 }, { text: 'B. Manter a paz, mesmo sem expressar tudo.', category: 'Evitacao', value: 1 }] },
      { id: 'conf-09', text: 'Flexibilidade:', options: [{ text: 'A. Tento ser flexível e me adaptar.', category: 'Acomodacao', value: 1 }, { text: 'B. Tento ser firme em minhas posições.', category: 'Competicao', value: 1 }] },
      { id: 'conf-10', text: 'Resolução:', options: [{ text: 'A. Encontrar solução criativa para todos.', category: 'Colaboracao', value: 1 }, { text: 'B. Ceder um pouco para o outro ceder também.', category: 'Compromisso', value: 1 }] },
      { id: 'conf-11', text: 'Confronto:', options: [{ text: 'A. Tento evitar a confrontação direta.', category: 'Evitacao', value: 1 }, { text: 'B. Sou direto e claro sobre o que quero.', category: 'Competicao', value: 1 }] },
      { id: 'conf-12', text: 'Envolvimento:', options: [{ text: 'A. Encontrar solução justa para todos.', category: 'Colaboracao', value: 1 }, { text: 'B. Tento não me envolver em discussões alheias.', category: 'Evitacao', value: 1 }] },
      { id: 'conf-13', text: 'Persuasão:', options: [{ text: 'A. Tento persuadir o outro.', category: 'Competicao', value: 1 }, { text: 'B. Tento considerar os sentimentos do outro.', category: 'Acomodacao', value: 1 }] },
      { id: 'conf-14', text: 'Negociação:', options: [{ text: 'A. Tento negociar um acordo meio-termo.', category: 'Compromisso', value: 1 }, { text: 'B. Tento resolver para ambos ficarem satisfeitos.', category: 'Colaboracao', value: 1 }] },
      { id: 'conf-15', text: 'Reação:', options: [{ text: 'A. Evito a escalada do conflito.', category: 'Evitacao', value: 1 }, { text: 'B. Sou assertivo para garantir minhas necessidades.', category: 'Competicao', value: 1 }] },
      { id: 'conf-16', text: 'Acordo:', options: [{ text: 'A. Cedo em alguns pontos para fechar.', category: 'Compromisso', value: 1 }, { text: 'B. Busco solução que integre as duas visões.', category: 'Colaboracao', value: 1 }] },
      { id: 'conf-17', text: 'Prioridade:', options: [{ text: 'A. Não ferir os sentimentos do outro.', category: 'Acomodacao', value: 1 }, { text: 'B. Defender meus direitos e interesses.', category: 'Competicao', value: 1 }] },
      { id: 'conf-18', text: 'Busca:', options: [{ text: 'A. Encontrar um meio-termo.', category: 'Compromisso', value: 1 }, { text: 'B. Não me envolver.', category: 'Evitacao', value: 1 }] },
      { id: 'conf-19', text: 'Estilo:', options: [{ text: 'A. Diplomático para evitar atritos.', category: 'Acomodacao', value: 1 }, { text: 'B. Direto e objetivo.', category: 'Competicao', value: 1 }] },
      { id: 'conf-20', text: 'Cooperação:', options: [{ text: 'A. Colaboro para a melhor solução.', category: 'Colaboracao', value: 1 }, { text: 'B. Cedo para manter a harmonia.', category: 'Acomodacao', value: 1 }] },
      { id: 'conf-21', text: 'Posição:', options: [{ text: 'A. Firme ao defender o que acredito.', category: 'Competicao', value: 1 }, { text: 'B. Não me preocupo com pequenas divergências.', category: 'Evitacao', value: 1 }] },
      { id: 'conf-22', text: 'Satisfação:', options: [{ text: 'A. Solução satisfatória, mesmo que não perfeita.', category: 'Compromisso', value: 1 }, { text: 'B. Evitar discussão de temas sensíveis.', category: 'Evitacao', value: 1 }] },
      { id: 'conf-23', text: 'Argumentação:', options: [{ text: 'A. Atencioso com as preocupações do outro.', category: 'Acomodacao', value: 1 }, { text: 'B. Apresento argumentos lógicos.', category: 'Competicao', value: 1 }] },
      { id: 'conf-24', text: 'Finalização:', options: [{ text: 'A. Acordo razoável para todos (meio-termo).', category: 'Compromisso', value: 1 }, { text: 'B. Todos se sintam ouvidos e compreendidos.', category: 'Colaboracao', value: 1 }] },
      { id: 'conf-25', text: 'Distância:', options: [{ text: 'A. Não me envolvo se não é comigo.', category: 'Evitacao', value: 1 }, { text: 'B. Sou assertivo para ser considerado.', category: 'Competicao', value: 1 }] },
      { id: 'conf-26', text: 'Benefício:', options: [{ text: 'A. Solução benéfica para todos.', category: 'Colaboracao', value: 1 }, { text: 'B. Cedo para evitar confronto.', category: 'Acomodacao', value: 1 }] },
      { id: 'conf-27', text: 'Expressão:', options: [{ text: 'A. Direto e objetivo.', category: 'Competicao', value: 1 }, { text: 'B. Compreensivo com o outro.', category: 'Acomodacao', value: 1 }] },
      { id: 'conf-28', text: 'Atrito:', options: [{ text: 'A. Meio-termo para resolver.', category: 'Compromisso', value: 1 }, { text: 'B. Evitar discussão que gera atrito.', category: 'Evitacao', value: 1 }] },
      { id: 'conf-29', text: 'Influência:', options: [{ text: 'A. Persuasivo para aceitarem minha ideia.', category: 'Competicao', value: 1 }, { text: 'B. Flexível e adaptável.', category: 'Acomodacao', value: 1 }] },
      { id: 'conf-30', text: 'Desfecho:', options: [{ text: 'A. Solução criativa e inovadora.', category: 'Colaboracao', value: 1 }, { text: 'B. Ceder para manter a relação.', category: 'Acomodacao', value: 1 }] },
    ]
  }
];
