"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { PiUserCircleFill } from "react-icons/pi";
import HeaderSidebar from "./HeaderSidebar";
import { HiMenu } from "react-icons/hi";
import { BiChevronDown } from "react-icons/bi";

interface HeaderProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  setRoute: (route: string) => void;
}

const Header: FC<HeaderProps> = ({
  activeItem,
  setOpen,
  route,
  open,
  setRoute,
}) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(0); // Initial opacity value
  const [shadow, setShadow] = useState<boolean>(false); // Initial opacity value

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 200; // Adjust as needed

      // Calculate opacity based on scroll position
      const newOpacity = Math.min(1, scrollY / scrollThreshold);
      newOpacity > 0 ? setShadow(true) : setShadow(false);

      // Update opacity state
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setShadow, opacity]);

  const bgOpacity = `rgba(255, 255, 255, ${opacity})`; // Set the opacity in rgba format

  const navLinks = [
    { label: "Explore", url: "/explore" },
    { label: "Start Campaign", url: "/pricing" },
    { label: "About us", url: "/contact-us" },
    { label: "Blog", url: "/contact-us" },
    { label: "Partnership", url: "/contact-us" },
  ];
  const [session, setSession] = useState<boolean>(false);
  return (
    <div
      className={`w-full font-Poppins z-20 h-[90px] flex flex-col justify-end items-center px-6 fixed top-0`}
    >
      <div
        style={{ backgroundColor: bgOpacity }} // Set the background color opacity based on the scroll
        className={`h-16 backdrop-blur-lg text-gray-900 container max-w-7xl mx-auto rounded-[16px] pl-3 sm:pl-6 pr-3 flex justify-between w-full items-center relative ${
          shadow ? "shadow-xl" : null
        }`}
      >
        <Link
          href="/"
          className={` text-gray-900 font-Poppins font-bold text-3xl`}
        >
          dona<span className="text-primary text-[#E03E1E]">8</span>
        </Link>

        <div className=" text-sm hidden lg:flex whitespace-nowrap items-center font-Manrope text-gray-900">
          <Link
            href={navLinks[0].url}
            className=" hover:text-primary flex items-center mr-5 transition-colors duration-500"
          >
            {navLinks[0].label}
            <span>
              <BiChevronDown className=" ml-1 w-5 h-5" />
            </span>
          </Link>
          <Link
            href={navLinks[1].url}
            className=" hover:text-primary mr-5 transition-colors duration-500"
          >
            {navLinks[1].label}
          </Link>
          <Link
            href={navLinks[2].url}
            className=" hover:text-primary mr-5 transition-colors duration-500"
          >
            {navLinks[2].label}
          </Link>
          <Link
            href={navLinks[3].url}
            className=" hover:text-primary flex items-center mr-5 transition-colors duration-500"
          >
            {navLinks[3].label}
          </Link>
        </div>

        <div className=" lg:hidden">
          <HiMenu className=" h-7 w-7" />
        </div>

        <div className=" font-Manrope hidden lg:flex text-sm gap-4">
          {session ? (
            <>
              <Link href="/dashboard">Dashboard</Link>
              {/* <SignOutButton /> */}
            </>
          ) : (
            <div className=" flex gap-3 items-center">
              <Link
                className=" whitespace-nowrap pr-4 border-gray-900 border-r bg-transparent "
                href={"/sign-in"}
              >
                Sign in
              </Link>
              <Link
                className=" whitespace-nowrap rounded-[1rem] px-3 py-3 font-semibold text-white bg-[#E03E1E]"
                href={"/sign-up"}
              >
                Create Account
              </Link>
            </div>
          )}
        </div>
      </div>
      {openSidebar && (
        <HeaderSidebar
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          activeItem={activeItem}
        />
      )}
    </div>
  );
};

export default Header;
