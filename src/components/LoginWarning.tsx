import React, { FC, MouseEvent } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

interface WarningProps {
  modalState: any;
}

const LoginWarning: FC<WarningProps> = ({ modalState }) => {
  const handleOutsideClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as Element).classList.contains("blur-bg")) {
      return modalState(false);
    }
  };

  return (
    <div className="blur-bg" onClick={handleOutsideClick}>
      <motion.div
        className="bg-gray-300 p-3 rounded-xl xl:w-96 md:w-96 sm:w-50"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
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
            please use your existing email id and click &quot;forgot
            password.&quot; We will re-authenticate your account. If you are a
            new user, please create a new account
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginWarning;
