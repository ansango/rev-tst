import Link from "next/link";
import ButtonIcon from "../Buttons/ButtonIcon/ButtonIcon";
import { useRouter } from "next/router";
import { useCurrentUser } from "@/lib-client/user/hooks";
import Icon from "../Icons/Icon/Icon";
import { useEffect, useState } from "react";
import Avatar from "../Avatar/Avatar";
import Logo from "../Logo/Logo";

const rActive = (pathname: string, href: string) => {
  return pathname === href ? true : false;
};

const routes = [
  {
    path: "/",
    label: "Inicio",
  },
  {
    path: "/recipes",
    label: "Recetas",
  },
  {
    path: "/categories",
    label: "Categorías",
  },
];

const Navbar = () => {
  const { pathname, push } = useRouter();
  const { data: { user } = {} } = useCurrentUser();
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    setToggle(false);
  }, [pathname]);
  return (
    <nav className="bg-white border-gray-200 p-4 lg:container lg:mx-auto">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <div className="hidden w-full md:block md:w-auto ml-3">
            <ul className="flex flex-col mt-4 md:flex-row md:mt-0 md:text-sm md:font-medium">
              {routes.map(({ label, path }) => {
                const isActive = rActive(pathname, path);
                const cn = isActive
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
          </div>
          <div className="md:hidden ml-3">
            <ButtonIcon
              icon="MenuAlt2Icon"
              type="button"
              classButton="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              classIcon="w-6 h-6"
              action={() => setToggle(!toggle)}
            />
          </div>
        </div>
        <ul className="flex items-center md:mt-0 md:text-sm md:font-medium">
          {user && (
            <>
              <li>
                <ButtonIcon
                  icon="PlusCircleIcon"
                  kind="outline"
                  type="button"
                  classButton={
                    rActive(pathname, "/recipe/add")
                      ? "inline-flex items-center p-2 ml-3 text-sm text-blue-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                      : "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  }
                  classIcon="w-6 h-6"
                  action={() => push("/recipe/add")}
                />
              </li>
              <li className="p-2 flex">
                <Avatar
                  size="xsmall"
                  imgUrl="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                />
              </li>
            </>
          )}
          {!user && (
            <li className="p-2 flex">
              <Link href="/signin">
                <a
                  className={
                    rActive(pathname, "/signin")
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
            </li>
          )}
        </ul>
      </div>
      {toggle && (
        <ul className="mt-4 md:hidden">
          {routes.map(({ label, path }) => {
            const isActive = rActive(pathname, path);
            const cn = isActive
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
      )}
    </nav>
  );
};

export default Navbar;
