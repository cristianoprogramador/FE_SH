export interface User {
  id: number;
  name: string;
  email: string;
  birthDate?: string;
  position?: string;
  salary?: number;
  projects?: string[];
  imageUrl?: string;
  status: string;
}
