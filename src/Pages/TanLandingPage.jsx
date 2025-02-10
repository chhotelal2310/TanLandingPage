import React from "react";
import Home from "../components/Home";
import BPoSAndinflationModel from "../components/BPoSAndinflationModel";

const TanLandingPage = () => {
  return (
    <div className="w-full place-items-center bg-black">
      <div className="w-full bg-gradient-to-b from-[#3f1326] from-5% via-[#000000] to-100%  pl-4 pr-4">
        <Home />
        <BPoSAndinflationModel />
      </div>
    </div>
  );
};

export default TanLandingPage;

// import React from "react";
// import Home from "../components/Home";
// import BposAndInflationModel from "../components/BPoSAndinflationModel";

// const TanLandingPage = () => {
//   return (
//     <>
//       <div className="w-full flex justify-center bg-black">
//         {/* <div className="w-9/10 sm:w-4/5 bg-gradient-to-b from-[#3f1326] from-5% via-[#00000] to-100%"> */}
//         <div className="w-full bg-gradient-to-b from-[#3f1326] from-5% via-[#00000] to-100%">
//           <Home />
//           <BposAndInflationModel />
//         </div>
//       </div>
//     </>
//   );
// };

// export default TanLandingPage;
