import { CSSProperties } from "react";

interface AvatarProps {
  imageUrl: string;
  style?: CSSProperties;
}

export function Avatar(props: AvatarProps) {
  const { imageUrl, style } = props;

  return (
    <img
      src={imageUrl}
      alt="userPhoto"
      className="rounded-full border-white border-2"
      style={style}
    />
  );
}
