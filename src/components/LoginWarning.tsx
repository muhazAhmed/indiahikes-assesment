import React, { FC } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface WarningProps {
  modalState: any;
}

const LoginWarning: FC<WarningProps> = ({ modalState }) => {
  return (
    <div className="bg-gray-300 p-3 rounded-xl w-[25%] absolute">
      <div className="relative w-full h-full">
        <IoMdCloseCircleOutline
          title="Close"
          onClick={() => modalState(false)}
          className="absolute text-red-500 right-0 cursor-pointer top-[-5px] text-[20px]"
        />
        <p className="text-black w-full text-[13px]">
          <span className="text-red-500 font-bold">
            Important:
            <br />
          </span>
          We have shifted to a new dashboard. If you are a registered trekker,
          please use your existing email id and click "forgot password." We will
          re-authenticate your account. If you are a new user, please create a
          new account
        </p>
      </div>
    </div>
  );
};

export default LoginWarning;
