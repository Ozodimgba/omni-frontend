import React from "react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FaX, FaBars } from "react-icons/fa6";

const Mobile: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // Close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = (event: MouseEvent): void => {
      if (
        mobileNav.current &&
        trigger.current &&
        !mobileNav.current.contains(event.target as Node) &&
        !trigger.current.contains(event.target as Node)
      ) {
        setMobileNavOpen(false);
      }
    };

    if (mobileNavOpen) {
      document.addEventListener("click", clickHandler);
    }

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, [mobileNavOpen]);

  // Close the mobile menu if the ESC key is pressed
  useEffect(() => {
    const keyHandler = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setMobileNavOpen(false);
      }
    };

    if (mobileNavOpen) {
      document.addEventListener("keydown", keyHandler);
    }

    return () => {
      document.removeEventListener("keydown", keyHandler);
    };
  }, [mobileNavOpen]);

  return (
    <div className="lg:hidden">
      {mobileNavOpen ? (
        <button onClick={() => setMobileNavOpen(false)}>
          <FaX className="w-6 h-6 fill-current text-white transition duration-200 ease-in-out block   aspect-square" />
        </button>
      ) : (
        <button onClick={() => setMobileNavOpen(true)}>
          <FaBars className="w-6 h-6 fill-current text-white transition duration-200 ease-in-out block   aspect-square" />
        </button>
      )}

      <nav
        id="mobile-nav"
        ref={mobileNav}
        className={`absolute top-20 z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileNavOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-80"
        }`}
      >
        <ul className="flex flex-col gap-4 bg-white px-4 py-8 rounded-xl">
          <li>
            <Link
              href="/"
              className="flex md:text-lg font-bold text-black hover:text-[#ffb703] w-full py-2 justify-center"
              onClick={() => setMobileNavOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="md:text-lg font-bold text-black hover:text-[#ffb703] w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm transition duration-150 ease-in-out"
              onClick={() => setMobileNavOpen(false)}
            >
              FAQs
            </Link>
          </li>
          <li>
            <button
              className="w-full p-2 inline-flex items-center justify-center bg-black text-white font-bold rounded-full"
              onClick={() => setMobileNavOpen(false)}
            >
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Mobile;
