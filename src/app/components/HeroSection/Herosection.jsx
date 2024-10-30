"use client"; // Kjo bën që komponenti të jetë client-side

import { useTranslation } from "@/app/translations/provider";
import Image from "next/image";
import React from "react";
import social from "./../../../../public/social123.png";
import Link from "next/link";

function HeroSection() {
  const { translations } = useTranslation();

  return (
    <div>
      <div className="flex flex-col lg:flex-row w-[85%] lg:w-[67%] justify-between m-auto items-center gap-[65px]">
        <div className="leftHeroSection">
          <h1 className=" text-[40px]  mt-[25px] lg:mt-[0px] lg:text-[70px]  text-[#3F4343] font-extrabold leading-[50px] lg:leading-[80px] mb-[40px]">
            Creative<span className="text-[#C0439A]"> Pro </span> <br />
            Social Manager
          </h1>
          <p className="text-[16px] text-[#7B7B7B] max-w-[650px] mb-[60px]">
            At SmartTech, we empower businesses with cutting-edge technology and
            innovative solutions designed to simplify and transform your digital
            experience. From streamlined software to powerful tools that enhance
            productivity, we bring your vision to life with precision and
            expertise
          </p>
          <div className="flex flex-wrap gap-[28px]">
            <Link href={"/"}>
              <button className="button h-[54px] shadow-2xl shadow-[#00000015] bg-[white] w-[217px] py-[10px] rounded-[25px] text-[18px]">
                Get Started Now
              </button>
            </Link>
            <Link href={""}>
              <button className="border-[1px] text-[18px] px-[28px] text-[#AAAAAA] h-[54px] bg-[#ffffff00] rounded-[90px] outline-none border-[#cfcfcf]  hover:text-[#080808] hover:border-[#050505]">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="rightHeroSection mt-[-40px] lg:mt-[0px]">
          <Image
            src={social}
            placeholder="empty" // "empty" | "blur" | "data:image/..."
            priority={false}
            width={548}
            height={1000}
            className="photo object-cover"
            alt="smartech"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
