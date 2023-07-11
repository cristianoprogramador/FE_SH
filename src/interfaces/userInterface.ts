export interface UserProps {
  id: number;
  name: string;
  birthDate?: string;
  position?: string;
  salary?: number;
  projects?: string[];
  imageUrl?: string;
}

export interface UserCardProps {
  data: UserProps;
}
