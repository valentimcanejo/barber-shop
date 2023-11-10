import { Entity } from "@/src/core/entities/entity";

export interface BarberProps {
  name: string;
  email: string;
  isAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Barber extends Entity<BarberProps> {
  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get isAdmin() {
    return this.props.isAdmin;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      isAdmin: this.isAdmin,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
