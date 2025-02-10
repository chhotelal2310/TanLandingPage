import React from "react";
import UpcomingReleasesData from "../TanImageData/UpcomingReleasesData";
const UpcomingReleases = () => {
  return (
    <>
      <div className="w-full place-items-center mt-30 mb-30">
        <h1 className="text-4xl text-center font-semibold font-[Roboto] bg-gradient-to-b from-[#DC4D8B] to-[#E0736A] bg-clip-text text-transparent mb-14">
          Upcoming Releases
        </h1>
        <div className="w-full flex flex-col items-center md:flex-row md:justify-center gap-12 sm:pl-6 sm:pr-6">
          {UpcomingReleasesData.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  className="w-70 h-60 flex flex-col items-center md:w-60 md:h-50 lg:w-96 lg:h-76 rounded-3xl p-4 relative border-1 border-gray-200 bg-[#7C7C7C]"
                >
                  <div className="flex flex-row lg:flex-col justify-center items-center max-sm:gap-2">
                    <h2 className="text-sm lg:text-2xl font-bold font-[Roboto] text-white">
                      {item.title1}
                    </h2>
                    <h2 className="text-sm lg:text-2xl font-bold font-[Roboto] text-white">
                      {item.title2}
                    </h2>
                  </div>
                  <p className=" text-sm text-center font-normal lg:text-xl font-[Roboto] pt-4 text-white">
                    {item.description}
                  </p>
                  <div className="w-full absolute flex justify-center -bottom-4">
                    <button className="w-35 h-10 rounded-sm font-bold font-[Roboto] text-white bg-gradient-to-r from-[#BF5F52] to-[#E2488B] cursor-pointer">
                      Lern More
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UpcomingReleases;
