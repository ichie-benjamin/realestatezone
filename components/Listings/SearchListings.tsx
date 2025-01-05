import Image from "next/image";
import React, { useContext } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import SectionWrapper from "../SectionWrapper";
import VerticalLine from "../VerticalLine";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FilterContext, useFilterContext } from "@/context";

const SearchListings = () => {
  const { toggleFilter, openFilter } = useFilterContext();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    console.log(params);
    if (term) {
      params.set("keyword", term);
    } else {
      params.delete("keyword");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 px-5 border border-grey-1 md:px-10 md:py-5 sticky top-[72px] lg:top-[80px] z-50 bg-white h-[130px] md:h-[97px] pt-2">
      <div className="col-span-1 md:col-start-1 lg:col-span-7 md:col-span-5 text-estate-grey-2 grid grid-cols-12 items-center">
        {!openFilter ? (
          <Image
            src="/icons/filter.svg"
            alt="search"
            width={20}
            height={20}
            className="md:hidden col-span-2"
            onClick={toggleFilter}
          />
        ) : (
          <Image
            src="/icons/close-icon.svg"
            onClick={toggleFilter}
            className="md:hidden col-span-2"
            width={20}
            height={20}
            alt="close filter"
          />
        )}

        <div className="rounded-estate-border-radius-4 border border-estate-grey-2 flex items-center col-span-10 pl-5">
          <Image
            src="/icons/search.svg"
            alt="search"
            width={20}
            height={20}
            className=""
          />
          <Input
            className="border-none w-[80%] placeholder:text-estate-grey-2 placeholder:text-xs md:placeholder:text-sm bg-transparent"
            placeholder="What are you looking for?"
            defaultValue={searchParams.get("keyword")?.toString()}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
        </div>
        <Button className="rounded-[26px] col-span-2 hidden md:block ml-[10px] text-sm w-[119px]">
          Search
        </Button>
      </div>
      <div className="col-span-1 md:col-span-4 md:col-start-9 flex items-center gap-5 md:justify-end  md:mt-[unset] md:gap-[20px] lg:gap-10">
        <div className="flex items-center">
          <span className="text-estate-grey-2 text-sm font-medium text-nowrap">
            Sort by:&nbsp;
          </span>
          <Select>
            <SelectTrigger className="border-0 bg-transparent p-0 outline-none focus:outline-none font-medium">
              <SelectValue defaultValue="Newest" placeholder=" Newest" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Newest</SelectItem>
                <SelectItem value="banana">Oldest</SelectItem>
                <SelectItem value="blueberry">Most Expensive</SelectItem>
                <SelectItem value="grapes">Cheapest</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <VerticalLine color="black" height={23} />
        <span className="font-medium text-estate-orange-1">Grid</span>
        <VerticalLine color="black" height={23} />
        <span className="font-medium">List</span>
      </div>
    </div>
  );
};

export default SearchListings;
