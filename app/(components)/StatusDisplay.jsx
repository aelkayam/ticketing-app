import React from "react";
const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-slate-700";

    switch (status.toLowerCase()) {
      case "done":
        color = "bg-color-200";
        break;
      case "started":
        color = "bg-yellow-200";
        break;
      case "not started":
        color = "bg-red-200";
        break;
    }

    return color;
  };
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
