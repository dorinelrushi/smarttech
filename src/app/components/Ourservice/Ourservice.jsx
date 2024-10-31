"use client";
import { useTranslation } from "@/app/translations/provider";
import Image from "next/image";
import React from "react";

function Ourservice() {
  const { translations } = useTranslation();
  return (
    <div>
      <div className="w-[90%] lg:w-[57%] m-auto mt-[50px] lg:mt-[100px] mb-[40px]">
        <h2
          className="text-center text-[40px]  lg:text-[80px] font-extrabold  text-[#3F4343] "
          id="services"
        >
          {translations.service}
        </h2>

        <div className="flexboxis mt-[27px] lg:mt-[70px]">
          <div className="flex  flex-col lg:flex-row gap-[25px]">
            <div className="gr flex flex-col gap-[25px] border-[1px] border-[#FFE1AF] bg-[white] p-[50px] rounded-[31px]">
              <Image
                src={"/graphic.svg"}
                width={80}
                height={100}
                alt="grahic"
              />
              <h2 className="text-[30px]">{translations.graphicDesign} </h2>
              <p className="text-[17px] text-[#7D7D7D] max-w-[560px]">
                {translations.graphicDesignpara}
              </p>
            </div>
            <div className="Social  flex flex-col gap-[25px] border-[1px] border-[#FFE1AF] bg-[white] p-[50px] rounded-[31px]">
              <Image
                src={"/social1.svg"}
                width={80}
                height={100}
                alt="grahic"
              />
              <h2 className="text-[30px]">{translations.socialMedia} </h2>
              <p className="text-[17px] text-[#7D7D7D] max-w-[560px]">
                {translations.socialmediapara}
              </p>
            </div>
          </div>

          {/* */}
          <div className="flex flex-col lg:flex-row  gap-[25px] mt-[25px]">
            <div className="gr  flex flex-col gap-[25px] border-[1px] border-[#FFE1AF] bg-[white] p-[50px] rounded-[31px]">
              <Image
                src={"/content.svg"}
                width={80}
                height={100}
                alt="grahic"
              />
              <h2 className="text-[30px]">{translations.content}</h2>
              <p className="text-[17px] text-[#7D7D7D] max-w-[560px]">
                {translations.contentpara}
              </p>
            </div>
            <div className="Social  flex flex-col gap-[25px] border-[1px] border-[#FFE1AF] bg-[white] p-[50px] rounded-[31px]">
              <Image src={"/video.svg"} width={80} height={100} alt="grahic" />
              <h2 className="text-[30px]">{translations.video} </h2>
              <p className="text-[17px] text-[#7D7D7D] max-w-[560px]">
                {translations.videopara}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourservice;
