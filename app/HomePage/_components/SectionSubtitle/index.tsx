import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface SectionSubtitleProps {
  text: string;
  size: "sm" | "md" | "lg";
  className?: string;
}

const SectionSubtitle = ({
  text = "",
  size = "md",
  className,
}: SectionSubtitleProps) => {
  return (
    <h1
      className={clsx(
        `text-white drop-shadow-[0_16px_16px_rgba(0,0,0,0.8)]`,
        {
          "text-xl": size === "sm",
          "text-3xl": size === "md",
          "text-5xl": size === "lg",
        },
        twMerge(className)
      )}
    >
      {text}
    </h1>
  );
};

export default SectionSubtitle;
