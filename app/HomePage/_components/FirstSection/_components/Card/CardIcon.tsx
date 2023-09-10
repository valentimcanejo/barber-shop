import Image from "next/image";

interface CardIconProps {
  iconUrl: string;
}

const CardIcon = ({ iconUrl }: CardIconProps) => {
  return (
    <button className="border border-gray-300 w-16 h-16 p-2 bg-white rounded-full right-0 bottom-24 md:bottom-20 shadow-2xl absolute">
      <Image src={iconUrl} alt="icon" width={50} height={50} />
    </button>
  );
};

export default CardIcon;
