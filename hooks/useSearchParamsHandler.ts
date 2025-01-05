import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

// Custom hook to manage URL search parameters
const useSearchParamHandler = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get a parameter from the URL by key
  const getParam = useCallback(
    (key: string, defaultValue?: string) => {
     
      return searchParams.get(key) || defaultValue || "";
    },
    [searchParams]
  );

  // Set a parameter in the URL
  const setParam = useCallback(
    (key: string, value: string) => {
      const newSearchParams = new URLSearchParams(searchParams);

      if (value) {
        newSearchParams.set(key, value); // Encodes automatically
      } else {
        newSearchParams.delete(key);
      }

    
      const queryString = newSearchParams.toString().replace(/\+/g, "%20");

      router.push(`?${queryString}`);
    },
    [searchParams, router]
  );

  // Remove a parameter from the URL
  const removeParam = useCallback(
    (key: string) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.delete(key);
      router.push(`?${newSearchParams.toString()}`); // Encodes automatically
    },
    [searchParams, router]
  );

  return { getParam, setParam, removeParam };
};

export default useSearchParamHandler;
