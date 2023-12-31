import { AddButton } from "@/components/addButton";
import { Modal } from "@/components/modal";
import { SearchBar } from "@/components/searchBar";
import { StatusFilter, StatusFilterOptions } from "@/components/statusFilter";
import { UserCard } from "@/components/userCard";
import { User as UserInterface } from "@/interfaces/userInterface";
import { useMemo, useState } from "react";
import { Input } from "@/components/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/button";
import { Maybe, Query, User as UserProps } from "../__generated__/graphql";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "@/lib/queries";

export type UserForm = {
  name: string;
  email: string;
  birthDate?: string;
  position?: string;
  salary?: number;
  projects: yup.Maybe<(string | undefined)[] | undefined>;
  imageUrl?: string;
};

// MOCK DATA WILL BE REMOVE AFTER INTEGRATION WITH BACKEND
const userData: UserInterface[] = [
  {
    id: 1,
    name: "Cristiano Silva",
    email: "cristiano@email.com",
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
    email: "carmack@email.com",
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
    email: "gates@email.com",
    birthDate: "705888000000",
    position: "Designer UI/UX",
    salary: 4000,
    status: "Active",
    projects: ["My Life Dashboard"],
    imageUrl: "https://i.imgur.com/v76rx7g.jpg",
  },
];

export function User() {
  const { loading, error, data } = useQuery<Query>(GET_USERS);
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
    if (loading) return [];

    const usersFromServer = data?.users || [];


    return usersFromServer.filter((user) => {
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

  const projects = [
    "Create your Burger",
    "Laughing and Learning",
    "My Life Dashboard",
  ];

  const schema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório"),
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("O e-mail é obrigatório"),
    position: yup.string().required("O cargo é obrigatório"),
    imageUrl: yup.string().url("Digite uma URL válida"),
    salary: yup
      .number()
      .transform((value) =>
        Number.isNaN(value) ? undefined : (value as number | undefined)
      )
      .required("O salário é obrigatório"),
    projects: yup.array().of(yup.string().oneOf(projects)),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      projects: [],
    },
  });

  const onSubmit = (data: UserForm) => {
    console.log(data);
  };

  console.log("info do BD", data?.users)
  const usersFinalData = JSON.stringify(data?.users, null, 2)
  console.log("info do BD", usersFinalData)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ocorreu um erro!</div>;
  }

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-center font-bold mb-5 text-lg">
              Adicione um Novo Usuário
            </p>
            <Input
              label="Nome"
              register={register("name")}
              error={errors.name?.message}
            />
            <Input
              label="Email"
              register={register("email")}
              error={errors.email?.message}
            />
            <Input
              label="Cargo"
              register={register("position")}
              error={errors.position?.message}
            />
            <Input
              label="Foto (URL)"
              register={register("imageUrl")}
              error={errors.imageUrl?.message}
            />
            <Input
              label="Salário"
              register={register("salary")}
              error={errors.salary?.message}
              type="number"
              min={0}
            />
            <div className="mb-4">
              <div className="flex flex-row items-center gap-4 justify-between">
                <label className="block">Projetos:</label>
                <div className="flex flex-col max-h-40 overflow-y-auto">
                  {projects.map((project) => (
                    <div key={project} className="flex flex-row  items-center">
                      <input
                        type="checkbox"
                        {...register("projects")}
                        value={project}
                        id={project}
                        className="mr-2"
                      />
                      <label htmlFor={project}>{project}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-around">
              <Button
                children="Fechar"
                onClick={closeManageUserModal}
                className="bg-ButtonBgRed text-white font-semibold"
              />
              <Button
                children="Salvar"
                type="submit"
                className="bg-ButtonBgGreen text-white font-semibold"
              />
            </div>
          </form>
        </Modal>
      ) : null}
    </div>
  );
}
