import Image from "next/image";
import React from "react";

function Ourservice() {
  return (
    <div>
      <div className="w-[90%] lg:w-[57%] m-auto mt-[50px] lg:mt-[100px] mb-[40px]">
        <h2
          className="text-center text-[40px]  lg:text-[80px] font-extrabold  text-[#3F4343] "
          id="services"
        >
          Our Services
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
              <h2 className="text-[30px]">Graphic Design </h2>
              <p className="text-[17px] text-[#7D7D7D] max-w-[560px]">
                With an average turnaround time of 21 days, we’ll help you tell
                beautiful and inspiring stories from concept to completion.
              </p>
            </div>
            <div className="Social  flex flex-col gap-[25px] border-[1px] border-[#FFE1AF] bg-[white] p-[50px] rounded-[31px]">
              <Image
                src={"/social1.svg"}
                width={80}
                height={100}
                alt="grahic"
              />
              <h2 className="text-[30px]">Social Media  </h2>
              <p className="text-[17px] text-[#7D7D7D] max-w-[560px]">
                Our team of experienced Social Media Managers will transform you
                social media into one of your most powerful marketing assets
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
              <h2 className="text-[30px]">Content Writing </h2>
              <p className="text-[17px] text-[#7D7D7D] max-w-[560px]">
                Writing is how you tell your story and at Paeon we make the
                words work for you! Let your tale be told by people who live for
                the written word.
              </p>
            </div>
            <div className="Social  flex flex-col gap-[25px] border-[1px] border-[#FFE1AF] bg-[white] p-[50px] rounded-[31px]">
              <Image src={"/video.svg"} width={80} height={100} alt="grahic" />
              <h2 className="text-[30px]">Video Production </h2>
              <p className="text-[17px] text-[#7D7D7D] max-w-[560px]">
                With an average turnaround time of 21 days, we’ll help you tell
                beautiful and inspiring stories from concept to completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourservice;
