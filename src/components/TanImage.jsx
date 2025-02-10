import React from "react";
import tandimage from "../TanImageData/tandimage";

const TanImage = () => {
  return (
    <>
      <div className="w-full mt-10 place-items-center">
        <h2 className="pt-10 pb-10 text-3xl font-bold bg-gradient-to-b from-[#DC4D8B] to-[#E0736A] bg-clip-text text-transparent ">
          Use TAN For
        </h2>
        <div className="w-full grid grid-cols-1 grid-rows-6 place-items-center gap-4 sm:grid-cols-3 sm:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1 lg:pl-4 lg:pr-4 2xl:w-[70%]">
          {tandimage.map((item) => {
            return <img src={item.img} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default TanImage;
