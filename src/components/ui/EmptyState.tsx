import type { ReactNode } from "react";

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
  buttonText?: string;
  onClick?: () => void;
}

const EmptyState = ({
  icon,
  title,
  description,
  buttonText,
  onClick,
}: EmptyStateProps) => {
  return (
    <div className="theme-card flex flex-col items-center justify-center rounded-3xl p-12 text-center">
      {/* ICON */}
      <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/5">
        {icon}
      </div>

      {/* TITLE */}
      <h2 className="mt-8 text-3xl font-bold">
        {title}
      </h2>

      {/* DESCRIPTION */}
      <p className="theme-muted mt-4 max-w-lg leading-relaxed">
        {description}
      </p>

      {/* BUTTON */}
      {buttonText && (
        <button
          onClick={onClick}
          className="mt-8 h-14 rounded-2xl bg-white px-8 font-semibold text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;