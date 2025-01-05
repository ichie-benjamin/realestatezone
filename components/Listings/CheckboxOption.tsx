import React from "react";
import NewCheckbox from "./NewCheckBox";

interface CheckboxOptionProps {
  id: string;
  option: string;
  checked: boolean;
  onChange: (id: string, checked: boolean) => void;
}

// const CheckboxOption = ({
//   id,
//   option,
//   checked,
//   onChange,
// }: CheckboxOptionProps) => {
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     onChange(id, e.target.checked);
//   };

//   return (
//     <div className="flex items-center space-x-2">
//       <NewCheckbox id={id} checked={checked} onChange={handleChange} />
//       <label
//         htmlFor={id}
//         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//       >
//         {option}
//       </label>
//     </div>
//   );
// };

const CheckboxOption = ({
  id,
  option,
  checked,
  onChange,
}: CheckboxOptionProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onChange(id, e.target.checked); // Pass `id` and `checked` to parent
  };

  return (
    <div className="flex items-center space-x-2">
      <NewCheckbox id={id} checked={checked} onChange={handleChange} />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {option}
      </label>
    </div>
  );
};

export default CheckboxOption;
