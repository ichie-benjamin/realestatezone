// import React, { useEffect, useState } from "react";
// import CheckboxOption from "./CheckboxOption";
// import useSearchParamHandler from "@/hooks/useSearchParamsHandler";

// const initialCheckboxValues = {
//   All: false,
//   Detached: false,
//   Bungalow: false,
//   Apartment: false,
// };

// const CheckboxGroup = () => {
//   const { getParam, setParam } = useSearchParamHandler();
//   const [checkboxValues, setCheckboxValues] = useState(initialCheckboxValues);

//   // Sync the checkbox state with the URL parameter on mount
//   useEffect(() => {
//     const typeValue = getParam("type");
//     const updatedValues: typeof initialCheckboxValues = {
//       ...initialCheckboxValues,
//     };

//     if (typeValue && typeValue in updatedValues) {
//       updatedValues[typeValue as keyof typeof initialCheckboxValues] = true;
//     }

//     setCheckboxValues(updatedValues);
//   }, [getParam]);

//   const handleCheckboxChange = (
//     id: keyof typeof initialCheckboxValues,
//     checked: boolean
//   ) => {
//     if (checked) {
//       // Set the selected checkbox and update the URL
//       setCheckboxValues({
//         All: false,
//         Detached: false,
//         Bungalow: false,
//         Apartment: false,
//         [id]: true,
//       });
//       setParam("type", id); // Always use the "type" key
//     } else {
//       // Reset all checkboxes and remove the "type" parameter
//       setCheckboxValues(initialCheckboxValues);
//       setParam("type", ""); // Remove the parameter by setting it to an empty string
//     }
//   };

//   return (
//     <div className="mt-5 space-y-3">
//       {Object.entries(checkboxValues).map(([key, value]) => (
//         <CheckboxOption
//           key={key}
//           id={key}
//           option={key.charAt(0).toUpperCase() + key.slice(1)}
//           checked={value}
//           onChange={(id, checked) =>
//             handleCheckboxChange(
//               id as keyof typeof initialCheckboxValues,
//               checked
//             )
//           }
//         />
//       ))}
//     </div>
//   );
// };

// export default CheckboxGroup;

import React, { useEffect, useState, useMemo } from "react";
import CheckboxOption from "./CheckboxOption";
import useSearchParamHandler from "@/hooks/useSearchParamsHandler";

interface CheckboxGroupProps {
  options: string[];
  paramKey: string;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options, paramKey }) => {
  const { getParam, setParam } = useSearchParamHandler();

  // Stable initialCheckboxValues
  const initialCheckboxValues = useMemo(() => {
    return options.reduce((acc, option) => {
      acc[option] = false;
      return acc;
    }, {} as Record<string, boolean>);
  }, [options]);

  const [checkboxValues, setCheckboxValues] = useState<Record<string, boolean>>(
    initialCheckboxValues
  );

  // Sync the checkbox state with the URL parameter on mount
  useEffect(() => {
    const paramValue = getParam(paramKey);
    if (paramValue && options.includes(paramValue)) {
      setCheckboxValues({ ...initialCheckboxValues, [paramValue]: true });
    }
  }, [getParam, paramKey, options, initialCheckboxValues]);

  const handleCheckboxChange = (id: string, checked: boolean) => {
    if (checked) {
      setCheckboxValues({ ...initialCheckboxValues, [id]: true });

      // We Check for all and if it exist we set it to an empty string and pass to the params
      let newId = id;
      if (id === "All") {
        newId = "";
        setParam(paramKey, newId);
      } else {
        setParam(paramKey, id); // Pass raw ID
      }
    } else {
      setCheckboxValues(initialCheckboxValues);
      setParam(paramKey, "");
    }
  };

  return (
    <div className="mt-5 space-y-3 ">
      {options.map((option) => (
        <CheckboxOption
          key={option}
          id={option}
          option={option.charAt(0).toUpperCase() + option.slice(1)}
          checked={checkboxValues[option] || false}
          onChange={(id, checked) => handleCheckboxChange(id, checked)}
        />
      ))}
    </div>
  );
};

export default CheckboxGroup;
