import { useCurrentUser } from "@/lib-client/hooks/user";
import Footer from "components/dashboard/Footer/Footer";
import Navbar from "components/dashboard/Navbar/Navbar";
import Sidebar from "components/dashboard/Sidebar/Sidebar";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";

const DashboardLayout: FC = ({ children }) => {
  const { data: { user } = {}, mutate, isValidating } = useCurrentUser();
  const { replace } = useRouter();
  useEffect(() => {
    if (isValidating) return;
    if (!user) replace("/signin");
  }, [user, replace, isValidating]);
  if (!user) return null;
  return (
    <div className="flex flex-col justify-between h-screen bg-gray-100">
      <Navbar />
      <div className="h-full flex">
        <Sidebar />
        <div className="w-full p-4 h-full flex flex-col justify-between">
          <main className="h-full">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
