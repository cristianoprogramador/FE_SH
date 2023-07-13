import { twJoin } from "tailwind-merge";
import userDefaultImg from "@/assets/icons/user.svg";

interface AvatarProps {
  imageUrl?: string;
  className?: string;
}

export function Avatar(props: AvatarProps) {
  const { imageUrl, className } = props;
  const avatarImg = imageUrl ?? userDefaultImg;

  console.log(imageUrl);

  return (
    <img
      src={avatarImg}
      alt="userPhoto"
      className={twJoin("border-white border-2 rounded-full", className)}
    />
  );
}
