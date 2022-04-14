import { FC } from "react";
import { Logo } from "components/common/Icons";
import NavMobile from "./NavMobile";
import SignIn from "./SignIn";
import AddRecipe from "./AddRecipe";
import NavDesktop from "./NavDesktop";
import User from "./User";
import { useAppSelector } from "@/lib-client/store/hooks";
import { selectUser } from "@/lib-client/store/features/user/userSlice";
import Brand from "./Brand";

const Navbar: FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <NavMobile />
        <Brand />
        <NavDesktop />
      </div>
      <div className="navbar-end">
        <AddRecipe />
        <User />
        <SignIn />
      </div>
    </div>
  );
};

export default Navbar;
