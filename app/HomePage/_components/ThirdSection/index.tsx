"use client";

import { memo, useState } from "react";
import List from "./_components/List";
import SearchList from "./_components/SearchList";

const ThirdSection = () => {
  const [filter, setFilter] = useState<string>("");
  return (
    <section
      className={`py-32 px-4 md:w-10/12 mx-auto bg-white items-center flex w-full gap-4 flex-col md:h-full relative`}
    >
      <SearchList filter={filter} setFilter={setFilter} />
      <List filter={filter} />
    </section>
  );
};

export default ThirdSection;
