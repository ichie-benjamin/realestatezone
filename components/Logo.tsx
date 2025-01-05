import React from "react";
import Text from "./Text";
import { cn } from "@/lib/utils";

const OrangeCircle = ({ className }: { className: string }) => {
  return (
    <span
      className={cn(
        "w-[6px] h-[6px] rounded-full bg-estate-orange-1 absolute",
        className
      )}
    ></span>
  );
};

const Logo = () => {
  return (
    <div className="relative h-[28px] w-[104px] flex items-center">
      <OrangeCircle className="top-0" />
      <Text className="font-bold text-[18px]">TheEstate</Text>
      <OrangeCircle className="right-0" />
    </div>
  );
};

export default Logo;
