import Image from "next/image";
import React from "react";

const QuickAction = ({ action, image }: { action: string; image: string }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-y-5 text-sm font-medium text-black lg:text-[18px] border border-estate-grey-3 rounded-estate-border-radius px-10 py-5 bg-white/90">
      <Image
        src={image}
        alt={`${action}`}
        width={57}
        height={59}
        className="w-[41px] h-[47px] lg:w-[57px] lg:h-[59px]"
      />
      <p>{action}</p>
    </div>
  );
};

export default QuickAction;
