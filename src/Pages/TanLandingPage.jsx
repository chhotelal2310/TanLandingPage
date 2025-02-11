import React from "react";
import Home from "../components/Home";
import BPoSAndinflationModel from "../components/BPoSAndinflationModel";
import TanImage from "../components/TanImage";
import UpcomingReleases from "../components/UpcomingReleases";
import ListImageAndContainent from "../components/ListImageAndContainent";

const TanLandingPage = () => {
  return (
    <div className="w-full place-items-center bg-black">
      <div className="w-full bg-gradient-to-b from-[#3f1326] from-5% via-[#000000] to-100%  pl-4 pr-4 pb-30">
        <Home />
        <BPoSAndinflationModel />
        <TanImage />
        <UpcomingReleases />
        <ListImageAndContainent />
      </div>
    </div>
  );
};

export default TanLandingPage;
