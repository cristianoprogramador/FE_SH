import { useState } from "react";
import { twJoin } from "tailwind-merge";

type Status = "ACTIVE" | "INACTIVE" | "ALL";

interface OptionStyle {
  label: string;
  status: string;
  activeClass: string;
  inactiveClass: string;
}

interface StatusFilterProps {
  onStatusChange: (status: string) => void;
}

const BASE_CLASSES = `py-2 px-4 rounded-lg focus:outline-none transition-colors duration-300`;

const OPTIONS = [
  {
    label: "Ativo",
    status: "Active",
    activeClass: "bg-green-500 text-white font-bold",
    inactiveClass: "text-gray-700 p-2",
  },
  {
    label: "Todos",
    status: "All",
    activeClass: "bg-gray-500 text-white font-bold",
    inactiveClass: "text-gray-700 p-2",
  },
  {
    label: "Inativos",
    status: "Inactive",
    activeClass: "bg-red-500 text-white font-bold",
    inactiveClass: "text-gray-700 p-2",
  },
];

export function StatusFilter(props: StatusFilterProps) {
  const { onStatusChange } = props;
  const [activeOption, setActiveOption] = useState("Todos");

  const handleOptionClick = (optionStyle: OptionStyle) => {
    setActiveOption(optionStyle.label);
    onStatusChange(optionStyle.status);
  };

  return (
    <div className="flex items-center justify-around bg-gray-200 rounded-lg w-64">
      {OPTIONS.map((option) => (
        <button
          key={option.label}
          className={twJoin(
            BASE_CLASSES,
            activeOption === option.label
              ? option.activeClass
              : option.inactiveClass
          )}
          onClick={() => handleOptionClick(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
