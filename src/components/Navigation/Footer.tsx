import { FC } from "react";
import Link from "next/link";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className=" max-w-7xl px-8  mx-auto py-12 ">
      <div className="w-full bg- bg-gray-900 rounded-[1rem] px-10 py-10 flex flex-col items-center">
        <div className=" flex flex-col text-center md:text-left whitespace-nowrap mt-10 max-w-7xl mx-auto w-full md:grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className=" col-span-4">
            <div className="">
              <Link
                href="/"
                className={` text-white justify-center md:justify-start font-Poppins flex items-center font-bold text-3xl`}
              >
                dona<span className="text-primary text-[#E03E1E]">8</span>
              </Link>
              <p className=" text-sm font-Manrope">
                Great futures are built with a little Charity..
              </p>
            </div>
          </div>
          <div className=" col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
              <div className=" col-span-1 text-white">
                <div className="flex text-sm flex-col space-y-3">
                  <div className=" mb-4 text-base text-primary font-semibold">
                    Company
                  </div>
                  <Link href={"/"}>About us</Link>
                  <Link href={"/"}>Our work</Link>
                  <Link href={"/"}>Success Stories</Link>
                  <Link href={"/"}>FAQs</Link>
                </div>
              </div>
              <div className=" col-span-1 text-white">
                <div className="flex flex-col text-sm space-y-3">
                  <div className=" mb-4 text-base text-primary font-semibold">
                    Partnership
                  </div>
                  <Link href={"/"}>Partners</Link>
                  <Link href={"/"}>Partner with us</Link>
                  <Link href={"/"}>Become Affiliates</Link>
                </div>
              </div>
              <div className=" col-span-1 text-white">
                <div className="flex flex-col text-sm space-y-3">
                  <div className=" mb-4 text-base text-primary font-semibold">
                    Resources
                  </div>
                  <Link href={"/"}>Help Center</Link>
                  <Link href={"/"}>Blogs</Link>
                  <Link href={"/"}>Careers</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-9 text-center text-xs col-span-full text-white">
          <p className="text-center">
            Copyright, all rights reserved 2023 by dona8
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
