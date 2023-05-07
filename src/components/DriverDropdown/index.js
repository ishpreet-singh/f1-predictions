import React from "react";
import "./index.css";

const DriverDropdown = ({ drivers, onSelect, selectedDriver }) => {
  return (
    <select
      className="driver-dropdown"
      onChange={(e) => onSelect(e.target.value)}
      value={selectedDriver}
    >
      <option value="">Select a driver</option>
      {drivers.map((driver) => (
        <option key={driver} value={driver}>
          {driver}
        </option>
      ))}
    </select>
  );
};

export default DriverDropdown;
