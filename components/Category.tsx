import Image from "next/image";
import React from "react";

const Category = ({
  icon,
  category,
  description,
}: {
  icon: string;
  category: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-estate-border-radius-2 text-black p-10 w-[208px]">
      <div className="w-[60px] h-[60px] rounded-full bg-estate-orange-1/10 flex items-center justify-center">
        <Image src={icon} alt="icon" width={26} height={26} />
      </div>
      <p className="font-medium">{category}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Category;
