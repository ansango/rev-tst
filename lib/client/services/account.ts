import {
  responseService,
  errorSaveDataAccountService,
} from "lib/constants/services";
import { Account, User } from "models/user/user";
import toast from "react-hot-toast";
import fetcher from "../fetcher";

type onSaveAccountService = {
  account: Account;
};

const onSaveAccountService = async ({
  account,
}: onSaveAccountService): Promise<Account> => {
  try {
    const response = await fetcher("/api/account", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...account,
      }),
    });
    toast.success(responseService.saveAccount);
    return response.account;
  } catch (err: any) {
    toast.error(
      errorSaveDataAccountService[err.error] ||
        errorSaveDataAccountService.default
    );
    throw err;
  }
};

export { onSaveAccountService };
