import React from "react";
import { HeaderProfile } from "@widgets/headerProfile";
import Location from "@shared/ui/icons/location/location";
import Mail from "@shared/ui/icons/mail/mail";
import Phone from "@shared/ui/icons/phone/phone";
import Exit from "@shared/ui/icons/exit/exit";
import { useNavigate } from "react-router-dom";
import { Button } from "@shared/ui/button";
import axios from "axios";

export const Profile = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();

  const fetchUserData = () => {
    try {
      const userDataString = localStorage.getItem("accessToken");
      const userData = JSON.parse(userDataString);

      if (userData && userData.fullName) {
        setName(userData.full_name);
      }
      if (userData && userData.email) {
        setEmail(userData.email);
      }
    } catch (error) {
      console.log("Ошибка при получении данных пользователя: ", error);
    }
  };

  React.useEffect(() => {
    fetchUserData();
  }, []);

  const handleExit = async () => {
    try {
      // const accessToken = localStorage.getItem("accessToken");
      await axios.post("http://127.0.0.1:8000/api/v1/users/logout/");
      // localStorage.removeItem("userData");
      localStorage.removeItem("accessToken");
      navigate("/");
    } catch (error) {
      console.log("Ошибка при выходе из аккаунта: ", error);
    }
  };

  return (
    <div>
      <HeaderProfile title="Мой профиль" />
      <div className="container-2">
        <section className="p-[32px]">
          <div className="flex flex-1 gap-[24px]">
            <div>
              <div className="flex items-center gap-[30px] border border-gray w-fit p-[24px]">
                <div className="w-[146px] h-[146px] rounded-[100px] bg-gray"></div>
                <div className="flex flex-col items-start gap-[8px]">
                  <h2 className="text-xl text-second font-semibold">{name}</h2>
                  <p className="text-base text-second">
                    Дизайнер продукта в Twitter
                  </p>
                  <div className="flex gap-[8px] items-center">
                    <Location />
                    <p className="text-base text-text">
                      Манчестер, Великобритания
                    </p>
                  </div>
                  <Button
                    label="ОТКРЫТ ДЛЯ ВОЗМОЖНОСТЕЙ"
                    className="py-[12px] px-[24px] bg-lightGreen rounded-[80px]"
                    labelStyle="text-sm text-green"
                  />
                </div>
                <Button
                  label="Редактировать профиль"
                  labelStyle="text-primary text-sm font-[700]"
                  className="border ml-[67px] border-[#CCCCF5] py-[12px] px-[24px]"
                />
              </div>
              <div className="flex flex-col gap-[30px] border border-gray w-[755px] p-[24px] mt-[24px]">
                <h3 className="text-xl text-second font-semibold">Обо мне</h3>
                <p className="text-sm text-link font-[400]">
                  Я дизайнер продукта и фильммейкер, в настоящее время
                  работающий удаленно в Twitter из красивого Манчестера,
                  Великобритания. Я увлечен разработкой цифровых продуктов,
                  которые оказывают положительное воздействие на мир.
                </p>
                <p className="text-sm text-link font-[400]">
                  Более 10 лет я специализируюсь на дизайне интерфейсов,
                  пользовательском опыте и взаимодействии, а также работе в
                  области пользовательских исследований и стратегии продукта для
                  агентств, крупных технологических компаний и стартапов.
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-[30px] border border-gray w-[300px] p-[24px]">
                <h3 className="text-xl text-second font-semibold">
                  Дополнительные сведения
                </h3>
                <div className="flex flex-col">
                  <div className="flex items-start gap-[16px]">
                    <Mail />
                    <div>
                      <p className="text-sm text-text">Электронная почта</p>
                      <p className="text-sm text-second">{email}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-start gap-[16px]">
                    <Phone />
                    <div>
                      <p className="text-sm text-text">Телефон</p>
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
                  label="Выход"
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
