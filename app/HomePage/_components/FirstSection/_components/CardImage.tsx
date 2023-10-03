import Image from "next/image";

interface CardImageProps {
  imageUrl: string;
}

const CardImage = ({ imageUrl }: CardImageProps) => {
  return (
    <div>
      <Image
        src={imageUrl}
        width="0"
        height="0"
        sizes="100vw"
        alt="image"
        className="w-full h-full"
      />
    </div>
  );
};

export default CardImage;
