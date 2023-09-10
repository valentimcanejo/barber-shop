"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";
import HeaderItem from "./_components/HeaderItem";

interface HeaderProps {
  title: ReactNode;
  headerItems?: string[];
}

const Header = ({ title, headerItems }: HeaderProps) => {
  const [openHamburger, setOpenHamburger] = useState(false);

  return (
    <header className="w-full p-4 bg-black uppercase text-white text-xl sticky top-0 z-50">
      <div className="flex justify-between w-full md:w-10/12 mx-auto place-items-center relative">
        <div className="flex gap-2">
          <Image
            alt="Home Icon"
            width={25}
            height={50}
            src="/images/barber-shop.png"
          />
          <h2 className="border-2 border-black">{title}</h2>
        </div>
        <div className="hidden gap-4 md:flex">
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
        <button
          className="md:hidden"
          onClick={() => setOpenHamburger(!openHamburger)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      {openHamburger ? (
        <div className="absolute left-0 bg-black z-50 pb-4 w-full flex flex-col text-center">
          {headerItems?.map((item: string) => (
            <HeaderItem key={item} text={item} />
          ))}
        </div>
      ) : null}
    </header>
  );
};

export default Header;
