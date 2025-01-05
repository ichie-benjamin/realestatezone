import React from "react";
import ParagraphRegular from "./ParagraphRegular";
import { EstateComponentProps } from "@/interfaces";
import { cn } from "@/lib/utils";

const ParagraphSmallRegular = ({
  children,
  className,
}: EstateComponentProps) => {
  return (
    <ParagraphRegular className={cn("text-sm", className)}>
      {children}
    </ParagraphRegular>
  );
};

export default ParagraphSmallRegular;
