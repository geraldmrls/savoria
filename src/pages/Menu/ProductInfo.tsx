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
      modules={[EffectCoverflow, Pagination]}
      effect="coverflow"
      breakpoints={{
        0: {
          slidesPerView: 1.5,
          spaceBetween: 0,
          centeredSlides: true,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 3,
            slideShadows: false,
            scale: 0.8,
          },
        },
        1024: {
          initialSlide: 0,
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: 30,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            scale: 0.5,
            slideShadows: false,
          },
        },
      }}
      // classes
      className="mt-7 w-full lg:w-300 mb-5 lg:mb-10"
    >
      {filtered.map((item) => (
        <SwiperSlide key={item.id} className="flex justify-center">
          <div className="flex justify-center">
            <img
              src={item.image}
              alt={item.name}
              className="rounded-3xl object-contain h-50 w-50 lg: lg:h-100 lg:w-100"
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
          <p className="mt-2 font-semibold text-brown-bg text-center">
            ${item.price}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
