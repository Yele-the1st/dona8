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
    <main className="main mb-10">
      <div
        ref={container}
        className=" overflow-hidden h-[175vh] bg-[#F9E4E3] flex flex-row gap-[2vw] p-[2vw] box-border  "
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
            className={` h-full w-full relative rounded-[1vw] overflow-hidden`}
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
