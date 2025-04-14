import React from "react";

const FilterPanel = ({ filterType, setFilterType, filterLocation, setFilterLocation }) => {
  return (
    <div className="filter-panel">
      <h3>Filter Reports</h3>
      <div className="filter-controls">
        <label>
          Type:
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
            <option value="">All</option>
            <option value="Theft">Theft</option>
            <option value="Assault">Assault</option>
            <option value="Fraud">Fraud</option>
            <option value="Vandalism">Vandalism</option>
          </select>
        </label>

        <label>
          Location:
          <input
            type="text"
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
            placeholder="Enter location"
          />
        </label>
      </div>
    </div>
  );
};


  
  export default FilterPanel;