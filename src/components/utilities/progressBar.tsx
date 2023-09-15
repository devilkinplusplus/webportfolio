import React from "react";

function ProgressBar({ bgcolor, completed, title }) {
  const containerStyles = {
    height: "40px",
    width: "95%",
    backgroundColor: "#e0e0de",
    borderRadius: "50px",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
  };

  const labelStyles = {
    padding: 10,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles} className="py-1 px-2">
        <span style={labelStyles} >{title}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
