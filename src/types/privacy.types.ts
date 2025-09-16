export interface IPrivacy {
  message: string;
  data: Data;
}

export interface Data {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}
