import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { navLinks } from "../data";
import { NavLink } from "react-router";
import PropTypes from "prop-types";
import { LuPlus } from "react-icons/lu";

const LargeScreenNavLinks = ({ isScrolled }) => {
  return (
    <>
      <div className="w-1/2 items-center justify-evenly xl:flex hidden mx-auto">
        {navLinks.map((curr, i) => (
          <div className="relative group" key={i}>
            <NavLink
              to={curr.link}
              className={`relative font-semibold hover:text-red-500 group ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              {curr.title}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-red-500 transition-all duration-500 group-hover:w-full"></span>
            </NavLink>
            <div className="absolute group-hover:block hidden top-[100%]">
              <div className="min-w-[15rem] bg-white mt-[2rem] border-t-4 border-t-red-500">
                {curr.children.map((child, i) => (
                  <NavLink
                    to={child.link}
                    className="block p-4 hover:pl-6 hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold"
                    key={i}
                  >
                    {child.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="items-center justify-center gap-2 ml-auto xl:flex hidden">
        <button className="border rounded-md p-2 text-red-500 bg-white">
          IND|ENG
        </button>
        <button className="border rounded-md p-2 text-red-500 bg-white">
          INR
        </button>
      </div>
    </>
  );
};

LargeScreenNavLinks.propTypes = {
  isScrolled: PropTypes.bool,
};

const HamburgerLinks = ({ title, childrenH }) => {
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    document.querySelector(".wrapper")?.classList.toggle("grid-rows-1");
  }, [showChildren]);

  return (
    <>
      <li className="border-gray-400 border-b-[1px] transition-all duration-300">
        <div className="p-4 flex">
          <NavLink className={"hover:text-blue-500 w-full"}>{title}</NavLink>
          <button
            onClick={() => setShowChildren((prev) => !prev)}
            className="ml-auto text-gray-400 outline-none"
          >
            <LuPlus />
          </button>
        </div>

        <div
          className={`overflow-hidden grid transition-all duration-300 ${
            showChildren ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className={`px-8 flex flex-col overflow-hidden`}>
            {childrenH.map((child, i) => (
              <NavLink className={"p-4 hover:text-blue-500"} key={i}>
                {child.title}
              </NavLink>
            ))}
          </div>
        </div>
      </li>
    </>
  );
};

HamburgerLinks.propTypes = {
  title: PropTypes.string,
  childrenH: PropTypes.array,
};

const Hamburger = ({ showMenu }) => {
  return (
    <div className="xl:hidden flex">
      <ul
        className={`no-scrollbar font-bold overflow-scroll transition-all duration-300 absolute top-[100%] left-0 w-full bg-white ${
          showMenu ? "h-screen" : "h-0"
        }`}
      >
        {navLinks.map((curr, i) => (
          <HamburgerLinks
            key={i}
            title={curr.title}
            childrenH={curr.children}
          />
        ))}
      </ul>
    </div>
  );
};

Hamburger.propTypes = {
  showMenu: PropTypes.bool,
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* TODO: use twMerge and clsx to combine class*/
  return (
    <>
      <nav
        className={`w-full z-50 fixed top-0 ${
          isScrolled || showMenu ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="p-4 flex items-center max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-1 text-red-500">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <span className="text-xl font-bold">Travel</span>
          </div>
          <LargeScreenNavLinks isScrolled={isScrolled} />
          <button
            id="hamburger"
            onClick={() => setShowMenu((prev) => !prev)}
            className={`xl:hidden ml-auto relative outline-none w-10 h-6 flex flex-col justify-between items-center group group/open overflow-hidden`}
          >
            {/* Line 1 */}
            <div
              className={`w-8 h-1 bg-gray-600 rounded transition-all duration-300 ${
                showMenu ? "rotate-45 translate-y-[9px]" : ""
              }`}
            ></div>
            {/* Line 2 */}
            <div
              className={`w-8 h-1 bg-gray-600 rounded transition-all duration-300 ${
                showMenu ? "opacity-0" : ""
              }`}
            ></div>
            {/* Line 3 */}
            <div
              className={`w-8 h-1 bg-gray-600 rounded transition-all duration-300 ${
                showMenu ? "-rotate-45 -translate-y-[9px]" : ""
              }`}
            ></div>
          </button>
          <Hamburger showMenu={showMenu} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
