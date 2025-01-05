import React from "react";

const SectionHeader = ({
  description,
  subTitle,
  title,
}: {
  title: string;
  subTitle: string;
  description?: string;
}) => {
  return (
    <>
      <h3 className="text-estate-orange-1 font-bold">{title}</h3>
      <p className="font-bold text-[20px] lg:text-[36px] mt-[10px]">
        {subTitle}
      </p>
      {description && (
        <p className="text-sm mt-5 text-estate-grey-2 lg:max-w-[50%]">
          {description}
        </p>
      )}
    </>
  );
};

export default SectionHeader;
