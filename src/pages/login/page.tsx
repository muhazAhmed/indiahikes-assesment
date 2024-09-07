"use client";
import React, { FC, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaFingerprint } from "react-icons/fa";
import Button from "@/components/Button";
import { LoginInputs, LoginProps } from "@/lib/props";
import { Toast } from "@/lib/utils";
import { validEmail } from "@/lib/FormValidation";

const LoginPage: FC<LoginProps> = ({ toggleState }) => {
  const [inputs, setInputs] = useState<LoginInputs>({
    email: "",
    password: "",
  });
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputs?.email) return Toast("Email is required", "error");
    if (validEmail(inputs?.email))
      return Toast("Please enter a valid email", "error");
    if (!inputs?.password) return Toast("Password is required", "error");
    return Toast("Login success", "success");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev: LoginInputs) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <form className="flex flex-col items-center gap-3">
        <div className="bg-transparent border-2 p-2 px-4 rounded-full flex items-center gap-3">
          <MdOutlineEmail className="text-[20px]" />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="bg-transparent outline-none"
            onChange={handleInputChange}
          />
        </div>
        <div className="bg-transparent border-2 p-2 px-4 rounded-full flex items-center gap-3">
          <FaFingerprint className="text-[20px]" />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="bg-transparent outline-none"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center w-full">
          <p className="text-gray-400 cursor-pointer hover:text-red-400 text-[13px] pl-2">
            Forgot Email id or Password
          </p>
        </div>

        <div>
          <Button
            label="Login"
            className="bg-primary rounded-full p-2 px-10"
            buttonType="submit"
            action={handleLogin}
          />
        </div>
      </form>

      <p>
        Don&apos;t have an account?{" "}
        <button onClick={toggleState} className="text-secondary">
          Register here
        </button>
      </p>
    </div>
  );
};

export default LoginPage;
