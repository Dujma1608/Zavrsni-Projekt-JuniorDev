import { useState, useEffect, useContext } from "react";
import AdoptedFilter from "../components/form/Filters/AdoptedFilter";
import TypeFilter from "../components/form/Filters/TypeFilter";
import AnimalCard from "./AnimalCard";
import { AnimalsContext } from "../context/AnimalsContext";
import "./AnimalDashboard.css";
import axiosInstance from "../app/axiosInstance";
const AnimalDashboard = () => {

  const { animals, setAnimals} = useContext(AnimalsContext);

  const [adoptionFilter, setAdoptionFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  useEffect(() => {
    axiosInstance.get('/animals').then((response) => {
      setAnimals(response.data);
    })
    .catch(err => {
      console.log(err.message)
    })
  }, []);

  const filteredAnimals = animals.filter((animal) => {
    if (
      typeFilter === "all" ||
      animal.type === typeFilter ||
      (typeFilter === "other" && animal.type !== "dog" && animal.type !== "cat")
    ) {
      if (
        adoptionFilter === "all" ||
        animal.isAdopted.toString() === adoptionFilter
      ) {
        return true;
      }
    } else return false;
  });
  
  return (
      <div className="dashboard">
        <div className="filter-container">
          <AdoptedFilter
            setAdoptionFilter={setAdoptionFilter}
            adoptionFilter={adoptionFilter}
          />
          <TypeFilter setTypeFilter={setTypeFilter} typeFilter={typeFilter} />
        </div>
        <div className="grid">
          {animals.length > 0 ? (
            filteredAnimals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} setAnimals={setAnimals}>
                {animal}
              </AnimalCard>
            ))
          ) : (
            <p>Loading animals...</p>
          )}
        </div>
      </div>
  );
};

export default AnimalDashboard;
