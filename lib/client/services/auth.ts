import { User } from "models/user";
import fetcher from "../fetcher";
import toast from "react-hot-toast";
import { errorService, responseService } from "lib/constants/services";

type onSignInDataService = {
  email: string;
  password: string;
};

const onSignInService = async ({
  email,
  password,
}: onSignInDataService): Promise<User> => {
  try {
    const response = await fetcher("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    toast.success(responseService.sigIn);
    return response.user;
  } catch (err: any) {
    toast.error(errorService[err.error] || errorService.default);
    throw err;
  }
};

type onSignUpDataService = {
  email: string;
  password: string;
  username: string;
};

const onSignUpService = async ({
  email,
  password,
  username,
}: onSignUpDataService): Promise<User> => {
  try {
    const response = await fetcher("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        username,
      }),
    });
    toast.success(responseService.sigUp);
    return response.user;
  } catch (err: any) {
    toast.error(errorService[err.error] || errorService.default);
    throw err;
  }
};

export {
  onSignInService,
  type onSignInDataService,
  onSignUpService,
  type onSignUpDataService,
};
