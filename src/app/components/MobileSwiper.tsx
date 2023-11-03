"use client";
import { useRef, type ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { SectionHeader } from "./SectionHeader";

import "swiper/css";
import "swiper/css/pagination";

const MOCK_SLIDES = [0, 0, 0, 0];

export const MobileSwiper = (): ReactElement => {
  const paginationRef = useRef(null);
  return (
    <div className="bg-tri-petch-light-grey pt-2 pb-8">
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true, el: paginationRef.current }}
      >
        {MOCK_SLIDES.map((slide, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <div className="container">
              <SectionHeader
                title={"mock"}
                runingNumber={index + 1}
                numberUnderlineClass="bg-tri-petch-light-purple"
              />
              <p className="mt-4">
                Work with other student athletes to increase visability. When
                you share and like other players videos it will increase your
                visability as a player. This is the team work aspect to Surface
                1.
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-6 w-full container flex justify-center gap-4">
        <div ref={paginationRef} className="pagination"></div>
      </div>
    </div>
  );
};
