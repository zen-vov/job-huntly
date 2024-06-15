import { HeaderProfile } from "@widgets/headerProfile";
import { Button } from "@shared/ui/button";
import { Input } from "@shared/ui/input";
import Search from "@shared/ui/icons/search/search";
import Location from "@shared/ui/icons/location/location";
import { JobCatalog } from "../../../features/jobCatalog/ui/jobCatalog";

export const FindJobsPage = () => {
  return (
    <div className="w-full h-full">
      <HeaderProfile title="Поиск работы" />
      <div className="container-2">
        <section className="pb-[32px] border-b border-b-gray">
          <div className="flex flex-col border border-gray mt-[32px] p-[24px]">
            <div className="flex items-center justify-between">
              <div className="bg-white flex justify-between items-center w-[450px] p-[16px]">
                <Search />
                <Input
                  className="ml-[10px] border-b-[1px] w-[400px] border-b-gray pl-[2px] pb-[8px]"
                  placeholder="Название должности или ключевое слово"
                />
              </div>
              <div className="bg-white flex justify-between items-center w-[450px] p-[16px]">
                <Location />
                <Input
                  className="ml-[10px] border-b-[1px] w-[400px] border-b-gray pl-[2px] pb-[8px]"
                  placeholder="Флоренция, Италия"
                />
              </div>
              <Button
                label="Поиск"
                className="bg-button w-[113px] h-[50px] py-[12px] px-[24px]"
                labelStyle="text-white"
              />
            </div>
          </div>
          <p className="text-sm text-link mt-[16px]">
            Популярные: Дизайнер UI, Исследователь UX, Android, Администратор
          </p>
        </section>
        <section className="">
          <JobCatalog />
        </section>
      </div>
    </div>
  );
};
