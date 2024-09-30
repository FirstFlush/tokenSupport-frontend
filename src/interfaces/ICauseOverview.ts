export interface ICauseOverview {
    id: number;
    creator: string;
    title: string;
    amountGoal: number;
    amountRaised: number;
    createdAt: string; // ISO 8601 string or Date
    completed: boolean;
    primaryImageUrl: string;
  }