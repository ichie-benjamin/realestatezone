import React from "react";
import NavbarItem from "./NavbarItem";
import { cn } from "@/lib/utils";

const NavbarLinks = ({
  className,
  activeLink,
}: {
  className: string;
  activeLink: string;
}) => {
  return (
    <ul className={cn("space-y-5 lg:space-y-0", className)}>
      <NavbarItem activeLink={activeLink === "home"} link="/">
        Home
      </NavbarItem>
      <NavbarItem activeLink={activeLink === "listings"} link="/listings">
        Listings
      </NavbarItem>
      <NavbarItem activeLink={activeLink === "blogs"} link="blogs">
        Blogs
      </NavbarItem>
      <NavbarItem activeLink={activeLink === "contact-us"} link="contact-us">
        Contact Us
      </NavbarItem>
      <NavbarItem
        activeLink={activeLink === "login-signup"}
        className={cn(
          "bg-estate-orange-1 text-white w-[215px] h-[40px] flex items-center justify-center text-sm rounded-estate-border-radius lg:bg-white lg:text-[black] lg:w-[unset] "
        )}
        link="login-signup"
      >
        Login/Signup
      </NavbarItem>
    </ul>
  );
};

export default NavbarLinks;
