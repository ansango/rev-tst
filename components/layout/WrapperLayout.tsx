import { fetchUser } from "@/lib-client/store/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib-client/store/hooks";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import DashboardLayout from "./DashboardLayout";
import MainLayout from "./MainLayout";

const WrapperLayout: FC = ({ children }) => {
  const isDashboard = useRouter().pathname.includes("/dashboard");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <>
      {!isDashboard && <MainLayout>{children}</MainLayout>}
      {isDashboard && <DashboardLayout>{children}</DashboardLayout>}
    </>
  );
};

export default WrapperLayout;
