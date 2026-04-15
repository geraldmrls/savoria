import sigDishes from "../assets/sig-dishes.jpg";
import craftCocktails from "../assets/water-ice.jpg";
import dessert from "../assets/dessert.jpg";

type Dishes = {
    id: number
  image: string;
  name: string;
  description: string;
};

export const homeDishes: Dishes[] = [
  // signature dishes
  {
    id: 1,
    image: sigDishes,
    name: "Signature Dishes",
    description: "Expertly plated culinary masterpieces",
  },
  // craft cocktails
  {
    id: 2,
    image: craftCocktails,
    name: "Craft Cocktails",
    description: "Handcrafted cocktails with fresh ingredients",
  },
  // delicious desserts
  {
    id: 3,
    image: dessert,
    name: "Delicious Desserts",
    description: "Indulgent sweet treats to end your meal on a high note",
  },
];
