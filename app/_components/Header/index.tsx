"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface HeaderProps {
  title: ReactNode;
  headerItems?: string[];
}

const Header = ({ title, headerItems }: HeaderProps) => {
  return (
    <header className="w-full p-4 bg-black uppercase text-white text-2xl ">
      <div className="flex justify-between w-10/12 mx-auto place-items-center">
        <div className="flex gap-2">
          <Image
            alt="Home Icon"
            width={25}
            height={50}
            src="/images/barber-shop.png"
          />
          <h2 className="border-2 border-black">{title}</h2>
        </div>
        <div className="flex gap-4">
          {headerItems?.map((item: string) => (
            <div
              key={item}
              className="border-2 border-black hover:border-b-2 hover:border-b-blue-400 transition h-full"
            >
              <a href="#" key={item}>
                {item}
              </a>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
