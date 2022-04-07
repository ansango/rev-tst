import { routeActive } from "@/lib-utils/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import Icon from "../Icons/Icon/Icon";

const SignIn: FC = () => {
  const { pathname } = useRouter();
  return (
    <Link href="/signin">
      <a
        className={
          routeActive(pathname, "/signin")
            ? "inline-flex items-center bg-transparent text-blue-700 p-0"
            : "inline-flex items-center text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
        }
      >
        <Icon
          kind="outline"
          icon="LoginIcon"
          classIcon="w-6 h-6 md:w-5 md:h-5 md:mr-1"
        />
        <span className="hidden md:block">Iniciar sesión</span>
      </a>
    </Link>
  );
};

export default SignIn;
