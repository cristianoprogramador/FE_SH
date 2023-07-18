import { twJoin } from "tailwind-merge";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  text?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const BUTTON_CLASSES = "py-2 px-4 rounded";

export function Button(props: ButtonProps) {
  const { onClick, className, text, type } = props;

  const buttonWithExternalClasses = twJoin(BUTTON_CLASSES, className);

  return (
    <button className={buttonWithExternalClasses} onClick={onClick} type={type}>
      {text}
    </button>
  );
}
