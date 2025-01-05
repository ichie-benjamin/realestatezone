"use client";

import React from "react";
import { CarouselSize } from "./Carousel";
import Category from "./Category";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const Explore = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div
      className={cn("bg-black text-white text-center py-10 px-[10px] md:px-5 ")}
    >
      <div
        ref={ref}
        className={cn(
          "transition-all opacity-0 translate-y-40 duration-1000",
          inView ? "translate-y-0 opacity-100" : ""
        )}
      >
        <h3 className="text-[20px] md:text-[36px] font-bold">
          Explore by Category
        </h3>
        <p className="text-sm mt-5 lg:w-1/2 text-center mx-auto">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita
        </p>
        <div className="w-full flex justify-center mt-5">
          <CarouselSize
            isLoading={false}
            showControl={true}
            count="5"
            items={[
              <Category
                key={1}
                category="Houses"
                description="144 Available"
                icon="/icons/house.svg"
              />,
              <Category
                key={2}
                category="Houses"
                description="144 Available"
                icon="/icons/house.svg"
              />,
              <Category
                key={3}
                category="Houses"
                description="144 Available"
                icon="/icons/house.svg"
              />,
              <Category
                key={4}
                category="Houses"
                description="144 Available"
                icon="/icons/house.svg"
              />,
              <Category
                key={5}
                category="Houses"
                description="144 Available"
                icon="/icons/house.svg"
              />,
              <Category
                key={6}
                category="Houses"
                description="144 Available"
                icon="/icons/house.svg"
              />,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
