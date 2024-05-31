/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Mobile from "./components/mobile";

import Image from "next/image";
import { Inter, Gochi_Hand, DM_Sans } from "next/font/google";
import { FaXTwitter, FaDiscord, FaCheck, FaCopy } from "react-icons/fa6";
import { LuBadgeCheck } from "react-icons/lu";

const inter = Inter({ subsets: ["latin"] });

const gochi = Gochi_Hand({
  subsets: ["latin"],
  weight: "400",
});

const dm = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleDivClick = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <main className={`flex min-h-screen text-white flex-col ${dm.className}`}>
      <section className="bg-[#101111]">
        <div className="w-[100%] flex flex-row  items-center justify-between py-6 px-7">
          <div
            className={`text-white flex items-center gap-2 text-2xl lg:text-3xl ${gochi.className}`}
          >
            <Image src="./logo.svg" width={50} height={50} alt="logo" />
            <h2 className="text-3xl lg:text-4xl">omni</h2>
          </div>
          <div className="hidden lg:flex items-center gap-5">
            {/* <button>About</button>
            <button>Docs</button> */}
            <button className="bg-white text-black font-bold px-8 py-3 rounded-full">
              Docs
            </button>
            <button className="bg-black text-white font-bold px-8 py-3 border-white border-[3px] rounded-full">
              Get Started
            </button>
            <FaXTwitter
              size={25}
              href="https://x.com/use_Omni"
              className="cursor-pointer"
            />
            <FaDiscord size={30} className="cursor-pointer" />
          </div>
          <Mobile />
        </div>

        <div className="w-[100%] flex flex-col items-center pt-[5%] pb-[3%]">
          <h3 className="text-2xl lg:text-8xl text-center font-extrabold text-white">
            Bringing the streets on solana
          </h3>

          <p className="text-xs lg:text-xl xl:px-[13%] tracking-wider mx-4 text-center py-3">
            Omni is redefining the way oralces are used on chain by bringing
            price of regular everyday items on chain
          </p>
        </div>

        <div className="flex px-[20%] py-5 text-center flex-col items-center">
          <button className="bg-black text-white font-bold px-3 md:px-7 lg:px-8 py-3 text-xs lg:text-base border-white border-[3px] rounded-full hover:bg-white hover:text-black">
            Get Started
          </button>
        </div>
      </section>
      <section className="h-[100%] bg-[#101111] py-[4%] overflow-hidden">
        <div className="flex flex-col w-screen overflow-hidden">
          <div className="flex w-full whitespace-nowrap relative">
            <div className=" py-3 pr-2 font-semibold lg:text-3xl bg-purple-600  animate-marquee">
              Electronics • Streetwear • Gift Cards • Tickets • Games • Trading
              • Speed Electronics • Streetwear • Gift Cards •
            </div>

            <div className="absolute left-0  py-3  font-semibold lg:text-3xl bg-purple-600 animate-marquee2 ">
              Electronics • Streetwear • Gift Cards • Tickets • Games • Trading
              • Speed Electronics • Streetwear • Gift Cards •
            </div>
          </div>

          {/* 2 */}
          <div className="flex w-full whitespace-nowrap relative">
            <div className=" py-3 pr-2 font-semibold lg:text-3xl text-black bg-green-600 animate-banner1">
              Electronics • Streetwear • Gift Cards • Tickets • Games • Trading
              • Speed Electronics • Streetwear • Gift Cards •
            </div>

            <div className="absolute left-0  py-3  font-semibold lg:text-3xl text-black bg-green-600 animate-banner2 ">
              Electronics • Streetwear • Gift Cards • Tickets • Games • Trading
              • Speed Electronics • Streetwear • Gift Cards •
            </div>
          </div>

          {/* 3 */}

          <div className="flex w-full whitespace-nowrap relative">
            <div className=" py-3 pr-2 font-semibold lg:text-3xl text-black bg-white animate-marquee">
              Electronics • Streetwear • Gift Cards • Tickets • Games • Trading
              • Speed Electronics • Streetwear • Gift Cards •
            </div>

            <div className="absolute left-0  py-3  font-semibold lg:text-3xl text-black bg-white animate-marquee2 ">
              Electronics • Streetwear • Gift Cards • Tickets • Games • Trading
              • Speed Electronics • Streetwear • Gift Cards •
            </div>
          </div>
        </div>

        <div className="flex justify-center py-[9%]">
          <h3 className="font-semibold lg:text-6xl">
            make money doing stuff your already like
          </h3>
        </div>

        <div className="flex flex-row gap-x-12 relative  w-full ">
          {/* 1 */}
          <div className="flex flex-row gap-7 animate-marquee">
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl bg-black border-gray-600  border flex-shrink-0">
              <Image
                width="250"
                height="250"
                src="/company/Netflix_Symbol_RGB.png"
                alt="Netflix"
              />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl  flex-shrink-0 bg-white border-gray-600  border">
              <Image
                width="250"
                height="250"
                src="/company/solana-sol-logo.png"
                alt="Solana"
              />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl flex-shrink-0 bg-black border-gray-600  border ">
              <Image
                width="250"
                height="250"
                src="/company/bonk1-bonk-logo.png"
                alt="Bonk"
              />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl  flex-shrink-0 bg-black border-gray-600  border">
              <Image
                width="250"
                height="250"
                src="/company/Coca-Cola_logo.png"
                alt="Coca-cola"
              />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl  flex-shrink-0 bg-white border-gray-600  border">
              <Image
                width="250"
                height="250"
                src="/company/tether-usdt-logo.png"
                alt="Tether"
              />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl  flex-shrink-0 bg-white border-gray-600  border">
              <Image
                width="250"
                height="250"
                src="/company/001-nike-logos-swoosh-black.jpg"
                alt="Nike"
              />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl  flex-shrink-0 bg-[#1db954] border-gray-600  border  mr-10">
              <Image
                width="250"
                height="250"
                src="/company/Spotify_Icon_RGB_White.png"
                alt="Spoptify"
              />
            </div>
          </div>

          {/* 2 */}
          <div className="flex flex-row gap-7 overflow-hidden no-scrollbar absolute top-0 animate-marquee2">
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl bg-black border-gray-600  border flex-shrink-0">
              <Image
                width="250"
                height="250"
                src="/company/Netflix_Symbol_RGB.png"
                alt="Netflix"
              />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl  flex-shrink-0 bg-white border-gray-600  border">
              <Image
                width="250"
                height="250"
                src="/company/solana-sol-logo.png"
                alt="Solana"
              />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl flex-shrink-0 bg-black border-gray-600  border ">
              <Image
                width="250"
                height="250"
                src="/company/bonk1-bonk-logo.png"
                alt="Bonk"
              />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl  flex-shrink-0 bg-black border-gray-600  border ">
              <Image
                width="250"
                height="250"
                src="/company/Coca-Cola_logo.png"
                alt="Coca-cola"
              />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl  flex-shrink-0 bg-white border-gray-600  border">
              <Image
                width="250"
                height="250"
                src="/company/tether-usdt-logo.png"
                alt="Tether"
              />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl  flex-shrink-0 bg-white border-gray-600  border ">
              <Image
                width="250"
                height="250"
                src="/company/001-nike-logos-swoosh-black.jpg"
                alt="Nike"
              />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl  flex-shrink-0 bg-[#1db954] border-gray-600  border  mr-7">
              <Image
                width="250"
                height="250"
                src="/company/Spotify_Icon_RGB_White.png"
                alt="Spoptify"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex h-[100vh] pt-12 bg-black flex-col items-center">
        <h4 className="lg:text-4xl font-semibold py-12">Features</h4>

        <div className="w-[100%] h-[100%] my-4 gap-[5%] px-[8%] grid grid-cols-2 justify-start">
          <div className="rounded-xl h-[80%] w-[100%] border-[#00000040] border-[5px] p-5 bg-[#C5F9D7] ">
            <div className="flex items-center justify-between">
              <span className={`text-black lg:text-3xl ${gochi.className}`}>
                Trade tangibles
              </span>
              <img src="tensor.svg" alt="" className="h-[50px] w-[50px]" />
            </div>
          </div>

          <div className="rounded-xl h-[80%] w-[100%] border-[#00000040] border-[5px] text-black p-5 bg-[#F5E89F] ">
            <div className="flex items-center justify-between">
              <span className={`text-black lg:text-3xl ${gochi.className}`}>
                Manage your crew
              </span>
              <img src="squads.svg" alt="" className="h-[50px] w-[50px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="h-[100vh] bg-black">
        <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-2 px-[6%] lg:h-[100%]">
          <div className="text-black h-[100%] flex items-center">
            <h2 className="font-semibold text-3xl lg:text-7xl text-white">
              Creators note...
            </h2>
          </div>

          <div className="text-black text-sm lg:text-base text-justify leading-6 tracking-wide lg:pl-[10%] h-[100%] flex flex-col justify-center items-center">
            <p className="text-white">
              Omo I{"'"}m tired of seeing overpriced hoodies and sneakers on
              Instagram stores. I lost my mind when I saw an unbranded plain
              hoodie for NGN30k! I decided to use my knowledge of programming
              and economics to build a store that allows both sellers and buyers
              to actively set the price of commodities. Hype it up! If you{"'"}
              re tired of buying overpriced FAKE nikes.
            </p>
            <div className="flex w-[100%] py-3 justify-end">
              <button className="bg-white text-black font-bold px-8 py-3 rounded-full">
                a_ix_d
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap lg:flex-nowrap lg:grid lg:grid-cols-2 bg-black h-screen">
        <div className="  h-[100%] flex ml-2 flex-col  gap-5 w-[100%] px-[10%]">
          <div
            className={`${
              activeIndex === 0 ? "bg-[#638596]" : "bg-black border-[1.5px]"
            } border-white cursor-pointer lg:text-4xl font-semibold flex  items-center justify-center p-8 rounded-2xl`}
            onClick={() => handleDivClick(0)}
          >
            Punks with blue background are not for sale and not up for bids
          </div>

          <div
            className={`${
              activeIndex === 1 ? "bg-[#95554e]" : "bg-black border-[1.5px]"
            } border-white cursor-pointer lg:text-4xl  font-semibold flex items-center justify-start p-8 rounded-2xl`}
            onClick={() => handleDivClick(1)}
          >
            Buy now pay later
          </div>

          <div
            className={`${
              activeIndex === 2 ? "bg-[#8e6fb5]" : "bg-black border-[1.5px]"
            } border-white cursor-pointer lg:text-4xl  font-semibold flex items-center justify-start p-8 rounded-2xl`}
            onClick={() => handleDivClick(2)}
          >
            Verify the authenticity of any product
          </div>
        </div>
      </section>

      <section className="bg-contain bg-center h-[80vh] sm:h-[120vh] lg:h-[170vh] p-10 py-[7%] bg-white">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-black font-semibold lg:text-5xl">Top Assets</h3>
          <button className="bg-white text-black font-bold p-2 lg:px-8 lg:py-3 border-black border-[3px] rounded-full">
            View all
          </button>
        </div>

        <div className="flex items-center justify-between mt-32 lg:mt-3">
          <div className="w-[20%] flex justify-center">
            <button>
              <img src="arrow.png" alt="" className="h-[25px] scale-x-[-1]" />
            </button>
          </div>

          <div className="h-[80%] w-[60%] text-black flex flex-col items-center ">
            <div className="  flex gap-2 lg:gap-4 mb-5 lg:mb-0 lg:mt-20 items-center rounded-xl p-2 lg:p-4 border border-[#7800A2] bg-[#7800A2]/40">
              <span className="text-sm flex ">
                <FaCopy />
              </span>
              <h2 className="text-[10px] md:text-base">
                Ee79adtuYt4ecrJ6NFP8WF7FTcMb5hDuxRwLHsdu4VQM
              </h2>
            </div>
            <img src="sale.jpeg" alt="" className="h-[100%] w-[100%]" />
            <h3 className="flex items-center gap-2 lg:gap-4 mt-2 font-semibold text-xs lg:text-lg p-2">
              Northface Jacket XL{" "}
              <LuBadgeCheck className=" rounded-full  text-2xl lg:text-4xl text-white fill-[#1db954]" />
            </h3>
            <h3 className="text-xs lg:text-base"> 200 USDC</h3>
          </div>

          <div className=" w-[20%] flex justify-center">
            <button>
              <img src="arrow.png" alt="" className="h-[25px]" />
            </button>
          </div>
        </div>
      </section>

     
      <section className="h-[85vh]  lg:h-[90vh] bg-black flex flex-col justify-center items-center pt-20 overflow-hidden relative">
        <div className="flex flex-col justify-center items-center gap-10 pt-4 lg:pt-12">
          <h1 className="text-3xl lg:text-5xl font-black tracking-wider">
            Connect. Build. Earn
          </h1>
          <p className="text-sm md:text-lg lg:text-2xl text-center tracking-wider w-[90%] lg:w-[70%]">
            Data is a very profitable asset. Omni allows you to bring in your
            data and build fun stuff on-chain{" "}
          </p>
          <div className="rounded-3xl p-2 lg:px-4 lg:py-2 text-sm md:text-lg font-semibold text-black bg-white">
            <button>Documentation</button>
          </div>
        </div>

        <div className=" flex flex-col items-center w-full overflow-hidden h-full  pt-32   pb-20 lg:pb-36 bottom-0 relative">
          <div className=" flex flex-col items-center   absolute bottom-[72px]">
            <div className="w-[749px] h-[749px] lg:w-[1216px] lg:h-[1216px]  bg-[#414f5f] rounded-full absolute  -top-32 clip-semi-circle  z-30  "></div>
            <div className="w-[566px] h-[566px] lg:w-[1033px] lg:h-[1033px] bg-[#68758f]   rounded-full absolute -top-16 clip-semi-circle z-50 border border-[#414f5f]  "></div>
            <div className="w-[383px] h-[383px] lg:w-[850px] lg:h-[850px] bg-[#FFFFFF]/60 rounded-full absolute  z-50 clip-semi-circle   "></div>
          </div>

          <div className="absolute z-50 bottom-2 lg:bottom-2">
            <Image
              className="w-10 h-10 lg:w-12 lg:h-12"
              src="./logo.svg"
              width={50}
              height={50}
              alt="logo"
            />
          </div>

          <div className="absolute left-2 top-44 sm:left-28 sm:top-56 md:left-36 lg:left-44  xl:left-[440px] items-center rounded-full p-2 lg:p-3 z-30  bg-[#1db954]   ">
            <Image
              className="w-8 h-8 lg:w-9 lg:h-9"
              src="/company/Spotify_Icon_RGB_White.png"
              width={500}
              height={500}
              alt="logo"
            />
          </div>
          <div className="absolute top-44 right-2 sm:right-28 sm:top-56  md:right-36  md:bottom-6  lg:right-40 xl:right-[440px] p-2 rounded-full z-30 ">
            <Image
              className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
              src="/company/mcd.png"
              width={500}
              height={500}
              alt="logo"
            />
          </div>

          <div className="absolute z-20  top-24 left-10  sm:left-40 sm:top-28  md:left-48  lg:top-20   lg:left-72  xl:left-[520px] xl:top-28   p-2 rounded-full   bg-white  ">
            <Image
              className="w-8 h-8 md:w-8 md:h-8 lg:w-10 rounded-full lg:h-10"
              src="/company/epl.jpg"
              width={500}
              height={500}
              alt="logo"
            />
          </div>

          <div className="absolute z-20 top-24 right-10 sm:right-40 sm:top-28    md:right-48  lg:top-20   lg:right-72 xl:right-[520px] xl:top-28    p-2 rounded-full  bg-red-700  ">
            <Image
              className="w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10"
              src="/company/Domino.svg"
              width={50}
              height={50}
              alt="logo"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
