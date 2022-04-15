import {
  removeAccount,
  selectAccount,
} from "@/lib-client/store/features/account/accountSlice";
import {
  selectUser,
  signOut,
} from "@/lib-client/store/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib-client/store/hooks";
import { routeActive } from "@/lib-utils/router";
import { routes } from "components/dashboard/Sidebar/routes";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import Avatar from "../Avatar/Avatar";
import { routesDashboard } from "./routes";

const User: FC = () => {
  const { pathname } = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const account = useAppSelector(selectAccount);
  const onSignOut = useCallback(() => {
    dispatch(signOut());
    dispatch(removeAccount());
  }, [dispatch]);

  return (
    <>
      {user && (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <Avatar size="xs" imgUrl={account?.avatar} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {routesDashboard.map(({ label, path }) => {
              const cn = routeActive(pathname, path)
                ? "bg-primary text-white"
                : "";
              return (
                <li key={path}>
                  <Link href={path}>
                    <a className={cn}>{label}</a>
                  </Link>
                </li>
              );
            })}
            <li className="py-1">
              <a onClick={onSignOut}>Cerrar Sesión</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default User;
