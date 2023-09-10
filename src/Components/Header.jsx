import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between">
      <Link
        to="/"
        className="text-[#1A1919] text-xl md:text-2xl lg:text-3xl font-extrabold "
      >
        WahidaHub
      </Link>

      <div className="hidden lg:flex items-center gap-8 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-gradient font-bold" : "font-medium text-[#757575]"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            isActive ? "text-gradient font-bold" : "font-medium text-[#757575]"
          }
        >
          Statistics
        </NavLink>

        <NavLink
          to="/applied-jobs"
          className={({ isActive }) =>
            isActive ? "text-gradient font-bold" : "font-medium text-[#757575]"
          }
        >
          Applied Jobs
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "text-gradient font-bold" : "font-medium text-[#757575]"
          }
        >
          Blog
        </NavLink>
      </div>
      <button className="hidden lg:block btn-gradient px-5 py-2.5 rounded-lg text-white font-bold">
        Star Applying
      </button>

      {/* on mobile screen show open close icon */}
      <span onClick={toggleMenu} className="lg:hidden select-none">
        {isOpen ? (
          <XMarkIcon className="w-7 h-7  cursor-pointer text-[#1A1919] absolute right-6 top-6 z-50" />
        ) : (
          <Bars3Icon className="w-7 h-7  cursor-pointer text-[#1A1919]" />
        )}
      </span>

      {/* on mobile screen show menu option */}
      {isOpen && (
        <div className="absolute top-4 right-4 lg:hidden z-20">
          <div className="flex flex-col gap-4 bg-white shadow rounded-md pl-10 pr-14 py-6 ">
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-gradient font-bold"
                  : "font-medium text-[#757575]"
              }
            >
              Home
            </NavLink>

            <NavLink
              onClick={() => setIsOpen(false)}
              to="/statistics"
              className={({ isActive }) =>
                isActive
                  ? "text-gradient font-bold"
                  : "font-medium text-[#757575]"
              }
            >
              Statistics
            </NavLink>

            <NavLink
              onClick={() => setIsOpen(false)}
              to="/applied-jobs"
              className={({ isActive }) =>
                isActive
                  ? "text-gradient font-bold"
                  : "font-medium text-[#757575]"
              }
            >
              Applied Jobs
            </NavLink>

            <NavLink
              onClick={() => setIsOpen(false)}
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-gradient font-bold"
                  : "font-medium text-[#757575]"
              }
            >
              Blog
            </NavLink>
            <button className=" btn-gradient px-5 py-2.5 rounded-lg text-white font-bold">
              Star Applying
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
