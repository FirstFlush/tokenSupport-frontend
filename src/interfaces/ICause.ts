export interface ICause {
    id: number;
    creator: string;
    wallet: string;
    title: string;
    email: string;
    description: string;
    amountGoal: number;
    amountRaised: number;
    createdAt: string; // ISO 8601 string or Date
    completed: boolean;
    // imageUrl: string;
    imageUrls: string[];
  }