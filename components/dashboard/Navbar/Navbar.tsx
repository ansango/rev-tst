import ButtonIcon from "components/common/Button/ButtonIcon/ButtonIcon";
import Logo from "components/common/Logo/Logo";
import NavDesktop from "components/common/Navbar/NavDesktop";
import NavMobile from "components/common/Navbar/NavMobile";
import User from "components/common/Navbar/User/User";
import Link from "next/link";
import { useRouter } from "next/router";
import AddRecipe from "components/common/Navbar/AddRecipe";
import { useEffect, useState } from "react";
import { useCurrentUser } from "@/lib-client/hooks/user";

const Navbar = () => {
  const { pathname } = useRouter();
  const { data: { user } = {} } = useCurrentUser();
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    setToggle(false);
  }, [pathname]);
  return (
    <nav className="bg-white border-gray-200 p-4">
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
        </ul>
      </div>
      {toggle && <NavMobile />}
    </nav>
  );
};

export default Navbar;
