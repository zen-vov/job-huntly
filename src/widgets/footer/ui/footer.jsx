import React from "react";
import Logo from "@shared/ui/icons/logo/logo";

export const Footer = () => {
  return (
    <footer className="bg-footer py-[64px] container">
      <div className="flex justify-between items-center mb-[42px] pb-[38px] border-b-[1px] border-b-[#fff]">
        <Logo />
        <div>
          <p className="text-sm text-end text-gray w-[340px]">
            Great platform for the job seeker that passionate about startups.
            Find your dream job easier.
          </p>
        </div>
      </div>
      <p className="text-sm text-text">
        2021 @ JobHuntly. All rights reserved.
      </p>
    </footer>
  );
};
