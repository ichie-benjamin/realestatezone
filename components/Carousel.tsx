import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Category from "./Category";
import { cn } from "@/lib/utils";

export function CarouselSize({
  items,
  count,
  className,
  showControl,
  isLoading,
}: {
  items: React.ReactNode[];
  count: string;
  className?: string;
  showControl: boolean;
  isLoading: boolean;
}) {
  const carouselItemClass = `basis-1/${parseInt(count, 10) || 1} lg:basis-1/${
    parseInt(count, 10) || 1
  }`;
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className={cn(" w-full ", className)}
    >
      <CarouselContent className="flex justify-between w-full">
        {items.map((item, index) => (
          <CarouselItem key={index} className={carouselItemClass}>
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
      {showControl ? (
        <div className="flex items-center gap-5 w-full justify-center mt-5">
          <CarouselPrevious className="-bottom-[70px] left-[48%] -translate-x-[100%] border" />
          <CarouselNext className="-bottom-[70px] right-[50%] translate-x-[100%] border" />
        </div>
      ) : null}
    </Carousel>
  );
}
