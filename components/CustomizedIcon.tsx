import { EstateComponentProps } from "@/interfaces";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface CustomizedIconProps extends EstateComponentProps {
  icon: string;
}

const CustomizedIcon = ({ icon, className }: CustomizedIconProps) => {
  return (
    <div
      className={cn(
        "w-[60px] h-[60px] min-w-[60px]  rounded-estate-border-radius flex items-center justify-center border border-estate-grey-7",
        className
      )}
    >
      <Image src={icon} alt="icon" width={20} height={16} />
    </div>
  );
};

export default CustomizedIcon;
