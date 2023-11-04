import Image from "next/image";
import { FC } from "react";
import Marquee from "react-fast-marquee";

interface OurPartnersProps {}

const OurPartners: FC<OurPartnersProps> = ({}) => {
  const affiliatedCompanies = [
    "/images/logo7.jpeg",
    "/images/logo1.svg",
    "/images/logo2.png",
    "/images/logo3.png",
    "/images/logo4.svg",
    "/images/logo7.jpeg",
    "/images/logo5.png",
    "/images/logo6.png",

    "/images/logo9.png",
  ];

  const keyframesAnimation = `
 @keyframes slideIn {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  `;
  return (
    <div>
      <div className=" w-full mt-10  bg-white h-full ">
        <div className="px-6 h-full w-full mx-auto">
          <div className=" py-10 text-gray-900 space-y-3 font-Manrope">
            <h1 className=" font-semibold text-center  text-3xl sm:text-4xl ">
              Our Partners
            </h1>
            <p className=" text-center mx-auto max-w-lg">
              We are proud to partner with a wide range of organizations,
              businesses, and individuals who share our mission of supporting
              charitable causes
            </p>
          </div>
          <div className=" flex w-full justify-center ">
            <div
              style={{
                mask: "linear-gradient(90deg, transparent, white 10%, white 90%, transparent)",
                WebkitMask:
                  "linear-gradient(90deg, transparent, white 10%, white 90%, transparent)",
              }}
              className="w-full overflow-hidden "
            >
              <Marquee>
                {affiliatedCompanies?.map((company, index) => (
                  <div
                    key={index}
                    className=" bg-gray-100 h-[4rem] shadow-sm border w-[8rem] mx-4  flex items-center justify-center rounded-[1rem] px-[1.25rem]  "
                  >
                    <Image
                      src={company}
                      alt=""
                      className=" max-w-full h-full align-middle object-contain"
                      height={400}
                      width={400}
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
