
export enum UserRole {
  ADMIN = 'admin',
  PROFESSIONAL = 'professional',
  USER = 'user',
}

export interface BaseUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Admin extends BaseUser {
  role: UserRole.ADMIN;
}

export interface Professional extends BaseUser {
  role: UserRole.PROFESSIONAL;
  clients: Client[];
  profession?: string;
}

export interface Client extends BaseUser {
  role: UserRole.USER;
  professionalId: string;
  testResult?: TestResult | null;
  demographics?: Record<string, string | number>;
  attachments?: { name: string; size: number; type: string; }[];
}

export type LoggedInUser = Admin | Professional | Client;

export interface TestScores {
  [key: string]: number;
}

export interface TestResult {
  id: string;
  userId: string;
  questionnaireId: string;
  scores: TestScores;
  analysis: string; // This can now hold the primary feedback text
  summary: string;
  completedAt: string; // ISO date string
  startedAt?: string; // Novo: ISO date string do início
  durationSeconds?: number; // Novo: duração em segundos
  clientFeedback?: string; // Novo: feedback do cliente sobre o teste
  answers: Record<string, number | Record<string, number>>; 
}

export interface QuestionOption {
  text: string;
  value: number | Record<string, number>; // Updated to handle complex values
  category?: string; // Optional as category can be inferred by position
}

export interface Question {
  id: string;
  text: string;
  options: QuestionOption[];
  // Fix: Added optional category to Question interface
  category?: string;
}

export enum FeedbackType {
  Sum = 'sum',
  DominantCategory = 'dominant-category',
  DominantCategorySum = 'dominant-category-sum',
  MultiCategoryAverage = 'multi-category-average',
  MultiCategorySum = 'multi-category-sum',
  ForcedChoiceDisc = 'forced-choice-disc',
  PairedStatementPointDistribution = 'paired-statement-point-distribution',
}

export interface FeedbackProfile {
  name: string;
  description: string;
  interpretation: string;
  keywords?: string[];
}


export interface FeedbackConfig {
  type: FeedbackType;
  devolutiva?: string | Record<string, FeedbackProfile>; // Can be simple text or structured profiles
  categoryConfig?: {
    [key: string]: {
      name: string;
      questions?: string[];
      inverted?: boolean;
    };
  };
   feedbackTextGenerator?: (scores: TestScores) => string;
}

export interface Questionnaire {
  id: string;
  title: string;
  description: string;
  introduction?: string;
  applicatorInstructions?: string;
  sources?: string;
  questions: Question[];
  feedback: FeedbackConfig;
  analysisPrompt?: string; // Prompt for Gemini for AI-enhanced feedback
  version: number;
}