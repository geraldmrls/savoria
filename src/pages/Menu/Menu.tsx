import { CategoryMeals } from "./CategoryMeals.tsx";
import { OurMenuText } from "./OurMenuText.tsx";
import { ContactInfo } from "../Home/ContactInfo.tsx";

export function Menu() {
  return (
    <>
      <div className="lg:mt-28">
        <OurMenuText />
        <CategoryMeals />
      </div>
      <ContactInfo/>
    </>
  );
}
