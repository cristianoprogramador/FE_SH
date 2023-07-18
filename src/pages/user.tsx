import { AddButton } from "@/components/addButton";
import { Modal } from "@/components/modal";
import { SearchBar } from "@/components/searchBar";
import { StatusFilter, StatusFilterOptions } from "@/components/statusFilter";
import { UserCard } from "@/components/userCard";
import { User as UserInterface } from "@/interfaces/userInterface";
import { useMemo, useState } from "react";

// MOCK DATA WILL BE REMOVE AFTER INTEGRATION WITH BACKEND
const userData: UserInterface[] = [
  {
    id: 1,
    name: "Cristiano Silva",
    birthDate: "694224000000",
    position: "Dev Frontend",
    salary: 3000,
    status: "Active",
    projects: [
      "Create your Burger",
      "Learning and Laughing",
      "My Life Dashboard",
    ],
    imageUrl: "https://avatars.githubusercontent.com/u/102186472?v=4",
  },
  {
    id: 2,
    name: "John Carmack",
    birthDate: "594172800000",
    position: "Dev Backend",
    salary: 3500,
    status: "Inactive",
    projects: ["Create your Burger", "Learning and Laughing"],
    imageUrl: "https://i.imgur.com/knDwrmG.jpg",
  },
  {
    id: 3,
    name: "Bill Gates",
    birthDate: "705888000000",
    position: "Designer UI/UX",
    salary: 4000,
    status: "Active",
    projects: ["My Life Dashboard"],
    imageUrl: "https://i.imgur.com/v76rx7g.jpg",
  },
  {
    id: 4,
    name: "Bill Gates",
    birthDate: "705888000000",
    position: "Designer UI/UX",
    salary: 4000,
    status: "Inactive",
    projects: ["My Life Dashboard"],
    imageUrl: "https://i.imgur.com/v76rx7g.jpg",
  },
  {
    id: 5,
    name: "Bill Gates",
    birthDate: "705888000000",
    position: "Designer UI/UX",
    salary: 4000,
    status: "Inactive",
    projects: ["My Life Dashboard"],
    imageUrl: "https://i.imgur.com/v76rx7g.jpg",
  },
  {
    id: 6,
    name: "Bill Gates",
    birthDate: "705888000000",
    position: "Designer UI/UX",
    salary: 4000,
    status: "Inactive",
    projects: ["My Life Dashboard"],
    imageUrl: "https://i.imgur.com/v76rx7g.jpg",
  },
];

export function User() {
  const [usersData, setUsersData] = useState<UserInterface[]>(userData);
  const [searchBarTerm, setSearchBarTerm] = useState("");
  const [selectedStatusFilter, setSelectedStatusFilter] =
    useState<StatusFilterOptions>("ALL");
  const [manageUserModalVisibility, setManageUserModalVisibility] =
    useState(false);

  const handleSearchTermChange = (term: string) => {
    setSearchBarTerm(term);
  };

  const handleStatusUserChange = (status: StatusFilterOptions) => {
    setSelectedStatusFilter(status);
  };

  const filteredUsers = useMemo(() => {
    return usersData.filter((user) => {
      const lowerCaseTerm = searchBarTerm.toLowerCase();

      return (
        (selectedStatusFilter === "ALL" ||
          user.status.toLowerCase() === selectedStatusFilter.toLowerCase()) &&
        (user.name.toLowerCase().includes(lowerCaseTerm) ||
          user.position?.toLowerCase().includes(lowerCaseTerm) ||
          user.projects?.some((project) =>
            project.toLowerCase().includes(lowerCaseTerm)
          ))
      );
    });
  }, [searchBarTerm, usersData, selectedStatusFilter]);

  const openManageUserModal = () => {
    setManageUserModalVisibility(true);
  };

  const closeManageUserModal = () => {
    setManageUserModalVisibility(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col h-full items-center">
      <div className="flex flex-row mt-9 justify-center gap-8 w-full">
        <SearchBar onSearchTermChange={handleSearchTermChange} />
        <StatusFilter
          onStatusChange={handleStatusUserChange}
          currentStatus={selectedStatusFilter}
        />
      </div>
      <div className="mt-9 pb-3 gap-8 align-middle items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <AddButton onClick={openManageUserModal} />
        {filteredUsers.map((user) => (
          <UserCard data={user} key={user.id} />
        ))}
      </div>
      {manageUserModalVisibility ? (
        <Modal closeModal={closeManageUserModal}>
          <div>Modal</div>
          <button onClick={closeManageUserModal}>Close X</button>
        </Modal>
      ) : null}
    </div>
  );
}
