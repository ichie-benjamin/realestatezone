import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HouseCard = () => {
  const houseCardClass = `grid grid-cols-12 gap-[5px] bg-white p-[10px] rounded-estate-border-radius relative`;
  return (
    <div className={houseCardClass}>
      <Button className="absolute top-0 right-0" variant="transparent">
        <Image
          src="/icons/love.svg"
          alt="mark as favorite "
          width={20}
          height={18}
        />
      </Button>
      <Button
        className="absolute bottom-4 right-5 text-[10px] md:text-xs bg-black/10 backdrop-blur-[2px] w-[78px] h-[33px] rounded-estate-border-radius-3"
        variant="transparent"
      >
        Bungalow
      </Button>
      <div className="col-span-5 bg-[url('/images/horizontal-house.jpg')] bg-center bg-cover w-[127px] h-[94px] md:w-[191px] md:h-[141px] rounded-estate-border-radius-3"></div>
      <div className="col-span-7 bg-white flex flex-col gap-1 mt-[10px]">
        <p className="font-semibold text-xs md:text-sm">Major General Realty</p>
        <p className="text-xs text-estate-grey-2">Wuse Phase 1, Abuja</p>
        <p className="font-semibold text-[15px] md:text-sm">$50,000</p>
      </div>
    </div>
  );
};

export default HouseCard;
