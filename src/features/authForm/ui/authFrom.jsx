import React from "react";
import { Input } from "../../../shared/ui/input/ui/input";
import { Button } from "../../../shared/ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === "signin") {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/v1/users/login/",
          {
            email: formData.email,
            password: formData.password,
          }
        );
        localStorage.setItem("accessToken", response.data.access);
        navigate("/app/dashboard");
      } catch (error) {
        alert("Неверный email или пароль. Пожалуйста, попробуйте снова.");
        navigate("/app/dashboard");
        console.log(error);
      }
    } else {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/v1/users/registration/",
          {
            full_name: formData.fullName,
            email: formData.email,
            password: formData.password,
          }
        );
        localStorage.setItem("accessToken", response.data.access);
        navigate("/app/dashboard");
      } catch (error) {
        alert("Ошибка при регистрации. Пожалуйста, попробуйте снова.");
        navigate("/app/dashboard");
        console.log(error);
      }
    }
  };

  return (
    <>
      {type === "signup" && (
        <div className="flex flex-col gap-[24px] w-[400px]">
          <h1 className="text-[32px] text-black font-semibold">
            Получите больше возможностей{" "}
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <p className="text-sm text-link font-semibold">Полное имя</p>
              <Input
                name="fullName"
                className="border w-[400px] border-gray py-[10px] mt-[10px] px-[16px]"
                placeholder="Введите ваше полное имя"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="text-sm text-link font-semibold">
                Адрес электронной почты
                {/*  */}
              </p>
              <Input
                name="email"
                className="border w-[400px] border-gray py-[10px] mt-[10px] px-[16px]"
                placeholder="Введите адрес электронной почты"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="text-sm text-link font-semibold">Пароль</p>
              <Input
                name="password"
                className="border w-[400px] border-gray py-[10px] mt-[10px] px-[16px]"
                placeholder="Введите пароль"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <Button
                type="submit"
                label="Продолжить"
                className="bg-button py-[12px] px-[24px] w-full mt-[24px]"
                labelStyle="text-white text-sm font-bold"
              />
            </div>
          </form>
          <div>
            <p className="text-sm text-black font-[400]">
              Уже есть аккаунт?
              <span className="text-primary text-sm font-semibold ml-[4px]">
                <Link to={"/signin"}>Войти</Link>
              </span>
            </p>
          </div>
          <div>
            <p>
              Нажимая `Продолжить`, вы подтверждаете, что прочитали и принимаете{" "}
              <span className="text-primary text-sm font-semibold ml-[4px]">
                Условия использования
              </span>{" "}
              и{" "}
              <span className="text-primary text-sm font-semibold ml-[4px]">
                Политику конфиденциальности
              </span>
              .
            </p>
          </div>
        </div>
      )}
      {type === "signin" && (
        <div className="flex flex-col gap-[24px] w-[400px]">
          <h1 className="text-[32px] text-black font-semibold">
            Добро пожаловать обратно
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <p className="text-sm text-link font-semibold">
                Адрес электронной почты
              </p>
              <Input
                name="email"
                className="border w-[400px] border-gray py-[10px] mt-[10px] px-[16px]"
                placeholder="Введите адрес электронной почты"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="text-sm text-link font-semibold">Пароль</p>
              <Input
                name="password"
                className="border w-[400px] border-gray py-[10px] mt-[10px] px-[16px]"
                placeholder="Введите пароль"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <Button
                type="submit"
                label="Войти"
                className="bg-button py-[12px] px-[24px] w-full mt-[24px]"
                labelStyle="text-white text-sm font-bold"
              />
            </div>
          </form>
          <div>
            <p className="text-sm text-black font-[400]">
              Нет аккаунта?
              <span className="text-primary text-sm font-semibold ml-[4px]">
                <Link to={"/signup"}>Зарегистрироваться</Link>
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
