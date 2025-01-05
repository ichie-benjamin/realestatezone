import React from "react";
import Ratings from "./Ratings";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

const AvatarWithDetails = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex gap-5")}>
      <Avatar className={cn("w-[66px] h-[66px]", className)}>
        <AvatarImage src="/images/user.jpg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1 justify-center">{children}</div>
    </div>
  );
};

export default AvatarWithDetails;
