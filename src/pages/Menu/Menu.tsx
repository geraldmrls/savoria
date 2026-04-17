import { CategoryMeals } from "./CategoryMeals.tsx";
import { OurMenuText } from "./OurMenuText.tsx";
import { ContactInfo } from "../../components/ContactInfo.tsx";

export function Menu() {
  return (
    <>
      <div className="">
        <OurMenuText />
        <CategoryMeals />
      </div>
      <ContactInfo/>
    </>
  );
}
