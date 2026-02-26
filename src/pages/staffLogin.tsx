import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCube,
  faEye,
  faEyeSlash,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function staffLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="bg-[linear-gradient(135deg,#0000_20%,#333333_20%_30%,#0000_0),repeating-linear-gradient(45deg,#333333_20%_30%,#d3643b_0_70%)] bg-size-[100px_100px]
     w-full fixed h-full flex-col justify-center items-center top-0 left-0 flex"
    >
      <div className="py-10 px-12 relative w-full max-w-110 bg-[whitesmoke] rounded-xl transition-all shadow-xl hover:-translate-y-1 hover:shadow-xl mb-8">
        <span>
          <button className="top-3 absolute left-3 flex p-4">
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          </button>
        </span>
        <h1 className="text-3xl font-bold m-6 text-center">
          <FontAwesomeIcon
            icon={faCube}
            className="text-orange-600"
          ></FontAwesomeIcon>
          JEFFIX
        </h1>
        <p className="text-gray-500 mb-6 text-center">
          Please login to your employee account.
        </p>
        <form action="" className="flex flex-col text-left gap-2.5">
          <label htmlFor="username" className="mb-2 text-xs font-bold">
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
            className="
          border-2 border-gray-400 rounded-xl px-2 py-3 transition-all duration-300
          focus:border-orange-600 focus:outline-0 focus:shadow-md
          "
          />
          <div className="relative">
            <label htmlFor="password" className="mb-2 text-xs font-bold flex">
              <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
              Password:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="
          border-2 border-gray-400 rounded-xl px-2 py-3 transition-all duration-300 flex w-86
          focus:border-orange-600 focus:outline-0 focus:shadow-md
          "
            />
            <button onClick={togglePassword} className="absolute right-3 bottom-4 flex text-gray-400 hover:text-orange-600">
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
              ></FontAwesomeIcon>
            </button>
          </div>
          <button
            type="submit"
            className="p-4 bg-amber-600 rounded-xl text-[whitesmoke] font-bold mt-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Login <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </button>
        </form>
      </div>
      <p className="mb-4 text-xs text-gray-200">
        © 2024 JEFFIX. All rights reserved. Strictly for Academic Purposes Only
      </p>
      <div className="text-gray-200 text-xs">
        <a href="" className="mx-2 hover:underline">
          Privacy Policy
        </a>
        <a href="" className="mx-2 hover:underline">
          Terms of Service
        </a>
        <a href="" className="mx-2 hover:underline">
          Contact Support
        </a>
      </div>
    </div>
  );
}
