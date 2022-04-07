import Footer from "components/dashboard/Footer/Footer";
import Navbar from "components/dashboard/Navbar/Navbar";
import Sidebar from "components/dashboard/Sidebar/Sidebar";
import React, { FC } from "react";

const DashboardLayout: FC = ({ children }) => {
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
