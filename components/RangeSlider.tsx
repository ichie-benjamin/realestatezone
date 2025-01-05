"use client";

import React, { ChangeEvent, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import useSearchParamHandler from "@/hooks/useSearchParamsHandler";
import { debounce } from "lodash";

const RangeSlider = ({ className, ...props }: { className?: string }) => {
  const { getParam, setParam } = useSearchParamHandler();

  const minRange = Number(getParam("min_price") || 100000);
  const maxRange = Number(getParam("max_price") || 5000000);

  // Create a debounced version of setParam
  const debouncedSetParam = useCallback(
    debounce((key: string, value: string) => {
      setParam(key, value);
    }, 500), // 500ms delay
    [setParam]
  );

  const setMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = Number(e.target.value);

    if (value <= maxRange) {
      debouncedSetParam("min_price", value.toString());
    }
  };

  const setMax = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = Number(e.target.value);

    if (value >= minRange) {
      debouncedSetParam("max_price", value.toString());
    }
  };

  return (
    <div>
      <div className="relative h-4 flex items-center mt-[10px]">
        <div className="w-full h-[3px] bg-black"></div>

        <input
          type="range"
          className="range-slider w-full absolute left-0 z-50"
          min={10000}
          max={10000000}
          onChange={setMin}
          value={minRange}
        />

        <input
          type="range"
          className="range-slider w-full absolute right-0 z-50"
          min={10000}
          max={10000000}
          onChange={setMax}
          value={maxRange}
        />
      </div>

      <div className="flex items-center gap-[10px] text-estate-grey-2 text-sm mt-[20px] px-2">
        <Input
          value={minRange}
          onChange={(e) => setMin(e)}
          className="w-full h-[50px] rounded-estate-border-radius border border-estate-grey-7"
        />
        <div className="bg-black w-[18px] h-[1px]"></div>
        <Input
          value={maxRange}
          onChange={(e) => setMax(e)}
          className="w-full h-[50px] rounded-estate-border-radius border border-estate-grey-7"
        />
      </div>
    </div>
  );
};

export default RangeSlider;
