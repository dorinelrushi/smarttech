"use client";
import { useTranslation } from "@/app/translations/provider";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";

function Whatwedo() {
  const { translations } = useTranslation();

  return (
    <div>
      <div
        className=" w-[90%] md:w-[50%] lg:w-[67%]  m-auto mt-[48px] lg:mt-[30px] mb-[45px] "
        id="about"
      >
        <div className="flex flex-col lg:flex-row   gap-[18px] ">
          <div className="box1 flex-[0.9] p-[38px] rounded-[31px] relative overflow-hidden ">
            <div className="flex flex-col gap-[25px]">
              <Image src={"/like.svg"} width={63} height={63} alt="de" />
              <h2 className="font-bold text-[20px]">What We Do?</h2>
              <p className="max-w-[200px] text-[18px] text-[#4A4A4A]">
                Empowering businesses with smart, innovative solutions.
              </p>
              <Link className="" href={"/"}>
                Learn More
              </Link>
              <Image
                src={"/woman.png"}
                width={200}
                height={100}
                className="woman absolute right-[-30px] md:right-[-50px]  lg:right-[0px] bottom-[0px] w-[40%] md:w-[50%] lg:w-[260px] "
                alt="woman"
              />
            </div>
          </div>
          <div className="box2  flex flex-col  lg:flex-col  lg:flex-[0.7]  gap-[18px]">
            <div className="p-[30px] bg-[#FAA15B] rounded-[31px] relative">
              <div className="flex justify-end mb-[5px] relative">
                <div className="ph1 border-[2px] border-[#dd8c4d] w-[50px] relative left-[35px]  h-[50px] rounded-[60px] "></div>
                <div className="ph2 border-[2px] border-[#dd8c4d]  w-[50px] relative left-[25px] h-[50px] rounded-[60px] "></div>
                <div className="ph3 border-[2px] border-[#dd8c4d]  w-[50px] relative left-[15px] h-[50px] rounded-[60px] ]"></div>
                <div className="ph4   w-[50px] text-[#e08641] relative h-[50px] rounded-[60px] text-[25px] flex justify-center items-center  bg-[white]  ">
                  <FiPlus />
                </div>
              </div>
              <h2 className="text-[50px] font-bold text-[white] mb-[-8px]">
                25k+
              </h2>
              <p className="text-[white]">Trusted Active Clients</p>
            </div>
            <div className="p-[30px] bg-[#AE9FA6] rounded-[31px]">
              <div className="flex text-[13px] lg:text-[15px] items-center text-[white] mb-[15px] justify-end gap-[10px]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p>(4.5 rating)</p>
              </div>
              <h2 className="font-bold text-[50px] text-[white] mb-[-8px]">
                8M+{" "}
              </h2>
              <p className="text-white clear-start ">Happy Customers</p>
            </div>
          </div>
          <div className="box3 flex  flex-[1.1] flex-col justify-end">
            <div className="bg-[white] gap-[20px] justify-between p-[19px] rounded-[31px] flex  flex-col lg:flex-row shadow-2xl shadow-[#0000000c] ">
              <div className="womangirl w-[200] rounded-[15px] "></div>
              <div>
                <h2 className="text-[28px] max-w-[250px] leading-[35px] mb-[25px] ">
                  We help your brand to grow on social media.{" "}
                </h2>
                <Link href={"/"}>Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whatwedo;
