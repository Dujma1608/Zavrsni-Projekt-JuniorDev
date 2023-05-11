import { useState } from "react";
import './AnimalSearch.css'
const AnimalSearch = ({ animalSearch, setAnimalSearch }) => {

  return (
    <div>
      <input
        id="searchInput"
        type="text"
        placeholder="Search by name"
        value={animalSearch}
        onChange={(e) => setAnimalSearch(e.target.value)}
      />
    </div>
  );
};

export default AnimalSearch;