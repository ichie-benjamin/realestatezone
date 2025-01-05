import { cn } from "@/lib/utils";
import React from "react";

const Blur = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("w-full h-[50px] absolute bg-white blur-md", className)}
    ></div>
  );
};

export default Blur;
