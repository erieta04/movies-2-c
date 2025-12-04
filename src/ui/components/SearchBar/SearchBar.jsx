import { useState } from "react";
import "./Searchbar.css";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    onSearch(query);
  };

  return (
    <div className="searchbar-container">
      <form onSubmit={handleSubmit} className="searchbar-form">
        <input
          type="text"
          placeholder="Search movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </div>
  );
}
