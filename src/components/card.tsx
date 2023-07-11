import { CSSProperties } from "react";

type CardProps = {
  children?: React.ReactNode;
  style?: CSSProperties;
};

export function Card(props: CardProps): React.JSX.Element {
  const { children, style } = props;

  return (
    <div
      className="bg-userCardBG rounded-2xl flex flex-col justify-center items-center shadow-md relative"
      style={style}
    >
      {children}
    </div>
  );
}
