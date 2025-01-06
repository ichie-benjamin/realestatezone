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
import React, { Suspense, useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import HouseGallery from "@/components/HouseGallery";
import ListingUserReview from "@/components/ListingUserReview";
import ClientForm from "@/components/ClientForm";
import ReviewForm from "@/components/ReviewForm";
import SectionHeader from "@/components/SectionHeader";
import Listings from "@/components/Listings";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import {fetchWrapper} from "@/lib/fetchWrapper";

interface PropertyDetails {
  title: string;
  slug: string;
  type: string;
  sale_status: string;
  address: string;
  tag: string | null;
  city: string;
  distress_sale: number;
  price: string;
  short_description: string;
  description: string;
  amenities: string[];
  image: string;
  images: string[];
  featured: number;
  tags: string | null;
  beds: string;
  spf: string | null;
  discount: string;
  toilets: string;
  car_packs: string;
}

interface ApiResponse {
  data: PropertyDetails;
}

const CheckMarkWithDetail = ({ text }: { text: string }) => {
  return <Icon image="/icons/double-check.svg" text={text} />;
};

const ListingDetailPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = params;

  const [houseInspectionType, setHouseInspectionType] = useState("in-person");

  const { data, isLoading, error } = useQuery<ApiResponse, Error>({
    queryKey: ["productId", id],
    queryFn: async () => {
      const res = await fetchWrapper(
        `/listing/${id}`
      );
      const data: ApiResponse = await res;

      return data;
    },
  });

  const {
    title = "No title available",
    image = "",
    images = [],
    price = "N/A",
    description = "No description available",
    amenities = [],
  } = data?.data || {};

  return (
    <div>
      <Navbar activeLink="listings" />
      <div className="md:p-10 md:py-5 md:pb-0">
        {isLoading ? (
          <Skeleton className="w-full h-[410px]" />
        ) : (
          <FullSizeImage
            className="w-full h-[257px] md:h-[300px] md:rounded-estate-border-radius-2 lg:h-[411px]"
            // imgSrc="bg-[url('/images/horizontal-house.jpg')]"
            imgSrc={`${image}`}
            isLoading={isLoading}
          />
        )}
      </div>
      <div className="p-5 pb-0 pt-0 mt-[10px] md:px-10 md:pt-0">
        <HouseGallery
          images={images || []}
          showControl={true}
          className="w-[111px] h-[56px] lg:w-[249px] lg:h-[125px] rounded-estate-border-radius"
          isLoading={isLoading}
        />

        <div className="mt-5 flex justify-between">
          <div className="flex flex-col gap-5 justify-between">
            {isLoading ? (
              <Skeleton className="h-10 w-[90%]" />
            ) : (
              <Heading2 className="text-2xl font-bold md:text-[32px]">
                {/* Major General Realty */}
                {title}
              </Heading2>
            )}

            <div className="flex flex-wrap items-center gap-5 mt-[20px]">
              <ParagraphRegular className="text-sm">
                Wuse Phase 1, Abuja
              </ParagraphRegular>
              <VerticalLine height={23} color="black" />
              <ItemWithIcon
                icon={
                  <div className="bg-estate-orange-1 w-4 h-4 rounded-full"></div>
                }
              >
                <ParagraphRegular className="text-estate-orange-1 text-sm">
                  For Sale
                </ParagraphRegular>
              </ItemWithIcon>
              <VerticalLine height={23} color="black" />
              <ParagraphRegular className="text-sm text-estate-grey-8">
                Status:{" "}
                <ParagraphRegular className="text-estate-green-1 inline">
                  Fully Verified
                </ParagraphRegular>
              </ParagraphRegular>
              <VerticalLine height={23} color="black" />
              <Icon image="/icons/clock.svg" text="10 years ago" />
            </div>
            <div className="flex items-center gap-5">
              <Icon image="/icons/bed.svg" text="2" />
              <Icon image="/icons/bath.svg" text="2" />
              <Icon image="/icons/car.svg" text="2" />
              <Icon image="/icons/bed.svg" text="2,547sqft" />
            </div>
            <ParagraphRegular className="font-semibold text-2xl md:text-[32px] lg:hidden">
              $50,000
            </ParagraphRegular>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-5">
              <CustomizedIcon icon="/icons/love.svg" className="rounded-full" />
              <CustomizedIcon icon="/icons/link.svg" className="rounded-full" />
            </div>
            <ParagraphRegular className="font-semibold text-2xl md:text-[32px] hidden lg:block">
              $50,000
            </ParagraphRegular>
          </div>
        </div>
        <div className="mt-[10px] lg:flex lg:justify-end">
          <ButtonWithIcon
            className="w-full justify-center h-[50px] lg:w-[unset]"
            iconSrc="/icons/arrow-right-white.svg"
          >
            Negotiate
          </ButtonWithIcon>
        </div>
        <div className="mt-[10px] grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-7 space-y-5">
            <SubSectionContainer>
              <Header4>Overview</Header4>
              <div className="grid grid-cols-2 mt-5 gap-5 md:grid-cols-3">
                <ItemWithIcon icon={<CustomizedIcon icon="/icons/bed.svg" />}>
                  <ParagraphRegular className="font-medium ">
                    Bedroom
                  </ParagraphRegular>
                  <ParagraphRegular>2</ParagraphRegular>
                </ItemWithIcon>
                <ItemWithIcon icon={<CustomizedIcon icon="/icons/bath.svg" />}>
                  <ParagraphRegular className="font-medium ">
                    Bathing room
                  </ParagraphRegular>
                  <ParagraphRegular>2</ParagraphRegular>
                </ItemWithIcon>
                <ItemWithIcon icon={<CustomizedIcon icon="/icons/clock.svg" />}>
                  <ParagraphRegular className="font-medium ">
                    Year Built
                  </ParagraphRegular>
                  <ParagraphRegular>2</ParagraphRegular>
                </ItemWithIcon>
                <ItemWithIcon icon={<CustomizedIcon icon="/icons/car.svg" />}>
                  <ParagraphRegular className="font-medium ">
                    Garage
                  </ParagraphRegular>
                  <ParagraphRegular>2</ParagraphRegular>
                </ItemWithIcon>
                <ItemWithIcon icon={<CustomizedIcon icon="/icons/car.svg" />}>
                  <ParagraphRegular className="font-medium ">
                    Sqft
                  </ParagraphRegular>
                  <ParagraphRegular>2,547</ParagraphRegular>
                </ItemWithIcon>
                <ItemWithIcon
                  icon={<CustomizedIcon icon="/icons/house2.svg" />}
                >
                  <ParagraphRegular className="font-medium">
                    Property Type
                  </ParagraphRegular>
                  <ParagraphRegular className="text-xs">
                    Bungalow
                  </ParagraphRegular>
                </ItemWithIcon>
              </div>
            </SubSectionContainer>
            <SubSectionContainer>
              <Header4>Property Description</Header4>
              <ParagraphRegular className="mt-5">
                This 3-bed with a loft, 2-bath home in the gated community of
                The Hideout has it all. From the open floor plan to the
                abundance of light from the windows, this home is perfect for
                entertaining. The living room and dining room have vaulted
                ceilings and a beautiful fireplace. You will love spending time
                on the deck taking in the beautiful views. In the kitchen,
                you&apos;ll find stainless steel appliances and a tile
                backsplash, as well as a breakfast bar.
              </ParagraphRegular>
              <Button
                variant="transparent"
                className="block mt-5 underline p-0"
              >
                Show more
              </Button>
              <Header4 className="mt-10">Property Description</Header4>
              <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 gap-y-5 gap-x-20">
                <ItemWithDescription item="Property ID" description="RT48" />
                <ItemWithDescription item="Garage" description="2" />
                <ItemWithDescription item="Prize" description="$50,000" />
                <ItemWithDescription
                  item="Garage Size"
                  description="200 sqft"
                />
                <ItemWithDescription
                  item="Property Size"
                  description="2,547 sqft"
                />
                <ItemWithDescription item="Year Built" description="2022" />
                <ItemWithDescription item="Bathrooms" description="2" />
                <ItemWithDescription
                  item="Property Type"
                  description="Bungalow"
                />
                <ItemWithDescription item="Bedrooms" description="2" />
                <ItemWithDescription
                  item="Property Status"
                  description="For Sale"
                />
              </div>
            </SubSectionContainer>
            <SubSectionContainer>
              <Header4>Location</Header4>
              <div className="mt-5 flex flex-col space-y-[10px]">
                <ItemWithDescription
                  item="Address"
                  description="Wuse Phase 1, Abuja"
                />
                <ItemWithDescription item="City" description="Wuse" />
                <ItemWithDescription item="State" description="Abuja" />
                <ItemWithDescription item="Country" description="Nigeria" />
              </div>

              <div className="mt-5 p-5 rounded-estate-border-radius bg-[url('/images/map.png')] bg-cover bg-center w-full h-[237px]">
                <div className="h-[42px] pl-5  bg-white rounded-estate-border-radius-3 w-full md:w-[179px] flex items-center md:pl-[unset] md:justify-center ">
                  Wuse Phase 1, Abuja
                </div>
              </div>
            </SubSectionContainer>
            <SubSectionContainer>
              <Header4>Features & Amenities</Header4>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <CheckMarkWithDetail text="Air Conditioning" />
                <CheckMarkWithDetail text="Barbeque" />
                <CheckMarkWithDetail text="Dryer" />
                <CheckMarkWithDetail text="Gym" />
                <CheckMarkWithDetail text="Lawn" />
                <CheckMarkWithDetail text="Microwave" />
                <CheckMarkWithDetail text="Outdoor Shower" />
                <CheckMarkWithDetail text="Refrigerator" />
                <CheckMarkWithDetail text="Swimming Pool" />
                <CheckMarkWithDetail text="TV Cable" />
                <CheckMarkWithDetail text="Washer" />
                <CheckMarkWithDetail text="Wifi6" />
              </div>
            </SubSectionContainer>
            <SubSectionContainer>
              <Header4>Video</Header4>
              {/* <div className="md:block mt-5 rounded-estate-border-radius-2">
                <ReactPlayer
                  width={"100%"}
                  url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                />
              </div> */}
            </SubSectionContainer>

            <SubSectionContainer>
              <Header4>What&apos;s Nearby?</Header4>
              <div className="mt-5">
                <ParagraphRegular className="font-medium">
                  South Londonderry Elementary School
                </ParagraphRegular>
                <ParagraphRegular>Distance: 3.7 mi</ParagraphRegular>
                <div className="mt-5">
                  <ParagraphRegular className="font-medium">
                    Health Facility 2
                  </ParagraphRegular>
                  <ParagraphRegular>Distance: 3.7 mi</ParagraphRegular>
                </div>
              </div>
            </SubSectionContainer>
            <SubSectionContainer>
              <Header4>Get More Information</Header4>
              <div className="mt-5">
                <AvatarWithDetails className="w-[102px] h-[102px]">
                  <ParagraphRegular className="font-medium text-[18px]">
                    Jessica Anthony
                  </ParagraphRegular>
                  <div className="flex items-center gap-5 flex-wrap">
                    <Icon image="/icons/phone-line.svg" text="(920) 012-3421" />
                    <VerticalLine
                      className="hidden lg:block"
                      height={23}
                      color="black"
                    />
                    <Icon
                      className="hidden lg:flex"
                      image="/icons/phone-line.svg"
                      text="(920) 012-3421"
                    />
                    <VerticalLine
                      className="hidden lg:block"
                      height={23}
                      color="black"
                    />
                  </div>
                  <div className="flex items-center gap-5 mt-[10px]">
                    <Icon image="/icons/whatsapp-line.svg" />
                    <Icon image="/icons/facebook-circle-line.svg" />
                    <Icon image="/icons/twitter-x-line.svg" />
                    <Icon image="/icons/instagram-line.svg" />
                  </div>
                </AvatarWithDetails>
                <hr className="mt-10" />
                {/* <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5"> */}
                <ClientForm />
                {/* </div> */}
              </div>
              <ButtonWithIcon
                iconSrc="/icons/arrow-right-white.svg"
                className="mt-5 flex justify-center items-center gap-2 w-full md:w-[225px]"
              >
                Negotiate
              </ButtonWithIcon>
            </SubSectionContainer>
            <SubSectionContainer>
              <Header4>Get More Information</Header4>
              <div className="mt-5">
                <AvatarWithDetails className="w-[102px] h-[102px]">
                  <ParagraphRegular className="font-medium text-[18px]">
                    Jessica Anthony
                  </ParagraphRegular>
                  <div className="flex items-center gap-5 flex-wrap">
                    <Icon image="/icons/phone-line.svg" text="(920) 012-3421" />
                    <VerticalLine
                      className="hidden lg:block"
                      height={23}
                      color="black"
                    />
                    <Icon
                      className="hidden lg:flex"
                      image="/icons/phone-line.svg"
                      text="(920) 012-3421"
                    />
                    <VerticalLine
                      className="hidden lg:block"
                      height={23}
                      color="black"
                    />
                  </div>
                  <div className="flex items-center gap-5 mt-[10px]">
                    <Icon image="/icons/whatsapp-line.svg" />
                    <Icon image="/icons/facebook-circle-line.svg" />
                    <Icon image="/icons/twitter-x-line.svg" />
                    <Icon image="/icons/instagram-line.svg" />
                  </div>
                </AvatarWithDetails>
                <hr className="mt-10" />
                <ClientForm />
              </div>

              <Link href="/agents/1">
                <ButtonWithIcon
                  iconSrc="/icons/arrow-right-white.svg"
                  className="mt-5 flex justify-center items-center gap-2 w-full md:w-[225px]"
                >
                  Get More Information
                </ButtonWithIcon>
              </Link>
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

                  <Link href="/listings">
                    <Button
                      variant="transparent"
                      className="underline flex justify-start text-black pl-0"
                    >
                      View Listing
                    </Button>
                  </Link>
                </div>
              </AvatarWithDetails>

              <Link href="/agents/1">
                <ButtonWithIcon
                  type="button"
                  iconSrc="/icons/arrow-right-white.svg"
                  className="mt-5 flex justify-center items-center gap-2 w-full"
                >
                  Contact Agent
                </ButtonWithIcon>
              </Link>
            </SubSectionContainer>
          </form>
        </div>
        <div className="">
          <SectionHeader
            title=""
            subTitle="Similar Listings"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita"
          />
          <div className="mt-5">
            <Listings />
            <div className="w-full flex justify-end mt-5">
              <Link href="/listings">
                <Button>See All</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ListingDetailPage;
