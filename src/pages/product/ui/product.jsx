import React from "react";
import { HeaderProfile } from "@widgets/headerProfile";
import { Button } from "../../../shared/ui/button";
import Dropbox from "@shared/ui/icons/companies/dropbox";
import Check from "../../../shared/ui/icons/check/check";
import ArrowLeft from "../../../shared/ui/icons/arrow/arrowLeft";

export const ProductPage = () => {
  return (
    <div className="w-full h-full">
      <HeaderProfile title="Job Description" />
      <div className="container-2">
        <section className="pb-[32px] border-b border-b-gray">
          <div className="flex flex-col border border-gray mt-[32px] p-[24px]">
            <div className="flex items-center justify-between">
              <div className="bg-white flex justify-between items-center w-[450px] p-[16px]">
                <Dropbox />
                <div>
                  <p className="text-[32px] text-second font-semibold">
                    Social Media Assistant
                  </p>
                  <div className="flex items-center text-lg text-link gap-[20px]">
                    <p>Stripe</p>
                    <p>Paris, France</p>
                    <p>Full-Time</p>
                  </div>
                </div>
              </div>
              <Button
                label="Apply"
                className="bg-button w-[164px] h-[57px] py-[14px] px-[56px]"
                labelStyle="text-white"
              />
            </div>
          </div>
        </section>
        <section className="p-[32px]">
          <div className="flex flex-1 gap-[32px]">
            <div className="flex flex-col gap-[40px] w-[815px]">
              <div className="flex flex-col gap-[16px]">
                <h3 className="text-xl text-second font-semibold">
                  Description
                </h3>
                <p className="text-sm text-link font-[400]">
                  Stripe is looking for Social Media Marketing expert to help
                  manage our online networks. You will be responsible for
                  monitoring our social media channels, creating content,
                  finding effective ways to engage the community and incentivize
                  others to engage on our channels.
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                <h3 className="text-xl text-second font-semibold">
                  Responsibilities
                </h3>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      Community engagement to ensure that is supported and
                      actively represented online
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      Focus on social media content development and publication
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      Marketing and strategy support
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      Stay on top of trends on social media platforms, and
                      suggest content ideas to the team
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      Engage with online communities
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px]">
                <h3 className="text-xl text-second font-semibold">
                  Who You Are
                </h3>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      You get energy from people and building the ideal work
                      environment
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      You have a sense for beautiful spaces and office
                      experiences
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      You are a confident office manager, ready for added
                      responsibilities
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      You're detail-oriented and creative
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      You're a growth marketer and know how to run campaigns
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px]">
                <h3 className="text-xl text-second font-semibold">
                  Nice-To-Haves
                </h3>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      Fluent in English
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      Project management skills
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      Copy editing skills
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-[24px] border-b border-b-gray pb-[40px]">
                <h3 className="text-xl text-second font-semibold">
                  Categories
                </h3>
                <div className="flex gap-[8px]">
                  <span className="py-[6px] px-[16px] bg-lightYellow text-yellow text-xs rounded-[80px]">
                    Marketing
                  </span>
                  <span className="py-[6px] px-[16px] bg-lightGreen text-green text-xs rounded-[80px]">
                    Design
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[24px]">
                <h3 className="text-xl text-second font-semibold">
                  Required Skills
                </h3>
                <div className="flex flex-col gap-[8px]">
                  <span className="py-[6px] w-fit px-[16px] bg-input text-primary text-sm font-[400] rounded-[80px]">
                    Project Management
                  </span>
                  <div className="flex gap-[8px]">
                    <span className="py-[6px] w-fit px-[16px] bg-input text-primary text-sm font-[400] rounded-[80px]">
                      Copywriting
                    </span>
                    <span className="py-[6px] w-fit px-[16px] bg-input text-primary text-sm font-[400] rounded-[80px]">
                      English
                    </span>
                  </div>
                  <span className="py-[6px] w-fit px-[16px] bg-input text-primary text-sm font-[400] rounded-[80px]">
                    Social Media Marketing
                  </span>
                  <span className="py-[6px] w-fit px-[16px] bg-input text-primary text-sm font-[400] rounded-[80px]">
                    Copy Editing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
