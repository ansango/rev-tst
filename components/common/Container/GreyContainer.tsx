import { FC } from "react";

const GreyContainer: FC = ({ children }) => {
  return (
    <div className="bg-gray-50 h-full">
      <div className="container m-auto h-full w-full px-5 py-20">
        <div className="flex justify-center flex-col items-center h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default GreyContainer;
