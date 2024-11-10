"use client"; // Add this at the top

import { useTranslation } from "@/app/translations/provider";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for open and close

function Header() {
  const { translations, changeLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full z-50 ${
        isScrolled
          ? "fixed top-0  bg-[#ffffff] shadow-lg"
          : "relative bg-[#fbf8f3]"
      }  transition-shadow duration-300`}
    >
      <div className="flex w-[65%]  justify-between py-4 m-auto items-center">
        <div className="LogoImage">
          <Image
            src="/Logo.png"
            width={64}
            height={60}
            alt="logo"
            className="w-[auto] h-[auto]"
          />
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex menu">
          <ul className="flex gap-6 items-center text-[#555555] text-[18px]">
            <li>
              <Link href={"/"}>{translations.home}</Link>
            </li>
            <li>
              <Link href={"#about"}>{translations.about}</Link>
            </li>
            <li>
              <Link href={"#services"}>{translations.services}</Link>
            </li>
            <li>
              <Link href={"#projects"}>{translations.projects}</Link>
            </li>
            <li>
              <select
                onChange={handleLanguageChange}
                className="bg-transparent"
              >
                <option value="en">🇬🇧 English</option>
                <option value="el">🇬🇷 Greece</option>
              </select>
            </li>
            <li>
              <Link href={"#contact"}>
                <button className="border text-[18px] px-6 py-2 rounded-full text-[#555555] bg-transparent border-[#555555] hover:bg-white hover:text-[#4f64db] hover:border-[#4f64db]">
                  {translations.GetaQuote}
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile & Tablet menu */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Dropdown menu for mobile/tablet */}
      {isOpen && (
        <div className="lg:hidden fixed top-0 right-0 w-[80%] h-full bg-white shadow-lg z-40 overflow-y-auto p-6">
          <div className="flex justify-end">
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>
          <ul className="flex flex-col gap-4 items-start mt-4 text-[#979797] text-[18px]">
            <li>
              <Link href={"/"} onClick={toggleMenu}>
                {translations.home}
              </Link>
            </li>
            <li>
              <Link href={"#about"} onClick={toggleMenu}>
                {translations.about}
              </Link>
            </li>
            <li>
              <Link href={"#services"} onClick={toggleMenu}>
                {translations.services}
              </Link>
            </li>
            <li>
              <Link href={"#projects"} onClick={toggleMenu}>
                {translations.projects}
              </Link>
            </li>
            <li>
              <select
                onChange={handleLanguageChange}
                className="bg-transparent"
              >
                <option value="en">🇬🇧 English</option>
                <option value="el">🇬🇷 Greece</option>
              </select>
            </li>
            <li>
              <Link href={"#contact"} onClick={toggleMenu}>
                <button className="border text-[18px] px-6 py-2 rounded-full text-[#AAAAAA] bg-transparent border-[#cfcfcf] hover:bg-white hover:text-[#4f64db] hover:border-[#4f64db]">
                  Get a Quote
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
