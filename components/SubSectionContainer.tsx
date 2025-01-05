import { EstateComponentProps } from "@/interfaces";
import { cn } from "@/lib/utils";
import React from "react";

const SubSectionContainer = ({ children, className }: EstateComponentProps) => {
  return (
    <div
      className={cn(
        "bg-white p-3 md:p-5 rounded-estate-border-radius-2 border border-estate-grey-7 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SubSectionContainer;
