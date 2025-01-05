import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect } from "react";
import VerticalLine from "./VerticalLine";
import Icon from "./Icon";
import { useRouter } from "next/navigation";
import { useInterceptingListing } from "@/context/InterceptionContext";

const Listing = ({
  name,
  slug,
  image,
  location,
  price,
  beds,
  cars,
  size,
  toilet,
  type,
  className,
}: // loading,
{
  name: string;
  slug: string;
  image: string;
  price: string;
  cars: number;
  beds: number;
  size: string;
  location: string;
  toilet: number;
  type: string;
  className?: string;
  // loading: boolean;
}) => {
  const imageBoxClass = `w-full h-[209px]  bg-center bg-cover rounded-estate-border-radius-2 relative`;
  const router = useRouter();

  const { fetching } = useInterceptingListing();

  // const loading = false;

  return (
    <>
      <div
        onClick={() => router.push(`/listings/${slug}`)}
        className={cn(
          "bg-white shadow-features-shadow rounded-estate-border-radius-2 flex flex-col relative p-[10px] text-xs md:text-sm",
          className
        )}
      >
        <div className={imageBoxClass}>
          <Image src={image} alt="image" fill />
          <div className="absolute top-5 right-5 bg-black/30 backdrop-blur-[2px] p-1 rounded-estate-border-radius-3 text-white text-xs font-medium">
            {type || "Bungalow"}
          </div>
        </div>
        <p className="font-semibold mt-[10px]">{name}</p>
        <div className="flex items-center gap-2 md:gap-5 mt-2 flex-wrap">
          <p className="font-semibold text-sm">${price}</p>
          <VerticalLine height={23} color="black" />
          <Icon image="/icons/bed.svg" text={String(beds)} />
          <Icon image="/icons/bath.svg" text={String(toilet)} />
          <Icon image="/icons/car.svg" text={String(cars)} />
          <Icon image="/icons/bed.svg" text={String(size)} />
        </div>
        <hr className="mt-5" />
        <div className="flex items-center gap-5 mt-[10px]">
          <p className="text-sm text-estate-grey-2">{location}</p>
          <VerticalLine height={23} color="black" />
          <Icon image="/icons/link.svg" />
          <Icon image="/icons/love.svg" />
        </div>
      </div>
    </>
  );
};

export default Listing;
