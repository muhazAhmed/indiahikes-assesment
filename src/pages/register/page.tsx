"use client";
import React, { FC, useState } from "react";
import { FaUserAlt, FaCity, FaUniversity, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineWork } from "react-icons/md";
import { BsGenderAmbiguous, BsCalendarDate } from "react-icons/bs";
import { AiOutlineLineHeight } from "react-icons/ai";
import { Toast } from "@/lib/utils";
import { heightDropDown } from "@/lib/registerFormFields";
import {
  validateStep1,
  validateStep2,
  validateStep3,
  validateStep4,
  isFormValid,
  FormData,
} from "@/lib/FormValidation";
import { RegisterProps } from "@/lib/props";

const RegisterPage: FC<RegisterProps> = ({ toggleState }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    Toast("Registration completed", "success")
    console.log(formData);
  };

  const nextStep = () => {
    let stepErrors = {};
    switch (step) {
      case 1:
        stepErrors = validateStep1(formData);
        break;
      case 2:
        stepErrors = validateStep2(formData);
        break;
      case 3:
        stepErrors = validateStep3(formData);
        break;
      case 4:
        stepErrors = validateStep4(formData);
        break;
    }

    if (isFormValid(stepErrors)) {
      setStep((prev) => prev + 1);
    } else {
      Object.values(stepErrors).forEach((errorMessage: any) => {
        Toast(errorMessage, "error");
      });
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="flex flex-col items-center">
      <form className="flex flex-col items-center gap-4 mb-4 w-full max-w-md">
        {step === 1 && (
          <>
            <div className="bg-transparent border-2 p-2 pl-3 rounded-full flex items-center gap-3 w-full">
              <FaUserAlt className="text-[20px]" />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName || ""}
                onChange={handleInputChange}
                required
                className="bg-transparent outline-none w-full"
              />
            </div>

            <div className="bg-transparent border-2 p-2 pl-3 rounded-full flex items-center gap-3 w-full">
              <FaUserAlt className="text-[20px]" />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName || ""}
                onChange={handleInputChange}
                required
                className="bg-transparent outline-none w-full"
              />
            </div>

            <div className="bg-transparent border-2 p-2 pl-3 rounded-full flex items-center gap-3 w-full">
              <BsGenderAmbiguous className="text-[20px]" />
              <select
                name="gender"
                value={formData.gender || ""}
                onChange={handleInputChange}
                required
                className="bg-transparent outline-none w-full"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="bg-transparent border-2 p-2 pl-3 rounded-full flex items-center gap-3 w-full">
              <BsCalendarDate className="text-[20px]" />
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth || ""}
                onChange={handleInputChange}
                required
                className="bg-transparent outline-none w-full"
              />
            </div>

            <div className="bg-transparent border-2 p-2 pl-3 rounded-full flex items-center gap-3 w-full">
              <AiOutlineLineHeight className="text-[20px]" />
              <select
                name="height"
                value={formData.height || ""}
                onChange={handleInputChange}
                required
                className="bg-transparent outline-none w-full"
              >
                <option value="" disabled>
                  Select Height
                </option>
                {heightDropDown?.map((item: any, index: number) => (
                  <option key={index} value={item?.value}>
                    {item?.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-transparent border-2 p-2 pl-3 rounded-full flex items-center gap-3 w-full">
              <FaUserAlt className="text-[20px]" />
              <input
                type="number"
                name="weight"
                placeholder="Weight (in kg)"
                value={formData.weight || ""}
                onChange={handleInputChange}
                required
                className="bg-transparent outline-none w-full"
              />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="bg-transparent border-2 p-2 pl-3 rounded-full flex items-center gap-3 w-full">
              <FaPhoneAlt className="text-[20px]" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone || ""}
                onChange={handleInputChange}
                required
                className="bg-transparent outline-none w-full"
              />
            </div>

            <div className="bg-transparent border-2 p-2 pl-3 rounded-full flex items-center gap-3 w-full">
              <MdOutlineEmail className="text-[20px]" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email || ""}
                onChange={handleInputChange}
                required
                className="bg-transparent outline-none w-full"
              />
            </div>

            <div className="bg-transparent border-2 p-2 pl-3 rounded-full flex items-center gap-3 w-full">
              <FaCity className="text-[20px]" />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city || ""}
                onChange={handleInputChange}
                required
                className="bg-transparent outline-none w-full"
              />
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <div className="bg-transparent border-2 p-2 pl-3 rounded-full flex items-center gap-3 w-full">
              <FaUniversity className="text-[20px]" />
              <input
                type="text"
                name="company"
                placeholder="Company / College"
                value={formData.company || ""}
                onChange={handleInputChange}
                required
                className="bg-transparent outline-none w-full"
              />
            </div>

            <div className="bg-transparent border-2 p-2 pl-3 rounded-full flex items-center gap-3 w-full">
              <MdOutlineWork className="text-[20px]" />
              <input
                type="text"
                name="designation"
                placeholder="Designation"
                value={formData.designation || ""}
                onChange={handleInputChange}
                required
                className="bg-transparent outline-none w-full"
              />
            </div>
          </>
        )}
      </form>

      <div className="flex justify-evenly w-full">
        <button
          type="button"
          onClick={prevStep}
          className={`p-2 px-8 rounded-full ${
            step === 1
              ? "bg-gray-300 text-black cursor-not-allowed"
              : "bg-red-500 text-white cursor-pointer"
          }`}
          disabled={step === 1}
        >
          Back
        </button>
        <button
          type="button"
          onClick={step === 4 ? handleSubmit : nextStep}
          className={`p-2 px-8 rounded-full bg-blue-500 text-white cursor-pointer`}
        >
          {step === 4 ? "Submit" : "Next"}
        </button>
      </div>

      <p>
        Already have an account?{" "}
        <button onClick={() => toggleState("login")} className="text-secondary">
          Login here
        </button>
      </p>
    </div>
  );
};

export default RegisterPage;
