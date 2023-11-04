import { FC, Key } from "react";
import AffirmationsCard from "../Cards/AffirmationsCard";
import { Affirmations as Items } from "../../data/AffirmationsData";

interface AffirmationsProps {}

const Affirmations: FC<AffirmationsProps> = ({}) => {
  return (
    <div>
      <div className=" w-full my-10  bg-white h-full ">
        <div className="px-6 h-full max-w-7xl mx-auto">
          <div className=" py-10 text-gray-900 font-Manrope">
            <h1 className=" font-semibold text-center text-3xl sm:text-4xl ">
              We Believe that We can Save <br /> More Lifes with you
            </h1>
          </div>
          <div className=" grid 640px:grid-cols-2 gap-8 1000px:grid-cols-3 grid-cols-1 1000px:gap-8 1200px:gap-20">
            {Items.map((card: any) => (
              <AffirmationsCard key={card.id} item={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affirmations;
