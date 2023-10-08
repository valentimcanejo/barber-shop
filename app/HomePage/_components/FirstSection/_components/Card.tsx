"use client";

import { PriceProps } from "@/constants/photos";
import CardIcon from "./CardIcon";
import CardImage from "./CardImage";
import CardSubtitle from "./CardSubtitle";
import CardTitle from "./CardTitle";
import { useState } from "react";
import ModalPrices from "@/app/_components/ModalPrices";

interface CardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  iconUrl: string;
  prices: PriceProps[];
}

const Card = ({ title, subtitle, imageUrl, iconUrl, prices }: CardProps) => {
  const [openModalPrices, setOpenModalPrices] = useState(false);

  return (
    <div className="w-full bg-white transition hover:bg-opacity-100 rounded-xl flex flex-col gap-2">
      {openModalPrices ? (
        <ModalPrices
          onClose={setOpenModalPrices}
          open={openModalPrices}
          prices={prices}
        />
      ) : null}
      <CardImage imageUrl={imageUrl} />
      <button
        onClick={() => setOpenModalPrices(true)}
        className="bg-blue-400 mr-auto p-2 rounded-lg text-white font-medium ml-2"
      >
        Ver preços
      </button>
      <div className="flex flex-col p-3 relative">
        <CardIcon iconUrl={iconUrl} />
        <CardTitle text={title} />
        <CardSubtitle text={subtitle} />
      </div>
    </div>
  );
};

export default Card;
