export interface Tutorial {
  id: number;
  name: string;
  url: string;
  category?: string;
  isOpened?: boolean;
  isCompleted?: boolean;
}
