import React from "react";
import { NavLink } from "react-router-dom";
import TanIcon from "../assets/TanIcon/TanIcon.png";
import TAN from "../assets/TanIcon/TAN.png";
import { HiOutlineViewList } from "react-icons/hi";
const Header = () => {
  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-[#000000] pt-6 pb-6  pr-20 pl-20 max-[425px]:pl-1 max-[425px]:pr-1 max-sm:pl-2 max-sm:pr-2 max-md:pl-4 max-md:pr-4 max-lg:pl-1 max-lg:pr-1">
        <div className="flex items-center justify-around">
          <div className="flex items-center justify-center gap-2">
            <img
              src={TanIcon}
              className="max-[320px]:h-8 max-[320px]:w-8 max-[425px]:h-9 max-[425px]:w-9 max-sm:h-10 max-sm:w-10"
            />
            <img
              src={TAN}
              className="h-8 w-20 max-[320px]:h-4 max-[320px]:w-10 max-[425px]:h-5 max-[425px]:w-12 max-sm:h-6 max-sm:w-14 max-md:h-8 max-md:w-16"
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-x-16 max-lg:gap-x-10">
            <NavLink to="#">
              <span className="font-bold text-white hidden  md:block">
                Developer Docs
              </span>
            </NavLink>
            <NavLink to="#">
              <span className="font-bold text-white hidden  md:block">
                Become a validator
              </span>
            </NavLink>
            <NavLink to="#">
              <span className="font-bold text-white hidden  md:block">ICO</span>
            </NavLink>
          </div>
          <button className="hidden cursor-pointer rounded-3xl bg-[#E2488B] pt-2 pr-5 pb-2 pl-5 text-lg font-bold text-white md:block">
            Join the community
          </button>
          <HiOutlineViewList className="h-10 w-10 cursor-pointer text-white md:hidden max-[425px]:h-8 max-[425px]:w-8" />
        </div>
      </div>
    </>
  );
};

export default Header;
