export interface WorkdayRequest {
  username: string;
  userId: string;
  startDate: Date | string;
  endDate: Date | string;
  workday: number;
}
