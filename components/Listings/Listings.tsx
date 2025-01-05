"use client";

import React, { useEffect } from "react";
import SectionWrapper from "../SectionWrapper";
import Listing from "../Listing";
import Filter from "./Filter";
import { cn } from "@/lib/utils";
import { useFilterContext } from "@/context/index";
import { useInView } from "react-intersection-observer";
import { useInterceptingListing } from "@/context/InterceptionContext";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Skeleton } from "../ui/skeleton";
import ListingSkeleton from "../ListingSkeleton";

const Listings: React.FC = () => {
  const { openFilter } = useFilterContext();

  const {
    listingData,
    fetchNextPage,
    isFetchingNextPage,
    loading,
    currentPage,
    totalPages,
  } = useInterceptingListing();

  const { ref, inView } = useInView();

  useEffect(() => {
    // Only fetch next page if not on the last page and currently in view
    if (inView && currentPage < totalPages) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, currentPage, totalPages]);

  return (
    <SectionWrapper className="grid grid-cols-1 md:grid-cols-12 md:gap-10 lg:gap-[60px] relative my-5">
      <div
        className={cn(
          "fixed top-[200px] transition-all duration-500  -left-[100%] md:sticky md:top-[197px] md:h-[calc(100vh-197px)] bg-white rounded-estate-border-radius-2 border border-estate-grey-5 overflow-auto  md:block md:col-start-1 md:col-span-6 lg:col-span-4",
          openFilter
            ? "left-0 z-[70] w-[80%] md:w-full h-[100vh] overflow-auto rounded-none pb-[200px]"
            : "-left-[1000%]"
        )}
      >
        <Filter />
      </div>

      <div className="grid-span-1 md:col-start-7 md:col-span-9 lg:col-start-5 justify-center lg:col-span-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
        {loading &&
          Array.from({ length: 6 }, (_, index) => index + 1).map((i) => (
            <ListingSkeleton key={i} />
          ))}
        {listingData?.map(
          (
            listing: {
              slug: string;
              beds: number;
              car_packs: number;
              image: string;
              city: string;
              title: string;
              price: string;
              toilets: number;
              type: string;
            },
            index: React.Key | null | undefined
          ) => (
            <Listing
              key={index}
              slug={listing.slug}
              beds={listing.beds}
              cars={listing.car_packs}
              image={listing.image}
              location={listing.city}
              name={listing.title}
              price={listing.price}
              size="2,547sqft"
              toilet={listing.toilets}
              type={listing.type}
              className="w-full md:w-full col-span-1"
            />
          )
        )}

        {/* Only show ref and loading spinner if not on last page */}
        {currentPage < totalPages && (
          <div ref={ref}>{isFetchingNextPage && <LoadingSpinner />}</div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Listings;
