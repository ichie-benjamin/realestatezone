import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import React, { ReactNode } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700"],
});

const Text = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <span className={cn(poppins.className, className)}>{children}</span>;
};

export default Text;
