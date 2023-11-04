import { FC, SetStateAction, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

interface FaqProps {}

const Faq: FC<FaqProps> = ({}) => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab: SetStateAction<number>) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };
  return (
    <div className="[#E03E1E]">
      <div
        className={` max-w-7xl text-gray-900  mx-auto font-Manrope my-4 px-8`}
      >
        <div className=" bg-gray-100 rounded-[1rem] p-10">
          <h2 className=" text-3xl md:text-4xl text-center font-semibold ">
            Frequently asked questions
          </h2>
          <p className="mb-8 mt-2 text-sm text-center">
            Have more questions? Email us at dona8@gmail.com
          </p>
          <div className=" mx-auto space-y-4 ">
            <div className="border-b border-gray-200 pb-4 ">
              <button
                className=" flex items-center justify-between w-full "
                onClick={() => toggleTab(1)}
              >
                <span className=" text-base text-start mr-8  font-medium">
                  What types of charities can I donate to, and how do I find
                  them?
                </span>
                <BsFillArrowRightCircleFill
                  className={` ${
                    activeTab === 1 ? "transform rotate-90" : ""
                  } w-5 h-5 transition duration-300 ease-linear delay-0 shrink-0 `}
                />
              </button>
              {activeTab === 1 && (
                <div className="mt-4 mr-8">
                  <p className=" text-gray-900 text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Illum accusamus quia voluptas, nemo inventore dolor,
                    expedita incidunt animi voluptatem nostrum vel? Dolores quis
                    temporibus sint suscipit a harum at unde.
                  </p>
                </div>
              )}
            </div>
            <div className="border-b border-gray-200 pb-4 ">
              <button
                className=" flex items-center justify-between w-full "
                onClick={() => toggleTab(2)}
              >
                <span className="text-base text-start mr-8  font-medium">
                  Is my donation tax-deductible, and how do I claim it on my
                  taxes?
                </span>
                <BsFillArrowRightCircleFill
                  className={` ${
                    activeTab === 2 ? "transform rotate-90" : ""
                  } w-5 h-5 transition duration-300 ease-linear delay-0 shrink-0 `}
                />
              </button>
              {activeTab === 2 && (
                <div className="mt-4 mr-8 ">
                  <p className=" text-gray-900 text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Illum accusamus quia voluptas, nemo inventore dolor,
                    expedita incidunt animi voluptatem nostrum vel? Dolores quis
                    temporibus sint suscipit a harum at unde.
                  </p>
                </div>
              )}
            </div>
            <div className="border-b border-gray-200 pb-4 ">
              <button
                className=" flex items-center justify-between w-full "
                onClick={() => toggleTab(3)}
              >
                <span className="text-base text-start mr-8  font-medium">
                  Can I donate anonymously?
                </span>
                <BsFillArrowRightCircleFill
                  className={` ${
                    activeTab === 3 ? "transform rotate-90" : ""
                  } w-5 h-5 transition duration-300 ease-linear delay-0 shrink-0 `}
                />
              </button>
              {activeTab === 3 && (
                <div className="mt-4 mr-8 ">
                  <p className=" text-gray-900 text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Illum accusamus quia voluptas, nemo inventore dolor,
                    expedita incidunt animi voluptatem nostrum vel? Dolores quis
                    temporibus sint suscipit a harum at unde.
                  </p>
                </div>
              )}
            </div>
            <div className="border-b border-gray-200 pb-4 ">
              <button
                className=" flex items-center justify-between w-full "
                onClick={() => toggleTab(4)}
              >
                <span className="text-base text-start mr-8  font-medium">
                  What percentage of my donation actually goes to the charity
                  for administrative?
                </span>
                <BsFillArrowRightCircleFill
                  className={` ${
                    activeTab === 4 ? "transform rotate-90" : ""
                  } w-5 h-5 transition duration-300 ease-linear delay-0 shrink-0 `}
                />
              </button>
              {activeTab === 4 && (
                <div className="mt-4 mr-8 ">
                  <p className=" text-gray-900 text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Illum accusamus quia voluptas, nemo inventore dolor,
                    expedita incidunt animi voluptatem nostrum vel? Dolores quis
                    temporibus sint suscipit a harum at unde.
                  </p>
                </div>
              )}
            </div>
            <div className="border-b border-gray-200 pb-4 ">
              <button
                className=" flex items-center justify-between w-full "
                onClick={() => toggleTab(5)}
              >
                <span className="text-base text-start mr-8  font-medium">
                  Can I donate goods or services instead of money?
                </span>
                <BsFillArrowRightCircleFill
                  className={` ${
                    activeTab === 5 ? "transform rotate-90" : ""
                  } w-5 h-5 transition duration-300 ease-linear delay-0 shrink-0 `}
                />
              </button>
              {activeTab === 5 && (
                <div className="mt-4 mr-8 ">
                  <p className=" text-gray-900 text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Illum accusamus quia voluptas, nemo inventore dolor,
                    expedita incidunt animi voluptatem nostrum vel? Dolores quis
                    temporibus sint suscipit a harum at unde.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
