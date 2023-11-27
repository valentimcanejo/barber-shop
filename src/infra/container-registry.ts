import { Container } from "inversify";
import { FirebaseModule } from "./database/firebase/firebase.service";
import { FirebaseAppointment } from "./database/firebase/repositories/firebase-appointment-repository";
import { CreateAppointmentUseCase } from "../domain/application/use-cases/create-appointment";

export const Registry = {
  FirebaseModule: Symbol.for("FirebaseModule"),
  AppointmentGateway: Symbol.for("AppointmentGateway"),
  CreateAppointmentUseCase: Symbol.for("CreateAppointmentUseCase"),
};

export const container = new Container();

//########## FIREBASE
container.bind(Registry.FirebaseModule).toConstantValue(FirebaseModule);

//########## GATEWAYS
container.bind(Registry.AppointmentGateway).toDynamicValue((context) => {
  return new FirebaseAppointment(
    context.container.get(Registry.FirebaseModule)
  );
});

//########## USE CASES
container.bind(Registry.CreateAppointmentUseCase).toDynamicValue((context) => {
  return new CreateAppointmentUseCase(
    context.container.get(Registry.AppointmentGateway)
  );
});
