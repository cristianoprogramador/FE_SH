import { twJoin } from "tailwind-merge";

interface AvatarProps {
  imageUrl?: string;
  className?: string;
}

export function Avatar(props: AvatarProps) {
  const { imageUrl, className } = props;

  return (
    <img
      src={imageUrl}
      alt="userPhoto"
      className={twJoin("border-white border-2 rounded-full", className)}
    />
  );
}
