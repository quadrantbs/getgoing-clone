"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SearchBar from "./Searchbar";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 90);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex navbar p-4 mx-auto justify-between max-w-[1280px] top-0 left-0 right-0 z-50 transition-transform duration-500 transform ${
        isScrolled
          ? "fixed translate-y-0 bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-full mt-[25px] w-[95%]"
          : "translate-y-0"
      }`}
      style={{ animation: isScrolled ? "moveDown 0.3s ease-in-out" : "" }}
    >
      <div
        className={`navbar-start w-1/3 lg:w-auto ${isScrolled ? "" : "lg:pl-[15px]"}`}
      >
        {/* Logo Section */}
        <Link href="/" className="py-1">
          <img
            src={isScrolled ? "/img/LogoOnly.png" : "/img/Logo.png"}
            alt="GetGoing Logo"
            className={`max-w-none transition-all duration-300 ${
              isScrolled ? "w-11 mr-5" : "w-[100px] sm:w-[200px]"
            }`}
          />
        </Link>
      </div>

      {/* Search Bar */}
      <SearchBar />

      <div className="navbar-end w-1/3 lg:w-full pl-[5px] pr-[10px] text-[red]">
        {/* Toggle Navigation Button with Dropdown for smaller screens */}
        <div className="dropdown dropdown-end lg:hidden">
          <button
            tabIndex={0}
            className="text-[red] hover:bg-transparent"
            aria-label="Toggle navigation"
            type="button"
          >
            <i className="fa fa-bars text-xl" />
          </button>

          {/* Dropdown Menu */}
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 rounded-box w-52 bg-white shadow-md"
          >
            <li>
              <Link href="/" className="m-2 font-bold">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/" className="m-2">
                Servis Kami
              </Link>
            </li>
            <li>
              <Link href="/" className="m-2">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/" className="bg-transparent">
                <button className="ml-4 text-[#212529] font-bold tracking-[0.25rem] leading-[20px] text-[13px] rounded-3xl focus:outline-none focus:ring-[3px] focus:ring-[rgba(230,57,70,0.25)] focus:ring-offset-2 px-3 py-2">
                  LOGIN
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Horizontal Menu for larger screens */}
        <div className="hidden lg:flex leading-[23px] text-[14px]">
          <Link href="/" className="m-2 font-bold">
            Beranda
          </Link>
          <Link href="/" className="m-2">
            Servis Kami
          </Link>
          <Link href="/" className="m-2">
            Blog
          </Link>
          <Link href="/" className="bg-transparent">
            <button className="ml-4 text-[#212529] font-bold tracking-[0.25rem] leading-[20px] text-[13px] rounded-3xl focus:outline-none focus:ring-[3px] focus:ring-[rgba(230,57,70,0.25)] focus:ring-offset-2 px-3 py-2">
              LOGIN
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
