<<<<<<< HEAD
import type { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    disabled?: boolean
}

export function Button({ title, disabled, ...rest }: ButtonProps) {
    return (
        <button
        {...rest}
        disabled={disabled}
        className={`w-full p-5 border-none rounded-lg font-archivo-semibold mt-10
            ${disabled
                ? "bg-gray-shape text-text-complement cursor-not-allowed"
                : "bg-green opacity-90 hover:bg-green hover:opacity-100 transition text-white cursor-pointer"
            }
        `}
        >
            {title}
        </button>
    )
=======
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: ReactNode;
}

export function Button({ text, children, className = "", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`w-full h-14 bg-green hover:bg-green-hover text-white font-poppins-semibold rounded-lg flex items-center justify-center transition-colors disabled:opacity-50 cursor-pointer ${className}`}
    >
      {text || children}
    </button>
  );
>>>>>>> 2bbea5fd2db0c56718204d642176d3a6629f0853
}