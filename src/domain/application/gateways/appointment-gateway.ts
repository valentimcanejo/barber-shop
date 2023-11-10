import { Appointment } from "../../enterprise/entities/appointment";

export interface AppointmentGateway {
  create(appointment: Appointment): Promise<void>;
  findById(id: string): Promise<Appointment | null>;
  save(appointment: Appointment): Promise<void>;
  delete(id: string): Promise<void>;
}
