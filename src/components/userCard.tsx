import projectsCardIcon from "@/assets/icons/projectsCardIcon.svg";
import { Avatar } from "./avatar";
import { Card } from "./card";

export interface User {
  id: number;
  name: string;
  birthDate?: string;
  position?: string;
  salary?: number;
  projects?: string[];
  imageUrl?: string;
}

export interface UserCardProps {
  data: User;
}

export function UserCard(props: UserCardProps) {
  const { data } = props;

  return (
    <Card className="h-52 w-48">
      <Avatar imageUrl={data?.imageUrl} className="h-16 w-16" />
      <div className="mt-4 font-semibold gap-1 text-center">
        <div>{data.name}</div>
        <div>{data.position}</div>
        <div className="flex flex-row justify-center align-middle text-center items-center gap-3 ">
          Projetos
          <div className="cursor-pointer transition-transform duration-200 hover:scale-110">
            <img src={projectsCardIcon} alt="" />
          </div>
        </div>
      </div>
    </Card>
  );
}
