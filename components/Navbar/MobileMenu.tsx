import React, { Dispatch, SetStateAction } from "react";
import { links } from "./links";
import { Link as Scroll } from "react-scroll";

interface Props {
  activeMenu: boolean;
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu = ({ activeMenu, setActiveMenu }: Props) => {
  const linkStyle =
    "font-medium text-base text-lightGreen after:content-[''] after:w-0 hover:after:w-full after:transition-all after:h-[2px] after:absolute after:left-0 relative after:-bottom-2 after:bg-lightGreen";
  const liStyle = `mb-5 block -translate-x-28 ease-linear duration-700 delay-100 ${
    activeMenu ? "!-translate-x-0" : ""
  }`;
  return (
    <div
      className={`fixed left-0 top-[75px] z-50 ${
        activeMenu ? "" : "!-left-full"
      } ease-linear duration-500 w-full min-h-screen bg-white sm:hidden`}
    >
      <div className="flex justify-center mt-24">
        <ul className="text-center overflow-hidden">
          {links.map(({ label, link }, i) => (
            <li key={i} className={linkStyle}>
              <Scroll
                to={link}
                activeClass="active__mobile-link"
                spy={true}
                smooth={true}
                duration={500}
                offset={-150}
                href={link}
                className={liStyle}
                onClick={() => setActiveMenu(false)}
              >
                {label}
              </Scroll>
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
