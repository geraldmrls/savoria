import { CategoryMeals } from "./CategoryMeals.tsx";
import { OurMenuText } from "./OurMenuText.tsx";

export function Menu() {
  return (
    <>
      <div className="">
        <OurMenuText />
        <CategoryMeals />
      </div>
    </>
  );
}
