import React from "react";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";

const ListingSkeleton = () => {
  const imageBoxClass = `w-full h-[209px]  bg-center bg-cover rounded-estate-border-radius-2 relative`;
  return (
    <div
      // onClick={() => router.push(`/listings/${slug}`)}
      className={cn(
        "bg-white shadow-features-shadow rounded-estate-border-radius-2 flex flex-col relative p-[10px] text-xs md:text-sm w-full md:w-full col-span-1"
      )}
    >
      <div className={imageBoxClass}>
        {/* image skeleton */}
        <Skeleton className="w-[100%] h-[208px]" />
        {/* <div className="absolute top-5 right-5 bg-black/30 backdrop-blur-[2px] p-1 rounded-estate-border-radius-3 text-white text-xs font-medium">
              {type || "Bungalow"}
            </div> */}
      </div>
      {/* name skeleton */}
      <Skeleton className="w-[300px] h-[20px]" />
      <div className="flex items-center gap-2 md:gap-5 mt-2 flex-wrap">
        <Skeleton className="w-[357px] h-[22px]" />
      </div>
      <hr className="mt-5" />
      <div className="flex items-center gap-5 mt-[10px]">
        <Skeleton className="w-[300px] h-[22]" />
      </div>
    </div>
  );
};

export default ListingSkeleton;
