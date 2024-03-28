import React from "react";

function Button({ label, variant, onClick }) {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
