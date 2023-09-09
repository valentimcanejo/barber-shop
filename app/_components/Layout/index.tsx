"use client";

import { ReactNode } from "react";
import Header from "../Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <main className="h-screen w-screen flex flex-col">
      <Header
        title="Home"
        headerItems={["Preços", "Horários", "Localização"]}
      />
      <div className="h-full">{children}</div>
    </main>
  );
};

export default Layout;
