import React from "react";
import "./Button.css";

function Button({ text, color, onClicking }) {
  return (
    <button className="button" style={{ color: color }} onClick={onClicking}>
      {text}
    </button>
  );
}

export default Button;
