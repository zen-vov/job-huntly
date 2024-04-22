import React from "react";
import { Button } from "@shared/ui/button";
import { HeaderProfile } from "@widgets/headerProfile";
import File from "@shared/ui/icons/file/file";
import Messages from "@shared/ui/icons/messages/messages";
import Graph from "@shared/ui/icons/graph/graph";
import Arrow from "@shared/ui/icons/arrow/arrow";

export const DashBoardPage = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

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
    <div className="w-full h-full">
      <HeaderProfile title="Dashboard" />
      <div className="container flex flex-col py-[32px]">
        <div>
          <h2 className="text-xl text-second font-semibold">
            Good morning, {name}
          </h2>
          <p className="text-sm text-text">
            Here is what’s happening with your job search applications from July
            19 - July 25.
          </p>
        </div>
        <div className="flex gap-[24px] mt-[32px]">
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[27px] border border-gray w-fit px-[24px] pt-[26px]">
              <p className="text-lg text-second font-semibold">
                Total Jobs Applied
              </p>
              <div className="flex items-end">
                <p className="text-3xl text-second font-semibold">45</p>
                <span>
                  <File />
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[27px] border border-gray w-fit px-[24px] pt-[26px]">
              <p className="text-lg text-second font-semibold">Interviewed</p>
              <div className="flex items-end">
                <p className="text-3xl text-second font-semibold">18</p>
                <span>
                  <Messages />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[27px] border border-gray w-[400px] px-[24px] pt-[26px]">
            <p className="text-lg text-second font-semibold">
              Jobs Applied Status
            </p>
            <div className="flex items-center">
              <div>
                <Graph />
              </div>
              <div className="flex flex-col gap-[8px]">
                <div>
                  <p className="text-base text-second font-[700]">60%</p>
                  <p className="text-sm text-text">Unsuitable</p>
                </div>
                <div>
                  <p className="text-base text-second font-[700]">60%</p>
                  <p className="text-sm text-text">Unsuitable</p>
                </div>
              </div>
            </div>
            <div className="flex gap-[8px] items-center">
              <Button className="text-sm text-primary" label="Show all jobs" />
              <Arrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
