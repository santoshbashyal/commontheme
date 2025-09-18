export interface IContactUs {
  total: number;
  data: Daum[];
}

export interface Daum {
  id: number;
  name: string;
  email: string;
  contact_number: string;
  subject: string;
  message: string;
  created_at: string;
  updated_at: string;
}
