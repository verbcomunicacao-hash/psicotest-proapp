
import { Questionnaire } from '../types';
import { testsPart1 } from './tests_part1';
import { testsPart2 } from './tests_part2';
import { testsPart3 } from './tests_part3';
import { testsPart4 } from './tests_part4';
import { testsPart5 } from './tests_part5';
import { testsPart6 } from './tests_part6';
import { testsPart7 } from './tests_part7';
import { testsPart8 } from './tests_part8';
import { testsPart9 } from './tests_part9';
import { testsPart10 } from './tests_part10';
import { testsPart11 } from './tests_part11';
import { testsPart12 } from './tests_part12';
import { testsPart13 } from './tests_part13';

// Combinando todas as partes em uma única lista exportável
// Arquitetura modular para permitir crescimento ilimitado de testes
export const allTests: Questionnaire[] = [
  ...testsPart1, // Testes 1-5 (DISC, Motivógrama, Negociação, Âncoras)
  ...testsPart2, // Vazio (Antigos removidos)
  ...testsPart4, // Teste 9 (Ansiedade)
  ...testsPart5, // Testes 10, 12 (Herrmann, NASA)
  ...testsPart3, // Testes 14-15 (Habilidades Sociais, Burnout)
  ...testsPart6, // Testes 16-18 (PNL, Inteligência Emocional, Sabotadores)
  ...testsPart7, // Vazio (MBTI simplificado removido)
  ...testsPart8, // Testes 20-21 (Liderança Geral, Resolução de Conflitos)
  ...testsPart9, // Testes 22-23 (Narcisismo, Borderline)
  ...testsPart10, // Testes 24-27 (Tóxico Adulto, Tóxico Teen, Dependência Pro, TDAH)
  ...testsPart11, // Testes 28-29 (Maturidade Empreendedora, Depressão Expandido)
  ...testsPart12, // Testes 30-32 (Ciúmes TCR-30, Eneagrama Prático, MBTI Clínico)
  ...testsPart13, // Teste 36 (Gestão de Tempo)
];
