import React from "react";
import Design from "../../../shared/ui/icons/design/design";
import Sales from "../../../shared/ui/icons/sales/sales";
import Marketing from "../../../shared/ui/icons/marketing/marketing";
import Finance from "../../../shared/ui/icons/finance/finance";
import Technology from "../../../shared/ui/icons/technology/technology";
import Engineering from "../../../shared/ui/icons/engineering/engineering";
import Business from "../../../shared/ui/icons/business/business";
import Human from "../../../shared/ui/icons/human/human";
import { CategoryCard } from "../../../entities/categoryCard/ui/categoryCard";

export const CategoryCatalog = () => {
  return (
    <div className="grid grid-cols-4 gap-[32px]">
      <CategoryCard img={<Design />} />
      <CategoryCard img={<Sales />} />
      <CategoryCard img={<Marketing />} />
      <CategoryCard img={<Finance />} />

      <CategoryCard img={<Technology />} />
      <CategoryCard img={<Engineering />} />
      <CategoryCard img={<Business />} />
      <CategoryCard img={<Human />} />
    </div>
  );
};
