import Footer from "components/common/Footer/Footer";
import Navbar from "components/common/Navbar/Navbar";
import React, { FC } from "react";

const MainLayout: FC = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
