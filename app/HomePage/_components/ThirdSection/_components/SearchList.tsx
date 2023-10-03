"use client";

import { Button } from "@/app/_components/Button";
import { TextField } from "@/app/_components/TextField";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

interface SearchListProps {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

const SearchList = ({ filter, setFilter }: SearchListProps) => {
  const sendData = async (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col gap-6 w-full max-w-lg" onSubmit={sendData}>
      <label className="font-semibold text-lg">Lista</label>

      <div className="flex flex-col gap-2 w-full">
        <label>Procurar</label>
        <TextField
          id="name"
          name="customerName"
          placeholder="Digite..."
          fullWidth
          onChange={setFilter}
          value={filter}
        />
      </div>
    </form>
  );
};

export default SearchList;
