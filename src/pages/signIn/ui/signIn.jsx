import React from "react";
import { AuthForm } from "../../../features/authForm";

export const SignInPage = () => {
  return (
    <div className="container flex gap-[100px] pt-[40px] pb-[72px]">
      <div>
        <img src="/BG.png" alt="" />
      </div>
      <div className="mt-[180px]">
        <AuthForm type="signin" />
      </div>
    </div>
  );
};
