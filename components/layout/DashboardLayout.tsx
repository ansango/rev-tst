import { selectUser } from "@/lib-client/store/features/user/userSlice";
import { useAppSelector } from "@/lib-client/store/hooks";
import Footer from "components/dashboard/Footer/Footer";
import Navbar from "components/dashboard/Navbar/Navbar";
import Sidebar from "components/dashboard/Sidebar/Sidebar";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";

const DashboardLayout: FC = ({ children }) => {
  const user = useAppSelector(selectUser);
  const { replace } = useRouter();
  useEffect(() => {
    if (!user) replace("/signin");
  }, [user, replace]);
  if (!user) return null;
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="grid grid-cols-12 gap-5 h-[93.6vh]">
        <Sidebar />

        <div className="col-span-full lg:col-span-9 xl:col-span-10 space-y-5 py-5 px-5 lg:pl-0 flex flex-col justify-between">
          <main className="">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
