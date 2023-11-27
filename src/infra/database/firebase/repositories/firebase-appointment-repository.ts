import { AppointmentGateway } from "@/src/domain/application/gateways/appointment-gateway";
import { Appointment } from "@/src/domain/enterprise/entities/appointment";
import FirebaseModule from "firebase/firestore";

export class FirebaseAppointment implements AppointmentGateway {
  constructor(private firebaseModule: typeof FirebaseModule) {}

  private getAppointmentCollectionRef(): FirebaseModule.CollectionReference<
    FirebaseModule.DocumentData,
    FirebaseModule.DocumentData
  > {
    return this.firebaseModule.collection(
      this.firebaseModule.getFirestore(),
      "appointments"
    );
  }

  private getAppointmentDocumentRef(
    appointmentId: string
  ): FirebaseModule.DocumentReference {
    return this.firebaseModule.doc(
      this.getAppointmentCollectionRef(),
      appointmentId
    );
  }

  async delete(id: string): Promise<void> {
    try {
      const appointmentReference = this.getAppointmentDocumentRef(id);
      await this.firebaseModule.deleteDoc(appointmentReference);
    } catch (error) {
      throw new Error("Erro ao remover um atendimento.");
    }
  }

  async create(appointment: Appointment): Promise<void> {
    try {
      const appointmentsCollectionRef = this.getAppointmentCollectionRef();
      await this.firebaseModule.addDoc(
        appointmentsCollectionRef,
        appointment.toJSON()
      );
    } catch (error) {
      console.log(error);

      throw new Error("Erro ao cadastrar um novo atendimento.");
    }
  }

  async save(appointment: Appointment): Promise<void> {
    try {
      const appointmentReference = this.getAppointmentDocumentRef(
        appointment.id!
      );
      await this.firebaseModule.updateDoc(
        appointmentReference,
        appointment.toJSON()
      );
    } catch (error) {
      throw new Error("Erro ao editar um atendimento.");
    }
  }

  async findById(id: string): Promise<Appointment> {
    try {
      const appointmentReference = this.getAppointmentDocumentRef(id);
      const appointmentDocument = await this.firebaseModule.getDoc(
        appointmentReference
      );

      return {
        id: appointmentDocument.id,
        ...appointmentDocument.data(),
      } as Appointment;
    } catch (error) {
      throw new Error("Erro ao buscar um novo atendimento.");
    }
  }
}
