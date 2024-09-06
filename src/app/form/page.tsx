"use client";
import React, { useState } from "react";
import LoginPage from "../../pages/login/page";
import RegisterPage from "../../pages/register/page";
import ThemeToggle from "@/components/ThemeToggle";
import SVG from "../../assets/form.svg";
import Image from "next/image";
import { FaInfoCircle } from "react-icons/fa";
import Loader from "@/components/Loader";
import LoginWarning from "@/components/LoginWarning";
import { useTheme } from "@/lib/ThemeContext";
import classNames from "classnames";

const Form = () => {
  const { theme } = useTheme();
  const [toggleForm, setToggleForm] = useState<"login" | "register">("login");
  const [isInfoClicked, setInfoClicked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="w-full h-[100vh] flex items-center justify-center relative">
      {loading && <Loader />}
      <div className="absolute top-3 right-2">
        <ThemeToggle />
      </div>
      <div className="flex flex-col items-center justify-center w-[40%] h-[70%] gap-6 border-2 border-primary p-5 rounded-2xl">
        <h1 className="text-[30px]">
          India<span className="text-primary">Hikes</span>
        </h1>
        <div className="flex gap-4">
          <button
            onClick={() => setToggleForm("login")}
            className={classNames(
              "border-b-2 p-1 flex items-center relative outline-none",
              {
                "border-red-500 font-semibold": toggleForm === "login",
                "border-transparent text-gray-400": toggleForm !== "login",
                "text-black": theme === "light" && toggleForm === "login",
                "text-white": theme === "dark" && toggleForm === "login",
              }
            )}
          >
            <FaInfoCircle
              className="absolute left-[-16px] text-yellow-400 hover:text-[18px]"
              onClick={() => setInfoClicked(true)}
            />
            Login
          </button>

          {isInfoClicked && <LoginWarning modalState={setInfoClicked} />}

          <button
            onClick={() => setToggleForm("register")}
            className={classNames("border-b-2 p-1 outline-none", {
              "border-red-500 font-semibold": toggleForm === "register",
              "border-transparent text-gray-400": toggleForm !== "register",
              "text-black": theme === "light" && toggleForm === "register",
              "text-white": theme === "dark" && toggleForm === "register",
            })}
          >
            Register
          </button>
        </div>
        {toggleForm === "login" ? (
          <LoginPage toggleState={() => setToggleForm("register")} />
        ) : (
          <RegisterPage toggleState={setToggleForm} />
        )}
      </div>
      <div className="h-full flex items-center justify-center">
        <Image src={SVG} alt="Image" width={400} />
      </div>
    </div>
  );
};

export default Form;
