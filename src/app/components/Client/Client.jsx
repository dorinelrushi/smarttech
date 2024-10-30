import React from "react";

function Client() {
  return (
    <div className="bg-[#FFE7BF]  py-[60px] lg:py-[100px] pb-[200px] lg:pb-[250px]">
      <div className="w-[90%] lg:w-[67%] m-auto ">
        <h2 className="text-[30px] font-extrabold  text-[#3F4343] lg:text-[80px] text-center m-auto mb-[30px] lg:mb-[100px]">
          Client's Says About Us
        </h2>
        <div className="flex flex-col lg:flex-row gap-[30px]">
          <div className="flex-[1] w-[100%] bg-[#FFF8EC] rounded-[31px] p-[40px] shadow-2xl shadow-[#0000000c]">
            <p className="text-[#8B8B8B]">
              Choosing SmartTech was one of the best decisions we made. Their
              expertise brought our ideas to life, and the final product is
              better than we imagined.
            </p>
            <div className="mt-[35px] text-[#FAA15B]">
              <h2 className="text-[25px] font-bold">Lori Housten</h2>
              <p>Customer</p>
            </div>
          </div>
          <div className="flex-[1] w-[100%] bg-[#FAA15B] text-[white] rounded-[31px] p-[40px] shadow-2xl shadow-[#0000000c]">
            <p className="">
              Working with SmartTech was a game-changer. They understood my
              needs immediately and delivered a solution that was both
              innovative and easy to use.
            </p>
            <div className="mt-[35px] ">
              <h2 className="text-[25px] font-bold">Daniel Wilson</h2>
              <p>Customer</p>
            </div>
          </div>
          <div className="flex-[1] w-[100%] bg-[#FFF8EC] rounded-[31px] p-[40px] shadow-2xl shadow-[#0000000c]">
            <p className="text-[#8B8B8B]">
              I couldn’t be happier with the service I received from SmartTech.
              They handled every aspect with professionalism, making the whole
              process feel effortless.
            </p>
            <div className="mt-[35px] text-[#FAA15B]">
              <h2 className="text-[25px] font-bold">Madison Clinei</h2>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
