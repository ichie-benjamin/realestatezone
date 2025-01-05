import { cn } from "@/lib/utils";
import React from "react";

const ItemAmount = ({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
}) => {
  const itemClass = cn(
    "w-10 flex items-center justify-center h-10 cursor-pointer font-medium text-sm border p-2 border-collapse last-of-type:rounded-tr-estate-border-radius last-of-type:rounded-br-estate-border-radius first-of-type:rounded-tl-estate-border-radius first-of-type:rounded-bl-estate-border-radius",
    active ? "border-black" : ""
  );
  return (
    <p onClick={onClick} className={itemClass}>
      {children}
    </p>
  );
};

export default ItemAmount;
