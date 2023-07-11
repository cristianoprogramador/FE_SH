import addbutton from "@/assets/icons/addbutton.svg";

interface AddButtonProps {
  onClick: () => void;
}

export function AddButton(props: AddButtonProps) {
  const { onClick } = props;

  return (
    <div
      className="flex cursor-pointer transition-transform duration-200 hover:scale-110 justify-center"
      onClick={onClick}
    >
      <img src={addbutton} alt="" />
    </div>
  );
}
