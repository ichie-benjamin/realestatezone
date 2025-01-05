// import { useCallback, useEffect } from "react";
// import { useListings } from "@/context/ListingContext";

// const BASE_API_URL = "https://realestate.surdonline.com/api/v1/listings";

// const useFetchWithParams = () => {
//   const { setListings, setLoading, setError } = useListings();

//   const fetchWithParams = useCallback(
//     async (queryParams: string = "") => {
//       setLoading(true);
//       setError(null);
//       try {
//         const url = `${BASE_API_URL}${queryParams ? `?${queryParams}` : ""}`;
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const jsonData = await response.json();
//         setListings(jsonData.data); // Assuming API returns data in `data`
//       } catch (err: any) {
//         setError(err.message || "An error occurred");
//       } finally {
//         setLoading(false);
//       }
//     },
//     [setListings, setLoading, setError]
//   );

//   return { fetchWithParams };
// };

// export default useFetchWithParams;
