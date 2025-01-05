import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const IconAvatar = ({ image, bg }: { image: string; bg?: string }) => {
  const iaClass = bg
    ? `bg-${bg} w-[36px] h-[36px] rounded-full flex items-center justify-center p-[10px]`
    : "w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center p-[10px]";
  return (
    <div className={iaClass}>
      <Image alt="" width={21} height={12} src={image} />
    </div>
  );
};

export default IconAvatar;
