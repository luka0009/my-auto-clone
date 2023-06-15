import { BsCheckLg } from "react-icons/bs";
import { CardProps } from "../types";

const Card = ({
  price,
  mileage,
  date,
  photo,
  photo_ver,
  car_id,
  title
}: CardProps) => {
  
  return (
    <>
      <div className="lg:hidden w-full h-fit bg-[#FFFFFF]">
        <div className="p-4 pr-6 pb-2 flex flex-col gap-2">
          {/* title */}
          <div className="flex justify-start items-center gap-1">
            {/* <span className="text-sm">VIP</span> */}
            <p className="text-[13px] text-[#272A37] flex-none order-1 flex-grow-0 ">
              {title}
            </p>
            <span className="text-gray-400 text-[12px] flex-none order-1 flex-grow-0 ">
              {date}წ
            </span>
          </div>
          {/* price */}
          <div className="flex justify-between">
            <span className="text-[20px] text-[#272A37] font-bold">
              {price} ლ
            </span>

            <div
              className="flex flex-row items-center
           p-[4px] gap-2 bg-[#EEFBF1] rounded-[6px]"
            >
              <span className="bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full">
                <BsCheckLg className="w-[7px] h-[6px] text-[#1EB676]" />
              </span>
              <span className="italic text-dark-light text-xs md:text-sm">
                განბაჟებული
              </span>
            </div>
          </div>
          {/* image */}
          <div>
            <img
              src={`https://static.my.ge/myauto/photos/${photo}/thumbs/${car_id}_1.jpg?v=${photo_ver}`}
              alt="car"
              className="rounded-[16px] w-full"
            />
          </div>
          {/* data */}
          <div className="grid grid-cols-2 grid-rows-3">
            <span className="text-[12px] text-[#454857]">{mileage} კმ</span>
            <span className="text-[12px] text-[#454857]">3.0 ბენზინი</span>
            <span className="text-[12px] text-[#454857]">ავტომატიკა</span>
            <span className="text-[12px] text-[#454857]">სედანი</span>
            <span className="text-[12px] text-[#454857]">საჭე მარცხნივ</span>
            <span className="text-[12px] text-[#454857]">თბილისი</span>
          </div>
          {/* footer */}
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2 text-[12px]">
              <span> 🔥 </span>
              <span> 500 ნახვა </span>
              <span> • </span>
              <span> 2 დღის წინ</span>
            </div>
            <div className="flex justify-center items-center gap-2 text-[12px]">
              <span> 🚗 </span>
              <span> 📝 </span>
            </div>
          </div>
        </div>
      </div>

      {/* large screen */}

      <div className="hidden lg:block w-[782px] h-[172px] bg-[#FFFFFF] rounded-lg">
        <div className="p-4 pb-2 flex justify-between">
          <div className="flex gap-4 w-3/4">
            {/* image */}
            <div className="w-1/3 h-full">
              <img
                src={`https://static.my.ge/myauto/photos/${photo}/thumbs/${car_id}_1.jpg?v=${photo_ver}`}
                alt="car"
                className="rounded-[16px] min-h-[144px]"
              />
            </div>
            {/* data */}
            <div className="w-2/3 h-full flex flex-col gap-4">
              {/* heading */}
              <div className="flex justify-start items-center gap-1">
                {/* <span>VIP</span> */}
                <p className="text-[14px] text-[#272A37] flex-none order-1 flex-grow-0 ">
                  {title}
                </p>
                <span className="text-gray-400 text-[14px] flex-none order-1 flex-grow-0 ">
                  {date}წ
                </span>
              </div>
              {/* data */}
              <div className="grid grid-cols-2 grid-rows-2 gap-x-8">
                <span className="text-md text-[#1B1D25]">{mileage} კმ</span>
                <span className="text-md text-[#1B1D25]">3.0 ბენზინი</span>
                <span className="text-md text-[#1B1D25]">ავტომატიკა</span>
                <span className="text-md text-[#1B1D25]">სედანი</span>
              </div>
              {/* footer */}
              <div className="flex items-center gap-2 text-[#6F7383]">
                <span className="mb-[-63px]"> 🔥 </span>
                <span className="mb-[-63px]"> 500 ნახვა </span>
                <span className="mb-[-63px]"> • </span>
                <span className="mb-[-63px]"> 2 დღის წინ</span>
              </div>
            </div>
          </div>
          {/* price */}
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div
                  className="flex flex-row items-center
           p-[4px] rounded-[6px]"
                >
                  <span className="w-fit bg-opacity-20 p-1.5 rounded-full">
                    <BsCheckLg size={15} className=" text-[#1EB676]" />
                  </span>
                  <span className="italic text-[#1EB676] text-dark-light text-xs md:text-sm">
                    განბაჟებული
                  </span>
                </div>
                <span>აშშ</span>
              </div>
              <span>{price} ლ</span>
            </div>
            <div className="flex gap-2">
              <span>Icon</span>
              <span>Icon</span>
              <span>Icon</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
