import { UseFormRegisterReturn } from "react-hook-form";

interface StatusSwitchProps {
  register: UseFormRegisterReturn;
  defaultValue: string;
  onStatusChange: (newStatus: string) => void;
}

export function StatusSwitch(props: StatusSwitchProps) {
  const { register, defaultValue, onStatusChange } = props;

  return (
    <div className="mb-4">
      <div className="flex flex-row items-center gap-4 justify-between">
        <label className="block">Status:</label>
        <div className="flex flex-row justify-center">
          <div className="flex">
            <input
              type="radio"
              {...register}
              value="Active"
              id="statusActive"
              defaultChecked={defaultValue === "Active"}
              className="hidden"
              onClick={() => onStatusChange("Active")}
            />
            <label
              htmlFor="statusActive"
              className={`${
                defaultValue === "Active"
                  ? "bg-ButtonBgGreen text-white"
                  : "bg-gray-600 text-white"
              } px-4 py-2 rounded-lg cursor-pointer hover:bg-ButtonHoverBgGreen hover:text-white`}
            >
              Ativo
            </label>
          </div>
          <div className="flex">
            <input
              type="radio"
              {...register}
              value="Inactive"
              id="statusInactive"
              defaultChecked={defaultValue === "Inactive"}
              className="hidden"
              onClick={() => onStatusChange("Inactive")}
            />
            <label
              htmlFor="statusInactive"
              className={`${
                defaultValue === "Inactive"
                  ? "bg-red-600 text-white"
                  : "bg-gray-600 text-white"
              } px-4 py-2 rounded-lg cursor-pointer hover:bg-ButtonHoverBgRed hover:text-white`}
            >
              Inativo
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
