import React from "react";
import { JobCard } from "../../../entities/jobCard/ui/jobCard";
import Terraform from "@shared/ui/icons/companies/terraform";
import Dropbox from "@shared/ui/icons/companies/dropbox";
import Classpass from "@shared/ui/icons/companies/classpass";

export const JobCatalog = () => {
  return (
    <div className="flex flex-1 p-[32px]">
      <div className="flex flex-col gap-[2px]">
        <div className="flex flex-col mb-[40px] gap-[8px]">
          <p className="text-sm text-second font-semibold">
            Type of Employment
          </p>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="employment"
              type="radio"
            ></input>
            <p className="text-sm text-link">Full-time (3)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="employment"
              type="radio"
            ></input>
            <p className="text-sm text-link">Part-Time (5)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="employment"
              type="radio"
            ></input>
            <p className="text-sm text-link">Remote (2)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="employment"
              type="radio"
            ></input>
            <p className="text-sm text-link">Internship (24)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="employment"
              type="radio"
            ></input>
            <p className="text-sm text-link">Contract (3)</p>
          </div>
        </div>
        <div className="flex flex-col mb-[40px] gap-[8px]">
          <p className="text-sm text-second font-semibold">Categories</p>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="categories"
              type="radio"
            ></input>
            <p className="text-sm text-link">Design (24)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="categories"
              type="radio"
            ></input>
            <p className="text-sm text-link">Sales (3)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="categories"
              type="radio"
            ></input>
            <p className="text-sm text-link">Business (3)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="categories"
              type="radio"
            ></input>
            <p className="text-sm text-link">Human Resource (6)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="categories"
              type="radio"
            ></input>
            <p className="text-sm text-link">Finance (4)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="categories"
              type="radio"
            ></input>
            <p className="text-sm text-link">Engineering (4)</p>
          </div>
        </div>
        <div className="flex flex-col mb-[40px] gap-[8px]">
          <p className="text-sm text-second font-semibold">Job Level</p>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="joblevel"
              type="radio"
            ></input>
            <p className="text-sm text-link">Entry Level (57)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="joblevel"
              type="radio"
            ></input>
            <p className="text-sm text-link">Mid Level (3)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="joblevel"
              type="radio"
            ></input>
            <p className="text-sm text-link">Senior Level (5)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="joblevel"
              type="radio"
            ></input>
            <p className="text-sm text-link">Director (12)</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              className="w-[15px] h-[15px] rounded-none"
              name="joblevel"
              type="radio"
            ></input>
            <p className="text-sm text-link">VP or Above (8)</p>
          </div>
        </div>
        <div className="flex flex-col mb-[40px] gap-[8px]">
          <p className="text-sm text-second font-semibold">Salary Range</p>
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
            <p className="text-sm text-link">$3000 or above (4)</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-center ml-[400px] mr-[400px] mb-[32px]">
          <h2 className="text-xl text-second font-semibold">All Jobs</h2>
          <p className="text-sm text-second">Showing 73 results</p>
        </div>
        <div className="flex flex-col gap-[16px]">
          <JobCard type="second" time="full" tags="marketing design" />
          <JobCard
            img={<Terraform />}
            type="second"
            time="full"
            tags="marketing design"
            company="Terraform"
          />
          <JobCard
            img={<Dropbox />}
            type="second"
            time="full"
            tags="marketing design"
            company="Dropbox"
          />
          <JobCard
            img={<Classpass />}
            type="second"
            time="full"
            tags="marketing design"
          />
          <JobCard type="second" time="full" tags="marketing design" />
          <JobCard
            img={<Terraform />}
            type="second"
            time="full"
            tags="marketing design"
            company="Terraform"
          />
          <JobCard
            img={<Dropbox />}
            type="second"
            time="full"
            tags="marketing design"
            company="Dropbox"
          />
          <JobCard
            img={<Classpass />}
            type="second"
            time="full"
            tags="marketing design"
          />
        </div>
      </div>
    </div>
  );
};
