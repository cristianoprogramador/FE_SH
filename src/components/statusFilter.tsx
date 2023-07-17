import { useState } from "react";
import { twJoin } from "tailwind-merge";

interface OptionStyle {
  option: string;
  status: string;
  activeClass: string;
  inactiveClass: string;
}

interface StatusFilterProps {
  onStatusChange: (status: string) => void;
}

export function StatusFilter({ onStatusChange }: StatusFilterProps) {
  const [activeOption, setActiveOption] = useState("Todos");

  const handleOptionClick = (optionStyle: OptionStyle) => {
    setActiveOption(optionStyle.option);
    onStatusChange(optionStyle.status);
  };

  const BASE_CLASSES = `py-2 px-4 rounded-lg focus:outline-none transition-colors duration-300`;

  const optionStyles = [
    {
      option: "Ativo",
      status: "Active",
      activeClass: "bg-green-500 text-white font-bold",
      inactiveClass: "text-gray-700 p-2",
    },
    {
      option: "Todos",
      status: "All",
      activeClass: "bg-gray-500 text-white font-bold",
      inactiveClass: "text-gray-700 p-2",
    },
    {
      option: "Inativos",
      status: "Inactive",
      activeClass: "bg-red-500 text-white font-bold",
      inactiveClass: "text-gray-700 p-2",
    },
  ];

  return (
    <div className="flex items-center justify-around bg-gray-200 rounded-lg w-64">
      {optionStyles.map((optionStyle) => (
        <button
          key={optionStyle.option}
          className={twJoin(
            BASE_CLASSES,
            activeOption === optionStyle.option
              ? optionStyle.activeClass
              : optionStyle.inactiveClass
          )}
          onClick={() => handleOptionClick(optionStyle)}
        >
          {optionStyle.option}
        </button>
      ))}
    </div>
  );
}
