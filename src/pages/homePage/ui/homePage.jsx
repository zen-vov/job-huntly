import React from "react";
import Title from "@shared/ui/icons/title/title";
import { Input } from "@shared/ui/input/ui/input";
import { Button } from "../../../shared/ui/button/ui/button";

export const HomePage = () => {
  return (
    <div className="pt-[80px] pb-[100px]">
      <div>
        <Title />
        <p className="w-[520px] text-link text-lg mt-[30px]">
          Great platform for the job seeker that searching for new career
          heights and passionate about startups.
        </p>
        <div className="bg-white flex justify-between items-center w-[650px] mt-[24px] p-[16px]">
          <Input
            className="border-b-[1px] w-[400px] border-b-gray pl-[2px] pb-[10px]"
            placeholder="Job title or keyword"
          />
          <Button
            label="Search my job"
            className="bg-button py-[12px] px-[24px]"
            labelStyle="text-white"
          />
        </div>
        <p className="text-sm text-black mt-[16px]">
          Popular : UI Designer, UX Researcher, Android, Admin
        </p>
      </div>
    </div>
  );
};
