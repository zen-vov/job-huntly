import React from "react";
import Logo from "@shared/ui/icons/logo/logo";
import LogoWhite from "@shared/ui/icons/logo/logoWhite";

export const Footer = () => {
  return (
    <footer className="bg-footer py-[64px]">
      <div className="container">
        <div className="flex justify-between items-center mb-[42px] pb-[38px] border-b-[1px] border-b-[#fff]">
          <LogoWhite />
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
      </div>
    </footer>
  );
};
