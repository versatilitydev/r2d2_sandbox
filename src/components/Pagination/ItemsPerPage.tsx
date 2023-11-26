/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Select from "react-select";

interface ItemsPerPageProps {
  value: number;
  onChange: (value: number) => void;
}

const options = [
  { value: 3, label: "3" },
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 20, label: "20" },
];

const ItemsPerPage: React.FC<ItemsPerPageProps> = ({ value, onChange }) => {
  // Handler for when the selected option changes
  const handleChange = (selectedOption: any) => {
    onChange(selectedOption.value);
  };

  // Find the currently selected option
  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className="flex justify-end mb-4">
      <div>
        <label
          htmlFor="itemsPerPage"
          className="block mb-1 text-xs font-medium text-gray-900"
        >
          Items per page:
        </label>
        <Select
          id="itemsPerPage"
          value={selectedOption}
          onChange={handleChange}
          options={options}
          className="text-xs w-32" // Adjust the width as needed
        />
      </div>
    </div>
  );
};

export default ItemsPerPage;
