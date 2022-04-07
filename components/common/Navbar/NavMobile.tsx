import { routeActive } from "@/lib-utils/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { routes } from "./routes";

const NavMobile: FC = () => {
  const { pathname } = useRouter();
  return (
    <ul className="mt-4 md:hidden">
      {routes.map(({ label, path }) => {
        const cn = routeActive(pathname, path)
          ? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
          : "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0";
        return (
          <li key={path}>
            <Link href={path}>
              <a className={cn}>{label}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavMobile;
