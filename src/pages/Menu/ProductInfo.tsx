import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { menuItems } from "../../data/menuItems.ts";

type ProductInfoProps = {
  buttonActive: string;
};

export function ProductInfo({ buttonActive }: ProductInfoProps) {
  const filtered = menuItems.filter((menuItem) => {
    return menuItem.category === buttonActive;
  });

  return (
    <Swiper
      effect="coverflow"
      initialSlide={2}
      slidesPerView={1.5}
      centeredSlides={true}
      spaceBetween={50}
      touchMoveStopPropagation={true}
      touchStartPreventDefault={true}
      pagination={{clickable:true}}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows:false
        
      }}
      modules={[EffectCoverflow, Pagination]}
      className="mt-7 w-full [&_.swiper-slide]:opacity-100  [&_.swiper-pagination]:bottom-2.5 [&_.swiper-pagination-bullet-active]:bg-brown-bg "
    >
      {filtered.map((item) => (
        <SwiperSlide key={item.id} className="flex justify-center">
          <div className="flex justify-center">
            <img
              src={item.image}
              alt={item.name}
              className="rounded-3xl object-cover h-60"
            />
          </div>
          <h3 className="mt-3 text-xl font-semibold text-center">
            {item.name}
          </h3>
          {/* description container */}
          <div className="flex justify-center">
            <p className="text-gray-500 text-4 text-center w-60">
              {item.description}
            </p>
          </div>
          <p className="mt-2 font-semibold text-brown-bg text-center mb-8">
            ${item.price}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
