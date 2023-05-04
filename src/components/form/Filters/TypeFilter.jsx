import { useState } from "react";
import './Filter.css'
const TypeFilter = ({ setTypeFilter, typeFilter }) => {
  return (
    <div className="filter">
      <h4>Type: </h4>
      <div className="filterOptions">
        <div>
          <input
            type="radio"
            name="type"
            value="all"
            id="allType"
            checked={typeFilter === "all"}
            onChange={(e) => setTypeFilter(e.target.value)}
          />{" "}
          <label htmlFor="allType">all</label>
        </div>
        <div>
          <input
            type="radio"
            name="type"
            value="dog"
            id="dog"
            checked={typeFilter === "dog"}
            onChange={(e) => setTypeFilter(e.target.value)}
          />{" "}
          <label htmlFor="dog">Dog</label>
        </div>
        <div>
          <input
            type="radio"
            name="type"
            value="cat"
            id="cat"
            checked={typeFilter === "cat"}
            onChange={(e) => setTypeFilter(e.target.value)}
          />{" "}
          <label htmlFor="cat">Cat</label>
        </div>
        <div>
          <input
            type="radio"
            name="type"
            value="other"
            id="other"
            checked={typeFilter === "other"}
            onChange={(e) => setTypeFilter(e.target.value)}
          />{" "}
          <label htmlFor="other">Other</label>
        </div>
      </div>
    </div>
  );
};
export default TypeFilter;
