"use client";

import type { ReactElement } from "react";
import { ATHLETS_SECTION_INFO } from "../constant";
import { MobileSwiper, SectionHeader } from "../components";
import { useMediaQuery } from "usehooks-ts";
import { useSsrCompatible } from "../hooks";
import { AmericaFoodball } from "../components/images";

export const AthlesSection = ({
  className,
}: {
  className?: string;
}): ReactElement => {
  const matches = useSsrCompatible(useMediaQuery("(min-width: 768px)"), false);
  return (
    <section className={`relative ${className}`}>
      <div className="container sm:grid lg:grid-cols-2 md:grid-cols-12">
        <h1 className="md:col-start-5 md:col-span-7 lg:col-span-1 lg:col-start-2 md:text-[90px] text-[50px] text-[#E7E7E7]">
          ATHLETS
        </h1>
      </div>
      <div className="md:absolute relative lg:inset-0 lg:top-[12%] md:-left-[22%] md:bottom-0 z-10 flex items-center justify-center md:px-0 px-12 ">
        <div className="lg:container md:grid lg:grid-cols-2 md:grid-cols-12 ">
          <div className="lg:col-span-1 md:col-span-7">
            <div className="relative md:h-[95%] lg:h-full right-0 md:right-4 lg:right-32 xl:right-0">
              <AmericaFoodball />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute md:hidden h-3/6 bg-tri-petch-light-grey bottom-0 w-full max-h-[400px]" />
      {matches ? (
        ATHLETS_SECTION_INFO.map((section, index) => (
          <div
            key={section.id}
            className={`${section.backgroundColorClass} py-20`}
          >
            <div className="container grid lg:grid-cols-2 md:grid-cols-12">
              <div className="md:col-start-5 lg:col-start-2 sm:col-span-8 lg:col-span-1">
                <SectionHeader
                  title={section.title}
                  runingNumber={index + 1}
                  numberUnderlineClass={section.numberUnderlineClass}
                />
                <p className={`mt-4 leading-7 ${section.textColor}`}>
                  {section.description}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <MobileSwiper
          paginationId="pagination-athlets"
          slides={ATHLETS_SECTION_INFO}
        />
      )}
    </section>
  );
};
