import { AppointmentGateway } from "@/src/domain/application/gateways/appointment-gateway";
import { Appointment } from "@/src/domain/enterprise/entities/appointment";

export class InMemoryAppointmentsRepository implements AppointmentGateway {
  public items: Appointment[] = [];

  constructor() {}

  async create(appointment: Appointment) {
    this.items.push(appointment);
  }

  async delete(id: string) {
    const itemIndex = this.items.findIndex((item) => item.id === id);

    this.items.splice(itemIndex, 1);
  }

  async findById(id: string) {
    const appointment = this.items.find((item) => item.id.toString() === id);

    if (!appointment) {
      return null;
    }

    return appointment;
  }

  async save(appointment: Appointment) {
    const itemIndex = this.items.findIndex(
      (item) => item.id === appointment.id
    );

    this.items[itemIndex] = appointment;
  }
}
