import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useRef } from "react";
import { useRouter } from "next/router";
import { useCurrentUser } from "@/lib-client/user/hooks";
import fetcher from "@/lib-client/fetcher";
import Link from "next/link";
import BlockContainer from "components/common/Container/BlockContainer";

const Home: NextPage = () => {
  const { data: { user } = {}, mutate, isValidating, error } = useCurrentUser();

  const onSignOut = useCallback(async () => {
    try {
      await fetcher("/api/auth", {
        method: "DELETE",
      });
      mutate({ user: null });
    } catch (e) {
      console.error(e);
    }
  }, [mutate]);

  return (
    <BlockContainer>
      {user && (
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.username}</p>
          <p>{user._id}</p>
        </div>
      )}

      {error && <p>{error.message}</p>}
      {user && <button onClick={onSignOut}>Sign out</button>}
      {user && <Link href={`user/${user.username}`}>Profile</Link>}
    </BlockContainer>
  );
};

export default Home;
