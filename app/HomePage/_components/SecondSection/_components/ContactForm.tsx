"use client";

import { Button } from "@/app/_components/Button";
import Select from "@/app/_components/Select";
import { TextField } from "@/app/_components/TextField";
import { schedulesTime } from "@/constants/photos";
import { CreateAppointmentUseCase } from "@/src/domain/application/use-cases/create-appointment";
import { FirebaseAppointment } from "@/src/infra/database/firebase/repositories/firebase-appointment-repository";
import { FormEvent, useEffect, useState } from "react";
import db, {
  FirebaseModule,
} from "@/src/infra/database/firebase/firebase.service";
import { Registry, container } from "@/src/infra/container-registry";

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
    // const appointment = new FirebaseAppointment(FirebaseModule);
    // const useCase = new CreateAppointmentUseCase(appointment)

    const useCase = container.get<CreateAppointmentUseCase>(
      Registry.CreateAppointmentUseCase
    );

    // await useCase.execute({
    //   name: "teste",
    //   price: "teste",
    //   schedule: new Date(),
    //   barberId: "teste",
    //   clientId: "teste",
    // });
  };

  return (
    <form
      className="flex flex-col gap-6 w-full max-w-xl mt-20 mx-auto"
      onSubmit={sendData}
    >
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
