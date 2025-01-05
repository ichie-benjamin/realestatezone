import Image from "next/image";
import React from "react";
import Text from "./Text";

const Feature = ({
  feature,
  icon,
  description,
}: {
  feature: string;
  icon: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col justify-center bg-white rounded-estate-border-radius-2 shadow-features-shadow  backdrop-blur-2xl gap-y-[10px] p-5">
      <div className="w-[60px] h-[60px] bg-estate-grey-4 flex items-center justify-center rounded-full">
        <Image src={icon} alt={`${feature} icon`} width={16} height={21} />
      </div>
      <Text className="font-bold">{feature}</Text>
      <Text className="text-sm">{description}</Text>
    </div>
  );
};

export default Feature;
