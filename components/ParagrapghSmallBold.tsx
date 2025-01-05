import React from "react";
import ParagraphRegular from "./ParagraphRegular";
import { EstateComponentProps } from "@/interfaces";
import { cn } from "@/lib/utils";

const ParagraphSmallBold = ({ children, className }: EstateComponentProps) => {
  return (
    <ParagraphRegular className={cn("text-sm font-bold", className)}>
      {children}
    </ParagraphRegular>
  );
};

export default ParagraphSmallBold;
