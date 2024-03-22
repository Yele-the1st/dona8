import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { BsPatchCheckFill } from "react-icons/bs";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="w-full to-white overflow-x-hidden via-[#F9E4E3] from-white bg-gradient-to-b sm:bg-gradient-to-r ">
      <div className=" relative px-6 max-w-5xl mx-auto pt-32 lg:pt-44">
        <h1 className="text-gray-900 font-Poppins font-extrabold text-3xl sm:text-5xl lg:text-6xl text-center">
          Go beyond donations, lend your skills to charity.
        </h1>
        <p className="mt-6 sm:text-lg font-Manrope leading-8 text-[#413F3F] text-center max-w-[640px] mx-auto ">
          Our platform is designed for individuals, groups, and organizations to
          come together and support charitable projects in their communities and
          around the world.
        </p>
        <div className="mt-10 flex flex-col font-Manrope  space-y-3 sm:space-y-0 sm:flex-row  items-center text-base justify-center gap-x-6">
          <button className=" whitespace-nowrap bg-[#E03E1E] hover:bg-[#c9381b] focus:outline-none focus:ring-2 focus:ring-[#E03E1E] focus:ring-offset-2 focus:ring-offset-[#FBEAE9] text-white font-semibold h-12 px-6 rounded-[1rem] w-full flex items-center justify-center sm:w-auto ">
            Donate Now
          </button>
          <button className=" whitespace-nowrap bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-[#FBEAE9] text-white font-semibold h-12 px-6 rounded-[1rem] w-full flex items-center justify-center sm:w-auto ">
            Create a Campaign
          </button>
        </div>
        <div className="mt-6 sm:mt-10 flex font-Manrope  justify-center space-x-3 text-sm">
          <div className="   text-gray-900 font-semibold  w-full flex items-center justify-center sm:w-auto ">
            <BsPatchCheckFill className=" w-5 h-5 mr-1" />
            Free Register
          </div>
          <div className="   text-gray-900 font-semibold  w-full flex items-center justify-center sm:w-auto ">
            <BsPatchCheckFill className=" w-5 h-5 mr-1" />
            Great Service
          </div>
        </div>
        <div className="hidden md:block absolute top-[250px] left-6">
          <Image
            src={`/assets/Rectangle52.webp`}
            alt=""
            height={144}
            width={138}
            priority
          />
        </div>
        <div className="hidden md:block absolute top-[250px] -right-8">
          <Image
            src={`/assets/Rectangle53.webp`}
            alt=""
            height={144}
            width={138}
            priority
          />
        </div>
      </div>
      {/* <!-- Image gallery --> */}
      <div className=" hidden sm:flex px-6 mt-10  max-w-7xl mx-auto w-full">
        <Image
          src={`/assets/HeroImage.webp`}
          alt=""
          height={330}
          width={1247}
          // className="h-full w-full"
        />
      </div>
      <div className=" flex sm:hidden px-6 mt-10  max-w-7xl mx-auto w-full">
        <Image
          src={`/assets/HeroImageMobile.webp`}
          alt=""
          height={330}
          width={1247}
          // className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
