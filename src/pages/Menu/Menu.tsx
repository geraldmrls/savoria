
import { CategoryMeals } from "./CategoryMeals.tsx"
import { OurMenuText } from "./OurMenuText.tsx"

export function Menu() {
    return (
        <div className="flex flex-col h-screen mt-24">
            <OurMenuText/>
            <CategoryMeals/>
        </div>
    )
}