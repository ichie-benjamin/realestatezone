import React, { HTMLAttributes } from "react";
import BlurContainer from "./BlurContainer";
import Text from "./Text";
import QuickAction from "./QuickAction";

const QuickActions = () => {
  return (
    <BlurContainer className="mt-5 sm:shadow-none lg:shadow-search-shadow w-auto mx-[5px]">
      <Text className="text-[18px] font-semibold">Quick Actions</Text>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5">
        <QuickAction action="Buy Real Estate" image="/icons/buy.svg" />
        <QuickAction action="Sell Real Estate" image="/icons/sell.svg" />
        <QuickAction action="Rent Real Estate" image="/icons/rent.svg" />
        <QuickAction
          action="Rent Out Real Estate"
          image="/icons/rent-out.svg"
        />
        <QuickAction action="Lease Real Estate" image="/icons/lease.svg" />
      </div>
    </BlurContainer>
  );
};

export default QuickActions;
