import { routeActive } from "@/lib-utils/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { routes } from "./routes";

const NavDesktop = () => {
  const { pathname } = useRouter();
  return (
    <ul className="flex flex-col mt-4 md:flex-row md:mt-0 md:text-sm md:font-medium">
      {routes.map(({ label, path }) => {
        const cn = routeActive(pathname, path)
          ? "block text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
          : "block text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0";
        return (
          <li key={path} className="py-2 pr-4 pl-3">
            <Link href={path}>
              <a className={cn}>{label}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavDesktop;
