import React, { ChangeEvent } from "react";
import { Input } from "../ui/input";
import useSearchParamHandler from "@/hooks/useSearchParamsHandler";

const YearBuiltInputs = () => {
  const { getParam, setParam } = useSearchParamHandler();

  const initialStartYear = getParam("start", "");
  const initialCurrentValue = getParam("current", "");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, key: string) => {
    e.preventDefault();
    const value = e.target.value;
    setParam(key, value);
  };

  return (
    <div className="flex items-center gap-[10px] text-estate-grey-2 text-sm mt-[10px]">
      <Input
        className="w-full h-[50px] rounded-estate-border-radius border border-estate-grey-7"
        value={initialStartYear}
        onChange={(e) => handleInputChange(e, "start")}
      />
      <div className="bg-black w-[18px] h-[1px]"></div>
      <Input
        className="w-full h-[50px] rounded-estate-border-radius border border-estate-grey-7"
        value={initialCurrentValue}
        onChange={(e) => handleInputChange(e, "current")}
      />
    </div>
  );
};

export default YearBuiltInputs;
