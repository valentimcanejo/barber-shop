import { Entity } from "../../../core/entities/entity";

export interface AppointmentProps {
  barberId: string;
  clientId: string;
  name: string;
  price: string;
  schedule: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Appointment extends Entity<AppointmentProps> {
  get barberId() {
    return this.props.barberId;
  }

  get clientId() {
    return this.props.clientId;
  }

  get name() {
    return this.props.name;
  }

  get price() {
    return this.props.price;
  }

  get schedule() {
    return this.props.schedule;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  toJSON() {
    return {
      barberId: this.barberId,
      clientId: this.clientId,
      name: this.name,
      price: this.price,
      schedule: this.schedule,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
