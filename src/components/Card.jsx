import React from "react";
import LabelTemp from "./LabelTemp"

export default function Card({ max, min, name, img, onClose }) {
  const handleOnClose = () => {
    if (typeof onClose === "function") onClose();
  };
  return (
    <div>
      <button onClick={handleOnClose}>X</button>
      <span>{name}</span>
     <LabelTemp label="Min" value={min} />
     <LabelTemp label="Max" value={max} />
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="clima" />
    </div>
  );
}


