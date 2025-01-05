"use client";

import AvatarWithDetails from "@/components/AvatarWithDetails";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import { CarouselSize } from "@/components/Carousel";
import CustomizedIcon from "@/components/CustomizedIcon";
import Footer from "@/components/Footer";
import FullSizeImage from "@/components/FullSizeImage";
import Heading2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Header4 from "@/components/Header4";
import Icon from "@/components/Icon";
import ItemWithDescription from "@/components/ItemWithDescription";
import ItemWithIcon from "@/components/ItemWithIcon";
import Navbar from "@/components/Navbar";
import ParagraphRegular from "@/components/ParagraphRegular";
import SubSectionContainer from "@/components/SubSectionContainer";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import VerticalLine from "@/components/VerticalLine";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import HouseGallery from "@/components/HouseGallery";
import ListingUserReview from "@/components/ListingUserReview";
import ClientForm from "@/components/ClientForm";
import ReviewForm from "@/components/ReviewForm";
import SectionHeader from "@/components/SectionHeader";
import Listings from "@/components/Listings";
import Link from "next/link";
import Listing from "@/components/Listing";

const CheckMarkWithDetail = ({ text }: { text: string }) => {
  return <Icon image="/icons/double-check.svg" text={text} />;
};

const ListingsTabItem = ({
  name,
  isActive,
  changeListingsTab,
}: {
  name: string;
  isActive: boolean;
  changeListingsTab: (tab: string) => void;
}) => (
  <li
    onClick={() => changeListingsTab(name)}
    className={cn(
      "text-sm pb-[2px] capitalize",
      isActive ? "border-b-[3px] border-estate-orange-1" : ""
    )}
  >
    {name}
  </li>
);

