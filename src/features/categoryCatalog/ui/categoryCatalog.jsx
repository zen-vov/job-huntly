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
      <CategoryCard title="Design" img={<Design />} />
      <CategoryCard title="Sales" img={<Sales />} />
      <CategoryCard title="Marketing" img={<Marketing />} />
      <CategoryCard title="Finance" img={<Finance />} />

      <CategoryCard title="Technology" img={<Technology />} />
      <CategoryCard title="Engineering" img={<Engineering />} />
      <CategoryCard title="Business" img={<Business />} />
      <CategoryCard title="Human Resource" img={<Human />} />
    </div>
  );
};
