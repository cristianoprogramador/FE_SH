import { twJoin } from "tailwind-merge";
import user from "@/assets/icons/user.svg";

interface AvatarProps {
  imageUrl?: string;
  className?: string;
}

export function Avatar(props: AvatarProps) {
  const { imageUrl, className } = props;

  console.log(imageUrl);

  return (
    <img
      src={imageUrl === undefined ? user : imageUrl}
      alt="userPhoto"
      className={twJoin("border-white border-2 rounded-full", className)}
    />
  );
}
