import Footer from "components/common/Footer/Footer";
import Navbar from "components/common/Navbar/Navbar";
import { useRouter } from "next/router";
import React, { FC } from "react";
import Motion from "./Motion";

const MainLayout: FC = ({ children }) => {
  const { route } = useRouter();
  return (
    <div className="flex flex-col justify-between h-screen bg-white">
      <Navbar />
      <Motion route={route}>
        <main>{children}</main>
      </Motion>
      <Footer />
    </div>
  );
};

export default MainLayout;
