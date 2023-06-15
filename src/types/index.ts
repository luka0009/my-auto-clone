export interface CardProps {
  price: number;
  mileage: number;
  date: number;
  photo: string;
  car_id: number;
  photo_ver: number;
  title: string;
}

export interface NavbarProps {
  forRent: boolean;
  minPrice: number;
  maxPrice: number;
}

export interface SearchMenuProps {
  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;
  setForRent: (value: boolean) => void;
  setManId: (value: number | null) => void;
  setCatId: (value: number | null) => void;
}

export type SortType =
  | "თარიღი კლებადი"
  | "თარიღი ზრდადი"
  | "ფასი კლებადი"
  | "ფასი ზრდადი"
  | "გარბენი კლებადი"
  | "გარბენი ზრდადი";

export interface SortMenuProps {
  setSortValue: (sortValue: SortType) => void;
}
