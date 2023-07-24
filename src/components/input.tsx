import { UseFormRegisterReturn } from "react-hook-form";
import { twJoin } from "tailwind-merge";

interface FormInputProps {
  label: string;
  register: UseFormRegisterReturn;
  error?: string;
  className?: string;
  placeholder?: string;
}

const INPUT_CLASSES = "border border-gray-300 p-2 rounded";

export function Input(props: FormInputProps) {
  const { label, register, error, className, placeholder } = props;
  const hasError = error != null;

  const inputWithExternalClasses = twJoin(INPUT_CLASSES, className);

  return (
    <div className="mb-4">
      <div className="flex flex-row items-center gap-4 justify-between">
        <label className="block">{label}:</label>
        <input
          {...register}
          className={inputWithExternalClasses}
          placeholder={placeholder}
        />
      </div>
      {hasError ? (
        <span className="text-red-500 font-bold">{error}</span>
      ) : null}
    </div>
  );
}
