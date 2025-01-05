"use client";

import React from "react";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { Button } from "./ui/button";
import HouseCard from "./HouseCard";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const ExploreArea = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <SectionWrapper className="mt-5 w-full">
      <div
        ref={ref}
        className={cn(
          "transition-all opacity-0 translate-y-40 duration-1000",
          inView ? "translate-y-0 opacity-100" : ""
        )}
      >
        <SectionHeader
          title="Explore"
          subTitle="Find within your area"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita"
        />
        <div className="grid grid-cols-12 mt-5 gap-5">
          <div className="col-span-12 flex flex-col lg:col-span-6 bg-[url('/images/map.png')] h-[510px] bg-cover bg-center rounded-estate-border-radius p-5">
            <div className="bg-white w-full h-[58px] rounded-estate-border-radius-3 grid grid-cols-12 px-5">
              <div className="col-span-8 flex items-center gap-[10px] ">
                <Image
                  src="/icons/map-pin.svg"
                  width={18}
                  height={21}
                  alt="map pin"
                />
                <p className="font-semibold text-sm truncate">
                  Current Location,{" "}
                  <span className="text-estate-grey-2">
                    Ikeja Ireland, Lagos
                  </span>
                </p>
              </div>
              <div className="col-span-4 flex justify-end items-center">
                <Button>
                  <Image
                    alt="search"
                    width={20}
                    height={20}
                    src="/icons/white-search.svg"
                  />
                </Button>
              </div>
            </div>
            <div className="mt-auto ">
              <div className="relative -bottom-[95px] md:-bottom-[138px] w-[95%] mx-auto">
                <HouseCard />
              </div>
              <div className="relative z-10">
                <HouseCard />
              </div>
            </div>
          </div>
          <div className="col-span-8 lg:col-span-4 bg-[url('/images/vertical-house.jpg')] h-[510px] bg-cover bg-center rounded-estate-border-radius"></div>
          <div className="col-span-4 lg:col-span-2 flex flex-col gap-5">
            <div className="rounded-estate-border-radius h-[105px] bg-[url('/images/horizontal-house.jpg')] bg-cover bg-center"></div>
            <div className="rounded-estate-border-radius h-[105px] bg-[url('/images/horizontal-house.jpg')] bg-cover bg-center"></div>
            <div className="rounded-estate-border-radius h-[105px] bg-[url('/images/horizontal-house.jpg')] bg-cover bg-center"></div>
            <div className="rounded-estate-border-radius h-[105px] bg-[url('/images/horizontal-house.jpg')] bg-cover bg-center"></div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExploreArea;
