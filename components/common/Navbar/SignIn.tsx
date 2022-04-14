import { routeActive } from "@/lib-utils/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import Icon from "../Icons/Icon";

const SignIn: FC = () => {
  const { pathname } = useRouter();
  return (
    <>
      <Link href="/signin">
        <a className="btn btn-primary btn-ghost btn-circle">
          <Icon
            icon="LoginIcon"
            kind="outline"
            className={
              routeActive(pathname, "/signin")
                ? "h-5 w-5 text-primary"
                : "h-5 w-5"
            }
          />
        </a>
      </Link>
    </>
  );
};

export default SignIn;
