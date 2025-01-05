import { cn } from "@/lib/utils";
import React from "react";

const VerticalLine = ({
  height,
  color,
  className,
}: {
  height: number;
  color: string;
  className?: string;
}) => {
  const vClass = cn(`w-[1px] h-[23px] bg-${color}`, className);

  return <div className={vClass}></div>;
};

export default VerticalLine;
