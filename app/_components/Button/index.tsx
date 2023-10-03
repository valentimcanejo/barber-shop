import clsx from "clsx";
import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  asChild?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "success" | "error" | "standard" | "alert" | "primary";
  children: React.ReactNode;
}

export const Button = ({
  value = "",
  fullWidth = false,
  size = "md",
  variant = "primary",
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={clsx(
        "flex justify-center items-center rounded-l-lg text-white rounded-r-lg shadow-xl",
        {
          "w-full": fullWidth,
          "px-1 py-1 gap-1": size === "xs",
          "px-4 py-1 gap-1": size === "sm",
          "px-6 py-3 gap-3": size === "md",
          "px-8 py-3 gap-4 text-base font-bold": size === "lg",
          "px-8 py-7 gap-4 text-base font-bold": size === "xl",
          "bg-black": variant === "primary",
          "bg-error": variant === "error",
          "bg-success": variant === "success",
          "bg-orange-500": variant === "alert",
          "bg-neutral-600": variant === "standard",
        }
      )}
    >
      {children}
    </button>
  );
};
