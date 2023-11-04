"use client";

import { type ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { SectionHeader } from "./SectionHeader";

import "swiper/css";
import "swiper/css/pagination";
import "./CustomPagination.style.scss";

const MOCK_SLIDES = [0, 0, 0, 0];

type Slides = {
  id: Number;
  title: string;
  description: string;
  backgroundColorClass?: string;
  textColor?: string;
  numberUnderlineClass?: string;
  numberClass?: string;
};

export const MobileSwiper = ({
  paginationId,
  slides,
}: {
  paginationId: string;
  slides: Slides[];
}): ReactElement => {
  return (
    <div className="bg-tri-petch-light-grey pt-4 pb-8">
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ el: `#${paginationId}`, clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={`slide-${slide.id}`}>
            <div className="container">
              <SectionHeader
                title={slide.title}
                runingNumber={index + 1}
                numberUnderlineClass="bg-tri-petch-light-purple"
              />
              <p className="mt-4">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-6 w-full container flex justify-center gap-4">
        <div id={paginationId}></div>
      </div>
    </div>
  );
};
