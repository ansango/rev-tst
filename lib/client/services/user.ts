import {
  responseService,
  errorSaveDataAccountService,
} from "lib/constants/services";
import { Account, User } from "models/user/user";
import toast from "react-hot-toast";
import fetcher from "../fetcher";

type onSaveDataAccountDataService = {
  user: User;
  account: Account;
};

const onSaveDataAccountService = async ({
  user,
  account,
}: onSaveDataAccountDataService): Promise<{
  userResponse: User;
  accountResponse: Account;
}> => {
  try {
    const responses = await Promise.all([
      fetcher("/api/user", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...user,
        }),
      }),
      fetcher("/api/account", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...account,
        }),
      }),
    ]);
    toast.success(responseService.saveDataAccount);
    const [userResponse, accountResponse] = responses;
    return {
      userResponse: userResponse.data,
      accountResponse: accountResponse.data,
    };
  } catch (err: any) {
    toast.error(
      errorSaveDataAccountService[err.error] ||
        errorSaveDataAccountService.default
    );
    throw err;
  }
};

export { onSaveDataAccountService };
