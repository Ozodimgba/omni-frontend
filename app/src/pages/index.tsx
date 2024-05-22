/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Inter, Gochi_Hand, DM_Sans } from "next/font/google";
import {
  FaXTwitter,
  FaDiscord,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa6";
import Video from "next-video";
import awesomeVideo from "../../videos/open.mp4";

import Bonk from "../../public/company/bonk1-bonk-logo.png";
import Netflix from "../../public/company/Netflix_Symbol_RGB.png";
import Spotify from "../../public/company/Spotify_Icon_RGB_White.png";
import Tether from "../../public/company/tether-usdt-logo.png";
import Solana from "../../public/company/solana-sol-logo.png";
import Cola from "../../public/company/Coca-Cola_logo.png";
import Nike from "../../public/company/001-nike-logos-swoosh-black.jpg";

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
      <section className="bg-black">
        <div className="w-[100%] flex flex-row  items-center justify-between py-6 px-7">
          <h1 className={`text-white text-2xl lg:text-3xl ${gochi.className}`}>
            omni
          </h1>
          <div className="hidden lg:flex items-center gap-5">
            <button>About</button>
            <button>FAQs</button>
            <button className="bg-white text-black font-bold px-8 py-3 rounded-full">
              Login
            </button>
            <button className="bg-black text-white font-bold px-8 py-3 border-white border-[3px] rounded-full">
              Get Started
            </button>
            <FaXTwitter size={25} className="cursor-pointer" />
            <FaDiscord size={30} className="cursor-pointer" />
          </div>
          <MobileMenu />
        </div>

        <div className="w-[100%] flex flex-col items-center pt-[5%] pb-[3%]">
          <h3 className="text-2xl lg:text-8xl text-center font-extrabold text-white">
            The stock market of the streets
          </h3>

          <p className="text-xs lg:text-xl tracking-wider mx-4 text-center py-3">
            Omni is redefining the way we shop buy allowing prices to determined
            by real time market forces
          </p>
        </div>

        <div className="flex px-[20%] py-5 text-center flex-col items-center">
          <button className="bg-black text-white font-bold px-3 md:px-7 lg:px-8 py-3 text-xs lg:text-base border-white border-[3px] rounded-full hover:bg-white hover:text-black">
            Get Started
          </button>
        </div>
      </section>
      <section className="h-[100%] bg-black py-[4%] overflow-hidden">
        <div>
          <div className="w-[100%] whitespace-nowrap overflow-hidden">
            <div className="py-3 font-semibold lg:text-3xl bg-purple-600">
              Electionics • Streetwear • Gift Cards • Tickets • Games • Trading
              • Speed Electionics • Streetwear • Gift Cards
            </div>
          </div>

          <div className="w-[100%] whitespace-nowrap overflow-hidden">
            <div className="py-3 font-semibold lg:text-3xl text-black bg-green-600">
              Electionics • Streetwear • Gift Cards • Tickets • Games • Trading
              • Speed Electionics • Streetwear • Gift Cards
            </div>
          </div>

          <div className="w-[100%] whitespace-nowrap overflow-hidden">
            <div className="py-3 font-semibold lg:text-3xl text-black bg-white">
              Electionics • Streetwear • Gift Cards • Tickets • Games • Trading
              • Speed Electionics • Streetwear • Gift Cards
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
              <Image className="" src={Netflix} alt="Netflix" />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl  flex-shrink-0 bg-white border-gray-600  border">
              <Image className="" src={Solana} alt="Netflix" />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl flex-shrink-0 bg-black border-gray-600  border ">
              <Image className="" src={Bonk} alt="Netflix" />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl  flex-shrink-0 bg-black border-gray-600  border">
              <Image className="" src={Cola} alt="Netflix" />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl  flex-shrink-0 bg-white border-gray-600  border">
              <Image className="" src={Tether} alt="Netflix" />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl  flex-shrink-0 bg-white border-gray-600  border">
              <Image className="" src={Nike} alt="Netflix" />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl  flex-shrink-0 bg-[#1db954] border-gray-600  border  mr-10">
              <Image className="" src={Spotify} alt="Netflix" />
            </div>
          </div>

          {/* 2 */}
          <div className="flex flex-row gap-7 overflow-hidden no-scrollbar absolute top-0 animate-marquee2">
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl bg-black border-gray-600  border flex-shrink-0">
              <Image className="" src={Netflix} alt="Netflix" />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl  flex-shrink-0 bg-white border-gray-600  border">
              <Image className="" src={Solana} alt="Netflix" />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl flex-shrink-0 bg-black border-gray-600  border ">
              <Image className="" src={Bonk} alt="Netflix" />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl  flex-shrink-0 bg-black border-gray-600  border ">
              <Image className="" src={Cola} alt="Netflix" />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl  flex-shrink-0 bg-white border-gray-600  border">
              <Image className="" src={Tether} alt="Netflix" />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl  flex-shrink-0 bg-white border-gray-600  border ">
              <Image className="" src={Nike} alt="Netflix" />
            </div>
            <div className="flex items-center w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] p-8 lg:p-6 rounded-3xl  flex-shrink-0 bg-[#1db954] border-gray-600  border  mr-7">
              <Image className="" src={Spotify} alt="Netflix" />
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

      <section className="bg-contain bg-center h-[80vh] sm:h-[120vh] lg:h-[150vh] p-10 py-[7%] bg-white">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-black font-semibold lg:text-5xl">
            Largest Sales
          </h3>
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

          <div className="h-[80%] w-[60%] text-black flex flex-col items-center">
            <img src="sale.jpeg" alt="" className="h-[100%] w-[100%]" />
            <h3 className="font-semibold lg:text-lg">Northface Jacket XL</h3>
            <h3 className="text-xs lg:text-base"> 200 USDC</h3>
          </div>

          <div className=" w-[20%] flex justify-center">
            <button>
              <img src="arrow.png" alt="" className="h-[25px]" />
            </button>
          </div>
        </div>
      </section>
      {/**chnage the background of the page itsef to white */}
      <section className="bg-white relative -z-[3]">
        <div className="h-[100%] w-[100%] bg-black grid grid-cols-7 rounded-tl-[3rem] rounded-tr-[3rem] relative z[-3]">
          <div className="h-[100%] w-[100%] col-span-3 px-3 lg:p-10 pt-[25%]">
            <h3 className="font-semibold text-xl lg:text-5xl">
              How do I use ?
            </h3>
          </div>
          <div className="h-[100%] flex items-center justify-center w-[100%] relative">
            <div
              id="points-section"
              className="py-[%] bg-green-00 flex flex-col items-center justify-between h-[100%] z-[10] w-[30%]"
            >
              <div className="w-[5rem] bg-black flex flex-col justify-center items-center">
                <div className="h-[9rem] w-full bg-black"></div>
                <div className="w-[3rem] h-[3rem] bg-black rounded-full flex justify-center items-center border-white border-[2px]">
                  <span>1</span>
                </div>
              </div>
              <div className="w-[3rem] h-[3rem] rounded-full bg-black flex justify-center items-center border-white border-[2px]">
                <span>2</span>
              </div>
              <div className="w-[5rem] bg-black flex flex-col justify-center items-center">
                <div className="w-[3rem] h-[3rem] bg-black rounded-full flex justify-center items-center border-white border-[2px]">
                  <span>3</span>
                </div>
                <div className="h-[9rem] w-full bg-black"></div>
              </div>
            </div>
            <div
              id="progress"
              className="bg-[#FFFFFF30] fixed top-0 h-[100%] w-[2px]"
            >
              <div id="progress-line" className="bg-white h-[50vh] "></div>
            </div>
          </div>
          <div className="h-[100%] p10 w-[100%] col-span-3 z-40">
            <div className="flex flex-col py-20 lg:py-[25%] px-2 lg:px-10">
              <img
                src="phantom.svg"
                alt=""
                className="w-12 h-12 lg:h-[70px] lg:w-[70px] rounded-full"
              />
              <h3 className="font-semibold text-sm lg:text-2xl py-4">
                Download and Install Phantom
              </h3>
              <p className="text-sm text-left tracking-wide lg:text-base">
                Download and install a Chrome browser plugin called Phantom.
                This will allow websites (that you authorize) access to your
                Ethereum account.
              </p>

              <div className="bg-black border-[1.5px] border-white font-bold  text-white hover:bg-white hover:text-black rounded-full w-[50%] my-4 px-12 lg:px-8 py-3  ">
                <h1 className="flex w-full text-center justify-center items-center text-sm lg:text-base">
                  Download Phantom
                </h1>
              </div>
            </div>

            <div className="flex flex-col py-20 lg:py-[25%] px-2 lg:px-10">
              <img
                src="solana.png"
                alt=""
                className="w-12 h-12 lg:h-[70px] lg:w-[70px] rounded-full"
              />
              <h3 className="font-semibold text-sm lg:text-2xl py-4">
                Buy some solana
              </h3>
              <p className="text-sm text-left lg:text-base tracking-wider">
                If you made a new account, buy some Ethereum. The MetaMask
                plugin has a button that will allow you to buy Ether from
                Coinbase.
              </p>
            </div>

            <div className="flex flex-col py-20 lg:py-[25%] px-2 lg:px-10 ">
              <h3 className="font-semibold text-sm lg:text-2xl py-4">
                Start bidding, buying and selling
              </h3>
              <p className="text-sm text-left tracking-wide lg:text-base">
                Once you have the plugin installed, this website will recognize
                it and add buttons that allow you to bid on, buy and sell punks
                directly in the interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[100%] overflow-hidden">
        <Video
          autoPlay
          loop
          controls={false}
          src="https://stream.mux.com/VEziXgFmSHNNMJ3tmWt3FBzpLaiL00XxbyYrESKum4OA.m3u8"
        />
      </section>
    </main>
  );
};

