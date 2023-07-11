import projectsCardIcon from "@/assets/icons/projectsCardIcon.svg";
import { Avatar } from "./avatar";
import { Card } from "./card";
import { User } from "@/interfaces/userInterface";

interface UserCardProps {
  data: User;
}

export function UserCard(props: UserCardProps) {
  const [showModal, setShowModal] = useState(false);
  const { data } = props;

  const handleMouseEnter = () => {
    setShowModal(true);
  };

  const handleMouseLeave = () => {
    setShowModal(false);
  };

  return (
    <Card className="h-52 w-48">
      <Avatar imageUrl={data?.imageUrl} className="h-16 w-16" />
      <div className="mt-4 font-semibold gap-1 text-center">
        <div>{data.name}</div>
        <div>{data.position}</div>
        <div className="flex flex-row justify-center align-middle text-center items-center gap-3 ">
          Projetos
          <div className="cursor-pointer transition-transform duration-200 hover:scale-110">
            <img
              src={projectsCardIcon}
              alt=""
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
