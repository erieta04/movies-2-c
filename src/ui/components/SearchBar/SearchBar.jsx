import { useState } from "react";
import "./Searchbar.css";

export default function SearchBar({ onResults }) {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (query.trim() === "") return;
    // onSearch(query);
    if (!query.trim()) return;

    try {
      const res = await fetch(
        `https://movies2cbackend-production.up.railway.app/api/search/movie?query=${query}`
      );

      if (!res.ok) throw new Error("Search failed");

      const data = await res.json();

      // Στέλνουμε τα αποτελέσματα πίσω στον parent component
      onResults(data);
    } catch (err) {
      console.error(err);
    }
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
