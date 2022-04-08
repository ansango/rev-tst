import { User } from "models/user";
import fetcher from "../fetcher";

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
    return response.user;
  } catch (error) {
    throw error;
  }
};

export { onSignInService, type onSignInDataService };
