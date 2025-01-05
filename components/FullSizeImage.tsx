import { cn } from "@/lib/utils";
import React from "react";
import { Skeleton } from "./ui/skeleton";

const FullSizeImage = ({
  imgSrc,
  className,
  isLoading,
}: {
  imgSrc: string;
  className?: string;
  isLoading: boolean;
}) => {
  return (
    <>
      {isLoading ? (
        <Skeleton className="w-full h-380px" />
      ) : (
        <div
          className={cn("bg-center bg-cover", className)}
          style={{ backgroundImage: `url(${imgSrc})` }}
        />
      )}
    </>
  );
};

export default FullSizeImage;
