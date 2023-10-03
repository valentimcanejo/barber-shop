"use client";

import { Button } from "@/app/_components/Button";
import Select from "@/app/_components/Select";
import { TextField } from "@/app/_components/TextField";
import { schedulesTime } from "@/constants/photos";
import { FormEvent, useEffect, useState } from "react";

interface SelectedItemProps {
  text: string;
  value: string;
}

const ContactForm = () => {
  const [customerName, setCustomerName] = useState<string>("");
  const [customerContact, setCustomerContact] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<SelectedItemProps>({
    value: "Selecionar Horário",
    text: "Selecionar Horário",
  });
  const [arraySchedulesTime, setArraySchedulesTime] = useState<
    SelectedItemProps[]
  >([]);

  useEffect(() => {
    const convertedArray: SelectedItemProps[] = schedulesTime?.map((time) => ({
      text: time,
      value: time,
    }));

    setArraySchedulesTime(convertedArray);
  }, [schedulesTime]);

  const sendData = async (e: FormEvent) => {
    e.preventDefault();
    console.log(customerName, customerContact);
  };
  console.log(selectedTime);
  return (
    <form className="flex flex-col gap-6 w-full max-w-lg" onSubmit={sendData}>
      <label className="font-semibold text-lg">Agente seu Horário</label>
      <div className="flex flex-col gap-2">
        <label>Nome</label>
        <Select
          arrayItems={arraySchedulesTime}
          setSelectedItem={setSelectedTime}
          selectedItem={selectedTime}
        />
        {/* <TextField
          id="name"
          name="customerName"
          placeholder="Digite seu nome"
          fullWidth
          onChange={setCustomerName}
          value={customerName}
        /> */}
      </div>
      <div className="flex flex-col gap-2">
        <label>Telefone</label>
        <TextField
          id="contact"
          name="customeContact"
          placeholder="Digite seu telefone"
          fullWidth
          onChange={setCustomerContact}
          value={customerContact}
        />
      </div>
      <Button>Enviar</Button>
    </form>
  );
};

export default ContactForm;
