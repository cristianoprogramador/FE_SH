import projectsCardIcon from "@/assets/icons/projectsCardIcon.svg";
import editUser from "@/assets/icons/editUser.svg";
import { Avatar } from "./avatar";
import { Card } from "./card";
import { ToolTip } from "./tooltip";
import { User } from "@/interfaces/userInterface";
import { useState } from "react";
import { Modal } from "./modal";
import { Input } from "./input";
import { Button } from "./button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { UserForm } from "@/pages/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { StatusSwitch } from "./statusSwitch";

interface UserCardProps {
  data: User;
}

const projects = [
  "Create your Burger",
  "Laughing and Learning",
  "My Life Dashboard",
];

export function UserCard(props: UserCardProps) {
  const { data } = props;
  const [manageUserModalVisibility, setManageUserModalVisibility] =
    useState(false);
  const [status, setStatus] = useState(data.status);

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
  };

  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);

  const openEditUserModal = () => {
    setManageUserModalVisibility(true);
    setSelectedProjects(data.projects || []); // Definindo os projetos selecionados
  };

  const closeModal = () => {
    setManageUserModalVisibility(false);
  };

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
    status: yup.string().oneOf(["Active", "Inactive"], "Tipo inválido"),
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

  return (
    <Card className="h-52 w-48 relative">
      <Avatar imageUrl={data?.imageUrl} className="h-16 w-16" />
      <img
        src={editUser}
        alt="edit user"
        className="absolute right-3 top-3 cursor-pointer h-6 w-6"
        onClick={openEditUserModal}
      />
      <div className="mt-4 font-semibold gap-1 text-center">
        <div>{data.name}</div>
        <div>{data.position}</div>
        <div className="flex flex-row justify-center align-middle text-center items-center gap-3">
          Projetos
          <ToolTip
            content={
              <>
                <div className="border-b">Projetos Ativos</div>
                {data?.projects?.map((project, index) => (
                  <div key={index}>
                    <div>{project}</div>
                  </div>
                ))}
              </>
            }
          >
            <div className="cursor-pointer transition-transform duration-200 hover:scale-110">
              <img src={projectsCardIcon} alt="" />
            </div>
          </ToolTip>
        </div>
      </div>
      {manageUserModalVisibility && (
        <Modal closeModal={closeModal}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-center font-bold mb-5 text-lg">
              Informações Gerais
            </p>
            <Input
              label="Nome"
              register={register("name")}
              error={errors.name?.message}
              defaultValue={data.name}
            />
            <Input
              label="Email"
              register={register("email")}
              error={errors.email?.message}
              defaultValue={data.email}
            />
            <Input
              label="Cargo"
              register={register("position")}
              error={errors.position?.message}
              defaultValue={data.position}
            />
            <Input
              label="Foto (URL)"
              register={register("imageUrl")}
              error={errors.imageUrl?.message}
              defaultValue={data.imageUrl}
            />
            <Input
              label="Salário"
              register={register("salary")}
              error={errors.salary?.message}
              defaultValue={data.salary}
              type="number"
              min={0}
            />
            <div className="mb-4">
              <div className="flex flex-row items-center gap-4 justify-between">
                <label className="block">Projetos:</label>
                <div className="flex flex-col max-h-40 overflow-y-auto">
                  {projects.map((project) => (
                    <div key={project} className="flex flex-row items-center">
                      <input
                        type="checkbox"
                        {...register("projects")}
                        value={project}
                        id={project}
                        className="mr-2"
                        defaultChecked={selectedProjects.includes(project)}
                      />
                      <label htmlFor={project}>{project}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <StatusSwitch
              register={register("status")}
              defaultValue={status}
              onStatusChange={handleStatusChange}
            />
            <div className="flex flex-row justify-around">
              <Button
                children="Fechar"
                onClick={closeModal}
                className="bg-ButtonBgRed text-white font-semibold hover:bg-ButtonHoverBgRed"
              />
              <Button
                children="Salvar"
                type="submit"
                className="bg-ButtonBgGreen text-white font-semibold hover:bg-ButtonHoverBgGreen"
              />
            </div>
          </form>
        </Modal>
      )}
    </Card>
  );
}
