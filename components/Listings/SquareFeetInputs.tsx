import React, { ChangeEvent } from "react";
import { Input } from "../ui/input";
import useSearchParamHandler from "@/hooks/useSearchParamsHandler";

const SquareFeetInputs = () => {
  const { getParam, setParam } = useSearchParamHandler();
 
  // Get initial values from the URL or default to empty strings
  const initialMinValue = getParam("min", "");
  const initialMaxValue = getParam("max", "");

  // Function to handle changes in input values and update URL
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, key: string) => {
    const value = e.target.value;

    // Update the URL parameters
    setParam(key, value);
  };

  return (
    <div className="flex items-center gap-[10px] text-estate-grey-2 text-sm mt-[10px]">
      <Input
        className="w-full h-[50px] rounded-estate-border-radius border border-estate-grey-7"
        placeholder="min"
        value={initialMinValue}
        onChange={(e) => handleInputChange(e, "min")}
      />
      <div className="bg-black w-[18px] h-[1px]"></div>
      <Input
        className="w-full h-[50px] rounded-estate-border-radius border border-estate-grey-7"
        placeholder="max"
        value={initialMaxValue}
        onChange={(e) => handleInputChange(e, "max")}
      />
    </div>
  );
};

export default SquareFeetInputs;
