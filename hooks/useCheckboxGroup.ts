import { useRouter, useSearchParams } from "next/navigation";
import { useState, useCallback, useEffect } from "react";

const useCheckboxGroup = (initialValues: Record<string, boolean>) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [checkboxValues, setCheckboxValues] = useState(initialValues);

  useEffect(() => {
    // Initialize state from URL parameters
    const newCheckboxValues = { ...initialValues };
    Object.keys(initialValues).forEach((key) => {
      const paramValue = searchParams.get(key);
      if (paramValue !== null) {
        newCheckboxValues[key] = paramValue === "true";
      }
    });
    setCheckboxValues(newCheckboxValues);
  }, [searchParams, initialValues]);

  const handleCheckboxChange = useCallback(
    (id: string, checked: boolean) => {
      setCheckboxValues((prev) => ({
        ...prev,
        [id]: checked,
      }));

      const newSearchParams = new URLSearchParams(searchParams);
      if (checked) {
        newSearchParams.set(id, "true");
      } else {
        newSearchParams.delete(id);
      }

      router.push(`?${newSearchParams.toString()}`);
    },
    [searchParams, router]
  );

  return { checkboxValues, handleCheckboxChange };
};

export default useCheckboxGroup;
