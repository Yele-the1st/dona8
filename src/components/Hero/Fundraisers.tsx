import { FC } from "react";
import Carousel from "../Carousel/Carousel";
import FundraisersCard from "../Cards/FundraisersCard";
import { Fundraisers as Items } from "@/data/FundraisersData";

interface FundraisersProps {}

const Fundraisers: FC<FundraisersProps> = ({}) => {
  return (
    <div className=" w-full pb-14 bg-white h-full">
      {Items && (
        <div className={` px-6 h-full max-w-7xl mx-auto`}>
          <Carousel name={`Top Fundraisers Near You:`}>
            {Items.map((card) => (
              <FundraisersCard key={card.id} item={card} />
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default Fundraisers;
