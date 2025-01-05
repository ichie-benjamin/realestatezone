import React from "react";
import ParagraphRegular from "./ParagraphRegular";

const ItemWithDescription = ({
  item,
  description,
}: {
  item: string;
  description: string;
}) => {
  return (
    <div className="flex items-center justify-between text-left">
      <ParagraphRegular className="font-medium">{item}</ParagraphRegular>
      <ParagraphRegular className="text-right">{description}</ParagraphRegular>
    </div>
  );
};

export default ItemWithDescription;
