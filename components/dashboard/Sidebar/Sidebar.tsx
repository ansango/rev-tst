import Icon from "components/common/Icons/Icon";
import Link from "next/link";
import { routes } from "./routes";

const Sidebar = () => {
  return (
    <></>
    // <aside
    //   className=" h-full hidden lg:block lg:col-span-3 xl:col-span-2"
    //   aria-label="Sidebar"
    // >

    //   <div className="h-full py-4 px-3 bg-white rounded border">
    //     <ul className="space-y-2">
    //       {routes.map(({ label, path, icon }) => (
    //         <li key={path}>
    //           <Link href={path}>
    //             <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
    //               <Icon icon={icon} kind="solid" />
    //               <span className="ml-3">{label}</span>
    //             </a>
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </aside>
  );
};

export default Sidebar;
