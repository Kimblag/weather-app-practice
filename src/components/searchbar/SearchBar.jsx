import React from "react";
import styles from "./SearchBar.module.css";
import { RiSearch2Line } from 'react-icons/ri'

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const handleOnSearch = (event) => {
    event.preventDefault();
    if (typeof onSearch === "function") {
      const input = document.getElementById("search-bar-input");
      onSearch(input.value);
      input.value = "";
      console.log(input.value);
    }
  };

  return (
    <form className={styles.searchbar} onSubmit={handleOnSearch}>
      <input placeholder="Search..." id="search-bar-input" />
      <button type="submit">
        <RiSearch2Line />
      </button>
    </form>
  );
}
