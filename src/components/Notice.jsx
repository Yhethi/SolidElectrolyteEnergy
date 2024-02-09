import React from "react";

export const Notice = ({ img, name }) => {
  return (
    <div className="notice">
      <img src={img} alt={name} />
    </div>
  );
};
