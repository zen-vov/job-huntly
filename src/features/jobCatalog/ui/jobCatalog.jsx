import { JobCard } from "../../../entities/jobCard/ui/jobCard";
import Terraform from "@shared/ui/icons/companies/terraform";
import Dropbox from "@shared/ui/icons/companies/dropbox";
import Classpass from "@shared/ui/icons/companies/classpass";

export const JobCatalog = () => {
  return (
    <div className="flex flex-1 p-[32px]">
      <div className="flex flex-col gap-[2px]">
        <div className="flex flex-col mb-[40px] gap-[8px]">
          <p className="text-sm text-second font-semibold">Тип занятости</p>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="employment"
              type="radio"
            ></input>
            <p className="text-sm text-link">Полная занятость (3)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="employment"
              type="radio"
            ></input>
            <p className="text-sm text-link">Частичная занятость (5)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="employment"
              type="radio"
            ></input>
            <p className="text-sm text-link">Удаленная работа (2)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="employment"
              type="radio"
            ></input>
            <p className="text-sm text-link">Стажировка (24)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="employment"
              type="radio"
            ></input>
            <p className="text-sm text-link">Контракт (3)</p>
          </div>
        </div>
        <div className="flex flex-col mb-[40px] gap-[8px]">
          <p className="text-sm text-second font-semibold">Категории</p>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="categories"
              type="radio"
            ></input>
            <p className="text-sm text-link">Дизайн (24)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="categories"
              type="radio"
            ></input>
            <p className="text-sm text-link">Продажи (3)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="categories"
              type="radio"
            ></input>
            <p className="text-sm text-link">Бизнес (3)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="categories"
              type="radio"
            ></input>
            <p className="text-sm text-link">Управление персоналом (6)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="categories"
              type="radio"
            ></input>
            <p className="text-sm text-link">Финансы (4)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="categories"
              type="radio"
            ></input>
            <p className="text-sm text-link">Инженерия (4)</p>
          </div>
        </div>
        <div className="flex flex-col mb-[40px] gap-[8px]">
          <p className="text-sm text-second font-semibold">Уровень должности</p>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="joblevel"
              type="radio"
            ></input>
            <p className="text-sm text-link">Начальный уровень (57)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="joblevel"
              type="radio"
            ></input>
            <p className="text-sm text-link">Средний уровень (3)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="joblevel"
              type="radio"
            ></input>
            <p className="text-sm text-link">Старший уровень (5)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="joblevel"
              type="radio"
            ></input>
            <p className="text-sm text-link">Директор (12)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="joblevel"
              type="radio"
            ></input>
            <p className="text-sm text-link">Вице-президент и выше (8)</p>
          </div>
        </div>
        <div className="flex flex-col mb-[40px] gap-[8px]">
          <p className="text-sm text-second font-semibold">
            Диапазон заработной платы
          </p>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="salary"
              type="radio"
            ></input>
            <p className="text-sm text-link">$700 - $1000 (4)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="salary"
              type="radio"
            ></input>
            <p className="text-sm text-link">$100 - $1500 (6)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="salary"
              type="radio"
            ></input>
            <p className="text-sm text-link">$1500 - $2000 (10)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="salary"
              type="radio"
            ></input>
            <p className="text-sm text-link">$3000 и выше (4)</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-center ml-[400px] mr-[400px] mb-[32px]">
          <h2 className="text-xl text-second font-semibold">Все вакансии</h2>
          <p className="text-sm text-second">Показаны результаты: 73</p>
        </div>
        <div className="flex flex-col gap-[16px]">
          <JobCard type="second" time="full" tags="маркетинг, дизайн" />
          <JobCard
            img={<Terraform />}
            type="second"
            time="full"
            tags="маркетинг, дизайн"
            company="Terraform"
          />
          <JobCard
            img={<Dropbox />}
            type="second"
            time="full"
            tags="маркетинг, дизайн"
            company="Dropbox"
          />
          <JobCard
            img={<Classpass />}
            type="second"
            time="full"
            tags="маркетинг, дизайн"
          />
          <JobCard type="second" time="full" tags="маркетинг, дизайн" />
          <JobCard
            img={<Terraform />}
            type="second"
            time="full"
            tags="маркетинг, дизайн"
            company="Terraform"
          />
          <JobCard
            img={<Dropbox />}
            type="second"
            time="full"
            tags="маркетинг, дизайн"
            company="Dropbox"
          />
          <JobCard
            img={<Classpass />}
            type="second"
            time="full"
            tags="маркетинг, дизайн"
          />
        </div>
      </div>
    </div>
  );
};
