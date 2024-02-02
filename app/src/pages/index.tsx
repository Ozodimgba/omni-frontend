/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter, Gochi_Hand, DM_Sans } from "next/font/google";
import { FaXTwitter, FaDiscord, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Video from 'next-video';
import awesomeVideo from '../../videos/open.mp4';
import { useState } from "react";


const inter = Inter({ subsets: ["latin"] });

const gochi = Gochi_Hand({
  subsets: ["latin"],
  weight: "400"
});

const dm = DM_Sans({
  subsets: ["latin"],
  weight: "400"
})

export default function Home() {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleDivClick = (index: any) => {
    setActiveIndex(index);
  };
  
  return (
    <main
      className={`flex min-h-screen text-white flex-col ${dm.className}`}
    >
      <section className="bg-black">
      <div className="w-[100%] flex flex-row justify-between py-6 px-7">
      <h1 className={`text-white text-3xl ${gochi.className}`}>underground</h1>
      <div className="flex items-center gap-5">
        <button>About</button>
        <button>FAQs</button>
        <button className="bg-white text-black font-bold px-8 py-3 rounded-full">Login</button>
        <button className="bg-black text-white font-bold px-8 py-3 border-white border-[3px] rounded-full">Get Started</button>
        <FaXTwitter size={25} className="cursor-pointer" />
        <FaDiscord size={30} className="cursor-pointer" />
      </div>
      </div>

      <div className="w-[100%] flex flex-col items-center pt-[5%] pb-[3%]">
        <h3 className="text-8xl text-center font-extrabold text-white">The stock market of the streets</h3>
        <p className="text-2xl mx-[15%] text-center py-3">Underground is redefining the way we shop buy allowing prices to determined by real time market forces.</p>
      </div>

      <div className="flex px-[20%] text-center flex-col items-center">
        
      <button className="bg-black text-white font-bold px-8 py-3 border-white border-[3px] rounded-full hover:bg-white hover:text-black">Get Started</button>
      </div>
      </section>
      <section className="h-[100%] bg-black py-[4%] overflow-hidden">


       <div>
       <div className="w-[100%] whitespace-nowrap overflow-hidden">
       <div className="py-3 font-semibold text-3xl bg-purple-600">Electionics • Streetwear • Gift Cards • Tickets • Games • Trading • Speed Electionics • Streetwear • Gift Cards</div>
       </div>

       <div className="w-[100%] whitespace-nowrap overflow-hidden">
       <div className="py-3 font-semibold text-3xl text-black bg-green-600">Electionics • Streetwear • Gift Cards • Tickets • Games • Trading • Speed Electionics • Streetwear • Gift Cards</div>
       </div>

       <div className="w-[100%] whitespace-nowrap overflow-hidden">
       <div className="py-3 font-semibold text-3xl text-black bg-white">Electionics • Streetwear • Gift Cards • Tickets • Games • Trading • Speed Electionics • Streetwear • Gift Cards</div>
       </div>

       </div>

       <div className="flex justify-center py-[9%]">
        <h3 className="font-semibold text-6xl">make money doing stuff your already like</h3>
       </div>

       <div className="w-[100%] flex flex-row gap-7 overflow-x-auto no-scrollbar">
  <div className="w-[12rem] h-[12rem] rounded-3xl bg-white flex-shrink-0">
  </div>
  <div className="w-[12rem] h-[12rem] rounded-3xl bg-white flex-shrink-0">
  </div>
  <div className="w-[12rem] h-[12rem] rounded-3xl bg-white flex-shrink-0">
  </div>
  <div className="w-[12rem] h-[12rem] rounded-3xl bg-white flex-shrink-0">
  </div>
  <div className="w-[12rem] h-[12rem] rounded-3xl bg-white flex-shrink-0">
  </div>
  <div className="w-[12rem] h-[12rem] rounded-3xl bg-white flex-shrink-0">
  </div>
  <div className="w-[12rem] h-[12rem] rounded-3xl bg-white flex-shrink-0">
  </div>
</div>

      </section>

      <section className="flex h-[100vh] pt-12 bg-black flex-col items-center">

        <h4 className="text-4xl font-semibold py-12">Features</h4>

        <div className="w-[100%] h-[100%] my-4 gap-[5%] px-[8%] grid grid-cols-2 justify-start">
          {/* <div className="rounded-xl h-[80%] w-[100%] p-5 text-black border-[#00000040] border-[2px] bg-[#F59F9F] ">
            <div className="w-[100%]">
            <span className="font-semibold text-2xl">cNFT Trading</span>
            </div>
           
          </div> */}
          <div className="rounded-xl h-[80%] w-[100%] border-[#00000040] border-[5px] p-5 bg-[#C5F9D7] ">
          <div className="flex items-center justify-between">
            <span className={`text-black text-3xl ${gochi.className}`}>Trade tangibles</span>
            <img src="tensor.svg" alt="" className="h-[50px] w-[50px]" />
            </div>
          </div>

          <div className="rounded-xl h-[80%] w-[100%] border-[#00000040] border-[5px] text-black p-5 bg-[#F5E89F] ">
            <div className="flex items-center justify-between">
            <span className={`text-black text-3xl ${gochi.className}`}>Manage your crew</span>
            <img src="squads.svg" alt="" className="h-[50px] w-[50px]" />
            </div>
           
          </div>
        </div>
      </section>

    <section className="h-[100vh] bg-black">
      <div className="grid grid-cols-2 px-[6%] h-[100%]">

        <div className="text-black h-[100%] flex items-center">
          <h2 className="font-semibold text-7xl text-white">
          Creators note...
          </h2>
        </div>

        <div className="text-black pl-[10%] h-[100%] flex flex-col justify-center items-center">
        <p className="text-white">
        Omo I{'\''}m tired of seeing overpriced hoodies and sneakers on Instagram stores. I lost my mind when I saw an unbranded plain hoodie for NGN30k! I decided to use my knowledge of programming and economics to build a store that allows both sellers and buyers to actively set the price of commodities. Hype it up! If you{'\''}re tired of buying overpriced FAKE nikes.
        </p>
        <div className="flex w-[100%] py-3 justify-end">
        <button className="bg-white text-black font-bold px-8 py-3 rounded-full">a_ix_d</button>
        </div>
        </div>

      </div>
    </section>

    <section className="grid grid-cols-2 bg-black h-screen">
    <div className="h-[100%] flex flex-col gap-5 w-[100%] px-[10%]">
      <div
        className={`${
          activeIndex === 0 ? 'bg-[#638596]' : 'bg-black border-[1.5px]'
        } border-white cursor-pointer text-4xl font-semibold flex items-center justify-center p-8 rounded-2xl`}
        onClick={() => handleDivClick(0)}
      >
        Punks with blue background are not for sale and not up for bids
      </div>

      <div
        className={`${
          activeIndex === 1 ? 'bg-[#95554e]' : 'bg-black border-[1.5px]'
        } border-white cursor-pointer text-4xl font-semibold flex items-center justify-start p-8 rounded-2xl`}
        onClick={() => handleDivClick(1)}
      >
        Buy now pay later
      </div>

      <div
        className={`${
          activeIndex === 2 ? 'bg-[#8e6fb5]' : 'bg-black border-[1.5px]'
        } border-white cursor-pointer text-4xl font-semibold flex items-center justify-start p-8 rounded-2xl`}
        onClick={() => handleDivClick(2)}
      >
        Verify the authenticity of any product
      </div>
    </div>
    </section>

    <section className="bg-contain bg-center h-[150vh] p-10 py-[7%] bg-white">
      <div className="flex flex-row justify-between">
      <h3 className="text-black font-semibold text-5xl">Largest Sales</h3>
      <button className="bg-white text-black font-bold px-8 py-3 border-black border-[3px] rounded-full">View all</button>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className=" w-[20%] flex justify-center">
          <button>
          <img src="arrow.png" alt="" className="h-[25px] scale-x-[-1]" />
          </button>
        </div>

        <div className="h-[80%] w-[60%] text-black flex flex-col items-center">
        <img src="sale.jpeg" alt="" className="h-[100%] w-[100%]" />
        <h3 className="font-semibold text-lg">Northface Jacket XL</h3>
        <h3> 200 USDC</h3>
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
    <div className="h-[100%] w-[100%] col-span-3 p-10 pt-[25%]">
      <h3 className="font-semibold text-5xl">How do I use ?</h3>
    </div>
    <div className="h-[100%] flex items-center justify-center w-[100%] relative">
      <div id="points-section" className="py-[%] bg-green-00 flex flex-col items-center justify-between h-[100%] z-[10] w-[30%]">
        
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
      <div id="progress" className="bg-[#FFFFFF30] fixed top-0 h-[100%] w-[2px]">
        <div id="progress-line" className="bg-white h-[50vh] "></div>
      </div>
    </div>
    <div className="h-[100%] p10 w-[100%] col-span-3 z-40">
      <div className="flex flex-col py-[25%] px-10">
       <img src="phantom.svg" alt="" className="h-[70px] w-[70px] rounded-full" />
       <h3 className="font-semibold text-2xl py-4">Download and Install Phantom</h3>
       <p>Download and install a Chrome browser plugin called Phantom. This will allow websites (that you authorize) access to your Ethereum account.</p>
       <button className="bg-black my-4 text-white font-bold px-8 py-3 border-white border-[1.5px] w-[50%] rounded-full hover:bg-white hover:text-black">
       Download Phantom
      </button>
      </div>

      <div className="flex flex-col py-[25%] px-10">
       <img src="solana.png" alt="" className="h-[70px] w-[70px] rounded-full" />
       <h3 className="font-semibold text-2xl py-4">Buy some solana</h3>
       <p>If you made a new account, buy some Ethereum. The MetaMask plugin has a button that will allow you to buy Ether from Coinbase.</p>
      </div>

      <div className="flex flex-col py-[25%] px-10">
       <h3 className="font-semibold text-2xl py-4">Start bidding, buying and selling</h3>
       <p>Once you have the plugin installed, this website will recognize it and add buttons that allow you to bid on, buy and sell punks directly in the interface.</p>
      </div>
    </div>
  </div>
</section>
  
<section className="w-[100%] overflow-hidden">
    <Video 
    autoPlay
    loop
    controls={false}
    src="https://stream.mux.com/VEziXgFmSHNNMJ3tmWt3FBzpLaiL00XxbyYrESKum4OA.m3u8" />
    </section>

    </main>
  );
}
