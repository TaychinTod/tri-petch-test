"use client";

import type { ReactElement } from "react";
import { PLAYERS_SECTION_INFO } from "../constant";
import { MobileSwiper, SectionHeader } from "../components";
import { useMediaQuery } from "usehooks-ts";
import { useSsrCompatible } from "../hooks";

export const PlayersSection = ({
  className,
}: {
  className: string;
}): ReactElement => {
  const matches = useSsrCompatible(useMediaQuery("(min-width: 768px)"), false);

  return (
    <section className={`relative ${className}`}>
      <div className="container">
        <h1 className="md:text-[90px] text-[50px] text-[#E7E7E7]">PLAYERS</h1>
      </div>
      <div className="md:absolute relative lg:inset-0 lg:top-[-24%] lg:-right-[220px] md:-right-[24%] md:bottom-[35%] flex items-center justify-center md:px-0 px-12 z-10">
        <div className="lg:container grid md:grid-cols-12 ">
          <div className="xl:col-start-5 lg:col-start-4 lg:col-span-12 md:col-start-6 md:col-span-8">
            <img
              src="/basketball.png"
              alt="basketball.png"
              className="h-full max-h-[555px] md:max-h-none"
            />
          </div>
        </div>
      </div>
      <div className="absolute md:hidden h-3/6 bg-tri-petch-light-grey bottom-0 w-full max-h-[400px]" />
      {matches ? (
        PLAYERS_SECTION_INFO.map((section, index) => (
          <div
            key={section.id}
            className={`${section.backgroundColorClass} py-20`}
          >
            <div className="container grid grid-cols-12">
              <div className="lg:col-span-7 md:col-span-8">
                <SectionHeader
                  title={section.title}
                  runingNumber={index + 1}
                  numberUnderlineClass={section.numberUnderlineClass}
                  numberClass={section.numberClass}
                />
                <p className={`mt-4 leading-7 ${section.textColor}`}>
                  {section.description}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <MobileSwiper />
      )}
    </section>
  );
};
