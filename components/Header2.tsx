import { EstateComponentProps } from "@/interfaces";
import { cn } from "@/lib/utils";
import React from "react";

const Heading2 = ({ children, className }: EstateComponentProps) => {
  return (
    <h2 className={cn("text-[32px] font-semibold", className)}>{children}</h2>
  );
};

export default Heading2;
