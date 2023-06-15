import { AiOutlineCar } from "react-icons/ai";
import { SearchMenuProps } from "../types";
import useFetch from "../hooks/useFetch";

const SearchMenu = ({
  setMinPrice,
  setMaxPrice,
  setForRent,
  setManId,
  setCatId,
}: SearchMenuProps) => {
  const {
    data: manufacturerData,
  } = useFetch("https://static.my.ge/myauto/js/mans.json");

  const {
    data: categoriesData,
  } = useFetch("https://api2.myauto.ge/ka/cats/get");

  return (
    <div className="hidden lg:block bg-white w-[250px] h-fit pb-3 border border-gray-200 shadow-md rounded-tl-lg rounded-tr-lg">
      <div className="flex flex-col">
        {/* car icons */}
        <div className="flex w-full">
          <div className="bg-white p-5 w-1/3 border border-r-[1px] border-b-[2px] border-b-[#FD4100]">
            <AiOutlineCar size={27} fill="#FD4100" />
          </div>
          <div className="bg-gray-100 p-5 w-1/3 border-r-[1px]">
            <AiOutlineCar
              size={27}
              // fill='#FD4100'
            />
          </div>
          <div className="bg-gray-100 p-5 w-1/3 border-r-[1px]">
            <AiOutlineCar
              size={27}
              // fill='#FD4100'
            />
          </div>
        </div>

        {/* select inputs */}
        <div className="flex flex-col gap-3 items-center justify-center p-5">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="type"
              className="text-[12px] text-black font-semibold"
            >
              გარიგების ტიპი
            </label>
            <select
              id="type"
              className="w-[200px] text-sm py-2 pl-2 px-8 rounded-md border-[2px]"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                if (e.target.value === "2") {
                  setForRent(true);
                } else {
                  setForRent(false);
                }
              }}
            >
              <option value="1">იყიდება</option>
              <option value="2">ქირავდება</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="manufacturer"
              className="text-[12px] text-black font-semibold"
            >
              მწარმოებელი
            </label>
            <select
              id="manufacturer"
              className="w-[200px] text-sm py-2 pl-2 px-8 rounded-md border-[2px]"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                if (parseInt(e.target.value) === 0) {
                  setManId(null);
                } else {
                  setManId(parseInt(e.target.value));
                }
              }}
            >
              <option value="0">ყველა მწარმოებელი</option>
              {manufacturerData?.data?.map((item: any, index: number) => {
                return (
                  <option key={index} value={item.man_id}>
                    {" "}
                    {item.man_name}{" "}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="category"
              className="text-[12px] text-black font-semibold"
            >
              კატეგორია
            </label>
            <select
              id="category"
              className="w-[200px] text-sm py-2 pl-2 px-8 rounded-md border-[2px]"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                if (parseInt(e.target.value) === 0) {
                  setCatId(null);
                } else {
                  setManId(parseInt(e.target.value));
                }
              }}
            >
              <option value="0">ყველა კატეგორია</option>
              {categoriesData?.data?.data?.map((item: any, index: number) => {
                return (
                  <option key={index} value={item.category_id}>
                    {" "}
                    {item.title}{" "}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <hr className="mt-2 border-[1px]" />

        {/* price */}
        <div className="flex flex-col p-5 gap-3">
          <div className="flex justify-between">
            <span>ფასი</span>
            <span>ლ</span>
          </div>
          <div className="flex justify-center items-center gap-2 px-3">
            <input
              type="number"
              placeholder="დან"
              className="
            w-[90px] border-2 p-2 px-4 rounded-md"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.value === "" || e.target.value == null) {
                  setMinPrice(0);
                } else {
                  setMinPrice(parseInt(e.target.value));
                }
              }}
            />
            <span>-</span>
            <input
              type="number"
              placeholder="მდე"
              className="
            w-[90px] border-2 p-2 px-4 rounded-md"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.value === "" || e.target.value == null) {
                  setMaxPrice(Infinity);
                }
                setMaxPrice(parseInt(e.target.value));
              }}
            />
          </div>
        </div>

        <hr className="mt-3 mb-3 border-[1px]" />

        <div className="flex justify-center">
          <button className="w-[202px] bg-[#FD4100] p-1 px-3 text-white rounded-md font-semibold">
            ძებნა 197,963
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchMenu;
