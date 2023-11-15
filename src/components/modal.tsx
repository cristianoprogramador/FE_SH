import { MouseEvent, useRef } from "react";

interface CreateUserModalProps {
  children?: React.ReactNode;
  closeModal: () => void;
}

export function Modal(props: CreateUserModalProps) {
  const { closeModal, children } = props;
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
      onClick={handleOutsideClick}
    >
      <div ref={modalRef} className="bg-cardBG p-6 rounded-3xl">
        {children}
      </div>
    </div>
  );
}
