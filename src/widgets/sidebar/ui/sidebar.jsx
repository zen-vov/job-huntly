import React from "react";
import Logo from "@shared/ui/icons/logo/logo";
import Home from "@shared/ui/icons/home/home";
import Search from "@shared/ui/icons/search/search";
import Profile from "@shared/ui/icons/profile/profile";
import { Button } from "../../../shared/ui/button";
import Exit from "@shared/ui/icons/exit/exit";
import { useNavigate } from "react-router-dom";

export const Sidebar = ({ className }) => {
  const [activeTab, setActiveTab] = React.useState("dashboard");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`${tab}`);
  };

  const fetchUserData = () => {
    try {
      const userDataString = localStorage.getItem("userData");
      const userData = JSON.parse(userDataString);

      if (userData && userData.fullName) {
        setName(userData.fullName);
      }
      if (userData && userData.email) {
        setEmail(userData.email);
      }
    } catch (error) {
      console.log("Error fetching user data: ", error);
    }
  };

  React.useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="w-[272px] bg-primary h-screen">
      <div className="flex fixed flex-col py-[30px] bg-primary w-[272px] h-screen justify-between">
        <div>
          <div className="px-[30px]">
            <Logo />
          </div>
          <nav className="flex flex-col mt-[32px] cursor-pointer">
            <p
              onClick={() => handleTabClick("dashboard")}
              className={`flex gap-[16px] text-sm font-[500] py-[12px] px-[30px] text-primary ${
                activeTab === "dashboard"
                  ? "bg-[#E9EBFD] border-l-[4px] border-l-primary"
                  : ""
              }`}
            >
              <Home />
              Dashboard
            </p>
            <p
              onClick={() => handleTabClick("findjobs")}
              className={`flex gap-[16px] text-sm font-[500] py-[12px] px-[30px] text-primary ${
                activeTab === "findjobs"
                  ? "bg-[#E9EBFD] border-l-[4px] border-l-primary"
                  : ""
              }`}
            >
              <Search />
              Find Jobs
            </p>
            <p
              onClick={() => handleTabClick("profile")}
              className={`flex gap-[16px] text-sm font-[500] py-[12px] px-[30px] text-primary ${
                activeTab === "profile"
                  ? "bg-[#E9EBFD] border-l-[4px] border-l-primary"
                  : ""
              }`}
            >
              <Profile />
              My Public Profile
            </p>
          </nav>
        </div>

        <div className="px-[30px] flex items-center gap-[16px]">
          <div className="w-[50px] h-[50px] rounded-[80px] bg-gray"></div>
          <div>
            <p className="text-base text-black font-semibold">{name}</p>
            <p className="text-xs text-link">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
