"use client";

import React, { Suspense } from "react";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import Listings from "./Listings";
import { Button } from "./ui/button";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const FeaturedPlaces = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <SectionWrapper className="mt-10">
      <div
        ref={ref}
        className={cn(
          "transition-all opacity-0 translate-y-40 duration-1000",
          inView ? "translate-y-0 opacity-100" : ""
        )}
      >
        <SectionHeader
          title="Featured Places"
          subTitle="Discover our Listings"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita"
        />
        <div className="mt-5">
          <Suspense fallback={<div>loading...</div>}>
            <Listings />
          </Suspense>
          <div className="w-full flex justify-end">
            <Button>
              <Link href="/listings">See All</Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FeaturedPlaces;
