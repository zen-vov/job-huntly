import React from "react";
import World from "@shared/ui/icons/world/world";
import { Button } from "@shared/ui/button";
import { Link } from "react-router-dom";

export const HeaderProfile = ({ title }) => {
  return (
    <div className="container-2 flex justify-between items-center py-[30px] border-b border-b-gray w-full">
      <h1 className="text-second text-[32px] font-semibold">{title}</h1>
      <div className="flex gap-[30px]">
        <span className="cursor-pointer">
          <World />
        </span>
        <Link to={"/"}>
          <Button
            label="Back to homepage"
            labelStyle="text-primary text-sm font-[700]"
            className="border border-[#CCCCF5] py-[12px] px-[24px]"
          />
        </Link>
      </div>
    </div>
  );
};
