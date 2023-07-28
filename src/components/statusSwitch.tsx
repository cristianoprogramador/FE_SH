import { UseFormRegisterReturn } from "react-hook-form";
import { twJoin } from "tailwind-merge";
import { Modal } from "./modal";
import { Button } from "./button";
import { useState } from "react";

interface StatusSwitchProps {
  register: UseFormRegisterReturn;
  defaultValue: string;
  onStatusChange: (newStatus: string) => void;
}

type StatusTypeClassProps = { isActive: string; buttonStatus: string };

const SWITCH_CLASSES = "px-4 py-2 rounded-lg cursor-pointer text-white";

function isActiveClass(props: StatusTypeClassProps) {
  const { isActive, buttonStatus } = props;

  return isActive === "Active"
    ? buttonStatus === "statusActive"
      ? "bg-ButtonBgGreen"
      : "bg-gray-600"
    : buttonStatus === "statusInactive"
    ? "bg-ButtonBgRed"
    : "bg-gray-600";
}

export function StatusSwitch(props: StatusSwitchProps) {
  const { register, defaultValue, onStatusChange } = props;

  const [confirmStatusChange, setConfirmStatusChange] = useState(false);
  const [newState, setNewState] = useState(defaultValue);

  const openConfirmationModal = (newStatus: string) => {
    if (newStatus === defaultValue) {
      return null;
    } else {
      setConfirmStatusChange(true);
      setNewState(newStatus);
    }
  };

  const handleConfirmStatusChange = () => {
    setConfirmStatusChange(false);
    onStatusChange(newState);
  };

  const statusPortuguese = () => {
    if (newState === "Active") {
      return "Ativo";
    } else {
      return "Inativo";
    }
  };

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
              onClick={() => openConfirmationModal("Active")}
            />
            <label
              htmlFor="statusActive"
              className={twJoin(
                SWITCH_CLASSES,
                isActiveClass({
                  isActive: defaultValue,
                  buttonStatus: "statusActive",
                })
              )}
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
              onClick={() => openConfirmationModal("Inactive")}
            />
            <label
              htmlFor="statusInactive"
              className={twJoin(
                SWITCH_CLASSES,
                isActiveClass({
                  isActive: defaultValue,
                  buttonStatus: "statusInactive",
                })
              )}
            >
              Inativo
            </label>
          </div>
        </div>
      </div>
      {confirmStatusChange ? (
        <Modal closeModal={() => setConfirmStatusChange(false)}>
          <div className="text-center">
            <p>Você aceita alterar o status para {statusPortuguese()}</p>
            <div className="flex justify-center mt-4">
              <Button
                children="Não"
                onClick={() => setConfirmStatusChange(false)}
                className="bg-ButtonBgRed text-white font-semibold hover:bg-ButtonHoverBgRed"
              />
              <Button
                children="Sim"
                onClick={() => handleConfirmStatusChange()}
                className="bg-ButtonBgGreen text-white font-semibold hover:bg-ButtonHoverBgGreen ml-4"
              />
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
