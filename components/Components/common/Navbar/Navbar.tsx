import Link from "next/link";
import ButtonIcon from "../Buttons/ButtonIcon/ButtonIcon";
import { useRouter } from "next/router";
import { useCurrentUser } from "@/lib-client/user/hooks";
import Icon from "../Icons/Icon/Icon";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import Avatar from "../Avatar/Avatar";
import Logo from "../Logo/Logo";
import { usePopper } from "react-popper";
import fetcher from "@/lib-client/fetcher";

const User: FC = () => {
  const { data: { user } = {}, mutate, isValidating, error } = useCurrentUser();
  const [showPopper, setShowPopper] = useState(false);
  const buttonRef = useRef(null);
  const popperRef = useRef(null);
  const { replace } = useRouter();
  const { styles, attributes } = usePopper(
    buttonRef.current,
    popperRef.current,
    {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 10],
          },
        },
      ],
    }
  );
  useEffect(() => {
    document.addEventListener("click", clickOut);
    return () => {
      document.removeEventListener("click", clickOut);
    };
  }, []);

  const clickOut = (event: any) => {
    const path = event.path || (event.composedPath && event.composedPath());

    if (!path.includes(buttonRef.current)) {
      setShowPopper(false);
    }
  };

  const onSignOut = useCallback(async () => {
    try {
      await fetcher("/api/auth", {
        method: "DELETE",
      });
      mutate({ user: null });
      replace("/");
    } catch (e) {
      console.error(e);
    }
  }, [mutate, replace]);

  return (
    <div className="relative">
      <div
        ref={buttonRef}
        onClick={() => setShowPopper(!showPopper)}
        className="cursor-pointer"
      >
        <Avatar
          size="xsmall"
          imgUrl="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        />
      </div>
      {showPopper ? (
        <div
          ref={popperRef}
          className={`absolute z-10 mt-2 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 right-0`}
          style={styles}
          {...attributes.popper}
        >
          <div className="py-3 px-4 text-gray-900 dark:text-white">
            <span className="block text-sm">{user?.name}</span>
            <span className="block text-sm font-medium truncate">
              {user?.email}
            </span>
          </div>
          <ul className="py-1 my-1">
            <li>
              <Link href={`/user/settings/${user?.username}`}>
                <a className="block py-2 px-4 text-sm text-gray-500 hover:bg-gray-100 cursor-pointer">
                  Ajustes
                </a>
              </Link>
            </li>
            <li>
              <Link href="/user/collections">
                <a className="block py-2 px-4 text-sm text-gray-500 hover:bg-gray-100 cursor-pointer">
                  Colecciones
                </a>
              </Link>
            </li>
            <li>
              <Link href="/user/favorites">
                <a className="block py-2 px-4 text-sm text-gray-500 hover:bg-gray-100 cursor-pointer">
                  Favoritos
                </a>
              </Link>
            </li>
            <li>
              <Link href="/user/messages">
                <a className="block py-2 px-4 text-sm text-gray-500 hover:bg-gray-100 cursor-pointer">
                  Mensajes
                </a>
              </Link>
            </li>
          </ul>
          <div className="py-1">
            <a
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={onSignOut}
            >
              Cerrar Sesión
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

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
                <User />
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
