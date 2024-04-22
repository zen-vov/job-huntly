import React from "react";
import { Input } from "../../../shared/ui/input/ui/input";
import { Button } from "../../../shared/ui/button";
import { Link, useNavigate } from "react-router-dom";

export const AuthForm = ({ type = "signup" }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "signin") {
      const storedUserData = JSON.parse(localStorage.getItem("userData"));
      if (
        storedUserData &&
        storedUserData.email === formData.email &&
        storedUserData.password === formData.password
      ) {
        navigate("/app/dashboard");
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } else {
      localStorage.setItem("userData", JSON.stringify(formData));
      navigate("/app/dashboard");
    }
  };

  return (
    <>
      {type === "signup" && (
        <div className="flex flex-col gap-[24px] w-[400px]">
          <h1 className="text-[32px] text-black font-semibold">
            Get more opportunities{" "}
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <p className="text-sm text-link font-semibold">Full name</p>
              <Input
                name="fullName"
                className="border w-[400px] border-gray py-[10px] mt-[10px] px-[16px]"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="text-sm text-link font-semibold">Email Address</p>
              <Input
                name="email"
                className="border w-[400px] border-gray py-[10px] mt-[10px] px-[16px]"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="text-sm text-link font-semibold">Password</p>
              <Input
                name="password"
                className="border w-[400px] border-gray py-[10px] mt-[10px] px-[16px]"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <Button
                type="submit"
                label="Continue"
                className="bg-button py-[12px] px-[24px] w-full mt-[24px]"
                labelStyle="text-white text-sm font-bold"
              />
            </div>
          </form>
          <div>
            <p className="text-sm text-black font-[400]">
              Already have an account?
              <span className="text-primary text-sm font-semibold ml-[4px]">
                <Link to={"/signin"}>Login</Link>
              </span>
            </p>
          </div>
          <div>
            <p>
              By clicking 'Continue', you acknowledge that you have read and
              accept the{" "}
              <span className="text-primary text-sm font-semibold ml-[4px]">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-primary text-sm font-semibold ml-[4px]">
                Privacy Policy
              </span>
              .
            </p>
          </div>
        </div>
      )}
      {type === "signin" && (
        <div className="flex flex-col gap-[24px] w-[400px]">
          <h1 className="text-[32px] text-black font-semibold">
            Welcome Back, Dude
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <p className="text-sm text-link font-semibold">Email Address</p>
              <Input
                name="email"
                className="border w-[400px] border-gray py-[10px] mt-[10px] px-[16px]"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="text-sm text-link font-semibold">Password</p>
              <Input
                name="password"
                className="border w-[400px] border-gray py-[10px] mt-[10px] px-[16px]"
                placeholder="Enter password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <Button
                type="submit"
                label="Login"
                className="bg-button py-[12px] px-[24px] w-full mt-[24px]"
                labelStyle="text-white text-sm font-bold"
              />
            </div>
          </form>
          <div>
            <p className="text-sm text-black font-[400]">
              Don’t have an account?
              <span className="text-primary text-sm font-semibold ml-[4px]">
                <Link to={"/signup"}>Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
