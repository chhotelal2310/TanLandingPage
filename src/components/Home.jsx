import React from "react";
import TanCoin from "../assets/TanImage/TanCoin.png";
import PlusIcon from "../assets/TanImage/Plus.png";

const Home = () => {
  return (
    <>
      <div className="w-full place-items-center">
        <div className="flex w-full flex-col items-center">
          <div className="place-items-center w-[90%] mt-30 mb-30 sm:w-[80%] md:w-[50%] lg:w-[40%] sm:mt-56 sm:mb-56">
            <h1 className="w-full text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold font-[Roboto] text-center leading-12 sm:leading-16 md:leading-18 text-white">
              Welcome to TAN
            </h1>
            <p className="text-xl md:text-2xl xl:text-3xl font-medium font-[Roboto] text-center  text-white break-words">
              The leading platform for innovative apps and blockchain network
            </p>
          </div>

          <div className="place-items-center w-full">
            <h2 className="text-2xl sm:text-4xl md:text-5xl break-words text-center  max-w-[880px] font-[Roboto] bg-gradient-to-b from-[#DC4D8B] to-[#E0736A] bg-clip-text text-transparent">
              Introducing the most liquid, scarce, and valuable token
            </h2>
            <img
              src={TanCoin}
              className="mt-12 mb-16 max-sm:w-52 max-sm:h-52"
            />

            <div className=" w-full flex flex-col md:flex-row justify-center items-center sm:gap-1.5 md:gap-4">
              <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold font-[Roboto] bg-gradient-to-b from-[#DC4D8B] to-[#E0736A] bg-clip-text text-transparent">
                TAN TOKEN
              </span>
              <span className="sm:text-sm lg:text-lg break-words font-extrabold font-[Roboto] max-w-[478px] leading-6 text-white md:text-start text-center">
                $TAN is the native utility token of Tarality and serves as the
                lifeblood of the ecosystem.
              </span>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center md:flex-row mt-40 mb-30 md:mt-60 md:max-w-[1148px]">
            <button className="w-full md:w-[700px] lg:max-w-[25rem] h-32 md:h-40 lg:h-36 border-2 border-[#E488BD] rounded-xl z-2 md:-mr-4  md:pl-10 md:pr-10 pl-4 pr-4 pt-5 pb-5 place-items-center max-md:-mb-2">
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center text-white pb-2">
                BPoS
              </p>
              <p className="text-sm font-[Roboto] font-normal text-white break-words">
                Reduces energy consumption, builds scalability, and enhances
                network security.
              </p>
            </button>
            <img src={PlusIcon} className="z-5" />
            <button className="w-full md:w-[700px] lg:max-w-[25rem] h-32 md:h-40 lg:h-36 border-2 border-[#E488BD] rounded-xl z-2 md:-ml-4 md:pl-10 md:pr-10 pl-4 pr-4 pt-5 pb-5 place-items-center max-md:-mt-2">
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center text-white pb-2">
                Inflation Protection
              </p>
              <p className="text-sm font-[Roboto] font-normal text-white break-words">
                Burn Mechanism consistently reduces token supply. Halving
                maintains long-term token scarcity and value.
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

// import React from "react";
// import TanCoin from "../assets/TanImage/TanCoin.png";
// import PlusIcon from "../assets/TanImage/Plus.png";

// const Home = () => {
//   return (
//     <>
//       <div className="w-full place-items-center">
//         <div className="flex w-full flex-col items-center">
//           <div className="place-items-center w-[90%] mt-30 mb-30 sm:w-[80%] md:w-[70%] sm:mt-56 sm:mb-56">
//             <h1 className="w-full text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold font-[Roboto] text-center leading-12 sm:leading-16 md:leading-18 text-white">
//               Welcome to TAN
//             </h1>
//             <p className="text-xl md:text-2xl xl:text-3xl font-medium font-[Roboto] text-center  text-white break-words">
//               The leading platform for innovative apps and blockchain network
//             </p>
//           </div>

//           <div className="place-items-center w-full">
//             <h2 className="text-2xl sm:text-4xl md:text-5xl break-words text-center  max-w-[880px] font-[Roboto] bg-gradient-to-b from-[#DC4D8B] to-[#E0736A] bg-clip-text text-transparent">
//               Introducing the most liquid, scarce, and valuable token
//             </h2>
//             <img
//               src={TanCoin}
//               className="mt-12 mb-16 max-sm:w-52 max-sm:h-52"
//             />

//             <div className=" w-full flex flex-col md:flex-row justify-center items-center sm:gap-1.5 md:gap-4">
//               <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold font-[Roboto] bg-gradient-to-b from-[#DC4D8B] to-[#E0736A] bg-clip-text text-transparent">
//                 TAN TOKEN
//               </span>
//               <span className="sm:text-sm lg:text-lg break-words font-extrabold font-[Roboto] max-w-[478px] leading-6 text-white md:text-start text-center">
//                 $TAN is the native utility token of Tarality and serves as the
//                 lifeblood of the ecosystem.
//               </span>
//             </div>
//           </div>

//           <div className="w-full flex flex-col justify-center items-center md:flex-row mt-40 mb-30 md:mt-60 md:max-w-[1148px]">
//             <button className="w-full md:w-[700px] lg:max-w-[31.9375rem] h-32 md:h-40 lg:h-36 border-2 border-[#E488BD] rounded-xl z-2 md:-mr-4  md:pl-10 md:pr-10 pl-4 pr-4 pt-5 pb-5 place-items-center max-md:-mb-2">
//               <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center text-white pb-2">
//                 BPoS
//               </p>
//               <p className="text-sm font-[Roboto] font-normal text-white break-words">
//                 Reduces energy consumption, builds scalability, and enhances
//                 network security.
//               </p>
//             </button>
//             <img src={PlusIcon} className="z-5" />
//             <button className="w-full md:w-[700px] lg:max-w-[31.9375rem] h-32 md:h-40 lg:h-36 border-2 border-[#E488BD] rounded-xl z-2 md:-ml-4 md:pl-10 md:pr-10 pl-4 pr-4 pt-5 pb-5 place-items-center max-md:-mt-2">
//               <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center text-white pb-2">
//                 Inflation Protection
//               </p>
//               <p className="text-sm font-[Roboto] font-normal text-white break-words">
//                 Burn Mechanism consistently reduces token supply. Halving
//                 maintains long-term token scarcity and value.
//               </p>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
