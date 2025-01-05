"use client";
import React, { createContext, useContext } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

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
  listingData: Listing[] | undefined;
  loading: boolean;
  fetching: boolean;
  error: string | null;
  fetchNextPage: () => void;
  // Add these two properties to track pagination
  currentPage: number; // New property to track current page
  totalPages: number; // New property to track total pages
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  fetchListings: (queryParams?: string) => void;
}

const InterceptContext = createContext<ListingContextProps | undefined>(
  undefined
);

export const useInterceptingListing = () => {
  const context = useContext(InterceptContext);
  if (!context) {
    throw new Error("useListings must be used within a ListingProvider");
  }
  return context;
};

export const InterceptionContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const BASE_API_URL = "https://realestate.surdonline.com/api/v1/listings";

  // Modified fetch function for infinite query
  const fetchListings = async (
    {
      pageParam = 1,
    }: {
      pageParam?: number;
    },
    queryParams: string = ""
  ) => {
    const url = `${BASE_API_URL}?page=${pageParam}${
      queryParams ? `&${queryParams}` : ""
    }`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonData = await response.json();

    return {
      data: jsonData.data,
      nextPage: jsonData.meta.current_page ? pageParam + 1 : undefined,
      // Explicitly add these properties with their types
      currentPage: jsonData.meta.current_page as number,
      totalPages: jsonData.meta.last_page as number,
    };
  };

  // State for query parameters (can be updated dynamically)
  const [queryParams, setQueryParams] = React.useState<string>("");

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["listingsData", queryParams],
    queryFn: (context) => fetchListings(context, queryParams), // Pass both context and queryParams
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
    enabled: true,
  });

  // Manual fetch function that accepts queryParams as string | undefined
  const fetchListingsManual = (newQueryParams?: string) => {
    // If newQueryParams is undefined, we will set it to an empty string
    setQueryParams(newQueryParams ?? ""); // Default to empty string if undefined
  };

  // Flatten listings from all pages
  const listingData = data?.pages.flatMap((page) => page.data);

  // Get the current page and total pages from the last page of data
  const currentPage = data?.pages[data.pages.length - 1]?.currentPage || 1;
  const totalPages = data?.pages[data.pages.length - 1]?.totalPages || 1;

  return (
    <InterceptContext.Provider
      value={{
        listingData,
        loading: isLoading,
        fetching: isFetching,
        error: isError ? error?.message : null,
        fetchNextPage,
        // Add current page and total pages to the context value
        currentPage,
        totalPages,
        hasNextPage,
        isFetchingNextPage,
        fetchListings: fetchListingsManual,
      }}
    >
      {children}
    </InterceptContext.Provider>
  );
};
