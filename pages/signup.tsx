import fetcher from "@/lib-client/fetcher";
import { useCurrentUser } from "@/lib-client/user/hooks";
import BlankLayout from "components/Components/layout/BlankLayout";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

const SignUp: NextPage = () => {
  const { data: { user } = {}, mutate, isValidating, error } = useCurrentUser();
  const { replace } = useRouter();
  useEffect(() => {
    if (isValidating) return;
    if (user) replace(`/user/${user.username}`);
  }, [user, replace, isValidating]);
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
    <BlankLayout>
      <div className="p-4 max-w-sm w-full bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
        <form className="space-y-6" onSubmit={onSignUp}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign up to our platform
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="@username"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Username
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Name"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Signup
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            You have an account?{" "}
            <Link href="/signin">
              <a className="text-blue-700 hover:underline dark:text-blue-500">
                Sign in
              </a>
            </Link>
          </div>
        </form>
      </div>
    </BlankLayout>
  );
};

export default SignUp;
