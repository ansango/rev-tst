import type { NextPage } from "next";
import BlockContainer from "components/common/Container/BlockContainer";
import { useCurrentAccount } from "@/lib-client/hooks/account";
import { useAppSelector } from "@/lib-client/store/hooks";
import { selectUser } from "@/lib-client/store/features/user/userSlice";

const Home: NextPage = () => {
  const user = useAppSelector(selectUser);
  const { data: { account } = {} } = useCurrentAccount();

  return (
    <BlockContainer>
      {user && (
        <div>
          <p>{account?.firstName}</p>
          <p>{user.email}</p>
          <p>{user.username}</p>
          <p>{user._id}</p>
        </div>
      )}
    </BlockContainer>
  );
};

export default Home;
