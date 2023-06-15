import { SortMenuProps, SortType } from "../types";

const SortMenu = ({ setSortValue }: SortMenuProps) => {
  return (
    <div className="hidden lg:flex justify-between">
      <span>170784 განცხადება</span>
      <div className="flex justify-center gap-3">
        <select className="p-2 px-4 rounded-md">
          <option value="ბოლო 3 საათი">ბოლო 3 საათი</option>
        </select>
        <select
          className="p-2 px-4 rounded-md"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSortValue(e.target.value as SortType)
          }
        >
          <option value="თარიღი კლებადი">თარიღი კლებადი</option>
          <option value="თარიღი ზრდადი">თარიღი ზრდადი</option>
          <option value="ფასი კლებადი">ფასი კლებადი</option>
          <option value="ფასი ზრდადი">ფასი ზრდადი</option>
          <option value="გარბენი კლებადი">გარბენი კლებადი</option>
          <option value="გარბენი ზრდადი">გარბენი ზრდადი</option>
        </select>
      </div>
    </div>
  );
};

export default SortMenu;
