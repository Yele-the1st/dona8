import Image from "next/image";
import { FC } from "react";

interface AffirmationsCardProps {
  item: any;
}

const AffirmationsCard: FC<AffirmationsCardProps> = ({ item }) => {
  return (
    <div>
      <div className="h-[300px] min-w-[252px] pb-4 text-gray-900 rounded-t-md cursor-pointer relative overflow-hidden">
        <Image
          className="w-full h-[70%] object-cover "
          src={item.img}
          alt=""
          height={400}
          width={400}
        />
        <div className=" flex items-center p-4 gap-5">
          <div className="title">
            <h2 className=" text-lg font-Ubuntu mb-2 font-medium ">
              {item.cat}
            </h2>
            <span className=" text-gray-900 font-Source text-sm font-light">
              {item.username}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffirmationsCard;
