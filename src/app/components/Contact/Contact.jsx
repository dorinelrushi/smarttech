import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact">
      <div className=" mb-[200px] lg:mb-[100px] w-[90%] lg:w-[67%] relative flex flex-col lg:flex-row justify-between px-[60px] py-[28px] lg:py-[90px] bg-[#FB5770] m-auto  rounded-[31px] mt-[-90px]">
        <div className="flex justify-center items-center">
          <Image
            src={"/mobiles.png"}
            width={690}
            height={100}
            alt="demo"
            className="socialsphone   relative lg:absolute  lg:top-[-20px] lg:left-[-60px] "
          />
        </div>
        <div>
          <div className="text-[white] ">
            <h2 className="text-[25px] mt-[38px] lg:text-[50px] font-bold mb-[30px]">
              GET IN TOUCH
            </h2>
            <p className="max-w-[450px] text-[18px] mb-[54px]">
              If you have any other questions or are in need of further
              assistance do not hesitate to contact us below
            </p>
            <div className="flex flex-col text-[17px] gap-[20px] mb-[33px]">
              <Link href="/">company@gmail.com</Link>
              <Link href="/">+355 69 851 7888</Link>
              <Link href="/">Street name, Greece 7456</Link>
            </div>
            <div className="socialmedia flex text-[25px] gap-[25px]">
              <FaInstagram />
              <FaFacebook />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;