import addbutton from "../assets/icons/addbutton.svg";

interface AddButtonProps {
  openModal: () => void;
}

export function AddButton({ openModal }: AddButtonProps) {
  return (
    <div
      className="flex cursor-pointer transition-transform duration-200 hover:scale-110 justify-center"
      onClick={openModal}
    >
      <img src={addbutton} alt="" />
    </div>
  );
}
