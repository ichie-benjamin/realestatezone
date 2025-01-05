"use client";

import React from "react";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import IconAvatar from "./IconAvatar";
import { Button } from "./ui/button";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const RightSellingOption = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: leftRef, inView: leftInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <SectionWrapper className="bg-estate-black-1 lg:bg-estate-grey-6 relative grid grid-cols-12 mt-20">
      <div
        className={cn(
          "mt-[550px] lg:mt-[unset] col-start-1 col-span-12 lg:col-start-6 lg:col-span-7 relative z-10 "
        )}
      >
        <div
          ref={ref}
          className={cn(
            "mt-5 h-[700px] grid grid-cols-12 grid-rows-12 gap-5 transition-all -translate-x-40 opacity-0 duration-1000",
            inView ? "opacity-100 translate-x-0" : ""
          )}
        >
          <div className="border-[4px]  border-estate-grey-6 bg-[url('/images/vertical-house.jpg')] bg-center bg-cover rounded-estate-border-radius col-start-1 col-span-6 lg:col-start-3 lg:col-span-5 row-start-1 row-span-6"></div>
          <div className="border-[4px] border-estate-grey-6 bg-[url('/images/vertical-house.jpg')] bg-center bg-cover rounded-estate-border-radius col-start-7 col-span-6 lg:col-start-8 lg:col-span-5 row-start-4 lg:row-start-3 row-span-6 lg:row-span-8"></div>
          <div className="border-[4px] border-estate-grey-6 bg-[url('/images/horizontal-house.jpg')] bg-center bg-cover rounded-estate-border-radius col-start-1 col-span-6 lg:col-start-1 lg:col-span-7 row-start-7 row-span-4 lg:row-span-5"></div>
        </div>
      </div>
      <div
        ref={leftRef}
        className={cn(
          "absolute lg:mx-5 top-0 left-0 bg-estate-black-1 grid grid-cols-5 h-[492px] text-white mt-[59px] lg:mt-[119px] lg:rounded-estate-border-radius-2 pl-5 lg:pl-[33px]  pt-[40px] pb-[67px] transition-all translate-x-40 opacity-0 duration-1000",
          leftInView ? "opacity-100 translate-x-0" : ""
        )}
      >
        <div className="col-span-5 lg:col-span-2">
          <p className="font-bold text-[20px] lg:text-[32px]">
            Let&#39;s find the right{" "}
            <span className="text-estate-orange-1">selling option</span> for you
          </p>
          <p className="text-sm mt-[10px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita
          </p>
          <ul className="mt-[10px] space-y-5">
            <li className="flex items-center gap-[10px]">
              <IconAvatar image="/icons/double-check.svg" />
              Find Excellent deals
            </li>
            <li className="flex items-center gap-[10px]">
              <IconAvatar image="/icons/double-check.svg" />
              Friendly host & Fast support
            </li>
            <li className="flex items-center gap-[10px]">
              <IconAvatar image="/icons/double-check.svg" />
              List your own property Learn More
            </li>
          </ul>
          <Button
            className="bg-transparent border border-white rounded-estate-border-radius mt-10"
            variant="outline"
          >
            Learn More{" "}
            <Image
              alt=""
              width={16}
              height={16}
              src="/icons/arrow-right-white.svg"
            />
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RightSellingOption;
