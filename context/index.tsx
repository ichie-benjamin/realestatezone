import { createContext, useContext, useState } from "react";

export const FilterContext = createContext<{
  openFilter: boolean;
  setOpenFilter: (open: boolean) => void;
  toggleFilter: () => void;
}>({
  openFilter: false,
  setOpenFilter: () => {},
  toggleFilter: () => {},
});

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error(
      "useFilterContext must be used within a FilterContext.Provider"
    );
  }
  return context;
};
