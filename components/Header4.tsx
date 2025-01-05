import { EstateComponentProps } from "@/interfaces";
import { cn } from "@/lib/utils";
import React from "react";

const Header4 = ({ children, className }: EstateComponentProps) => {
  return <h4 className={cn("text-lg font-semibold", className)}>{children}</h4>;
};

export default Header4;
