import projectsCardIcon from "../assets/icons/projectsCardIcon.svg";
import { UserCardProps } from "@/interfaces/userInterface";

export function UserCard(props: UserCardProps) {
  const { data } = props;
  const imageUrl = data.imageUrl ?? "";

  return (
    <div className="bg-userCardBG w-48 h-52 rounded-2xl flex flex-col justify-center items-center shadow-md relative">
      <img
        src={imageUrl}
        alt="userPhoto"
        className="rounded-full h-16 w-16 border-white border-2"
      />
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
    </div>
  );
}
