import Image from "next/image";
import { Inter, Gochi_Hand, DM_Sans } from "next/font/google";
import { FaXTwitter, FaDiscord, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Video from 'next-video';
import awesomeVideo from '/videos/open.mp4';
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
      className={`flex min-h-screen text-white bg-black flex-col ${dm.className}`}
    >
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

      <section className="h-[100%] py-[4%] overflow-hidden">


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

      <section className="flex h-[80vh] flex-col items-center">

        <h4 className="text-2xl">How it works</h4>

        <div className="w-[100%] h-[100%] px-[5%] justify-start">
          <div className="rounded-xl h-[60%] w-[28%] p-5 bg-purple-600 ">
           <span className="font-semibold text-2xl">Text to Speech</span>
          </div>
        </div>
      </section>

    <section className="h-[100vh]">
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

    <section className="grid grid-cols-2 h-screen">
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

    {/* <section className="w-[100%] overflow-hidden">
    <Video 
    autoPlay
    loop
    controls={false}
    src={awesomeVideo} />
    </section> */}

    <section className="bg-contain bg-center p-10 py-[7%]" style={{ backgroundImage: `url('section.png')` }}>
      <div className="flex flex-row justify-between">
      <h3 className="text-black font-semibold text-5xl">Largest Sales</h3>
      <button className="bg-white text-black font-bold px-8 py-3 border-black border-[3px] rounded-full">View all</button>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className=" w-[20%] flex justify-center">
          <button>
           <FaArrowLeft color="black" size={40} />
          </button>
        </div>

        <div className="h-[80%] w-[60%] text-black flex flex-col items-center">
        <img src="sale.jpeg" alt="" className="h-[100%] w-[100%]" />
        <h3 className="font-semibold text-lg">Northface Jacket XL</h3>
        <h3> 200 USDC</h3>
        </div>
        
        <div className=" w-[20%] flex justify-center">
          <button>
           <FaArrowRight color="black" size={40} />
          </button>
        </div>
      </div>
      
    </section>

    </main>
  );
}
