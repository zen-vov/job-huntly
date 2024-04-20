import { Button } from "../../../shared/ui/button";
import Logo from "@shared/ui/icons/logo/logo";
import World from "@shared/ui/icons/world/world";

export const Header = () => {
  return (
    <header className="py-[14px]">
      <nav className="flex justify-between container">
        <Logo />
        <div className="flex">
          <World />
          <Button
            label="Login"
            className="py-[12px] px-[24px]"
            labelStyle="text-primary"
          />
          <Button
            label="Sign Up"
            className="bg-button py-[12px] px-[24px]"
            labelStyle="text-white"
          />
        </div>
      </nav>
    </header>
  );
};
