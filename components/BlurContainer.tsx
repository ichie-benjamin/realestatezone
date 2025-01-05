import { cn } from "@/lib/utils";
import React from "react";

const BlurContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div
      className={cn(
        "relative -top-10 lg:top-[unset] lg:shadow-search-shadow bg-white backdrop-blur-[7px] rounded-estate-border-radius-2 mx-auto mt-auto lg:mx-10 lg:mt-5 lg:bg-white/30 z-50 px-5 py-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BlurContainer;
