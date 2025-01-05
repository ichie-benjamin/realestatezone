import React from "react";
import Logo from "./Logo";
import IconAvatar from "./IconAvatar";
import FooterLinkItem from "./FooterLinkItem";

const Footer = () => {
  return (
    <div className="grid grid-cols-6 mt-[64px] md:mt-[130px] bg-white p-10 gap-5">
      <div className="col-span-6 md:col-span-2 flex flex-col">
        <Logo />
        <p className="text-sm mt-[10px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita
        </p>
        <div className="mt-[33px] flex items-center gap-5">
          <IconAvatar image="/icons/whatsapp.svg" bg="estate-orange-1" />
          <IconAvatar image="/icons/telegram.svg" bg="estate-orange-1" />
          <IconAvatar image="/icons/x.svg" bg="estate-orange-1" />
          <IconAvatar image="/icons/facebook.svg" bg="estate-orange-1" />
        </div>
      </div>
      <div className="col-span-6 md:col-span-4 md:col-start-4 grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10 md:mt-[unset]">
        <div className="col-span-1">
          <p className="font-semibold">Useful Links</p>
          <ul className="space-y-5 mt-5">
            <FooterLinkItem text="About us" />
            <FooterLinkItem text="How we work" />
            <FooterLinkItem text="Terms and Conditions" />
            <FooterLinkItem text="FAQ" />
          </ul>
        </div>
        <div className="col-span-1">
          <p className="font-semibold">Content</p>
          <ul className="space-y-5 mt-5">
            <FooterLinkItem text="Home" />
            <FooterLinkItem text="Listings" />
            <FooterLinkItem text="FAQ" />
          </ul>
        </div>
        <div className="col-span-1">
          <p className="font-semibold">Contact Us</p>
          <ul className="space-y-5 mt-5">
            <FooterLinkItem text="theestate@gmail.com" />
            <FooterLinkItem text="+234 1234 5678 974" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
