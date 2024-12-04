import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { navLinks } from "../data";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
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
    <nav
      className={`w-full p-4 flex items-center justify-evenly fixed top-0 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="flex items-center justify-center gap-1 text-red-500">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <span className="text-xl font-bold">Travel</span>
      </div>

      <div className="w-1/2 flex items-center justify-evenly">
        {navLinks.map((curr, i) => (
          <div className="relative group" key={i}>
            <NavLink
              to={curr.link}
              className={`relative font-semibold hover:text-red-500 group ${isScrolled ? "text-black" : "text-white"}`}
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

      <div className="flex items-center justify-center gap-2">
        <button className="border rounded-md p-2 text-red-500 bg-white">
          IND|ENG
        </button>
        <button className="border rounded-md p-2 text-red-500 bg-white">
          INR
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
