import React from "react";
import styles from "./SearchBar.module.css";
import { RiSearch2Line } from 'react-icons/ri'

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const handleOnSearch = () => {
    if (typeof onSearch === "function") {
      const input = document.getElementById("search-input");
      onSearch(input.value);
      console.log(input.value);
    }
  };
  return (
    <div className={styles.searchbar}>
      <input placeholder="Search..." id="search-bar-input" />
      <button  onClick={handleOnSearch}>
        <RiSearch2Line />
      </button>
    </div>
  );
}
