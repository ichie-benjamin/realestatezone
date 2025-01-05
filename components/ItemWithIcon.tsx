import { EstateComponentProps } from "@/interfaces";
import { cn } from "@/lib/utils";
import React from "react";

interface ItemWithIconProps extends EstateComponentProps {
  icon: React.ReactNode;
}

const ItemWithIcon = ({ className, icon, children }: ItemWithIconProps) => {
  return (
    <div className={cn("flex items-center gap-[10px]", className)}>
      {icon}
      <div className="flex flex-col gap-[2px]">{children}</div>
    </div>
  );
};

export default ItemWithIcon;
