import Image from "next/image";
import { FC } from "react";

interface HowtoProps {}

const Howto: FC<HowtoProps> = ({}) => {
  return (
    <div className=" w-full mt-10  bg-white h-full ">
      <div className="px-6 h-full max-w-7xl mx-auto">
        <div className=" py-10 text-gray-900 space-y-3 font-Manrope">
          <h1 className=" font-semibold text-center 1100px:text-start text-4xl ">
            It Takes just few Minutes!
          </h1>
          <p className=" text-center mx-auto 1100px:text-start 1100px:mx-0 max-w-lg">
            Our platform is easy to use, whether you&apos;re an individual, a
            group, or an organization. Here&apos;s a quick guide on how to get
            started:
          </p>
        </div>
        <div className=" hidden 1100px:flex pb-40">
          <div className=" relative flex mt-10  max-w-[774px] w-full">
            <Image
              src={`/svg/HeroLine.svg`}
              alt=""
              height={0}
              width={874}
              className=""
            />
            <div className=" absolute -top-6 w-[54px] h-[54px] rounded-full bg-[#E03E1E] flex items-center justify-center shrink-0 ">
              <div className=" relative w-full rounded-full block px-2">
                <h1 className=" flex justify-center items-center text-xl font-bold">
                  1
                </h1>
                <div className="absolute w-full text-gray-900 top-16">
                  <h2 className=" whitespace-nowrap text-2xl font-medium font-Manrope">
                    Create Account
                  </h2>
                  <p className=" whitespace-nowrap">Start with the basics</p>
                </div>
              </div>
            </div>
            <div className=" absolute -top-6 left-1/2 w-[54px] h-[54px] rounded-full bg-[#E03E1E] flex items-center justify-center shrink-0 ">
              <div className=" relative w-full rounded-full block px-2">
                <h1 className=" flex justify-center items-center text-xl font-bold">
                  2
                </h1>
                <div className="absolute w-full text-gray-900 top-16">
                  <h2 className=" whitespace-nowrap text-2xl font-medium font-Manrope">
                    Tell your story
                  </h2>
                  <p className=" whitespace-nowrap">
                    Will be there every step of the way
                  </p>
                </div>
              </div>
            </div>
            <div className=" absolute -top-6 right-0 w-[54px] h-[54px] rounded-full bg-[#E03E1E] flex items-center justify-center shrink-0 ">
              <div className=" relative w-full rounded-full block px-2">
                <h1 className=" flex justify-center items-center text-xl font-bold">
                  3
                </h1>
                <div className="absolute w-full text-gray-900 top-16">
                  <h2 className=" whitespace-nowrap text-2xl font-medium font-Manrope">
                    Share with family and friends
                  </h2>
                  <p className=" whitespace-nowrap">
                    People are waiting to lend a helping hand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" pb-10 flex flex-col justify-center items-center 1100px:hidden">
          <div className=" w-full flex flex-col justify-center items-center">
            <div className=" w-[54px] h-[54px] rounded-full bg-[#E03E1E] flex items-center justify-center shrink-0 ">
              <div className=" relative w-full rounded-full block px-2">
                <h1 className=" flex justify-center text-xl font-bold  items-center">
                  1
                </h1>
              </div>
            </div>
            <div className="text-gray-900 mt-6">
              <h2 className=" text-center whitespace-nowrap text-2xl font-medium font-Manrope">
                Create Account
              </h2>
              <p className=" text-center whitespace-nowrap">
                Start with the basics
              </p>
            </div>
          </div>
          <div className=" w-full flex flex-col mt-10 justify-center items-center">
            <div className=" w-[54px] h-[54px] rounded-full bg-[#E03E1E] flex items-center justify-center shrink-0 ">
              <div className=" relative w-full rounded-full block px-2">
                <h1 className=" flex justify-center items-center text-xl font-bold">
                  2
                </h1>
              </div>
            </div>
            <div className="text-gray-900 mt-6">
              <h2 className=" text-center whitespace-nowrap text-2xl font-medium font-Manrope">
                Tell your story
              </h2>
              <p className=" text-center whitespace-nowrap">
                Will be there every step of the way
              </p>
            </div>
          </div>
          <div className=" w-full flex flex-col mt-10 justify-center items-center">
            <div className=" w-[54px] h-[54px] rounded-full bg-[#E03E1E] flex items-center justify-center shrink-0 ">
              <div className=" relative w-full rounded-full block px-2">
                <h1 className=" flex justify-center items-center text-xl font-bold">
                  3
                </h1>
              </div>
            </div>
            <div className="text-gray-900 mt-6">
              <h2 className=" text-center whitespace-nowrap text-2xl font-medium font-Manrope">
                Share with family and friends
              </h2>
              <p className=" text-center whitespace-nowrap">
                People are waiting to lend a helping hand
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howto;
