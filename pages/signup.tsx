import fetcher from "@/lib-client/fetcher";
import { useCurrentUser } from "@/lib-client/user/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

const SignUp: NextPage = () => {
  const { data: { user } = {}, mutate, isValidating, error } = useCurrentUser();
  const router = useRouter();
  useEffect(() => {
    if (isValidating) return;
    if (user) router.replace(`/user/${user.username}`);
  }, [user, router, isValidating]);
  const onSignUp = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const response = await fetcher("/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: "anibalsantosgo@gmail.com",
            name: "Anibal Santos",
            password: "12345678",
            username: "ansango",
          }),
        });
        mutate({ user: response.user }, false);
      } catch (e: any) {
        console.error(e);
      }
    },
    [mutate]
  );
  return (
    <div>
      <h1>SigIn</h1>
      <form onSubmit={onSignUp}>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
