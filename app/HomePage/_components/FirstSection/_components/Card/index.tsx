import CardImage from "./CardImage";
import CardSubtitle from "./CardSubTitle";
import CardTitle from "./CardTitle";

interface CardProps {
  title: string;
  subtitle: string;
}

const Card = ({ title, subtitle }: CardProps) => {
  return (
    <div className="w-full p-8 bg-gray-400 bg-opacity-80 transition hover:bg-opacity-100 rounded-xl flex flex-col gap-4">
      <CardImage imageUrl="/images/image 9.jpg" />
      <div className="flex flex-col">
        <CardTitle text={title} />
        <CardSubtitle text={subtitle} />
      </div>
    </div>
  );
};

export default Card;
