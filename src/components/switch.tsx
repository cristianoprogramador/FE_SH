import { SetStateAction, useState } from "react";

export function Switch() {
  const [activeOption, setActiveOption] = useState("ativos");

  const handleOptionClick = (option: SetStateAction<string>) => {
    setActiveOption(option);
  };

  return (
    <div className="flex items-center justify-between bg-gray-200 rounded-lg">
      <button
        className={`py-2 px-4 rounded-lg focus:outline-none transition-colors duration-300 ${
          activeOption === "ativos"
            ? "bg-green-500 text-white font-bold"
            : "text-gray-700"
        }`}
        onClick={() => handleOptionClick("ativos")}
      >
        Ativos
      </button>
      <button
        className={`py-2 px-4 rounded-lg focus:outline-none transition-colors duration-300 ${
          activeOption === "todos"
            ? "bg-gray-500 text-white font-bold"
            : "text-gray-700"
        }`}
        onClick={() => handleOptionClick("todos")}
      >
        Todos
      </button>
      <button
        className={`py-2 px-4 rounded-lg focus:outline-none transition-colors duration-300 ${
          activeOption === "inativos"
            ? "bg-red-500 text-white font-bold"
            : "text-gray-700"
        }`}
        onClick={() => handleOptionClick("inativos")}
      >
        Inativos
      </button>
    </div>
  );
}
