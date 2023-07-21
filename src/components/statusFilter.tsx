import { twJoin } from "tailwind-merge";

export type StatusFilterOptions = "ACTIVE" | "INACTIVE" | "ALL";

type OptionLabel = "Ativos" | "Todos" | "Inativos";

interface OptionStyle {
  label: OptionLabel;
  status: StatusFilterOptions;
  activeClass: string;
}

interface StatusFilterProps {
  onStatusChange: (status: StatusFilterOptions) => void;
  currentStatus: StatusFilterOptions;
}

const BASE_ACTIVE_CLASS = "text-white font-bold";

const BASE_CLASSES = `py-2 px-4 rounded-lg focus:outline-none transition-colors duration-300 text-gray-700 p-2`;

const OPTIONS = [
  {
    label: "Ativos",
    status: "ACTIVE",
    activeClass: "bg-green-500",
  },
  {
    label: "Todos",
    status: "ALL",
    activeClass: "bg-gray-500",
  },
  {
    label: "Inativos",
    status: "INACTIVE",
    activeClass: "bg-red-500",
  },
] satisfies OptionStyle[];

export function StatusFilter(props: StatusFilterProps) {
  const { onStatusChange, currentStatus } = props;

  const handleOptionClick = (optionStyle: OptionStyle) => {
    onStatusChange(optionStyle.status);
  };

  return (
    <div className="flex items-center justify-around bg-gray-200 rounded-lg w-64">
      {OPTIONS.map((option) => {
        const currentClasses = twJoin(
          BASE_CLASSES,
          currentStatus === option.status
            ? twJoin(BASE_ACTIVE_CLASS, option.activeClass)
            : ""
        );

        return (
          <button
            key={option.label}
            className={currentClasses}
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
