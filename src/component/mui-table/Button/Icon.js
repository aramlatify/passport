import React from "react";

function Icon({ size = 28 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 28 28"
    >
      <path
        fill="#555B6E"
        d="M28 14a2 2 0 01-2 2H16v10a2 2 0 11-4 0V16H2a2 2 0 110-4h10V2a2 2 0 114 0v10h10a2 2 0 012 2z"
      />
    </svg>
  );
}

export default Icon;
