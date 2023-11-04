import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { BiSolidDonateHeart } from "react-icons/bi";
import { BsArrowRightShort, BsFillPersonFill } from "react-icons/bs";
import { FaCalendarDay } from "react-icons/fa";

interface BlogCardProps {
  item: any;
}

const BlogCard: FC<BlogCardProps> = ({ item }) => {
  return (
    <div className=" mb-4">
      <div className=" group relative hover:shadow-md mx-2 min-w-[252px] rounded-xl  bg-[#f9e4e3] flex flex-col">
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
            <div className=" flex gap-2 text-xs">
              <BsFillPersonFill className=" h-4 w-4 shrink-0" />
              <div>Jacob Jones</div>
            </div>
            <div className=" flex gap-2 text-xs">
              <FaCalendarDay className=" h-4 w-4 shrink-0" />
              <div>June 27, 2021</div>
            </div>
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

          <div className=" mt-3 w-full flex items-center">
            <button
              className={` py-3 px-4 lg:py-3 lg:px-4 flex items-center gap-3 rounded-[1rem] whitespace-nowrap font-Ubuntu cursor-pointer shadow bg-[#E03E1E] text-white text-sm font-medium max-w-max hover:gap-5 hover:bg-black hover:text-white  transition-all duration-300 ease-linear delay-0`}
            >
              <div>Read More</div>
              <BsArrowRightShort className=" w-5 h-5 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
