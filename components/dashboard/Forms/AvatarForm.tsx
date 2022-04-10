import { selectAccount } from "@/lib-client/store/features/account/accountSlice";
import { selectUser } from "@/lib-client/store/features/user/userSlice";

import { useAppSelector } from "@/lib-client/store/hooks";
import Avatar from "components/common/Avatar/Avatar";
import { Form } from "components/common/Forms";
import { useCallback } from "react";

const AvatarForm = () => {
  const account = useAppSelector(selectAccount);
  const user = useAppSelector(selectUser);
  const onSubmit = useCallback(() => {
    console.log();
  }, []);
  return (
    <Form onSubmit={onSubmit}>
      <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
        <Avatar size="large" />
        {account?.firstName && (
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            {account.firstName} {account?.lastName}
          </h5>
        )}
        {!account?.firstName && (
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            {user?.username}
          </h5>
        )}
      </div>
    </Form>
  );
};

export default AvatarForm;
