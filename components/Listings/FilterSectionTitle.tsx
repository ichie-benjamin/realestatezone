import { cn } from "@/lib/utils";
import React from "react";

const FilterSectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={cn("font-medium", className)}>{children}</p>;
};

export default FilterSectionTitle;