const AgentsPage = () => {
  const [houseInspectionType, setHouseInspectionType] = useState("in-person");

  const [activeListingsTab, setActiveListingstab] = useState("all");

  const changeListingsTab = (tab: string) => {
    setActiveListingstab(tab);
  };

  return (
    <div>
      <Navbar activeLink="listings" />
      <div className="w-full h-[204px] md:h-[340px] bg-estate-orange-1/20 mt-[38px] md:mt-[60px] flex items-center pl-5 md:pl-10">
        <AvatarWithDetails className="w-[141px] h-[141px] md:w-[236px] md:h-[236px] mt-5">
          <ParagraphRegular className="font-semibold text-[17px] md:text-[28px]">
            Major General Realty
          </ParagraphRegular>
          <ParagraphRegular className="text-xs md:text-sm ">
            Company Agent at{" "}
            <ParagraphRegular className="font-semibold inline">
              Modern House Real Estate
            </ParagraphRegular>
          </ParagraphRegular>
          <div className="flex flex-wrap items-center gap-x-5 mt-[10px]">
            <Icon image="/icons/yellow-star.svg" text="5.0 49 Reviews" />
            <VerticalLine color="black" height={23} />
            <Icon image="/icons/phone-line.svg" text="(920) 012-3421" />
            <VerticalLine color="black" height={23} />
            <Icon image="/icons/phone-line.svg" text="(920) 012-3421" />
          </div>
          <div className="flex items-center gap-5 mt-[10px]">
            <Icon image="/icons/whatsapp-line.svg" />
            <Icon image="/icons/facebook-circle-line.svg" />
            <Icon image="/icons/twitter-x-line.svg" />
            <Icon image="/icons/instagram-line.svg" />
          </div>
        </AvatarWithDetails>
      </div>
      <div className="p-5 pb-0 pt-0 mt-5 md:px-10 md:pt-0">
        <div className="mt-[10px] grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-7 space-y-5">
            <SubSectionContainer>
              <Header4>About Agent</Header4>
              <ParagraphRegular>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea
              </ParagraphRegular>
              <Button className="text-black bg-transparent underline p-0 mt-5">
                Show more
              </Button>
              <hr className="my-5" />
              <div className="mt-5">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <Header4>Listings(42)</Header4>
                  <ul className="flex items-center gap-5 md:justify-between">
                    <ListingsTabItem
                      changeListingsTab={changeListingsTab}
                      isActive={activeListingsTab === "all"}
                      name="all"
                    />
                    <ListingsTabItem
                      changeListingsTab={changeListingsTab}
                      isActive={activeListingsTab === "for rent"}
                      name="for rent"
                    />
                    <ListingsTabItem
                      changeListingsTab={changeListingsTab}
                      isActive={activeListingsTab === "for sale"}
                      name="for sale"
                    />
                  </ul>
                </div>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Listing
                    key={1}
                    beds={2}
                    cars={2}
                    image="vertical-house.jpg"
                    location="Wuse Phase 1, Abuja"
                    name="Major General Realty"
                    price="$50,000"
                    size="2,547sqft"
                    toilet={2}
                    type="bungalow"
                    className="w-full md:w-full col-span-1"
                    slug="slugname"
                  />
                  <Listing
                    key={1}
                    beds={2}
                    cars={2}
                    image="vertical-house.jpg"
                    location="Wuse Phase 1, Abuja"
                    name="Major General Realty"
                    price="$50,000"
                    size="2,547sqft"
                    toilet={2}
                    type="bungalow"
                    className="w-full md:w-full col-span-1"
                    slug="slugname"
                  />
                  <Listing
                    key={1}
                    beds={2}
                    cars={2}
                    image="vertical-house.jpg"
                    location="Wuse Phase 1, Abuja"
                    name="Major General Realty"
                    price="$50,000"
                    size="2,547sqft"
                    toilet={2}
                    type="bungalow"
                    className="w-full md:w-full col-span-1"
                    slug="slugname"
                  />
                  <Listing
                    key={1}
                    beds={2}
                    cars={2}
                    image="vertical-house.jpg"
                    location="Wuse Phase 1, Abuja"
                    name="Major General Realty"
                    price="$50,000"
                    size="2,547sqft"
                    toilet={2}
                    type="bungalow"
                    className="w-full md:w-full col-span-1"
                    slug="slugname"
                  />
                </div>
                <ButtonWithIcon
                  className="w-full flex justify-center h-[50px] mt-5"
                  iconSrc="/icons/arrow-right-white.svg"
                >
                  Show all 42 listings form this agent
                </ButtonWithIcon>
              </div>
            </SubSectionContainer>

            <SubSectionContainer>
              <div className="flex items-center gap-[5px] ">
                <Icon image="/icons/star-fill.svg" />
                <Header4 className="relative top-[2px]">
                  5.0 · 3 Reviews
                </Header4>
              </div>
              <ListingUserReview />
              <hr className="my-5" />
              <ListingUserReview />
              <hr className="my-5" />
              <ButtonWithIcon iconSrc="/icons/arrow-right-white.svg">
                Show all 147 reviews
              </ButtonWithIcon>
            </SubSectionContainer>
            <SubSectionContainer>
              <Header4>Leave a Review</Header4>
              <ReviewForm />
            </SubSectionContainer>
          </div>
          <form className="col-span-12 lg:col-span-5">
            <SubSectionContainer>
              <Header3>Schedule for Inspection</Header3>
              <ParagraphRegular className="mt-[10px]">
                Schedule for Inspection
              </ParagraphRegular>
              <div className="flex items-center mt-5 gap-5">
                <Button
                  type="button"
                  onClick={() => setHouseInspectionType("in-person")}
                  className={cn(
                    "border rounded-estate-border-radius-3 h-[42px] w-[179px]",
                    houseInspectionType === "in-person" ? "border-black" : ""
                  )}
                  variant="transparent"
                >
                  In Person
                </Button>
                <Button
                  type="button"
                  onClick={() => setHouseInspectionType("virtually")}
                  className={cn(
                    "border rounded-estate-border-radius-3 h-[42px] w-[179px]",
                    houseInspectionType === "virtually" ? "border-black" : ""
                  )}
                  variant="transparent"
                >
                  Virtually
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                <Input
                  className="h-[53px] border border-estate-grey-7 rounded-estate-border-radius"
                  placeholder="Select a time"
                />
                <Input
                  className="h-[53px] border border-estate-grey-7 rounded-estate-border-radius"
                  placeholder="Enter your full name"
                />
                <Input
                  className="h-[53px] border border-estate-grey-7 rounded-estate-border-radius"
                  placeholder="Phone"
                />
                <Input
                  type="email"
                  className="h-[53px] border border-estate-grey-7 rounded-estate-border-radius"
                  placeholder="Email"
                />
              </div>
              <Textarea
                className="mt-5"
                rows={8}
                placeholder="Enter your messages"
              />
              <ButtonWithIcon
                className="bg-estate-orange-1 mt-5"
                iconSrc="/icons/arrow-right-white.svg"
              >
                Submit inspection request
              </ButtonWithIcon>
            </SubSectionContainer>
            <SubSectionContainer className="mt-5">
              <Header4>Schedule for Inspection</Header4>
              <AvatarWithDetails className="w-[102px] h-[102px] mt-5">
                <ParagraphRegular className="font-medium text-[18px]">
                  Jessica Anthony
                </ParagraphRegular>
                <div className="flex flex-col">
                  <Icon image="/icons/phone-line.svg" text="(920) 012-3421" />
                  <Button
                    variant="transparent"
                    className="underline flex justify-start text-black pl-0"
                  >
                    <Link href="/listings">View Listing</Link>
                  </Button>
                </div>
              </AvatarWithDetails>
              <ButtonWithIcon
                iconSrc="/icons/arrow-right-white.svg"
                className="mt-5 flex justify-center items-center gap-2 w-full"
              >
                <Link href="/agents/1">Contact Agent</Link>
              </ButtonWithIcon>
            </SubSectionContainer>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AgentsPage;
