import React from "react";
import GrayArrow from "@shared/ui/icons/arrow/grayArrow";
import Design from "@shared/ui/icons/design/design";
import { Link } from "react-router-dom";

export const CategoryCard = ({ img, title, subtitle }) => {
  return (
    <Link to="/signup">
      <div className="flex flex-col border border-gray p-[32px] cursor-pointer w-fit h-fit">
        {img ? img : <Design />}
        <p className="text-xl text-second font-semibold mt-[32px]">
          {title || "Design"}
        </p>
        <div className="flex items-center gap-[10px] mt-[12px]">
          <p className="text-base text-text">
            {subtitle || "235 jobs available"}
          </p>
          <GrayArrow />
        </div>
      </div>
    </Link>
  );
};
