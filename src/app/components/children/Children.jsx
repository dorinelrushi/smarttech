"use client";
import { useTranslation } from "@/app/translations/provider";
import Link from "next/link";
import React from "react";
import { TbArrowBack } from "react-icons/tb";

function Children() {
  const { translations } = useTranslation();
  return (
    <div>
      <div className="bgkids  w-[100%] h-[30vh] lg:h-[94vh] flex justify-center items-start ">
        <Link
          href="/"
          className=" mt-[30px] lg:mt-[120px] bg-[#fcd894] py-[10px] px-[25px] shadow-lg flex gap-[5px] items-center rounded-[8px] hover:bg-[#fdcd74]"
        >
          {translations.backhome} <TbArrowBack />
        </Link>
      </div>
      <div className="w-[85%] lg:w-[65%] m-auto">
        <h2 className="mt-[50px] lg:mt-[120px] text-[35px] leading-[49px] lg:text-[120px] font-bold lg:leading-[132px] text-[#292929]">
          {translations.helping1}
        </h2>
        <p className="text-[20px] lg:text-[30px] mt-[58px]">
          {translations.support}
        </p>
        <p className="text-[20px] lg:text-[30px] mt-[58px]">
          {translations.program}
        </p>

        <h2 className="mt-[50px] text-[22px] leading-[30px] lg:text-[50px] font-bold  text-[#292929]">
          {translations.Core}
        </h2>
        <ul className="mt-[-2px] lg:mt-[30px] flex flex-col gap-[8px] lg:gap-[30px] list-disc ml-[20px]">
          <li className="text-[20px] lg:text-[30px] mt-[58px]">
            {translations.Empathy}
          </li>
          <li className="text-[20px] lg:text-[30px] mt-[58px]">
            {translations.Positive}
          </li>
          <li className="text-[20px] lg:text-[30px] mt-[58px]">
            {translations.Supportive}
          </li>
        </ul>
        <h2 className="mt-[50px] text-[22px] leading-[30px] lg:text-[50px] font-bold  text-[#292929]">
          {translations.Resources}
        </h2>
        <p className="text-[20px] lg:text-[30px] mt-[25px] lg:mt-[58px]">
          {translations.extend}
        </p>
        <h2 className="mt-[50px] text-[22px] leading-[30px] lg:text-[50px] font-bold  text-[#292929]">
          {translations.OurMission}
        </h2>
        <p className="text-[20px] lg:text-[30px] mt-[25px] lg:mt-[58px]">
          {translations.cultivate}
        </p>
        <h2 className="mt-[50px] text-[22px] leading-[30px] lg:leading-[65px] lg:text-[50px] font-bold  text-[#292929]">
          {translations.Join}
        </h2>
        <p className="text-[20px] lg:text-[30px] mt-[25px] lg:mt-[58px] mb-[180px] ">
          {translations.Together}
        </p>
      </div>
    </div>
  );
}

export default Children;
