import React from "react";
import Title from "@shared/ui/icons/title/title";
import Arrow from "@shared/ui/icons/arrow/arrow";
import { Input } from "@shared/ui/input/ui/input";
import { Button } from "../../../shared/ui/button/ui/button";
import { CategoryCatalog } from "../../../features/categoryCatalog/ui/categoryCatalog";
import { JobCard } from "../../../entities/jobCard/ui/jobCard";
import Blinklist from "../../../shared/ui/icons/companies/blinklist";
import Classpass from "../../../shared/ui/icons/companies/classpass";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="container">
      <section className="pt-[80px] pb-[100px]">
        <Title />
        <p className="w-[520px] text-link text-lg mt-[30px]">
          Great platform for the job seeker that searching for new career
          heights and passionate about startups.
        </p>
        <div className="bg-white flex justify-between items-center w-[650px] mt-[24px] p-[16px]">
          <Input
            className="border-b-[1px] w-[400px] border-b-gray pl-[2px] mt-[10px] pb-[8px]"
            placeholder="Job title or keyword"
          />
          <Link to={"/signup"}>
            <Button
              label="Search my job"
              className="bg-button py-[12px] px-[24px]"
              labelStyle="text-white"
            />
          </Link>
        </div>
        <p className="text-sm text-black mt-[16px]">
          Popular : UI Designer, UX Researcher, Android, Admin
        </p>
      </section>
      <section className="py-[72px]">
        <div className="flex items-end text-center justify-between mb-[48px]">
          <h2 className="text-2xl text-second font-semibold">
            Explore by <span className="text-blue">category</span>
          </h2>
          <div className="flex gap-[8px] items-center">
            <Link to="/signup">
              <Button className="text-sm text-primary" label="Show all jobs" />
            </Link>
            <Arrow />
          </div>
        </div>
        <CategoryCatalog />
      </section>
      <section className="py-[72px]">
        <img src="/CTA.png" alt="" />
      </section>
      <section className="py-[72px]">
        <div className="flex items-end text-center justify-between mb-[48px]">
          <h2 className="text-2xl text-second font-semibold">
            Featured<span className="text-blue">jobs</span>
          </h2>
          <div className="flex gap-[8px] items-center">
            <Link to="/signup">
              <Button className="text-sm text-primary" label="Show all jobs" />
            </Link>
            <Arrow />
          </div>
        </div>
        <div className="flex gap-[32px] mb-[32px]">
          <JobCard tags="marketing design" />
          <JobCard
            img={<Blinklist />}
            title={"Visual Designer"}
            subtitle={
              "Blinkist is looking for Visual Designer to help team desi ..."
            }
            company={"Blinklist"}
            address={"Granada, Spain"}
            tags="design"
          />
        </div>
        <JobCard
          img={<Classpass />}
          title={"Product Designer"}
          subtitle={"ClassPass is looking for Product Designer to help us..."}
          company={"ClassPass"}
          address={"Manchester, UK"}
          width="1192px"
          tags="marketing design"
        />
      </section>
    </div>
  );
};
