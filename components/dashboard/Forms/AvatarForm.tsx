import { selectAccount } from "@/lib-client/store/features/account/accountSlice";
import { selectUser } from "@/lib-client/store/features/user/userSlice";

import { useAppSelector } from "@/lib-client/store/hooks";
import Avatar from "components/common/Avatar/Avatar";
import Button from "components/common/Button/Button/Button";
import { Form } from "components/common/Forms";
import File from "components/common/Forms/File";
import { useCallback } from "react";

const AvatarForm = () => {
  const account = useAppSelector(selectAccount);
  const user = useAppSelector(selectUser);
  const onSubmit = useCallback((data) => {
    console.log(data);
  }, []);
  return (
    <Form onSubmit={onSubmit}>
      <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
        <div className="flex space-x-3 items-center sm:space-x-6">
          <div>
            <Avatar size="large" />
          </div>
          <div className="w-full space-y-5">
            <div>
              {account?.firstName && (
                <h5 className="text-xl font-medium text-gray-900">
                  {account.firstName} {account?.lastName}
                </h5>
              )}
              {!account?.firstName && (
                <h5 className="text-xl font-medium text-gray-900">
                  @{user?.username}
                </h5>
              )}
              {account?.firstName && (
                <h4 className="text-gray-600">@{user?.username}</h4>
              )}
            </div>
            <div className="md:flex items-baseline md:space-x-5">
              <File name="avatar" />
              <div>
                <Button label="Guardar" type="submit" fullWidth />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default AvatarForm;
