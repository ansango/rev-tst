import { useRouter } from "next/router";
import { FC } from "react";
import DashboardLayout from "./DashboardLayout";
import MainLayout from "./MainLayout";

const WrapperLayout: FC = ({ children }) => {
  const isDashboard = useRouter().pathname.includes("/dashboard");
  return (
    <>
      {!isDashboard && <MainLayout>{children}</MainLayout>}
      {isDashboard && <DashboardLayout>{children}</DashboardLayout>}
    </>
  );
};

export default WrapperLayout;
