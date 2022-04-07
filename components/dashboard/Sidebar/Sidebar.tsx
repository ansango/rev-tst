import { useCurrentUser } from "@/lib-client/user/hooks";
import Icon from "components/common/Icons/Icon/Icon";
import Link from "next/link";
import { FC } from "react";
import { routes } from "./routes";

const Sidebar = () => {
  const { data: { user } = {} } = useCurrentUser();
  return (
    <aside className="w-64 h-full hidden lg:block" aria-label="Sidebar">
      <div className="h-full py-4 px-3 bg-white rounded border">
        <ul className="space-y-2">
          {routes.map(({ label, path, icon }) => (
            <li key={path}>
              <Link href={path}>
                <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                  <Icon
                    icon={icon}
                    kind="solid"
                    classIcon="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  />
                  <span className="ml-3">{label}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
