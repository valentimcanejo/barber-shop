"use client";

import { ItemsListProps, itemsList } from "@/constants/photos";
import ListItem from "./ListItem";

interface ListProps {
  filter: string;
}

const List = ({ filter }: ListProps) => {
  return (
    <ul className="w-full max-w-lg mx-auto flex gap-1">
      {itemsList
        ?.filter((item: ItemsListProps) =>
          item.name.toLocaleLowerCase().includes(filter)
        )
        .map((filteredItem: ItemsListProps) => (
          <ListItem key={filteredItem.name} name={filteredItem.name} />
        ))}
    </ul>
  );
};

export default List;
