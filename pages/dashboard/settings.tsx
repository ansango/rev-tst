import { useCurrentUser } from "@/lib-client/user/hooks";
import { NextPage } from "next";
import React from "react";

const Settings: NextPage = () => {
  const { data: { user } = {} } = useCurrentUser();

  return (
    <div>
      <p>{user?._id}</p>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      <p>{user?.username}</p>
    </div>
  );
};

export default Settings;
