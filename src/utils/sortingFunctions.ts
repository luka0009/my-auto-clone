export const sortingFunctions = {
    "თარიღი კლებადი": (a: any, b: any) =>
      Number(b.prod_year) - Number(a.prod_year),
    "თარიღი ზრდადი": (a: any, b: any) =>
      Number(a.prod_year) - Number(b.prod_year),
    "გარბენი კლებადი": (a: any, b: any) =>
      Number(b.car_run_km) - Number(a.car_run_km),
    "გარბენი ზრდადი": (a: any, b: any) =>
      Number(a.car_run_km) - Number(b.car_run_km),
    "ფასი კლებადი": (a: any, b: any) => Number(b.price) - Number(a.price),
    "ფასი ზრდადი": (a: any, b: any) => Number(a.price) - Number(b.price),
  };