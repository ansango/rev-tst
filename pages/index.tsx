import type { NextPage } from "next";
import BlockContainer from "components/common/Container/BlockContainer";

import { useAppSelector } from "@/lib-client/store/hooks";
import { selectUser } from "@/lib-client/store/features/user/userSlice";
import { selectAccount } from "@/lib-client/store/features/account/accountSlice";

const Home: NextPage = () => {
  const user = useAppSelector(selectUser);
  const account = useAppSelector(selectAccount);

  return (
    <div>
      {user && (
        <div>
          <p>{account?.firstName}</p>
          <p>{user.email}</p>
          <p>{user.username}</p>
          <p>{user._id}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
