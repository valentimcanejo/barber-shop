import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface SectionTitleProps {
  text: string;
  size: "sm" | "md" | "lg";
  className?: string;
}

const SectionTitle = ({
  text = "",
  size = "md",
  className,
}: SectionTitleProps) => {
  return (
    <h1
      className={clsx(
        `text-white drop-shadow-[0_16px_16px_rgba(0,0,0,0.8)]`,
        {
          "text-3xl": size === "sm",
          "text-6xl": size === "md",
          "text-9xl": size === "lg",
        },
        twMerge(className)
      )}
    >
      {text}
    </h1>
  );
};

export default SectionTitle;
