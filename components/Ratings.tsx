import Image from "next/image";
import React from "react";

const Ratings = () => {
  return (
    <div className="flex items-center gap-1">
      <Image
        src={"/icons/yellow-star.svg"}
        alt="rating"
        width={14}
        height={14}
      />
      <Image
        src={"/icons/yellow-star.svg"}
        alt="rating"
        width={14}
        height={14}
      />
      <Image
        src={"/icons/yellow-star.svg"}
        alt="rating"
        width={14}
        height={14}
      />
      <Image
        src={"/icons/yellow-star.svg"}
        alt="rating"
        width={14}
        height={14}
      />
      <Image
        src={"/icons/yellow-star.svg"}
        alt="rating"
        width={14}
        height={14}
      />
      <Image
        src={"/icons/yellow-star.svg"}
        alt="rating"
        width={14}
        height={14}
      />
    </div>
  );
};

export default Ratings;
