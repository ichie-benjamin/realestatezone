import { EstateComponentProps } from "@/interfaces";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

interface ButtonWithIconProps extends EstateComponentProps {
  iconSrc: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const ButtonWithIcon = ({
  className,
  iconSrc,
  children,
  type,
}: ButtonWithIconProps) => {
  return (
    <Button
      type={type}
      className={cn(
        "flex h-[50px] items-center justify-between gap-5",
        className
      )}
    >
      {children}
      <Image src={iconSrc} alt="" width={16} height={16} />
    </Button>
  );
};

export default ButtonWithIcon;
