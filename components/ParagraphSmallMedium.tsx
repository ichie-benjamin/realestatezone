import React from "react";
import ParagraphRegular from "./ParagraphRegular";
import { EstateComponentProps } from "@/interfaces";
import { cn } from "@/lib/utils";

const ParagraphSmallMedium = ({
  children,
  className,
}: EstateComponentProps) => {
  return (
    <ParagraphRegular className={cn("text-sm font-medium", className)}>
      {children}
    </ParagraphRegular>
  );
};

export default ParagraphSmallMedium;
