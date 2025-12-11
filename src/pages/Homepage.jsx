import { useState } from "react";
import Button from "../ui/Button";
import Row from "../ui/Row";
import "./Homepage.css";
import Navbar from "../ui/components/Navbar/Navbar";
import SearchBar from "../ui/components/SearchBar/SearchBar";
import MovieList from "../ui/components/MovieList/MovieList";

function Homepage() {
  return (
    <div>
      <Navbar />
      <SearchBar />

      <MovieList />
    </div>
  );
}

export default Homepage;
