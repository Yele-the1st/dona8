import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Progress } from "../Progress/ProgressBar";
import { BiSolidDonateHeart } from "react-icons/bi";

interface FundraisersCardProps {
  item: any;
}

const FundraisersCard: FC<FundraisersCardProps> = ({ item }) => {
  return (
    <div className=" mb-4">
      <div className=" group relative hover:shadow-md mx-2 min-w-[252px] rounded-xl  bg-white flex flex-col">
        <div className=" shadow rounded-t-xl border-0.5 relative h-0 overflow-hidden pb-[63.25%]">
          <Link href={`/product/${item?._id}`}>
            <Image
              className="absolute inset-0 w-full h-full  overflow-clip object-cover"
              src={`${item?.img}`}
              alt=""
              height={400}
              width={400}
            />
          </Link>
        </div>

        <div className="p-5 text-gray-900 flex flex-col flex-grow">
          <div className="flex justify-between font-Ubuntu mb-2 font-light items-center gap-2.5 ">
            <span className="text-xs">June 27, 2021</span>
            <span className="text-xs text-red-500">300 Donations</span>
          </div>
          <div className="flex font-Ubuntu mb-2 font-semibold items-center gap-2.5 ">
            <span className="text-sm">{item?.cat}</span>
          </div>

          <p className="line-clamp-3 mb-2 font-light text-sm font-Source">
            {item.username}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            sint, sapiente iusto perferendis eum earum amet laboriosam dicta
            vitae quisquam saepe! Similique obcaecati ad repellendus ipsa
            ducimus, corporis cupiditate nulla.
          </p>

          <div className="flex justify-between font-Ubuntu mb-2 font-light items-center gap-2.5 ">
            <span className="text-xs">Donations</span>
            <span className="text-xs ">30%</span>
          </div>

          <Progress value={33} className=" w-full " />

          <div className="flex justify-between flex-wrap font-Ubuntu my-2 font-light items-center gap-2.5 ">
            <span className="text-xs mr-3">Raised: $2400</span>
            <span className="text-xs text-green-700 font-semibold">
              Goal: $4000
            </span>
          </div>

          <div className=" mt-3 w-full flex items-center">
            <button
              className={` py-3 px-4 lg:py-3 lg:px-4 flex items-center gap-3 rounded-[1rem] whitespace-nowrap font-Ubuntu cursor-pointer shadow bg-[#E03E1E] text-white text-sm font-medium max-w-max hover:gap-5 hover:bg-black hover:text-white  transition-all duration-300 ease-linear delay-0`}
            >
              <div>Donate Now</div>
              <BiSolidDonateHeart className=" w-5 h-5 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundraisersCard;
