import cn from "classnames";
import { Button } from "../../../shared/ui/button/ui/button";
import Refolut from "../../../shared/ui/icons/companies/revolut";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const JobCard = ({
  type = "first",
  img,
  title,
  subtitle,
  address,
  company,
  tags = [],
  time,
  width = "580px",
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/app/product");
  };

  return (
    <>
      {type === "first" && (
        <div
          className={cn("flex flex-col gap-[16px] p-[24px] border border-gray")}
          style={{ width }}
        >
          <div className="flex justify-between items-center">
            {img ? img : <Refolut />}
            <Link to="/signup">
              <Button
                className="px-[8px] py-[4px] border border-primary text-primary text-sm"
                label="Полная занятость"
              />
            </Link>
          </div>
          <div>
            <p className="text-base text-second font-semibold">
              {title || "Полная занятость"}
            </p>
            <div className="flex gap-[8px]">
              <p>{company || "Revolut"}</p>
              <p>&#8226;</p>
              <p>{address || "Мадрид, Испания"}</p>
            </div>
          </div>
          <div className="w-[226px]">
            <p>
              {subtitle ||
                "Revolut ищет Email Marketing, чтобы помочь команде ма ..."}
            </p>
          </div>
          <div className="flex gap-[8px]">
            {tags.includes("marketing") && (
              <span className="py-[6px] px-[16px] bg-lightYellow text-yellow text-xs rounded-[80px]">
                Маркетинг
              </span>
            )}
            {tags.includes("design") && (
              <span className="py-[6px] px-[16px] bg-lightGreen text-green text-xs rounded-[80px]">
                Дизайн
              </span>
            )}
          </div>
        </div>
      )}
      {type === "second" && (
        <div
          className={cn(
            "flex w-[830px] flex-col gap-[16px] p-[24px] border border-gray"
          )}
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-[24px]">
              <div>{img ? img : <Refolut />}</div>
              <div className="flex flex-col">
                <p className="text-base text-second font-semibold">
                  {title || "Полная занятость"}
                </p>
                <div className="flex gap-[8px]">
                  <p>{company || "Revolut"}</p>
                  <p>&#8226;</p>
                  <p>{address || "Мадрид, Испания"}</p>
                </div>
                <div className="flex items-center gap-[8px] mt-[8px]">
                  {time === "full" && (
                    <span className="py-[6px] px-[16px] bg-lightGreen text-green text-xs rounded-[80px]">
                      Полная занятость
                    </span>
                  )}
                  <div className="flex gap-[8px]">
                    {tags.includes("marketing") && (
                      <span className="py-[6px] px-[16px] border border-yellow text-yellow text-xs rounded-[80px]">
                        Маркетинг
                      </span>
                    )}
                    {tags.includes("design") && (
                      <span className="py-[6px] px-[16px] border border-primary text-primary text-xs rounded-[80px]">
                        Дизайн
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Button
                onClick={handleNavigate}
                className="w-[164px] px-[24px] py-[12px] border border-primary bg-button text-white font-bold text-sm"
                label="Применить"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
