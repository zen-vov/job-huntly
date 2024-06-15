import { AuthForm } from "../../../features/authForm/ui/authFrom";
import "./styles.module.css";

export const SignUpPage = () => {
  return (
    <div className="container flex gap-[100px] pt-[40px] pb-[72px]">
      <div>
        <img src="/BG.png" alt="" />
      </div>
      <div className="mt-[140px]">
        <AuthForm type={"signup"} />
      </div>
    </div>
  );
};
