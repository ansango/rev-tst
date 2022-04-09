import { ErrorService, ResponseService } from "models/services";

const errorAuthService: ErrorService | any = {
  400: "Email o nombre de usuario invalido",
  401: "Email o contraseña incorrectos",
  403: "Email o nombre de usuario ya en uso",
  default: "Error desconocido",
};

const responseService: ResponseService = {
  sigIn: "Iniciaste sesión correctamente",
  sigUp: "Registraste correctamente",
  default: "Todo salió bien",
};

export { errorAuthService, responseService };
