import {
  selectAccount,
  updateAvatar,
} from "@/lib-client/store/features/account/accountSlice";
import { selectUser } from "@/lib-client/store/features/user/userSlice";

import { useAppDispatch, useAppSelector } from "@/lib-client/store/hooks";
import Avatar from "components/common/Avatar/Avatar";
import Button from "components/common/Button/Button/Button";
import { Form } from "components/common/Forms";
import File from "components/common/Forms/File";
import { useCallback } from "react";

const AvatarForm = () => {
  const account = useAppSelector(selectAccount);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const onSubmit = useCallback(
    async ({ file }) => {
      const avatar = file[0];
      const isImage = avatar ? avatar.type.startsWith("image") : null;
      if (avatar && isImage) {
        const formData = new FormData();
        formData.append("avatar", avatar);
        dispatch(updateAvatar(formData));
      }
    },
    [dispatch]
  );
  return (
    <Form onSubmit={onSubmit}>
      <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 space-y-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3">
            <Avatar size="md" imgUrl={account?.avatar} />
          </div>
          <div className="col-span-9">
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
        </div>
        <div className="">
          <div className="col-span-6">
            <File name="file" />
          </div>
          <div>
            <Button label="Guardar" type="submit" />
          </div>
        </div>
      </div>
    </Form>
  );
};

export default AvatarForm;
