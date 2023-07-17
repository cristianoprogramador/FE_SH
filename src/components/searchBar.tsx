import { twJoin } from "tailwind-merge";

interface SearchBarProps {
  className?: string;
  onSearchTermChange: (term: string) => void;
}

const BASE_CLASSES = `p-2 border border-gray-500 rounded-lg bg-transparent text-black placeholder:text-black w-80 pl-7 shadow-md`;

export function SearchBar(props: SearchBarProps) {
  const { className, onSearchTermChange } = props;

  const cardWithExternalClasses = twJoin(BASE_CLASSES, className);

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const term = event.target.value;
    onSearchTermChange(term);
  };

  return (
    <input
      type="text"
      placeholder="Pesquisar..."
      className={cardWithExternalClasses}
      onChange={handleSearchTermChange}
    />
  );
}
