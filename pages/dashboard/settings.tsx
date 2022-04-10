import DataAccountForm from "components/dashboard/Forms/DataAccountForm";
import AvatarForm from "components/dashboard/Forms/AvatarForm";
import { NextPage } from "next";
import React from "react";

const Settings: NextPage = () => {
  return (
    <div className="space-y-5">
      <AvatarForm /> 
      <DataAccountForm />
    </div>
  );
};

export default Settings;
