import fetcher from "../fetcher";
import toast from "react-hot-toast";
import { errorAuthService, responseService } from "lib/constants/services";
import { User } from "models/user/user";

type onSignInDataService = {
  email: string;
  password: string;
};

const onSignInService = async ({
  email,
  password,
}: onSignInDataService): Promise<User> => {
  try {
    const response = await fetcher("/api/auth/signin", {
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
    toast.error(errorAuthService[err.error] || errorAuthService.default);
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
    const response = await fetcher("/api/auth/signup", {
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
    toast.error(errorAuthService[err.error] || errorAuthService.default);
    throw err;
  }
};

const onSignOutService = async (): Promise<void> => {
  try {
    await fetcher("/api/auth/signout", {
      method: "DELETE",
    });
  } catch (err) {
    throw err;
  }
};

export {
  onSignInService,
  type onSignInDataService,
  onSignUpService,
  type onSignUpDataService,
  onSignOutService,
};
