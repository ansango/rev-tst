import { FC } from "react";
import Logo from "../Icons/Logo";
import NavMobile from "./NavMobile";
import SignIn from "./SignIn";
import AddRecipe from "./AddRecipe";
import NavDesktop from "./NavDesktop";
import User from "./User";
import { useAppSelector } from "@/lib-client/store/hooks";
import { selectUser } from "@/lib-client/store/features/user/userSlice";

const Navbar: FC = () => {
  const user = useAppSelector(selectUser);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <NavMobile />
        <Logo />
        <NavDesktop />
      </div>
      <div className="navbar-end">
        {user && (
          <>
            <AddRecipe />
            <User />
          </>
        )}
        {!user && <SignIn />}
      </div>
    </div>
  );
};

export default Navbar;
