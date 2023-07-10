import { useState } from "react";
import { AddButton } from "../components/addButton";
import { SearchBar } from "../components/searchBar";

export function User() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="flex flex-col h-full items-center">
      <div className="mt-9">
        <SearchBar />
      </div>
      <div className="mt-9 pb-3 gap-8 align-middle items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <AddButton openModal={openModal} />
      </div>
    </div>
  );
}
