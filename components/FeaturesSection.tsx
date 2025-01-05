"use client";

import React, { forwardRef, HTMLAttributes } from "react";
import Feature from "./Feature";
import SectionWrapper from "./SectionWrapper";
import Blur from "./Blur";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const FeaturesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "relative hidden lg:block opacity-0 translate-y-10 transition-all duration-1000",
        inView ? "opacity-100 translate-y-0" : ""
      )}
    >
      <Blur className="-top-10" />
      <SectionWrapper className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 relative z-99 -top-5">
        <Feature
          icon="/icons/proffessional.svg"
          feature="Proffessionals"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita"
        />
        <Feature
          icon="/icons/globe.svg"
          feature="National Service oriented"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita"
        />
        <Feature
          icon="/icons/headphone.svg"
          feature="24/7 Support"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita"
        />
        <Feature
          icon="/icons/efficient.svg"
          feature="Efficient Processes"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita"
        />
      </SectionWrapper>
    </div>
  );
};
export default FeaturesSection;
