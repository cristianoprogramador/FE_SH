import { useMemo, useState } from "react";
import { AddButton } from "@/components/addButton";
import { UserCard } from "@/components/userCard";
import { SearchBar } from "@/components/searchBar";
import { User as UserInterface } from "@/interfaces/userInterface";
import { Switch } from "@/components/switch";

// MOCK DATA WILL BE REMOVE AFTER INTEGRATION WITH BACKEND
const userData = [
  {
    id: 1,
    name: "Cristiano Silva",
    birthDate: "694224000000",
    position: "Dev Frontend",
    salary: 3000,
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
    projects: ["Create your Burger", "Learning and Laughing"],
    imageUrl: "https://i.imgur.com/knDwrmG.jpg",
  },
  {
    id: 3,
    name: "Bill Gates",
    birthDate: "705888000000",
    position: "Designer UI/UX",
    salary: 4000,
    projects: ["My Life Dashboard"],
    imageUrl: "https://i.imgur.com/v76rx7g.jpg",
  },
  {
    id: 4,
    name: "Bill Gates",
    birthDate: "705888000000",
    position: "Designer UI/UX",
    salary: 4000,
    projects: ["My Life Dashboard"],
    imageUrl: "https://i.imgur.com/v76rx7g.jpg",
  },
  {
    id: 5,
    name: "Bill Gates",
    birthDate: "705888000000",
    position: "Designer UI/UX",
    salary: 4000,
    projects: ["My Life Dashboard"],
    imageUrl: "https://i.imgur.com/v76rx7g.jpg",
  },
  {
    id: 6,
    name: "Bill Gates",
    birthDate: "705888000000",
    position: "Designer UI/UX",
    salary: 4000,
    projects: ["My Life Dashboard"],
    imageUrl: "https://i.imgur.com/v76rx7g.jpg",
  },
];

export function User() {
  const [showModal, setShowModal] = useState(false);
  const [usersData, setUsersData] = useState<UserInterface[]>(userData);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = useMemo(() => {
    if (searchTerm.length > 0) {
      const lowerCaseTerm = searchTerm.toLowerCase();
      return usersData.filter((user) => {
        return (
          user.name.toLowerCase().includes(lowerCaseTerm) ||
          user.position?.toLowerCase().includes(lowerCaseTerm) ||
          user.projects?.some((project) =>
            project.toLowerCase().includes(lowerCaseTerm)
          )
        );
      });
    } else {
      return usersData;
    }
  }, [searchTerm, usersData]);

  const openModal = () => {
    setShowModal(true);
  };

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="flex flex-col h-full items-center">
      <div className="flex flex-row mt-9 justify-center gap-8 w-full">
        <SearchBar onSearchTermChange={handleSearchTermChange} />
        <Switch />
      </div>
      <div className="mt-9 pb-3 gap-8 align-middle items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <AddButton onClick={openModal} />
        {filteredUsers.map((user) => (
          <UserCard data={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}
