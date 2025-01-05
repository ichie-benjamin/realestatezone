import { cn } from "@/lib/utils";
import React from "react";

interface SectionWrapperInterface {
  children: React.ReactNode;
  className: string;
}

const SectionWrapper = ({ children, className }: SectionWrapperInterface) => {
  return (
    <div
      className={cn(
        "p-mobile-landing-page-padding-x lg:p-desktop-landing-page-padding-x",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