export function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="lg:hidden">
      <button
        ref={trigger}
        className="w-6 h-6 fill-current text-white transition duration-200 ease-in-out"
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        {!mobileNavOpen ? (
          <svg
            className="w-6 h-6 fill-current text-white transition duration-150 ease-in-out"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="4" width="24" height="2" rx="3" />
            <rect y="11" width="24" height="2" rx="3" />
            <rect y="18" width="24" height="2" rx="3" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 fill-current text-white transition duration-150 ease-in-out"
            version="1.1"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <polygon points="512,157.124 466.488,111.621 322.099,256.009 466.488,400.397 512,354.876 413.125,256.009 	" />
              <polygon points="400.388,45.513 354.876,0 256.009,98.876 157.124,0 111.602,45.513 256.009,189.901 	" />
              <polygon
                class="st0"
                points="45.493,111.621 0,157.124 98.876,256.009 0,354.876 45.493,400.397 189.901,256.009 	"
              />
              <polygon
                class="st0"
                points="111.602,466.497 157.124,512 256.009,413.125 354.876,512 400.388,466.497 256.009,322.109 	"
              />
            </g>
          </svg>
        )}
      </button>

      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-20 z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={
          mobileNavOpen
            ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0.8 }
        }
      >
        <ul className="flex flex-col gap-4 bg-white px-4 py-8  rounded-xl ">
          <li>
            <Link
              href="/"
              className="flex md:text-lg font-bold text-black hover:text-[#ffb703]  w-full py-2 justify-center"
              onClick={() => setMobileNavOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="md:text-lg font-bold text-black hover:text-[#ffb703]  w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm  transition duration-150 ease-in-out"
              onClick={() => setMobileNavOpen(false)}
            >
              FAQs
            </Link>
          </li>
          <li>
            <button className=" w-full p-2 inline-flex items-center justify-center bg-black text-white  font-bold  rounded-full">
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
