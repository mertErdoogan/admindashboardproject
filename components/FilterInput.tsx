import React, { useState } from 'react';
import { UsersT } from '../hooks/useFetch';

interface FilterInputProps {
  values: UsersT[];
  onFilterChange: (filteredValues: UsersT[]) => void;
  filterText: string;
  setFilterText: (text: string) => void;
}

const FilterInput: React.FC<FilterInputProps> = ({
  values,
  onFilterChange,
  setFilterText,
  filterText,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFilterText = event.target.value;
    setFilterText(newFilterText);

    const filteredValues = values.filter((value) =>
      value.firstName.toLowerCase().includes(newFilterText.toLowerCase())
    );
    onFilterChange(filteredValues);
  };

  return (
    <input
      type="text"
      value={filterText}
      onChange={handleInputChange}
      placeholder="Search"
      className="border block outline-1 px-2 py-1 mr-2 rounded placeholder:text-gray-300 outline-gray-400/60 border-gray-200 text-black"
    />
  );
};

export default FilterInput;
