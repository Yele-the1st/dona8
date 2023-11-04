import { FC } from "react";
import Carousel from "../Carousel/Carousel";
import FundraisersCard from "../Cards/FundraisersCard";
import { Fundraisers as Items } from "@/data/FundraisersData";
import BlogCard from "../Cards/BlogCard";

interface BlogProps {}

const Blog: FC<BlogProps> = ({}) => {
  return (
    <div className=" w-full pb-14 bg-white h-full">
      {Items && (
        <div className={` px-6 h-full max-w-7xl mx-auto`}>
          <Carousel name={`Article You May Read:`}>
            {Items.map((card) => (
              <BlogCard key={card.id} item={card} />
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default Blog;
