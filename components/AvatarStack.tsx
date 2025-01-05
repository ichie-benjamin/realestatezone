import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const AvatarStack = () => {
  return (
    <div className="flex items-center">
      <Avatar className="w-[66px] h-[66px]">
        <AvatarImage src="/images/user.jpg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="-ml-8 w-[66px] h-[66px]">
        <AvatarImage src="/images/user.jpg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="-ml-8 w-[66px] h-[66px] relative z-10">
        <AvatarImage src="/images/user.jpg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="-ml-8 w-[66px] h-[66px]">
        <AvatarImage src="/images/user.jpg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="-ml-8 w-[66px] h-[66px] flex items-center justify-center relative">
        <div className="w-full h-full absolute top-0 left-0 bg-black/30"></div>
        <p className="absolute  text-white font-bold">+99</p>
        <AvatarImage src="/images/user.jpg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default AvatarStack;
