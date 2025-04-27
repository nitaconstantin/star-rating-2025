import React, { useState } from "react";

import Star from "./Star";

function StarRating({ maxRating = 5, color = "#ffff00", size = 48 }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };
  const starsContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  };
  const textStyle = {
    lineHeight: "1",
    display: "block",
    margin: 0,
  };

  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: "block",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={starsContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => setRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            full={tempRating >= i + 1 || rating >= i + 1}
            color={color}
            size={size}
            starStyle={starStyle}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ""}</p>
    </div>
  );
}

export default StarRating;
