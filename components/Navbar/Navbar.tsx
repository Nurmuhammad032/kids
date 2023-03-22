import Link from "next/link";
import React, { useState } from "react";
import { links } from "./links";
import MobileMenu from "./MobileMenu";

const languages = [
  {
    lang: "Uzb",
    icon: "/images/uzb-flag.png",
  },
  {
    lang: "Usa",
    icon: "/images/usa-flag.jpg",
  },
];

const SelectLanguage = () => {
  const [dropActive, setDropActive] = useState(false);
  const [selectLang, setSelectLang] = useState({
    lang: "Uzb",
    icon: "/images/uzb-flag.png",
  });

  const handleDropClick = () => {
    setDropActive((prev) => !prev);
  };

  return (
    <li
      className="flex items-center relative cursor-pointer"
      onClick={handleDropClick}
    >
      <img
        src={selectLang.icon}
        alt="country flag"
        className="w-[40px] rounded-[4px] h-[26px] object-cover"
      />
      <div className="md:flex items-center ml-[10px] hidden">
        <p className="text-base text-lightGreen font-bold mr-3">
          {selectLang.lang}
        </p>
        <img src="/icons/arrow-down-fill.png" alt="" />
      </div>
      <div
        className={`absolute top-10 bg-white shadow-md shadow-[rgba(0,0,0,0.3)] transition-all w-40 left-1/2 -translate-x-1/2 py-2 ${
          dropActive ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {languages.map(
          ({ lang, icon }) =>
            selectLang.lang !== lang && (
              <div
                onClick={() =>
                  setSelectLang((prev) => {
                    return { ...prev, lang: lang, icon: icon };
                  })
                }
                key={lang}
                className="flex items-center px-3 hover:bg-[#eeebeb] cursor-pointer py-2"
              >
                <img
                  src={icon}
                  alt={`${lang} flag`}
                  className="w-[40px] rounded-[4px] h-[26px] object-cover"
                />
                <p className="ml-[10px] font-bold text-base text-lightGreen">
                  {lang}
                </p>
              </div>
            )
        )}
      </div>
    </li>
  );
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleClick = () => {
    setActiveMenu((prev) => !prev);
  };

  return (
    <>
      <nav className="bg-white py-1 fixed top-0 left-0 right-0">
        <div className="container">
          <div className="sm:my-5 my-2 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-[60px] h-[52px] lg:mr-[70px]">
                <Link href={"/"}>
                  <img
                    src="/images/logo.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>

              <ul className="lg:flex hidden">
                {links.map(({ label, link }, i) => (
                  <li key={i}>
                    <Link
                      href={link}
                      className="transition-all hover:bg-lightWhite font-bold border-radius-sm text-lightGreen py-[15px] px-[30px]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="block lg:hidden">
              <SelectLanguage />
            </ul>
            <div className="sm:hidden" onClick={handleClick}>
              <img
                src="/icons/menu-icon.png"
                alt="menu icon"
                className="w-7 object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <ul className="flex items-center">
                <div className="hidden lg:block">
                  <SelectLanguage />
                </div>
                <li className="ml-9">
                  <a
                    href="tel:+998 90 000 00 00"
                    className="border-radius-sm relative bg-gradientBlue z-10 flex items-center transition-all py-[15px] px-[40px] text-white font-bold"
                  >
                    <img
                      src="/icons/call-calling.png"
                      alt="call"
                      className="block mr-2"
                    />
                    +998 90 000 00 00
                    <div className="absolute top-[14px] right-1 w-[90%] -z-[1] bg-gradientBlue rounded-[10px] blur-[10px] h-[40px] bg-black"></div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu activeMenu={activeMenu} />
    </>
  );
};

export default Navbar;
