import { FC } from "react";

const GreyContainer: FC = ({ children }) => {
  return (
    <div className="bg-gray-50 h-screen">
      <main className="container m-auto h-full w-full">
        <div className="flex justify-center flex-col items-center h-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default GreyContainer;
