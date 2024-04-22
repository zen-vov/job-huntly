import React from "react";
import { HeaderProfile } from "@widgets/headerProfile";
import Location from "@shared/ui/icons/location/location";
import Mail from "@shared/ui/icons/mail/mail";
import Phone from "@shared/ui/icons/phone/phone";
import Exit from "@shared/ui/icons/exit/exit";
import { useNavigate } from "react-router-dom";
import { Button } from "@shared/ui/button";

export const Profile = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();

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

  const handleExit = () => {
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <div>
      <HeaderProfile title="My Profile" />
      <div className="container-2">
        <section className="p-[32px]">
          <div className="flex flex-1 gap-[24px]">
            <div>
              <div className="flex items-center gap-[30px] border border-gray w-fit p-[24px]">
                <div className="w-[146px] h-[146px] rounded-[100px] bg-gray"></div>
                <div className="flex flex-col items-start gap-[8px]">
                  <h2 className="text-xl text-second font-semibold">{name}</h2>
                  <p className="text-base text-second">
                    Product Designer at Twitter
                  </p>
                  <div className="flex gap-[8px] items-center">
                    <Location />
                    <p className="text-base text-text">Manchester, UK</p>
                  </div>
                  <Button
                    label="OPEN FOR OPPORTUNITIES"
                    className="py-[12px] px-[24px] bg-lightGreen rounded-[80px]"
                    labelStyle="text-sm text-green"
                  />
                </div>
                <Button
                  label="Edit Profile"
                  labelStyle="text-primary text-sm font-[700]"
                  className="border ml-[67px] border-[#CCCCF5] py-[12px] px-[24px]"
                />
              </div>
              <div className="flex flex-col gap-[30px] border border-gray w-[755px] p-[24px] mt-[24px]">
                <h3 className="text-xl text-second font-semibold">About Me</h3>
                <p className="text-sm text-link font-[400]">
                  I’m a product designer + filmmaker currently working remotely
                  at Twitter from beautiful Manchester, United Kingdom. I’m
                  passionate about designing digital products that have a
                  positive impact on the world.
                </p>
                <p className="text-sm text-link font-[400]">
                  For 10 years, I’ve specialised in interface, experience &
                  interaction design as well as working in user research and
                  product strategy for product agencies, big tech companies &
                  start-ups.
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-[30px] border border-gray w-[300px] p-[24px]">
                <h3 className="text-xl text-second font-semibold">
                  Additional Details
                </h3>
                <div className="flex flex-col">
                  <div className="flex items-start gap-[16px]">
                    <Mail />
                    <div>
                      <p className="text-sm text-text">Email</p>
                      <p className="text-sm text-second">jakegyll@email.com</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-start gap-[16px]">
                    <Phone />
                    <div>
                      <p className="text-sm text-text">Phone</p>
                      <p className="text-sm text-second">+44 1245 572 135</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={handleExit}
                className="flex cursor-pointer items-center gap-[8px] border border-gray mt-[24px] py-[28px] px-[24px]"
              >
                <Exit />
                <Button
                  label="Logout"
                  onClick={handleExit}
                  className=" px-[24px] rounded-[80px]"
                  labelStyle="text-sm text-red"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
