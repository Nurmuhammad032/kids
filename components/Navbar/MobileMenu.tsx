import Link from "next/link";
import React from "react";
import { links } from "./links";

interface Props {
  activeMenu: boolean;
}

const MobileMenu = ({ activeMenu }: Props) => {
  const linkStyle =
    "font-medium text-base text-lightGreen after:content-[''] after:w-0 hover:after:w-full after:transition-all after:h-[2px] after:absolute after:left-0 relative after:-bottom-2 after:bg-lightGreen";
  const liStyle = `mb-5 block -translate-x-28 ease-linear duration-[1400ms] delay-100 ${
    activeMenu ? "!-translate-x-0" : ""
  }`;
  return (
    <div
      className={`fixed left-0 top-[75px] ${
        activeMenu ? "" : "!-left-full"
      } ease-linear duration-700 w-full min-h-screen bg-white sm:hidden`}
    >
      <div className="flex justify-center mt-24">
        <ul className="text-center overflow-hidden">
          {links.map(({ label, link }, i) => (
            <li key={i} className={linkStyle}>
              <Link href={link} className={liStyle}>
                {label}
              </Link>
            </li>
          ))}
          <li className={liStyle}>
            <a href="tel:+998 90 000 00 00" className={linkStyle}>
              +998 90 000 00 00
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
