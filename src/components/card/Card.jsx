import React from "react";
import LabelTemp from "../labelTemp/LabelTemp";
import propTypes from "prop-types";
import styles from "./Card.module.css";
import { AiOutlineCloseSquare } from "react-icons/ai"

export default function Card({ max, min, name, img, onClose }) {
  const handleOnClose = () => {
    if (typeof onClose === "function") onClose();
  };

  return (
    <div className={styles.card}>
      <button className={styles.closeButton} onClick={handleOnClose}>
        <AiOutlineCloseSquare />
      </button>
      <span className={styles.cityName}>{name}</span>
      <LabelTemp label="Min" value={min} />
      <LabelTemp label="Max" value={max} />
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="clima" />
    </div>
  );
}

//corroborar el tipo de dato de la propiedad que me envian.
Card.propTypes = {
  max: propTypes.number,
  min: propTypes.number,
  name: propTypes.string,
  img: propTypes.string,
  onClose: propTypes.func,
};
