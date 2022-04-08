import { ErrorService, ResponseService } from "models/services";

const errorService: ErrorService | any = {
  401: "Email o contraseña incorrectos",
  default: "Error desconocido",
};

const responseService: ResponseService = {
  sigIn: "Iniciaste sesión correctamente",
  sigUp: "Registraste correctamente",
  default: "Todo salió bien",
};

export { errorService, responseService };
