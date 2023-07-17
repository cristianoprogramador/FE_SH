export interface User {
  id: number;
  name: string;
  birthDate?: string;
  position?: string;
  salary?: number;
  projects?: string[];
  imageUrl?: string;
}
