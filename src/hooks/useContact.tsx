import { ModalLayout } from "@/components/layout/Modal";
import { baseURL } from "@/constants";
import { customerInterestNotification } from "@/utils/commonServices";
import React from "react";

const useContact = () => {
  let isScrolled = false;
  return {
    userInterested: async () => {
      const user = localStorage.getItem("rs_motors_user");
      console.log(user);
      if (user) {
        const response = await customerInterestNotification({
          name: "Mohasin",
          phoneNumber: 7774976106,
          productLink: `${baseURL}/details/66dc007be5b0e96e2ac5704f`,
        });
      } else {
        <ModalLayout>
          <div>Hello</div>
        </ModalLayout>;
      }
    },
};
(<>Hello</>)
};

export default useContact;
