import React from 'react';

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const handleOnSearch = () =>{
    if(typeof onSearch === "function"){
      const input = document.getElementById('search-input')
      onSearch(input.value)
      console.log(input.value)
    }
  }
  return <div>
  <input id='search-input' type="text" placeholder="City..." />
  <button onClick={handleOnSearch}>Add</button>
  </div>
};