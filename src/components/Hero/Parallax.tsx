"use client";
import Image from "next/image";
import { FC, useEffect, useRef } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import useDimension from "@/hooks/useDimension";

interface ParallaxProps {}
interface ColumnProps {
  images: string[];
  y?: any;
  top?: any;
}

const images = [
  "/images/1.jpeg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.webp",
  "/images/9.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
  "/images/12.jpg",
];

const Parallax: FC<ParallaxProps> = ({}) => {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return (
    <main className="main select-none pointer-events-none relative mb-10">
      <div className=" flex sm:hidden z-20 overflow-y-auto p-10 bg-[rgb(0,0,0,0.5)] w-full h-full absolute inset-0 overflow-x-hidden ">
        <div className=" my-0 mx-auto relative top-0 max-w-[460px] items-center min-h-full flex w-full rounded-t-[12px] transition-[top] ease-in-out duration-300   ">
          <div className=" relative  bottom-auto rounded-[1rem] h-auto max-h-full overflow-visible bg-transparent backdrop-blur-lg w-full shadow-2xl ">
            <div className=" mb-0 p-[32px] px-[32px] w-full block rounded-[1rem] bg-transparent backdrop-blur-lg ">
              <div className="mt-1">
                <h1 className=" text-white pr-[32px] text-2xl font-semibold sm:text-[28px] sm:font-bold">
                  Take Part in the Journey!
                </h1>
                <div className=" my-2 ">
                  <div className=" text-[16px] font-normal text-white leading-[24px] text-left ">
                    We have multiple categories to take part in , lets us embark
                    on creating a positive transformation
                  </div>
                </div>
                <div className=" select-auto mt-4 whitespace-nowrap rounded-[1rem] px-3 py-3 text-center font-semibold text-white bg-[#E03E1E]">
                  Donate Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={container}
        className=" select-none pointer-events-none overflow-hidden h-[175vh] bg-[#F9E4E3] flex flex-row gap-[2vw] p-[2vw] box-border  "
      >
        <Column
          images={[images[0], images[1], images[2]]}
          y={y}
          top={"top-[-45%]"}
        />
        <Column
          images={[images[3], images[4], images[5]]}
          y={y2}
          top={"top-[-95%]"}
        />
        <Column
          images={[images[6], images[7], images[8]]}
          y={y3}
          top={"top-[-45%]"}
        />
        <Column
          images={[images[9], images[10], images[11]]}
          y={y4}
          top={"top-[-75%]"}
        />
      </div>
    </main>
  );
};

export default Parallax;

const Column: FC<ColumnProps> = ({ images, y = 0, top }) => {
  return (
    <motion.div
      style={{ y }}
      className={` ${top} relative w-[25%] h-full flex flex-col gap-[2vw] min-w-[250px]  `}
    >
      {images.map((src, index) => {
        return (
          <div
            key={index}
            className={` select-none pointer-events-none h-full w-full relative rounded-[1vw] overflow-hidden`}
          >
            <Image
              quality={50}
              className=" object-cover"
              src={src}
              fill
              alt="image"
              priority
            />
          </div>
        );
      })}
    </motion.div>
  );
};
