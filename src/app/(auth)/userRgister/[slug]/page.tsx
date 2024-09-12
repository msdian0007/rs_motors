import UserRegisterForm from "@/components/auth/UserRegisterForm";
import React from "react";

const SignUp = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <UserRegisterForm vId={params.slug} />
    </div>
  );
};

export default SignUp;
