import React from "react";

const MapFilters = ({ filters, onFilterChange }) => {
  return (
    <div>
      <p>🔴 In Danger · 🟢 Rescued · 🔵 Missing</p>
      <div className="space-y-1">
        <label className = "block">
          <input
            type="checkbox" 
            name="inDanger"
            checked={filters.inDanger}
            onChange={onFilterChange}
          />{" "} In Danger
        </label>
        <label className = "block">
          <input
            type="checkbox" 
            name="rescued"
            checked={filters.rescued}
            onChange={onFilterChange}
          />{" "} Rescued
        </label>
        <label className = "block">
          <input
            type="checkbox" 
            name="missing"
            checked={filters.missing}
            onChange={onFilterChange}
          />{" "} Missing
        </label>
      </div>
    </div>
  );
};

export default MapFilters;