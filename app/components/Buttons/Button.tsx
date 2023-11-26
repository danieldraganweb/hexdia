import { type } from "os";
import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  ariaLabel,
  type,
  disabled,
}) => {
  return (
    <div>
      <button
        className={className}
        onClick={onClick}
        aria-label={ariaLabel}
        type={type}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
