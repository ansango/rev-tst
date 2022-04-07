import Link from "next/link";
import ButtonIcon from "../Button/ButtonIcon/ButtonIcon";
import { useRouter } from "next/router";
import { useCurrentUser } from "@/lib-client/user/hooks";
import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import NavMobile from "./NavMobile";
import SignIn from "./SignIn";
import AddRecipe from "./AddRecipe";
import NavDesktop from "./NavDesktop";
import User from "./User/User";

const Navbar = () => {
  const { pathname } = useRouter();
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
            <NavDesktop />
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
                <AddRecipe />
              </li>
              <li className="p-2 flex">
                <User />
              </li>
            </>
          )}
          {!user && (
            <li className="p-2 flex">
              <SignIn />
            </li>
          )}
        </ul>
      </div>
      {toggle && <NavMobile />}
    </nav>
  );
};

export default Navbar;
