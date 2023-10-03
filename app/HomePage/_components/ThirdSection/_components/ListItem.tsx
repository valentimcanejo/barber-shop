"use client";

type ListItemProps = {
  name: string;
};

const ListItem = ({ name }: ListItemProps) => {
  return <li className="border font-semibold p-2 rounded-lg">{name}</li>;
};

export default ListItem;
