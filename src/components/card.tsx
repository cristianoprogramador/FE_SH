import { twJoin } from "tailwind-merge";

type CardProps = {
  children?: React.ReactNode;
  className?: string;
};

export function Card(props: CardProps): React.JSX.Element {
  const { children, className } = props;

  return (
    <div
      className={twJoin(
        "bg-userCardBG rounded-2xl flex flex-col justify-center items-center shadow-md relative",
        className
      )}
    >
      {children}
    </div>
  );
}
