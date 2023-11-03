import type { ReactElement } from "react";
import { padStart } from "../utils";

type SectionHeaderProps = {
  title: string;
  runingNumber: number;
  numberUnderlineClass?: string;
  numberClass?: string;
};

export const SectionHeader = ({
  title,
  runingNumber,
  numberUnderlineClass,
  numberClass,
}: SectionHeaderProps): ReactElement => {
  return (
    <div className="flex items-center">
      <span className="mr-2">
        <div
          className={`sm:text-[18px] text-[16px] tracking-[1.5px] ${numberClass}`}
        >
          {padStart(runingNumber)}
        </div>
        <div
          className={`w-full h-[5px] rounded-md ${
            numberUnderlineClass ?? "bg-tri-petch-light-purple"
          }`}
        ></div>
      </span>
      <span className="text-tri-petch-grey text-[28px] sm:text-4xl mb-1 sm:mb-0">
        {title}
      </span>
    </div>
  );
};
