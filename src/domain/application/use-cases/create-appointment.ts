import { Appointment } from "../../enterprise/entities/appointment";
import { AppointmentGateway } from "../gateways/appointment-gateway";

// interface CreateQuestionUseCaseRequest {
//   authorId: string;
//   title: string;
//   content: string;
//   attachmentsIds: string[];
// }

// type CreateQuestionUseCaseResponse = Either<
//   null,
//   {
//     question: Question;
//   }
// >;

export class CreateAppointmentUseCase {
  constructor(private appointmentGate: AppointmentGateway) {}

  async execute({
    name,
    price,
    schedule,
    barberId,
    clientId,
  }: Appointment): Promise<void> {
    const appointment = new Appointment({
      name,
      price,
      schedule,
      barberId,
      clientId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.appointmentGate.create(appointment);
  }
}
