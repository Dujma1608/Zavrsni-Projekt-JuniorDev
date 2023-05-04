import { useState } from "react";
import './Filter.css'
const AdoptedFilter = ({ adoptionFilter, setAdoptionFilter }) => {
  return (
    <div className="filter">
      <h4>Filter:</h4>
      <div className="filterOptions">
        <div>
          <input
            type="radio"
            name="adopted"
            value="all"
            id="all"
            checked={adoptionFilter === "all"}
            onChange={(e) => setAdoptionFilter(e.target.value)}
          />{" "}
          <label htmlFor="all">all</label>
        </div>
        <div>
          <input
            type="radio"
            name="adopted"
            value="true"
            id="true"
            checked={adoptionFilter === "true"}
            onChange={(e) => setAdoptionFilter(e.target.value)}
          />{" "}
          <label htmlFor="true">adopted</label>
        </div>
        <div>
          <input
            type="radio"
            name="adopted"
            value="false"
            id="false"
            checked={adoptionFilter === "false"}
            onChange={(e) => setAdoptionFilter(e.target.value)}
          />{" "}
          <label htmlFor="false">Not adopted</label>
        </div>
      </div>
    </div>
  );
};
export default AdoptedFilter;
