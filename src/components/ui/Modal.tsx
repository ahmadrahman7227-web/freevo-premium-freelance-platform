import type { ReactNode } from "react";

import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* MODAL */}
      <div className="theme-card relative z-10 w-full max-w-2xl rounded-3xl p-8 mx-4 animate-[fadeIn_.25s_ease]">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 transition-all duration-300 hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="mt-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;