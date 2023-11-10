"use client";

import { ReactNode } from "react";
import Header from "../Header";
import { socialNetworks } from "@/constants/socialNetworks";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <main className="h-screen w-full flex flex-col">
      {/* <Header title="Home" headerItems={socialNetworks} /> */}
      <div className="h-full">{children}</div>
    </main>
  );
};

export default Layout;
