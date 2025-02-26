"use client";
import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import {fetchWrapper} from "@/lib/fetchWrapper";

export interface Listing {
  title: string;
  slug: string;
  city: string;
  id: number | null | undefined;
  car_packs: number;
  name: string;
  image: string;
  price: string;
  cars: number;
  beds: number;
  size: string;
  location: string;
  toilets: number;
  type: string;
}

interface ListingContextProps {
  listings: Listing[] | undefined;
  loading: boolean;
  error: string | null;
}

const ListingContext = createContext<ListingContextProps | undefined>(
  undefined
);

export const useListings = () => {
  const context = useContext(ListingContext);
  if (!context) {
    throw new Error("useListings must be used within a ListingProvider");
  }
  return context;
};

export const ListingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const BASE_API_URL = "/listings";

  // Function to fetch listings
  const fetchListings = async () => {
    const url = `${BASE_API_URL}`;
    const response = await fetchWrapper(url);
    return response.data;
  };

  const {
    data: listings,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["listings"], // Unique key for caching the query
    queryFn: fetchListings,
  });

  return (
    <ListingContext.Provider
      value={{
        listings,
        loading: isLoading,
        error: isError ? error?.message : null,
      }}
    >
      {children}
    </ListingContext.Provider>
  );
};
