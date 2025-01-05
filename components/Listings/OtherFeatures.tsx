import React from "react";
import CheckboxOption from "./CheckboxOption";
import CheckboxGroup from "./CheckBoxGroup";

const OtherFeatures = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] mt-[10px]">
      {/* <CheckboxOption option="Car Park" id="car park" />
      <CheckboxOption option="Lawn" id="lawn" />
      <CheckboxOption option="Outdoor Shower" id="outdoor shower" />
      <CheckboxOption option="Front Yard" id="front yard" /> */}
      <CheckboxGroup
        options={["Car Park", "Lawn", "Outdoor Shower", "Front yard"]}
        paramKey="features"
      />
    </div>
  );
};

export default OtherFeatures;
