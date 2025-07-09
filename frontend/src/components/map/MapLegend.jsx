import React from "react";

const MapLegend = () => {
  const statuses = [
    {label: "Endangered", color: "red"},
    {label: "Rescued", color: "green"},
    {label: "Lost", color: "blue"},
  ];

  return (
    <div className= "bg-white p-4 rounded-md shadow-md">
      <h3 className= "text-lg font-semibold mb-2">Legend</h3>
      <ul className ="space-y-2">
        {statuses.map(({label, color}) => (
          <li key={label} className="flex items-center">
            <img 
              src={`https://maps.google.com/mapfiles/ms/icons/${color}-dot.png`}
              alt={label}
              className="w-6 h-6 mr-2"
            />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapLegend;