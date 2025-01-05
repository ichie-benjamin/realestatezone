"use client";

import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { Button } from "./ui/button";
import Text from "./Text";
import Logo from "./Logo";
import Image from "next/image";
import NavbarLinks from "./NavbarLinks";

const Navbar = ({ activeLink }: { activeLink: string }) => {
  const [showMobilenav, setShowMobileNav] = useState(false);

  const onClickShowMobileNav = () => {
    setShowMobileNav(!showMobilenav);
  };

  return (
    <div className="h-[72px] md:h-[80px] flex items-center shadow-navbar-shadow z-[55] bg-white sticky top-0 px-5 md:px-10">
      <div className="flex items-center justify-between w-full">
        <Logo />
        <div className="flex items-center lg:space-x-10 justify-between">
          <NavbarLinks
            activeLink={activeLink}
            className="hidden lg:flex justify-between items-center lg:space-x-10"
          />
          <div className="space-x-5 flex">
            <Button className="flex items-center space-x-[10px] bg-black">
              <Image
                alt="plus icon"
                width={14}
                height={14}
                src="/icons/plus.svg"
              ></Image>
              <Text className="font-medium">Add Property</Text>
            </Button>
            <Button
              onClick={onClickShowMobileNav}
              variant="transparent"
              className="lg:hidden px-0"
            >
              <Image
                alt="hamburger icon"
                src="/icons/hamburger.svg"
                width={18}
                height={18}
              />
            </Button>
          </div>
        </div>
      </div>
      {showMobilenav ? (
        <div className="lg:hidden z-50 bg-white absolute top-[72px] right-0 w-[256px] pt-5 pb-10 rounded-bl-estate-border-radius rounded-br-estate-border-radius border border-estate-grey-1 shadow-navbar-shadow">
          <NavbarLinks
            activeLink={activeLink}
            className="lg:hidden flex flex-col items-end pr-5"
          />
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
