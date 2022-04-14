import { routeActive } from "@/lib-utils/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { routes } from "./routes";

const NavDesktop = () => {
  const { pathname } = useRouter();
  return (
    <ul className="hidden w-full md:flex md:w-auto ml-3">
      {routes.map(({ label, path }) => {
        const cn = routeActive(pathname, path)
          ? "btn btn-link normal-case"
          : "btn btn-link normal-case text-gray-600";
        return (
          <li key={path} className="">
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
