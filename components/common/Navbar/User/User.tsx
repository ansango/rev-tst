import {
  removeAccount,
  selectAccount,
} from "@/lib-client/store/features/account/accountSlice";
import {
  selectUser,
  signOut,
} from "@/lib-client/store/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib-client/store/hooks";
import Link from "next/link";

import { FC, useCallback, useEffect, useRef, useState } from "react";
import { usePopper } from "react-popper";
import Avatar from "../../Avatar/Avatar";

const User: FC = () => {
  const user = useAppSelector(selectUser);
  const account = useAppSelector(selectAccount);
  const dispatch = useAppDispatch();
  const [showPopper, setShowPopper] = useState(false);
  const buttonRef = useRef(null);
  const popperRef = useRef(null);
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

  const onSignOut = useCallback(() => {
    dispatch(signOut());
    dispatch(removeAccount());
  }, [dispatch]);

  return (
    <div className="relative">
      <div
        ref={buttonRef}
        onClick={() => setShowPopper(!showPopper)}
        className="cursor-pointer"
      >
        <Avatar size="xsmall" imgUrl={account?.avatar} />
      </div>
      {showPopper ? (
        <div
          ref={popperRef}
          className={`absolute z-10 mt-2 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow right-0`}
          style={styles}
          {...attributes.popper}
        >
          <div className="py-3 px-4 text-gray-900">
            <span className="block text-sm">
              {account?.firstName ?? user?.username}
            </span>
            <span className="block text-sm font-medium truncate">
              {user?.email}
            </span>
          </div>
          <ul className="py-1 my-1">
            <li>
              <Link href="/dashboard/settings/">
                <a className="block py-2 px-4 text-sm text-gray-500 hover:bg-gray-100 cursor-pointer">
                  Ajustes
                </a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/collections">
                <a className="block py-2 px-4 text-sm text-gray-500 hover:bg-gray-100 cursor-pointer">
                  Colecciones
                </a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/favorites">
                <a className="block py-2 px-4 text-sm text-gray-500 hover:bg-gray-100 cursor-pointer">
                  Favoritos
                </a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/messages">
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

export default User;
