import React from "react";
import Listing from "./Listing";
import { CarouselSize } from "./Carousel";
import { useListings } from "@/context/ListingContext";

const Listings = () => {
  const { listings, loading, error } = useListings();

  return (
    <div className="w-full flex justify-center mt-5">
      <CarouselSize
        isLoading
        showControl={true}
        className=""
        count="3"
        items={
          listings?.map((listing, index) => (
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
            />
          )) ?? []
        }
      />
    </div>
  );
};

export default Listings;
