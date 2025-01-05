import { EstateComponentProps } from "@/interfaces";
import { cn } from "@/lib/utils";
import React from "react";

const Header3 = ({ children, className }: EstateComponentProps) => {
  return (
    <h3 className={cn("font-semibold text-2xl", className)}>{children}</h3>
  );
};

export default Header3;
