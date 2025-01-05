"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";
import AvatarStack from "./AvatarStack";
import { Button } from "./ui/button";
import Image from "next/image";
import UserReview from "./UserReview";
import { CarouselSize } from "./Carousel";
import Blur from "./Blur";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const UserReviews = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: reviewsRef, inView: reviewsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <SectionWrapper className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-[81px] lg:mt-[150px] relative">
      <Blur className="-bottom-5 h-[100px]" />

      <div
        ref={ref}
        className={cn(
          "md:col-span-1 transition-all opacity-0 translate-x-40 duration-500",
          inView ? "translate-x-0 opacity-100" : ""
        )}
      >
        <SectionHeader title="User Reviews" subTitle="What the say" />
        <div className="mt-5">
          <AvatarStack />
        </div>
        <p className="text-sm mt-5">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita
        </p>
        <Button className="mt-5 rounded-estate-border-radius">
          Read All Reviews
          <Image
            alt="arrow read all reviews"
            src="/icons/arrow-right-white.svg"
            width={16}
            height={15}
            className="ml-[10px]"
          />
        </Button>
      </div>
      <div
        ref={reviewsRef}
        className={cn(
          "hidden md:grid md:col-span-2 grid-cols-1 md:grid-cols-2 gap-5 transition-all duration-500 opacity-0 -translate-x-40",
          reviewsInView ? "opacity-100 translate-x-0" : ""
        )}
      >
        <UserReview />
        <UserReview />
        <UserReview />
        <UserReview />
      </div>
      <div className="md:hidden">
        <CarouselSize
          isLoading
          showControl={true}
          count="1"
          items={[
            <UserReview key={1} />,
            <UserReview key={2} />,
            <UserReview key={3} />,
            <UserReview key={4} />,
          ]}
        />
      </div>
    </SectionWrapper>
  );
};

export default UserReviews;
