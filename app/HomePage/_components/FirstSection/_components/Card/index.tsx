import CardIcon from "./CardIcon";
import CardImage from "./CardImage";
import CardSubtitle from "./CardSubtitle";
import CardTitle from "./CardTitle";

interface CardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  iconUrl: string;
}

const Card = ({ title, subtitle, imageUrl, iconUrl }: CardProps) => {
  return (
    <div className="w-full bg-white transition hover:bg-opacity-100 rounded-xl flex flex-col gap-2">
      <CardImage imageUrl={imageUrl} />

      <div className="flex flex-col p-4 relative">
        <CardIcon iconUrl={iconUrl} />
        <CardTitle text={title} />
        <CardSubtitle text={subtitle} />
      </div>
    </div>
  );
};

export default Card;
