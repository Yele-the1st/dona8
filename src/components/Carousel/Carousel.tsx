import React, { useRef, FC, useState, RefObject, useEffect } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface CarouselProps {
  children: React.ReactNode;
  name: string;
}

const Carousel: FC<CarouselProps> = ({ children, name: title }) => {
  const sliderRef: RefObject<Slider> = useRef<Slider>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  const slickSettings: Settings = {
    ...settings,
    speed: 1000,
    touchThreshold: 100,
    cssEase: "ease-in-out",
  };

  useEffect(() => {
    // Simulating a delay (replace with the actual calculation process)
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <>
      {isLoaded ? (
        <div className=" justify-center font-Manrope pt-[30px] md:pt-[90px] pb-[50px] lg:pb-[45px]">
          <div className="relative mx-auto max-w-7xl">
            <h1 className="text-3xl sm:text-4xl text-gray-900 font-semibold inline-block my-5 ml-2">
              {title}
            </h1>
            <Slider {...slickSettings} ref={sliderRef}>
              {children}
            </Slider>
            <div className="absolute -bottom-14 w-full md:w-auto md:top-4 md:right-4 z-10">
              <div className=" flex gap-4 justify-center items-center">
                <button
                  className="bg-gray-200 rounded-full p-2 text-black focus:outline-none h-10 w-10 flex items-center justify-center shadow"
                  onClick={handlePrevClick}
                >
                  <HiChevronLeft className="h-6 w-6 stroke-current" />
                </button>
                <button
                  className="bg-[#E03E1E] rounded-full p-2 text-white focus:outline-none h-10 w-10 flex items-center justify-center shadow"
                  onClick={handleNextClick}
                >
                  <HiChevronRight className="h-6 w-6 stroke-current " />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Carousel;
