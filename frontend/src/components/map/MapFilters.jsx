import React from "react";

const MapFilters = ({ filters, onFilterChange }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">Filters</h3>

      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          name="inDanger"
          checked={filters.inDanger}
          onChange={onFilterChange}
          className="mr-2"
        />
        In Danger
      </label>

      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          name="rescued"
          checked={filters.rescued}
          onChange={onFilterChange}
          className="mr-2"
        />
        Rescued
      </label>

      <label className="flex items-center">
        <input
          type="checkbox"
          name="missing"
          checked={filters.missing}
          onChange={onFilterChange}
          className="mr-2"
        />
        Missing
      </label>
    </div>
  );
};

export default MapFilters;