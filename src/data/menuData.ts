// ---------------------------IMAGES ---------------------------
// MEALS
import grilledSalmon from "../assets/meals/grilled-salmon.png"
import beefTenderloin from "../assets/meals/beef-tenderloin.png"
import trufflePasta from "../assets/meals/truffle-pasta.png"
import lambChops from "../assets/meals/lamb-chops.png"
import mushroomRisotto from "../assets/meals/mushroom-risotto.png"
import seaBass from "../assets/meals/sea-bass.png"

// DRINKS
import mangoMojito from "../assets/drinks/mango-mojito.png"
import espressoMartini from "../assets/drinks/espresso-martini.png"
import passionFruitFizz from "../assets/drinks/passion-fruit-fizz.png"
import cucumberCooler from "../assets/drinks/cucumber-cooler.png"
import strawberryDaiquiri from "../assets/drinks/strawberry-daiquiri.png"
import spicedOldFashioned from "../assets/drinks/spiced-old-fashioned.png"

// DESSERTS
import caramerPudding from "../assets/desserts/caramel-pudding.png"
import chocolateFondant from "../assets/desserts/chocolate-fondant.png"
import tiramisu from "../assets/desserts/tiramisu.png"
import lemonTart from "../assets/desserts/lemon-tart.png"
import pannaCotta from "../assets/desserts/panna-cotta.png"
import mangoSorbet from "../assets/desserts/mango-sorbet.png"

export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: "MEALS" | "DRINKS" | "DESSERTS";
  image: string;
};

export const menuItems: MenuItem[] = [
  // MEALS
  {
    id: 1,
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with herbs and lemon butter sauce",
    price: 24.99,
    category: "MEALS",
    image: grilledSalmon,
  },
  {
    id: 2,
    name: "Beef Tenderloin",
    description: "Prime cut beef with roasted vegetables and red wine reduction",
    price: 34.99,
    category: "MEALS",
    image: beefTenderloin,
  },
  {
    id: 3,
    name: "Truffle Pasta",
    description: "Handmade pasta with black truffle and parmesan cream",
    price: 19.99,
    category: "MEALS",
    image: trufflePasta,
  },
  {
    id: 4,
    name: "Lamb Chops",
    description: "Herb crusted lamb chops with mint jelly and roasted potatoes",
    price: 29.99,
    category: "MEALS",
    image: lambChops,
  },
  {
    id: 5,
    name: "Mushroom Risotto",
    description: "Creamy arborio rice with wild mushrooms and aged parmesan",
    price: 17.99,
    category: "MEALS",
    image: mushroomRisotto,
  },
  {
    id: 6,
    name: "Sea Bass",
    description: "Pan seared sea bass with saffron sauce and seasonal greens",
    price: 27.99,
    category: "MEALS",
    image: seaBass,
  },

  // DRINKS
  {
    id: 7,
    name: "Mango Mojito",
    description: "Fresh mango, mint, lime and sparkling water",
    price: 8.99,
    category: "DRINKS",
    image: mangoMojito,
  },
  {
    id: 8,
    name: "Espresso Martini",
    description: "Vodka, fresh espresso, coffee liqueur and vanilla",
    price: 12.99,
    category: "DRINKS",
    image: espressoMartini,
  },
  {
    id: 9,
    name: "Passion Fruit Fizz",
    description: "Passion fruit puree, prosecco and fresh lime juice",
    price: 10.99,
    category: "DRINKS",
    image: passionFruitFizz,
  },
  {
    id: 10,
    name: "Cucumber Cooler",
    description: "Fresh cucumber, elderflower, mint and tonic water",
    price: 7.99,
    category: "DRINKS",
    image: cucumberCooler,
  },
  {
    id: 11,
    name: "Strawberry Daiquiri",
    description: "Fresh strawberries, rum, lime juice and a sugar rim",
    price: 11.99,
    category: "DRINKS",
    image: strawberryDaiquiri,
  },
  {
    id: 12,
    name: "Spiced Old Fashioned",
    description: "Bourbon, cinnamon syrup, bitters and orange zest",
    price: 13.99,
    category: "DRINKS",
    image: spicedOldFashioned,
  },

  // DESSERTS
  {
    id: 13,
    name: "Caramel Pudding",
    description: "Classic vanilla custard with a caramelized sugar crust",
    price: 8.99,
    category: "DESSERTS",
    image: caramerPudding,
  },
  {
    id: 14,
    name: "Chocolate Fondant",
    description: "Warm dark chocolate cake with a molten center and vanilla ice cream",
    price: 9.99,
    category: "DESSERTS",
    image: chocolateFondant,
  },
  {
    id: 15,
    name: "Tiramisu",
    description: "Layers of espresso soaked ladyfingers and mascarpone cream",
    price: 7.99,
    category: "DESSERTS",
    image: tiramisu,
  },
  {
    id: 16,
    name: "Lemon Tart",
    description: "Buttery pastry shell with tangy lemon curd and meringue",
    price: 7.49,
    category: "DESSERTS",
    image: lemonTart,
  },
  {
    id: 17,
    name: "Panna Cotta",
    description: "Silky vanilla cream with fresh berry coulis and mint",
    price: 6.99,
    category: "DESSERTS",
    image: pannaCotta,
  },
  {
    id: 18,
    name: "Mango Sorbet",
    description: "Refreshing homemade mango sorbet with tropical fruit salsa",
    price: 6.49,
    category: "DESSERTS",
    image: mangoSorbet,
  },
];