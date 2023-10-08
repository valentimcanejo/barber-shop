import { PriceProps } from "@/constants/photos";
import Card from "./Card";

interface CardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  iconUrl: string;
  prices: PriceProps[];
}

interface CardList {
  cardArray: CardProps[];
}

const CardList = ({ cardArray }: CardList) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 z-10">
      {cardArray?.map((card) => (
        <Card
          key={card.title}
          iconUrl={card.iconUrl}
          title={card.title}
          subtitle={card.subtitle}
          imageUrl={card.imageUrl}
          prices={card.prices}
        />
      ))}
    </div>
  );
};

export default CardList;
