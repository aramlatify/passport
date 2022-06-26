import React from "react";

import "./styles.css";

function EyeRect({ width, height, ...rest }) {
  return (
    <rect
      width={String(width)}
      height={String(height)}
      x={(-1 * width) / 2}
      y={(-1 * height) / 2}
      rx={width / 2}
      ry={width / 2}
      {...rest}
    />
  );
}

const HEAD_STROKE_WIDTH = 4;
const EYE_STROKE_WIDTH = 4;
const EYE_CROSS_LENGTH = 60;

function Eye({ transform, strokeWidth }) {
  return (
    <g transform={transform}>
      <EyeRect
        width={strokeWidth}
        height={EYE_CROSS_LENGTH}
        transform="rotate(45)"
      />
      <EyeRect
        width={strokeWidth}
        height={EYE_CROSS_LENGTH}
        transform="rotate(-45)"
      />
    </g>
  );
}

function Icon() {
  return (
    <svg width="30px" height="30px" viewBox="0 0 100 100" fill="blue">
      <circle
        r="40"
        cx="50"
        cy="50"
        fill="none"
        stroke="green"
        stroke-width={HEAD_STROKE_WIDTH}
      />

      <Eye transform="translate(50, 50)" strokeWidth={EYE_STROKE_WIDTH} />
    </svg>
  );
}

function App() {
  return (
    <div style={{ color: "#aaa" }}>
      <Icon />
    </div>
  );
}
export default App;
