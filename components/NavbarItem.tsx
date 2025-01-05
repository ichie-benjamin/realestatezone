import React, { ReactNode } from "react";
import InlineListItem from "./InlineListItem";
import Text from "./Text";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NavbarItem = ({
  children,
  link,
  className,
  activeLink,
}: {
  children: ReactNode;
  link: string;
  className?: string;
  activeLink: boolean;
}) => {
  return (
    <InlineListItem>
      <Link
        className={cn(
          "pb-[2px]",
          className,
          activeLink ? "border-b-[3px] border-estate-orange-1" : ""
        )}
        href={link}
      >
        <Text className="font-medium lg:text-sm">{children}</Text>
      </Link>
    </InlineListItem>
  );
};

export default NavbarItem;
