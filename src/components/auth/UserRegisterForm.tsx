"use client";

import { baseURL } from "@/constants";
import useHelper from "@/hooks/useHelper";
import { User } from "@/types";
import { customerInterestNotification } from "@/utils/commonServices";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserRegisterForm = ({ vId }: { vId: string }) => {
  const [user, setUser] = useState<User>();
  const { updateInterestList, setUserData  } = useHelper();

  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (user) {
      const response = await customerInterestNotification({
        name: user?.name,
        phoneNumber: user?.phoneNumber,
        productLink: `${baseURL}/details/${vId}`,
      });
      if (response.status === 200) {
        setUserData(user)
        updateInterestList(vId);
        router.push('/')
      }
    }
  };

  return (
    <>
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 my-10">
        <h1 className="text-xl text-center font-bold text-white capitalize dark:text-white">
          User Verify
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4">
            {/* Mobile Number */}
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="name">
                Full Name
              </label>
              <input
                name="name"
                value={user?.name}
                onChange={handleChange}
                id="name"
                type="text"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* PASSWORD */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                name="phoneNumber"
                value={user?.phoneNumber}
                onChange={handleChange}
                id="phoneNumber"
                type="number"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="w-full mt-6">
            <button
              type="submit"
              className="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
            >
              Let's GO
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default UserRegisterForm;
