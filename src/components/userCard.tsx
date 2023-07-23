import projectsCardIcon from "@/assets/icons/projectsCardIcon.svg";
import editUser from "@/assets/icons/editUser.svg";
import { Avatar } from "./avatar";
import { Card } from "./card";
import { ToolTip } from "./tooltip";
import { User } from "@/interfaces/userInterface";

interface UserCardProps {
  data: User;
}

export function UserCard(props: UserCardProps) {
  const { data } = props;

  return (
    <Card className="h-52 w-48 relative">
      <Avatar imageUrl={data?.imageUrl} className="h-16 w-16" />
      <img
        src={editUser}
        alt="edit user"
        className="absolute right-3 top-3 cursor-pointer h-6 w-6"
      />
      <div className="mt-4 font-semibold gap-1 text-center">
        <div>{data.name}</div>
        <div>{data.position}</div>
        <div className="flex flex-row justify-center align-middle text-center items-center gap-3">
          Projetos
          <ToolTip
            content={
              <>
                <div className="border-b">Projetos Ativos</div>
                {data?.projects?.map((project, index) => (
                  <div key={index}>
                    <div>{project}</div>
                  </div>
                ))}
              </>
            }
          >
            <div className="cursor-pointer transition-transform duration-200 hover:scale-110">
              <img src={projectsCardIcon} alt="" />
            </div>
          </ToolTip>
        </div>
      </div>
    </Card>
  );
}
