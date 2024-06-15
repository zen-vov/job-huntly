import { Button } from "../../../shared/ui/button";
import Logo from "@shared/ui/icons/logo/logo";
import World from "@shared/ui/icons/world/world";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="py-[14px]">
      <nav className="flex justify-between container">
        <Link to={"/"}>
          <Logo />
        </Link>
        <div className="flex">
          <World />
          <Link to={"/signin"}>
            <Button
              label="Вход"
              className="py-[12px] px-[24px]"
              labelStyle="text-primary"
            />
          </Link>
          <Link to={"/signup"}>
            <Button
              label="Регистрация"
              className="bg-button py-[12px] px-[24px]"
              labelStyle="text-white"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};
