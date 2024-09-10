import React from "react";
import SignInForm from "@/components/auth/SignInForm";
import { getSession } from "@/actions";
import { redirect } from "next/navigation";

const SignIn = async () => {
  const session = await getSession();
  if (session.isLoggedIn) {
    redirect("/admin");
  }
  return (
    <>
      <SignInForm />
    </>
  );
};

export default SignIn;
