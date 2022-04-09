import type { NextPage } from "next";
import BlockContainer from "components/common/Container/BlockContainer";
import { useCurrentUser } from "@/lib-client/hooks/user";
import { useCurrentAccount } from "@/lib-client/hooks/account";

const Home: NextPage = () => {
  const { data: { user } = {} } = useCurrentUser();
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
