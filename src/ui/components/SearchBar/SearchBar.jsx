import { useEffect, useState } from "react";
import "./Searchbar.css";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import Homepage from "../../../pages/Homepage";

function SearchBar(props) {
  return (
    <div className="searchBox">
      <input
        className="searchInput"
        type="text"
        name=""
        placeholder="Search"
        value={props.query}
        onChange={(e) => props.setQuery(e.target.value)}
      ></input>
      <HiMiniMagnifyingGlass></HiMiniMagnifyingGlass>
    </div>
  );
}

export default SearchBar;
