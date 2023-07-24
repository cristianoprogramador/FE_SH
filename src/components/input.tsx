import { UseFormRegisterReturn } from "react-hook-form";
import { twJoin } from "tailwind-merge";

interface InputCustomProps {
  label: string;
  register: UseFormRegisterReturn;
  error?: string;
}

type InputProps = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  "className" | "placeholder" | "value" | "min" | "type"
> &
  InputCustomProps;

const INPUT_CLASSES = "border border-gray-300 p-2 rounded";

export function Input(props: InputProps) {
  const { label, register, error, className, ...restOfInputProps } = props;
  const hasError = error != null;

  const inputWithExternalClasses = twJoin(INPUT_CLASSES, className);

  return (
    <div className="mb-4">
      <div className="flex flex-row items-center gap-4 justify-between">
        <label className="block">{label}:</label>
        <input
          {...register}
          className={inputWithExternalClasses}
          {...restOfInputProps}
        />
      </div>
      {hasError ? (
        <span className="text-red-500 font-bold">{error}</span>
      ) : null}
    </div>
  );
}
