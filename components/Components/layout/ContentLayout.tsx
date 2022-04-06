import React, { FC } from "react";

const ContentLayout: FC = ({ children }) => {
  return (
    <div className="bg-gray-50 h-screen">
      <main className="container m-auto h-full w-full">{children}</main>
    </div>
  );
};

export default ContentLayout;
