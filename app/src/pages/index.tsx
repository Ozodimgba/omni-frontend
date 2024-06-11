/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Mobile from "./components/mobile";

import Image from "next/image";
import { Inter, Gochi_Hand, DM_Sans } from "next/font/google";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import Video from "next-video";

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
          <div className={`text-white flex items-center gap-2 text-2xl lg:text-3xl ${gochi.className}`}>
            <Image src="./logo.svg" width={50} height={50} alt="logo" />
            <h2>omni</h2>
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
            <FaXTwitter size={25} href="https://x.com/use_Omni" className="cursor-pointer" />
            <FaDiscord size={30} className="cursor-pointer" />
          </div>
          <Mobile />
        </div>

        <div className="w-[100%] flex flex-col items-center pt-[3%] pb-[3%]">
          <h3 className="text-xs lg:text-2xl  py-2">Introducing</h3>
          <h3 className="text-2xl lg:text-8xl text-center font-extrabold text-white">
            Bringing the streets on solana
          </h3>

          <p className="text-xs lg:text-xl xl:px-[13%] tracking-wider mx-4 text-center py-3">
            Omni is redefining the way oralces are used on chain by bringing price of regular everyday items on chain
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
            earn money trading stuff your already like
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

      <section>
        <img src="section.svg" />
      </section>

      <section className="flex h-[100vh] pt-12 bg-[#101111] flex-col items-center">
        <h4 className="lg:text-4xl font-semibold py-12">Use Cases</h4>

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

      <section className="h-[100vh] bg-[#101111]">
        <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-2 px-[6%] lg:h-[100%]">
          <div className="text-black h-[100%] flex items-center">
            <h2 className="font-semibold text-3xl lg:text-7xl text-white">
              Creators note...
            </h2>
          </div>

          <div className="text-black text-sm lg:text-base text-justify leading-6 tracking-wide lg:pl-[10%] h-[100%] flex flex-col justify-center items-center">
            <p className="text-white">
            Omni Oracle was inspired by the playful spirit of the crypto community, where meme coins and degens thrive. By providing real-time prices of everyday items like chicken, Domino&apos;s, and PlayStations, Omni adds a fun twist to price tracking. This tool bridges the gap between serious financial data and the whimsical nature of the blockchain world, making everyday price information engaging and relatable for everyone.
            </p>
            <div className="flex w-[100%] py-3 justify-end">
              <button className="bg-white text-black font-bold px-8 py-3 rounded-full">
                a_ix_d
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="flex flex-wrap lg:flex-nowrap lg:grid lg:grid-cols-2 bg-black h-screen">
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
      </section> */}
      <section className="h-[100vh] text-black bg-white grid grid-rows-10">

      <div className="border-black border-b-[1px] grid grid-cols-12">
       <div className="flex justify-center bg-green-400 items-center">
        <h3 className="text-[0.9rem]">Search</h3>
       </div>
       <div className="flex items-center bg-green-400 col-span-3">
        <h3 className="text-[0.9rem]">Nike Dunk&apos;s Retro 4s</h3>
       </div>

       <div className="flex justify-center items-center col-span-4">
        <h3 className="text-[0.9rem]">Fetch 8 items</h3>
       </div>

       <div className="flex items-center col-span-3">
       </div>

       <div className="flex justify-center items-center">
        <h3 className="text-[0.9rem]">Account</h3>
       </div>
      </div>

      <div className="row-span-8 h-[100%] bg-green-400">
        <div className="grid grid-cols-12 h-full">
        <div className="bg-white h-full w-full col-span-9"></div>

        <div className="bg-white h-full w-full border-l-black border-[1px] col-span-3">
          <div className="h-full grid grid-rows-3">
          <div className="border-b-black border-[1px] text-[0.8rem] p-2 row-span-1 h-full">
           {"base is contrasted by curry brown overlays at the toe and heel, while Fossil coloring is applied to the Swoosh and heel tab, the latter marked with traditional Nike branding. The low-top rides on a durable rubber cupsole, featuring a grippy traction pattern virtually identical to another mid ‘80s hoops shoe, the Air Jordan 1."}
          </div>

          <div className="border-b-black text-[0.8rem] p-2 border-[1px] h-full">
           <div><h3>Brands</h3></div>
           <div className="flex overflow-x-scroll no-scrollbar">
           <img src="sale.jpeg" alt="" className="h-[90px] w-[110px]" />
           <img src="sale.jpeg" alt="" className="h-[90px] w-[110px]" />
           <img src="sale.jpeg" alt="" className="h-[90px] w-[110px]" />
           </div>
          </div>

          <div className="text-[0.8rem] p-2  h-full">
           <div><h3>Assets</h3></div>
           <div className="flex overflow-x-scroll no-scrollbar">
           <img src="sale.jpeg" alt="" className="h-[90px] w-[110px]" />
           <img src="sale.jpeg" alt="" className="h-[90px] w-[110px]" />
           <img src="sale.jpeg" alt="" className="h-[90px] w-[110px]" />
           </div>
          </div>


          </div>
        </div>
      </div>
      </div>


      <div className="row-span-2 border-t-black border-[1px]">

      <div className="grid h-[100%] grid-cols-12">
       <div className="flex justify-center bg-green-400 col-span-3 items-center">
        <h3 className="text-[0.9rem]">Dunk Low Premium &apos;Medium Curry&apos;</h3>
       </div>
       

       <div className="flex justify-center items-center col-span-6">
  <div className="grid grid-cols-7 gap-x-9">

    <div className="flex flex-col justify-center items-center flex-grow">
      <h2 className="text-[0.7rem]">17:13</h2>
      <h2 className="text-[1rem]">$1.311</h2>
    </div>

    <div className="flex flex-col justify-center items-center flex-grow">
      <h2 className="text-[0.7rem]">17:15</h2>
      <h2 className="text-[1rem]">$1.301</h2>
    </div>

    <div className="flex flex-col justify-center items-center flex-grow">
      <h2 className="text-[0.7rem]">17:17</h2>
      <h2 className="text-[1rem]">$1.317</h2>
    </div>

    <div className="flex flex-col justify-center items-center flex-grow">
      <h2 className="text-[0.7rem]">17:19</h2>
      <h2 className="text-[1rem]">$1.299</h2>
    </div>

    <div className="flex flex-col justify-center items-center flex-grow">
      <h2 className="text-[0.7rem]">17:20</h2>
      <h2 className="text-[1rem]">$1.292</h2>
    </div>

    <div className="flex flex-col justify-center items-center flex-grow">
      <h2 className="text-[0.7rem]">17:21</h2>
      <h2 className="text-[1rem]">$1.302</h2>
    </div>

    <div className="flex flex-col justify-center items-center flex-grow">
      <h2 className="text-[0.7rem]">17:23</h2>
      <h2 className="text-[1rem]">$1.312</h2>
    </div>

  </div>
</div>

       <div className="flex justify-center col-span-3 items-center">
        <div className="flex gap-3">
        <h3 className="text-[0.9rem]">Activity</h3>
        <h3 className="text-[0.9rem]">Reputation</h3>
        </div>
        
       </div>
      </div>
      </div>
      </section>

      {/**chnage the background of the page itsef to white */}
      <section className="bg-white relative -z-[3]">
        <div className="h-[100%] w-[100%] bg-black grid grid-cols-7 relative z[-3]">
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

      <section>
        <img src="footer.svg" />
      </section>
    </main>
  );
};

export default Home;
