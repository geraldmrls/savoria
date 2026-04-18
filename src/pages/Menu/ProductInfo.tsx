import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import LeftArrow from "../../assets/left-arrow.svg?react"
import RightArrow from "../../assets/right-arrow.svg?react"

import { menuItems } from "../../data/menuItems.ts";

type ProductInfoProps = {
  buttonActive: string;
};

export function ProductInfo({ buttonActive }: ProductInfoProps) {
  const swiperRef = useRef<SwiperRef>(null);

  const filtered = menuItems.filter((menuItem) => {
    return menuItem.category === buttonActive;
  });

  return (
    <div className="relative w-full lg:w-250 select-none"
      onTouchStart={e=>e.stopPropagation()}
    >
      {/* custom prev button */}
      <LeftArrow
        onClick={() => swiperRef.current?.swiper.slidePrev()}
        className="hidden lg:flex absolute left-0 top-[42%] z-10 items-center justify-center w-10 h-10 text-brown-bg text-4xl cursor-pointer hover:bg-gray-200"
      />

      <Swiper
        ref={swiperRef}
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
        className="mt-7 w-full mb-5 lg:mb-30 lg:mt-0"
      >
        {filtered.map((item) => (
          <SwiperSlide key={item.id} className="flex justify-center">
            <div className="flex justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-3xl object-contain h-50 w-50 lg:h-100 lg:w-100"
              />
            </div>
            <h3 className="mt-3 text-xl font-semibold text-center lg:mt-0">
              {item.name}
            </h3>
            <div className="flex justify-center">
              <p className="text-gray-500 text-sm text-center w-60">
                {item.description}
              </p>
            </div>
            <p className="mt-2 font-semibold text-brown-bg text-center">
              ${item.price}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* custom next button */}
      <RightArrow
        onClick={() => swiperRef.current?.swiper.slideNext()}
        className="hidden lg:flex absolute right-0 top-[42%] z-10 items-center justify-center w-10 h-10 text-brown-bg text-4xl cursor-pointer"
      />
    </div>
  );
}