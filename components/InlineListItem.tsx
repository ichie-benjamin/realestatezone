import React from "react";

const InlineListItem = ({ children }: { children: React.ReactNode }) => {
  return <li className="inline">{children}</li>;
};

export default InlineListItem;
