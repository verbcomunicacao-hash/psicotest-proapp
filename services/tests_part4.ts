
import { Questionnaire, FeedbackType, TestScores } from '../types';

export const testsPart4: Questionnaire[] = [
  // 9. --- Teste Integrado e Ampliado de Níveis de Ansiedade (100 Questões) ---
  {
    id: 'anxiety-integrated-100',
    title: '9. Teste Integrado de Níveis de Ansiedade (100 Questões)',
    description: 'Uma avaliação abrangente e multifacetada dos níveis de ansiedade, baseada em GAD-7, BAI, HAM-A e DASS. Inclui análise de sintomas físicos, cognitivos e comportamentais.',
    introduction: `Este teste foi meticulosamente desenvolvido para oferecer uma avaliação abrangente e multifacetada dos níveis de ansiedade, aprofundando-se nos princípios de instrumentos renomados como GAD-7, BAI, HAM-A, DASS e Hiwell.

O objetivo é proporcionar uma ferramenta robusta para identificar e monitorar a severidade dos sintomas ansiosos, com foco particular nos comportamentos associados. A ansiedade pode impactar profundamente a qualidade de vida, e uma avaliação precisa é fundamental para intervenções eficazes.

**Fontes Bibliográficas:**
*   **GAD-7:** Spitzer, R. L., et al. (2006). A brief measure for assessing generalized anxiety disorder.
*   **BAI (Beck Anxiety Inventory):** Beck, A. T., et al. (1988). An inventory for measuring clinical anxiety.
*   **HAM-A:** Hamilton, M. (1959). The assessment of anxiety states by rating.
*   **DASS:** Lovibond, S. H., & Lovibond, P. F. (1995). Manual for the Depression Anxiety Stress Scales.
*   **Hiwell & Teses de Doutorado:** Adaptações baseadas em triagens online e anamneses clínicas brasileiras.`,
    applicatorInstructions: `Este teste é uma ferramenta clínica de apoio. Oriente o cliente a responder com base em como se sentiu nas **últimas duas semanas**, incluindo hoje.
    
**Escala de Respostas:**
*   0 - De jeito nenhum
*   1 - Vários dias
*   2 - Mais da metade dos dias
*   3 - Quase todos os dias

Enfatize que a honestidade é crucial. As perguntas incluem exemplos comportamentais para facilitar a identificação.`,
    sources: 'GAD-7, BAI, HAM-A, DASS, Hiwell, Teses de Doutorado em Psicologia Clínica.',
    version: 1,
    feedback: {
      type: FeedbackType.Sum,
      feedbackTextGenerator: (scores: TestScores) => {
        const total = scores['total'] || 0;
        
        if (total <= 20) {
            return `**0 a 20 pontos: Ansiedade Mínima ou Ausente**

**Interpretação:** Seus sintomas de ansiedade são mínimos ou ausentes. É normal sentir um certo nível de ansiedade em situações desafiadoras, mas sua capacidade de lidar com o estresse parece estar em um bom nível. Você demonstra equilíbrio e bem-estar emocional, com boa resiliência frente aos desafios.

**Orientação:** Continue cultivando hábitos saudáveis, como exercícios físicos regulares, alimentação equilibrada, sono adequado e técnicas de relaxamento. Mantenha-se atento(a) aos sinais de estresse e busque apoio se sentir que algo está mudando.`;
        }
        if (total <= 50) {
            return `**21 a 50 pontos: Ansiedade Leve**

**Interpretação:** Você apresenta sintomas de ansiedade leve. Isso significa que, em alguns momentos, você pode sentir nervosismo, preocupação ou inquietação, mas esses sentimentos não são constantes e não afetam significativamente sua rotina diária. É um sinal de alerta para prestar mais atenção ao seu bem-estar emocional.

**Orientação:** Considere buscar apoio profissional (psicólogo ou coach) para desenvolver estratégias de enfrentamento. Pequenas mudanças no estilo de vida, como aumentar a atividade física e praticar técnicas de respiração, podem ser muito benéficas.`;
        }
        if (total <= 100) {
            return `**51 a 100 pontos: Ansiedade Moderada**

**Interpretação:** Seus sintomas indicam ansiedade moderada. Você provavelmente tem experimentado preocupação excessiva, dificuldade para relaxar, tensão física ou irritabilidade que impactam sua vida pessoal ou profissional. Pode haver impacto na qualidade do sono e na concentração.

**Orientação:** É altamente recomendável procurar um profissional de saúde mental para avaliação. A Terapia Cognitivo-Comportamental (TCC) pode oferecer ferramentas eficazes. Não hesite em buscar apoio para evitar que a condição se agrave.`;
        }
        if (total <= 180) {
            return `**101 a 180 pontos: Ansiedade Moderadamente Grave**

**Interpretação:** Os sintomas são mais intensos e persistentes, afetando significativamente diversas áreas da sua vida. Pode haver dificuldades consideráveis em manter atividades diárias. Sintomas físicos como palpitações, falta de ar e dores musculares podem ser frequentes.

**Orientação:** É crucial buscar ajuda profissional imediatamente. Um psicólogo e/ou psiquiatra poderá oferecer o suporte necessário, que pode incluir terapia intensiva e, se necessário, medicação. O tratamento adequado pode trazer alívio significativo.`;
        }
        return `**181 a 300 pontos: Ansiedade Grave**

**Interpretação:** Seus sintomas são indicativos de ansiedade grave. Você provavelmente está enfrentando sofrimento intenso, com grande impacto na capacidade de funcionar. Ataques de pânico, medos paralisantes e pensamentos intrusivos podem estar presentes.

**Orientação:** **Procure ajuda médica e psicológica de emergência.** Não espere. A ansiedade grave é tratável, e o apoio profissional imediato é essencial. A combinação de psicoterapia e farmacoterapia é frequentemente indicada nestes casos.`;
      }
    },
    questions: [
      { id: 'anx-001', text: 'Sentir-se nervoso(a), ansioso(a) ou no limite. (Ex: Roer unhas, batucar dedos, balançar pernas)', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-002', text: 'Não conseguir parar ou controlar a preocupação. (Ex: Mente presa em ciclo de preocupação)', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-003', text: 'Preocupar-se demais com diferentes coisas (finanças, saúde, família) ao mesmo tempo.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-004', text: 'Dificuldade para relaxar, mesmo em momentos de lazer.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-005', text: 'Estar tão inquieto(a) que é difícil ficar parado(a). (Ex: Necessidade de andar de um lado para o outro)', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-006', text: 'Ficar facilmente irritado(a) ou aborrecido(a) com pequenos contratempos.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-007', text: 'Ter medo de que algo terrível possa acontecer (catastrofização).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-008', text: 'Dormência ou formigamento nas mãos, pés ou rosto.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-009', text: 'Sentir-se quente (ondas de calor ou suores repentinos).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-010', text: 'Tremores nas pernas ou mãos, especialmente sob estresse.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-011', text: 'Incapacidade de relaxar (rigidez muscular constante).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-012', text: 'Medo persistente de que o pior aconteça, impedindo de viver o presente.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-013', text: 'Tontura ou vertigem (sensação de desequilíbrio).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-014', text: 'Coração acelerado ou batendo forte (taquicardia) mesmo em repouso.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-015', text: 'Respiração acelerada ou sensação de falta de ar (dispneia).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-016', text: 'Suores excessivos em situações que não justificam (frio ou repouso).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-017', text: 'Boca seca constantemente.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-018', text: 'Dificuldade para engolir (sensação de nó na garganta).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-019', text: 'Rubor facial (ficar vermelho) em situações de ansiedade.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-020', text: 'Calafrios ou mudanças bruscas na temperatura corporal.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-021', text: 'Tensão muscular levando a dores no pescoço, ombros ou costas.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-022', text: 'Dor ou aperto no peito (sintoma físico da ansiedade).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-023', text: 'Sensação de desmaio ou perda de controle do corpo.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-024', text: 'Perda de sensibilidade ou anestesia em partes do corpo.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-025', text: 'Dificuldade para se concentrar em tarefas, leitura ou conversas.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-026', text: 'Dificuldade para dormir (insônia inicial ou sono agitado).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-027', text: 'Irritabilidade com pessoas ao redor, mesmo por motivos banais.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-028', text: 'Preocupação excessiva com a saúde (hipocondria).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-029', text: 'Medo intenso de perder o controle sobre ações ou pensamentos.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-030', text: 'Medo de morrer (pensamentos recorrentes sobre morte).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-031', text: 'Medo intenso de desmaiar em público.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-032', text: 'Medo de enlouquecer ou perder a sanidade.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-033', text: 'Medo de ser julgado(a) ou avaliado(a) negativamente (ansiedade social).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-034', text: 'Dificuldade em tomar decisões por medo das consequências.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-035', text: 'Evitação de situações, lugares ou pessoas que causam ansiedade.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-036', text: 'Sentir-se agitado(a) e incapaz de se acalmar após evento estressor.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-037', text: 'Dificuldade em engolir alimentos sólidos ou líquidos.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-038', text: 'Necessidade constante de beber água ou estimular salivação.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-039', text: 'Sensação de sufocamento ou que o ar não é suficiente.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-040', text: 'Preocupação constante com batimentos cardíacos.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-041', text: 'Tremores incontroláveis que tenta esconder.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-042', text: 'Sudorese excessiva causando constrangimento social.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-043', text: 'Necessidade de sentar ou deitar rapidamente devido à tontura.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-044', text: 'Náuseas, dor de estômago ou desconforto gastrointestinal.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-045', text: 'Agasalhar-se ou descobrir-se constantemente para regular temperatura.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-046', text: 'Sensação de irrealidade (desrealização) ou estar sonhando.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-047', text: 'Controle excessivo dos próprios pensamentos por medo de perder o controle.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-048', text: 'Evitação de atividades de risco por medo irracional da morte.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-049', text: 'Mente "em branco" em momentos importantes.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-050', text: 'Acordar cansado(a) mesmo após dormir (sono não reparador).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-051', text: 'Respostas ríspidas ou isolamento devido à irritabilidade.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-052', text: 'Massagens constantes ou busca de alívio para tensão muscular.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-053', text: 'Sensação de estar sobrecarregado(a) e sem recursos para lidar.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-054', text: 'Recusa de convites sociais ou isolamento em casa.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-055', text: 'Planejamento excessivo para evitar qualquer surpresa futura.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-056', text: 'Pedir opinião de muitas pessoas antes de decidir algo simples.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-057', text: 'Sentir-se sem esperança ou desanimado(a) ("não vejo saída").', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-058', text: 'Pensamentos intrusivos, repetitivos e indesejados.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-059', text: 'Comportamentos compulsivos ou rituais (verificações, limpeza).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-060', text: 'Dificuldade em confiar nos outros (desconfiança constante).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-061', text: 'Sensação de que algo ruim vai acontecer a qualquer momento (pressentimento).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-062', text: 'Problemas de memória ou esquecimento frequente.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-063', text: 'Sentir-se isolado(a) ou sozinho(a) mesmo acompanhado(a).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-064', text: 'Perda de interesse em atividades que antes gostava (anedonia).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-065', text: 'Alterações no apetite (comer demais por ansiedade ou perder a fome).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-066', text: 'Fadiga crônica ou falta de energia matinal.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-067', text: 'Sentir-se emocionalmente entorpecido(a) ou desconectado(a).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-068', text: 'Sentir-se culpado(a) ou inútil sem motivo aparente.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-069', text: 'Pensamentos de automutilação ou suicídio. (Procure ajuda urgente se pontuar).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-070', text: 'Percepção alterada do tempo (muito lento ou muito rápido).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-071', text: 'Dificuldade em manter relacionamentos saudáveis.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-072', text: 'Sentir-se preso(a) ou sem saída nas circunstâncias atuais.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-073', text: 'Necessidade de controle excessivo sobre a vida e o ambiente.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-074', text: 'Medo paralisante de errar ou falhar.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-075', text: 'Perfeccionismo excessivo levando à frustração.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-076', text: 'Grande dificuldade em aceitar incertezas.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-077', text: 'Ruminação constante de eventos passados ou preocupações.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-078', text: 'Preocupação excessiva com a opinião dos outros.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-079', text: 'Sensação de despersonalização (não se sentir real).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-080', text: 'Flashbacks ou memórias intrusivas de eventos traumáticos.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-081', text: 'Reatividade física intensa a lembretes de trauma.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-082', text: 'Evitação ativa de pensamentos ou conversas sobre traumas.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-083', text: 'Diminuição do interesse em atividades significativas devido ao trauma/ansiedade.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-084', text: 'Sentimento de distanciamento ou estranhamento dos outros.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-085', text: 'Incapacidade de sentir emoções positivas (alegria, amor).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-086', text: 'Sensação de futuro encurtado (não fazer planos a longo prazo).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-087', text: 'Problemas para iniciar o sono ou voltar a dormir após acordar.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-088', text: 'Explosões de raiva desproporcionais.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-089', text: 'Dificuldade de concentração devido à mente divagando.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-090', text: 'Hipervigilância (constantemente monitorando perigos).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-091', text: 'Respostas de sobressalto exageradas (assustar-se fácil).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-092', text: 'Comportamento autodestrutivo ou imprudente para lidar com ansiedade.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-093', text: 'Dificuldade em sentir prazer (anedonia).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-094', text: 'Sentimento de desesperança ou pessimismo constante.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-095', text: 'Dificuldade em se motivar ou iniciar tarefas (paralisia).', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-096', text: 'Pensamentos de inutilidade ou culpa excessiva.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-097', text: 'Mudanças bruscas de peso sem causa física.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-098', text: 'Fadiga extrema que não passa com descanso.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-099', text: 'Indecisão crônica e mudança constante de ideia.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) },
      { id: 'anx-100', text: 'Sentimento de vazio ou entorpecimento emocional persistente.', options: [0, 1, 2, 3].map(v => ({ text: v.toString(), value: v })) }
    ]
  }
];
