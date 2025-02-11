import React from "react";
import sun1Iamge from "../assets/TanImage/Sun1.jpg";
import hrImage from "../assets/TanImage/hrImage.avif";
import BlockImage1 from "../assets/TanImage/BlockImage1.jpg";
import BlockImage2 from "../assets/TanImage/BlockImage2.jpg";
// import BlockImage3 from "../assets/TanImage/BlockImage3.jpeg";

const ListImageAndContainent = () => {
  return (
    <>
      <div className="w-full place-items-center bg-green-500">
        <h1 className="text-[2.8rem] pb-10 sm:pb-14 font-semibold font-[Roboto] text-center">
          Who We Are?
        </h1>
        <div className="w-full xl:w-[85%] 2xl:w-[75%] flex flex-col lg:flex-row justify-center gap-6 max-md:pl-4 max-md:pr-4">
          <div className=" w-full lg:w-1/2 flex  flex-col items-center justify-center gap-4">
            <p className="text-lg sm:text-xl font-[Roboto] leading-6 max-sm:text-center">
              TAN aims to set a new standard in the blockchain industry by
              offering solutions that address longstanding challenges L1s have
              been suffering from. offering solutions that address longstanding
            </p>
            <p className="text-lg sm:text-xl font-[Roboto] leading-6 max-sm:text-center">
              TAN aims to set a new standard in the blockchain industry by
              offering solutions that address longstanding challenges L1s have
              been suffering from. offering solutions that address longstanding
            </p>
            <p className="text-lg sm:text-xl font-[Roboto] leading-6 max-sm:text-center">
              TAN aims to set a new standard in the blockchain industry by
              offering solutions that address longstanding challenges L1s have
              been suffering from. offering solutions that address longstanding
            </p>
            <p className="text-lg sm:text-xl font-[Roboto] leading-6 max-sm:text-center">
              TAN aims to set a new standard in the blockchain industry by
              offering solutions that address longstanding challenges L1s have
              been suffering from. offering solutions that address longstanding
            </p>
          </div>

          <div className="w-full lg:w-1/2 grid max-sm:place-items-center max-sm:gap-y-4 grid-cols-1 grid-rows-5 sm:grid-cols-3 sm:grid-rows-2">
            <div className="h-[100%] bg-red-500 sm:row-start-1 sm:row-end-4">
              <img className="h-[100%] object-cover" src={hrImage} />
            </div>

            <div className="bg-red-500">
              <img className="h-[100%] object-cover" src={BlockImage1} />
            </div>

            <div className="bg-red-500">
              <img className="h-[100%] object-cover" src={BlockImage2} />
            </div>

            <div className=" bg-red-500">
              <img className="h-[100%] object-cover" src={BlockImage2} />
            </div>

            <div className=" bg-red-500">
              <img className="h-[100%] object-cover" src={sun1Iamge} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListImageAndContainent;
