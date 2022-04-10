import DataAccountForm from "components/dashboard/Forms/DataAccountForm";
import AvatarForm from "components/dashboard/Forms/AvatarForm";
import { NextPage } from "next";
import React from "react";

const Settings: NextPage = () => {
  return (
    <div className="grid lg:grid-cols-12 md:space-y-0 gap-5">
      <div className="col-span-full md:col-span-4 lg:col-span-full xl:col-span-5">
        <AvatarForm />
      </div>
      <div className="col-span-full md:col-span-8 lg:col-span-full xl:col-span-7">
        <DataAccountForm />
      </div>
    </div>
  );
};

export default Settings;
