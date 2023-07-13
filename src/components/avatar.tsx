import { twJoin } from "tailwind-merge";
import userDefaultImg from "@/assets/icons/user.svg";

interface AvatarProps {
  imageUrl?: string;
  className?: string;
}

const BASE_CLASSES = "rounded-full border-white border-2";

export function Avatar(props: AvatarProps) {
  const { imageUrl, className } = props;
  const avatarImg = imageUrl ?? userDefaultImg;

  const avatarWithExternalClasses = twJoin(BASE_CLASSES, className);

  console.log(imageUrl);

  return (
    <img
      src={avatarImg}
      alt="userPhoto"
      className={avatarWithExternalClasses}
    />
  );
}
