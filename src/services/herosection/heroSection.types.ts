export interface IHeroSection {
  message: string;
  data: Data;
}

export interface Data {
  id: number;
  title: string;
  description: string;
  image: string;
  alt_text: string;
  created_at: string;
  updated_at: string;
}
