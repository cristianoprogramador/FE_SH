import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Maybe } from "yup";

type userForm = {
  name: string;
  email: string;
  position: string;
  imageUrl: string;
  salary: number;
  projects: Maybe<(string | undefined)[] | undefined>;
};

interface CreateUserModalProps {
  closeModal: () => void;
}

export function CreateUserModal({ closeModal }: CreateUserModalProps) {
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
    imageUrl: yup
      .string()
      .url("Digite uma URL válida")
      .required("A URL da foto é obrigatória"),
    salary: yup
      .number()
      .transform((value) =>
        Number.isNaN(value) ? undefined : (value as number | undefined)
      )
      .required("O salário é obrigatório"),
    projects: yup
      .array()
      .of(yup.string().oneOf(projects))
      .min(1, "Selecione pelo menos um projeto")
      .notRequired(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: userForm) => {
    console.log(data);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-userCardBG p-6 rounded-3xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <div className="flex flex-row items-center gap-4 justify-between">
              <label className="block">Nome:</label>
              <input
                {...register("name")}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            {errors.name && (
              <span className="text-red-500 font-bold">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <div className="flex flex-row items-center gap-4 justify-between">
              <label className="block">E-mail:</label>
              <input
                {...register("email")}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            {errors.email && (
              <span className="text-red-500 font-bold">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <div className="flex flex-row items-center gap-4 justify-between">
              <label className="block">Cargo:</label>
              <input
                {...register("position")}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            {errors.position && (
              <span className="text-red-500 font-bold">
                {errors.position.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <div className="flex flex-row items-center gap-4 justify-between">
              <label className="block">Foto (URL):</label>
              <input
                {...register("imageUrl")}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            {errors.imageUrl && (
              <span className="text-red-500 font-bold">
                {errors.imageUrl.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <div className="flex flex-row items-center gap-4 justify-between">
              <label className="block">Salário:</label>
              <input
                {...register("salary")}
                type="number"
                min={0}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            {errors.salary && (
              <span className="text-red-500 font-bold">
                {errors.salary.message}
              </span>
            )}
          </div>

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
            {errors.projects && (
              <span className="text-red-500 font-bold">
                {errors.projects.message}
              </span>
            )}
          </div>

          <div className="flex flex-row justify-between">
            <button
              className="bg-red-500 text-white py-2 px-4 rounded"
              onClick={closeModal}
            >
              Fechar
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
