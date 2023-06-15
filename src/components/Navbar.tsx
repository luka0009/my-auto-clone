import icon from "../assets/icon.png";
import { NavbarProps } from "../types";

const Navbar = ({ forRent, minPrice, maxPrice }: NavbarProps) => {
  return (
    <>
      <div className="bg-[#FFFFFF] absolute w-full h-[80px] top-0 left-0 pl-[4%] py-4">
        <img src={icon} alt="icon" />
      </div>
      <div className="mt-[80px] h-[64px] bg-gray-300 flex items-center justify-start px-6 lg:hidden">
        <div className="flex gap-3 justify-center items-center">
          <span className="bg-white p-2 px-5 rounded-full">
            {forRent ? "ქირავდება" : "იყიდება"}
          </span>
          {minPrice > 0 && (
            <span className="bg-white p-2 px-5 rounded-full whitespace-nowrap">{`${minPrice}-დან`}</span>
          )}
          {maxPrice !== Infinity && (
            <span className="bg-white p-2 px-5 rounded-full whitespace-nowrap">{`${maxPrice}-მდე`}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
