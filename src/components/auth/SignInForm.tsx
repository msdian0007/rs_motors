"use client";

import { login } from "@/actions";
import React, { useState } from "react";
import { useFormState } from "react-dom";

interface User {
  name: string;
  phoneNumber: number;
  email?: string;
  password: string;
}

const SignInForm = () => {
  const [user, setUser] = useState<User>();

  const [state, formAction] = useFormState<any, FormData>(login, undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev: any) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <>
      
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 my-10">
        <h1 className="text-xl text-center font-bold text-white capitalize dark:text-white">
          Admin Login
        </h1>
        <form action={formAction}>
          <div className="grid grid-cols-1 gap-6 mt-4">
            {/* Mobile Number */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="userName"
              >
                UserName/Mobile-Number
              </label>
              <input
                name="userName"
                // value={user?.phoneNumber}
                // onChange={handleChange}
                id="userName"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* PASSWORD */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="password"
              >
                Password
              </label>
              <input
                name="password"
                // value={user?.password}
                // onChange={handleChange}
                id="password"
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="w-full mt-6">
            <button
              type="submit"
              className="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
            >
              LogIn
            </button>
          </div>
          {state?.error && <p className="text-red-500 py-2 text-sm text-center">{state?.error}</p>}
        </form>
      </section>
    </>
  );
};

export default SignInForm;
