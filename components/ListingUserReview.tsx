import React from "react";
import AvatarWithDetails from "./AvatarWithDetails";
import ParagraphRegular from "./ParagraphRegular";
import HouseGallery from "./HouseGallery";
import Icon from "./Icon";
import Ratings from "./Ratings";

// images={[""]}

const ListingUserReview = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-[35px]">
        <AvatarWithDetails>
          <p className="font-bold">John Bosko</p>
          <Ratings />
        </AvatarWithDetails>
        <ParagraphRegular className="text-sm">5.0 · 3 reviews</ParagraphRegular>
      </div>
      <ParagraphRegular className="text-sm text-estate-grey-2 mt-5">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut
      </ParagraphRegular>
      <div className="flex items-center gap-[10px] mt-[32px] md:mt-10">
        <HouseGallery
          images={[]}
          isLoading={false}
          showControl={false}
          className="w-[111px] h-[90px] rounded-estate-border-radius"
        />
      </div>
      <div className="flex items-center mt-5 gap-10">
        <div className="flex items-center gap-[10px] cursor-pointer">
          <Icon image="/icons/thumbs-up.svg" />
          <ParagraphRegular className="text-sm text-estate-grey-2">
            Helpful
          </ParagraphRegular>
        </div>
        <div className="flex items-center gap-[10px] cursor-pointer">
          <Icon image="/icons/thumbs-up.svg" />
          <ParagraphRegular className="text-sm text-estate-grey-2">
            Not Helpful
          </ParagraphRegular>
        </div>
      </div>
    </div>
  );
};

export default ListingUserReview;
