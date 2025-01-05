import { EstateComponentProps } from "@/interfaces";
import { cn } from "@/lib/utils";
import React from "react";

const ParagraphRegular = ({ className, children }: EstateComponentProps) => {
  return <div className={cn("", className)}>{children}</div>;
};

export default ParagraphRegular;
