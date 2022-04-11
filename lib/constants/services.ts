import { ErrorService, ResponseService } from "models/services";

const errorAuthService: ErrorService | any = {
  400: "Email o nombre de usuario invalido",
  401: "Email o contraseña incorrectos",
  403: "Email o nombre de usuario ya en uso",
  500: "Error del servidor",
  default: "Error de autenticación",
};

const errorSaveDataAccountService: ErrorService | any = {
  400: "Error al guardar los datos",
  500: "Error del servidor",
  default: "Error al guardar los datos",
};

const errorUpdateAvatar: ErrorService | any = {
  400: "Tienes que añadir una imagen",
  404: "Cuenta no encontrada",
  500: "Error del servidor",
  default: "Error al actualizar la imagen",
};

const responseService: ResponseService = {
  sigIn: "Iniciaste sesión correctamente",
  sigUp: "Registraste correctamente",
  saveAccount: "Cuenta actualizada",
  saveUser: "Usuario actualizado",
  updateAvatarAccount: "Avatar actualizado",
  default: "Todo salió bien",
};

export {
  errorAuthService,
  responseService,
  errorSaveDataAccountService,
  errorUpdateAvatar,
};
