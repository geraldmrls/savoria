import waterIceImage from "../../assets/water-ice.jpg";
import sigDishes from "../../assets/sig-dishes.jpg";
import dessert from "../../assets/dessert.jpg";

export function CulinaryExcellence() {
  return (
    <div className="bg-primary-bg mt-15">
      {/* title */}
      <div className="pb-8 flex flex-col items-center gap-1 text-2xl sm:text-3xl">
        <h2 className="font-semibold text-center">Culinary Excellence</h2>
        {/* line */}
        <div className="border border-brown-bg mx-auto w-1/4 mt-4"></div>
      </div>

      {/* cards container */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-[7.5vw] pb-10 scroll-smooth" style={{scrollbarWidth: "none", msOverflowStyle: "none"}}>
        {/* signature dishes card */}
        <div className="snap-center shrink-0 w-[85vw] max-w-[24rem] flex flex-col rounded-3xl bg-white p-6 shadow-lg shadow-black/10">
          <img className="rounded-3xl object-cover" src={sigDishes} alt="water with ice" />
          <h1 className="mt-4 text-lg sm:text-xl">Signature Dishes</h1>
          <p className="mt-2.5 text-gray-600 text-sm sm:text-base">
            Expertly plated culinary masterpieces
          </p>
        </div>

        {/* cocktail */}
        <div className="snap-center shrink-0 w-[85vw] max-w-[24rem] flex flex-col rounded-3xl bg-white p-6 shadow-lg shadow-black/10">
          <img className="rounded-3xl object-cover" src={waterIceImage} alt="water with ice" />
          <h1 className="mt-4 text-lg sm:text-xl">Craft Cocktails</h1>
          <p className="mt-2.5 text-gray-600 text-sm sm:text-base">
            Handcrafted cocktails with fresh ingredients
          </p>
        </div>

        {/* dessert */}
        <div className="snap-center shrink-0 w-[85vw] max-w-[24rem] flex flex-col rounded-3xl bg-white p-6 shadow-lg shadow-black/10">
          <img className="rounded-3xl object-cover" src={dessert} alt="water with ice" />
          <h1 className="mt-4 text-lg sm:text-xl">Delicious Desserts</h1>
          <p className="mt-2.5 text-gray-600 text-sm sm:text-base">
            Indulgent sweet treats to end your meal on a high note
          </p>
        </div>
      </div>
    </div>
  );
}
