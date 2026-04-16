import { menuItems } from "../../data/menuItems.ts";

type ProductInfoProps = {
  buttonActive: string;
};

export function ProductInfo({ buttonActive }: ProductInfoProps) {
  const filtered = menuItems.filter((menuItem) => {
    if (buttonActive === "ALL") return true;
    return menuItem.category === buttonActive;
  });

  return (
    <div
      className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-[7.5vw] pb-4 scroll-smooth"
      style={{ scrollbarWidth: "none" }}
      onTouchStart={(e) => e.stopPropagation()}
      onTouchEnd={(e) => e.stopPropagation()}
    >
      {filtered.map((item) => (
        <div key={item.id} className="snap-center shrink-0 w-[85vw] max-w-sm">
          <img
            src={item.image}
            alt={item.name}
            className="w-full rounded-3xl object-cover h-72"
          />
          <h3 className="mt-3 text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-500 text-sm mt-1">{item.description}</p>
          <p className="mt-2 font-semibold text-brown-bg">${item.price}</p>
        </div>
      ))}
    </div>
  );
}