import React from "react";
import Card from "../card/Card";
import styles from "./Cards.module.css"

export default function Cards({ cities, onRemove }) {
 
  return (
    <div className={styles.cards}>
      {cities.map((city) => (
        <Card
        key={city.id}
          min={city.min}
          max={city.max}
          name={city.name}
          img={city.img}
          onClose={() => onRemove(city.id)}
        />
      ))}
    </div>
  );
}
