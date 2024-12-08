export interface Word {
  german: string;
  polish: string;
  article?: 'der' | 'die' | 'das';
  category: string;
  example?: string;
}

export interface LearningProgress {
  wordId: string;
  correctAttempts: number;
  incorrectAttempts: number;
  lastPracticed: Date;
}