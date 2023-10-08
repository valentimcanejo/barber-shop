import { convertStringToSVG } from "@/utils/basicFunctions";

interface HeaderItemProps {
  text: string;
  icon?: string;
  link?: string;
}

const HeaderItem = ({ text, icon, link }: HeaderItemProps) => {
  return (
    <div className="rounded-lg mt-2 mx-auto">
      {icon !== "" ? (
        <a
          href={link}
          target="_blank"
          className="flex gap-2 place-items-center"
        >
          <span dangerouslySetInnerHTML={convertStringToSVG(icon!)} />
          <span>{text}</span>
        </a>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default HeaderItem;
