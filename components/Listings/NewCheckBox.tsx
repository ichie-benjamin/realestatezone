import React from "react";

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NewCheckbox: React.FC<CheckboxProps> = ({ id, checked, onChange }) => (
  <input
    type="checkbox"
    id={id}
    checked={checked}
    onChange={onChange}
    className="appearance-none w-4 h-4 checked:bg-black checked:before:content-['✓'] checked:before:text-white border-black border-2 rounded cursor-pointer flex items-center justify-center"
  />
);

export default NewCheckbox;
