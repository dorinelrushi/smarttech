import React from "react";

function Project() {
  return (
    <div id="projects">
      <div className="w-[90%] lg:w-[67%] m-auto mt-[60px] lg:mt-[108px] mb-[100px]">
        <h2 className=" text-[30px] leading-[36px] lg:text-[80px] font-extrabold  text-[#3F4343] lg:leading-[95px]">
          Latest <br /> Completed Projects <br /> Of Our Clients
        </h2>

        <div className="flex gap-[35px] flex-col lg:flex-row mt-[50px] lg:mt-[100px] ">
          <div className="relative flex-[1]">
            <div className="project1 w-[100%] lg:w-[100%] flex-[1] h-[362]  rounded-[31px]"></div>
            <div className="bg-[white] p-[20px] w-[70%] text-[18px] leading-[25px] lg:text-[22px]  relative top-[-35px] left-[50px] lg:leading-[30px]  rounded-[20px] shadow-2xl shadow-[#0000000c]">
              <p className="text-[#ee9048] text-[18px] mb-[1px] font-bold">
                Project
              </p>
              <p> Social Media Designs for Danozone Digital</p>
            </div>
          </div>
          <div className="relative flex-[1]">
            <div className="project2 w-[100%] lg:w-[100%] flex-[1] h-[362]  rounded-[31px]"></div>
            <div className="bg-[white] p-[20px] w-[70%] text-[18px] leading-[25px] lg:text-[22px]  relative top-[-35px] left-[50px] lg:leading-[30px]  rounded-[20px] shadow-2xl shadow-[#0000000c]">
              <p className="text-[#ee9048] text-[18px] mb-[1px] font-bold">
                Project
              </p>
              <p>Furniture Social Media Posts Design</p>
            </div>
          </div>
        </div>

        {/* */}
        <div className="flex gap-[35px] flex-col lg:flex-row mt-[35px]">
          <div className="relative flex-[1]">
            <div className="project3 w-[100%] lg:w-[100%] flex-[1] h-[362]  rounded-[31px]"></div>
            <div className="bg-[white] p-[20px] w-[70%] text-[18px] leading-[25px] lg:text-[22px]  relative top-[-35px] left-[50px] lg:leading-[30px]  rounded-[20px] shadow-2xl shadow-[#0000000c]">
              <p className="text-[#ee9048] text-[18px] mb-[1px] font-bold">
                Project
              </p>
              <p>Furniture Social Media Posts Design</p>
            </div>
          </div>
          <div className="relative flex-[1]">
            <div className="project4 w-[100%] lg:w-[100%] flex-[1] h-[362]  rounded-[31px]"></div>
            <div className="bg-[white] p-[20px] w-[70%] text-[18px] leading-[25px] lg:text-[22px]  relative top-[-35px] left-[50px] lg:leading-[30px]  rounded-[20px] shadow-2xl shadow-[#0000000c]">
              <p className="text-[#ee9048] text-[18px] mb-[1px] font-bold">
                Project
              </p>
              <p> Social Media - Contabilidade Posts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
