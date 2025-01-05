import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Icon = ({
  image,
  text,
  className,
}: {
  image: string;
  text?: string;
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center gap-[6px]", className)}>
      <Image src={image} width={20} height={20} alt="bed" />
      {text}
    </div>
  );
};

export default Icon;
