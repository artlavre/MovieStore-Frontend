export interface Movie {
  id: string;
  title: string;
  rating: number;
  coverUrl?: string;
  language: string;
  actors: string[];
  description: string;
  releaseDate: string;
}
