import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import SearchMenu from "./components/SearchMenu";
import SortMenu from "./components/SortMenu";
import useFetch from "./hooks/useFetch";
import { SortType } from "./types";
import { sortingFunctions } from "./utils/sortingFunctions";
import { filterProducts } from "./utils/filterProducts";

function App() {
  const { data: productsData } = useFetch(
    "https://api2.myauto.ge/ka/products/"
  );

  const { data: manufacturerData } = useFetch(
    "https://static.my.ge/myauto/js/mans.json"
  );

  const [sortValue, setSortValue] = useState<SortType>("თარიღი კლებადი");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(Infinity);
  const [forRent, setForRent] = useState<boolean>(false);
  const [manId, setManId] = useState<number | null>(null);
  const [catId, setCatId] = useState<number | null>(null);

  let products = productsData?.data?.data?.items;
  if (sortValue in sortingFunctions) {
    products = products?.sort(sortingFunctions[sortValue]);
  }

  const filteredProducts = products?.filter((item: any) =>
    filterProducts(item, minPrice, maxPrice, forRent, manId, catId)
  );

  const count = products?.length;
  console.log(count);
  const manufacturers = manufacturerData?.data;

  return (
    <>
      <div className="">
        <Navbar 
        forRent={forRent}
        minPrice={minPrice}
        maxPrice={maxPrice}
        />
        <div className="bg-[#E5E5E5] h-fit lg:p-8 lg:mt-[80px]">
          <div className="flex gap-3 items-start">
            <SearchMenu
              setMaxPrice={setMaxPrice}
              setMinPrice={setMinPrice}
              setForRent={setForRent}
              setManId={setManId}
              setCatId={setCatId}
            />
            <div className="flex flex-col lg:gap-3">
              <SortMenu setSortValue={setSortValue} />
              {filteredProducts?.map((item: any, index: number) => {
                let title = "";
                for (let i = 0; i < manufacturers.length; i++) {
                  if (
                    parseInt(manufacturers[i].man_id) === parseInt(item.man_id)
                  ) {
                    title = manufacturers[i].man_name;
                    break;
                  }
                }
                return (
                  <Card
                    key={index}
                    price={item.price}
                    mileage={item.car_run_km}
                    date={item.prod_year}
                    photo={item.photo}
                    car_id={item.car_id}
                    photo_ver={item.photo_ver}
                    title={title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
