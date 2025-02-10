import React from "react";
import TanLogoImage from "../assets/TanImage/TanlogoImage.png";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const BPoSAndinflationModel = () => {
  return (
    <>
      <div className="w-full place-items-center">
        <div className="w-full sm:w-[98%] lg:w-[80%] flex flex-col sm:flex-row sm:justify-center  gap-y-4 sm:gap-x-2 md:gap-x-3 lg:gap-x-16">
          <div className="w-full sm:w-[70%] lg:w-[40%]">
            <h1 className="text-2xl max-sm:text-center md:text-[2rem] 2xl:text-[2.865625rem] font-bold font-serif md:leading-10 lg:leading-12 break-words text-white">
              World’s first BPoS blockchain with an inflation protection model
            </h1>
            <p className="max-sm:text-center max-sm:text-lg text-[1.2rem] lg:text-[1.375rem] font-bold font-[Roboto] leading-6 sm:leading-8 mt-6 mb-4 text-white">
              TAN is a BPoS blockchain with a halving and burn mechanism
              enabling a stable and valuable token economy and ensuring fair,
              equitable validator rewards.
            </p>
            <h2 className="max-sm:text-center text-2xl sm:text-3xl font-serif font-semibold mt-6 text-white">
              Testnet is coming soon!
            </h2>
            <div className="flex flex-col justify-center items-center sm:flex-row  sm:justify-start gap-8 mt-10">
              <div className="flex justify-center items-center z-4">
                <button className="md:w-60 h-18 rounded-xl sm:w-50 -mr-3.5 border border-white z-5">
                  <h2 className="text-lg font-bold text-white">
                    Explore Architecture
                  </h2>
                  <p className="text-sm font-bold text-[#D925A5;]">
                    Coming Soon!
                  </p>
                </button>
                <ArrowCircleRightIcon
                  fontSize="large"
                  sx={{
                    color: "white",
                    borderRadius: "50%",
                    border: "none",
                    zIndex: 10,
                  }}
                />
              </div>
              <div className="flex justify-between items-center">
                <button className="md:w-40 h-18 rounded-xl sm:w-35 -mr-3.5 border border-white z-5">
                  <h2 className="text-lg font-bold  text-white">Build dApps</h2>
                  <p className="text-sm font-bold  text-[#D925A5;]">
                    Coming Soon!
                  </p>
                </button>
                <ArrowCircleRightIcon
                  fontSize="large"
                  sx={{
                    color: "white",
                    borderRadius: "50%",
                    border: "none",
                    zIndex: 10,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="place-items-center w-full sm:w-3/10 md:w-2/5 lg:w-3/10">
            <img src={TanLogoImage} className="lg:h-[80%] max-sm:h-70" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BPoSAndinflationModel;
