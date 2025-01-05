// "use client";

// import React, { useState } from "react";
// import ItemAmount from "./ItemAmount";
// import { cn } from "@/lib/utils";

// const options = ["any", "1+", "2+", "3+", "4+", "5+"];

// const ItemsAmountSelect = ({ className }: { className?: string }) => {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const setAsActiveIndex = (index: number) => {
//     setSelectedIndex(index);
//   };
//   return (
//     <div
//       className={cn(
//         "rounded-estate-border-radius-2 flex flex-wrap items-center w-full gap-1 lg:gap-0",
//         className
//       )}
//     >
//       {options.map((option, i) => (
//         <ItemAmount
//           onClick={() => setAsActiveIndex(i)}
//           key={i}
//           active={i === selectedIndex}
//         >
//           {option}
//         </ItemAmount>
//       ))}
//     </div>
//   );
// };

// export default ItemsAmountSelect;

"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ItemAmount from "./ItemAmount";
import { cn } from "@/lib/utils";

interface ItemsAmountSelectProps {
  options: string[];
  className?: string;
  paramKey?: string;
  defaultOption?: string;
}

const ItemsAmountSelect: React.FC<ItemsAmountSelectProps> = ({
  options,
  className,
  paramKey = "selectedIndex",
  defaultOption = "any",
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get the initial value from URL or use defaultOption if not set
  const initialOption = searchParams.get(paramKey) || defaultOption;

  // Update the URL with the new selected value
  const setAsActiveIndex = (index: number) => {
    const value = options[index].replace("+", "");
    const newSearchParams = new URLSearchParams(searchParams);
    let newValue = value;

    //Setting the params to empty string when it is equall to any
    if (value === "any") {
      newValue = "";
      newSearchParams.set(paramKey, newValue);
    } else {
      newSearchParams.set(paramKey, value);
    }

    router.push(`?${newSearchParams.toString()}`);
  };

  const isActive = (option: string) => {
    const strippedOption = option.replace("+", "");
    return strippedOption === initialOption;
  };

  return (
    <div
      className={cn(
        "rounded-estate-border-radius-2 flex flex-wrap items-center w-full gap-1 lg:gap-0",
        className
      )}
    >
      {options.map((option, i) => (
        <ItemAmount
          onClick={() => setAsActiveIndex(i)}
          key={i}
          active={isActive(option)}
        >
          {option}
        </ItemAmount>
      ))}
    </div>
  );
};

export default ItemsAmountSelect;
