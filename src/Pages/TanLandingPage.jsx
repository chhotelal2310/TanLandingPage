import React from "react";
import Home from "../components/Home";
import BPoSAndinflationModel from "../components/BPoSAndinflationModel";
import TanImage from "../components/TanImage";

const TanLandingPage = () => {
  return (
    <div className="w-full place-items-center bg-black">
      <div className="w-full bg-gradient-to-b from-[#3f1326] from-5% via-[#000000] to-100%  pl-4 pr-4">
        <Home />
        <BPoSAndinflationModel />
        <TanImage />
      </div>
    </div>
  );
};

export default TanLandingPage;
