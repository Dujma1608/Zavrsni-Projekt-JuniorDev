import { useState, useEffect, useContext } from "react";
import {
  AnimalCard,
  AdoptedFilter,
  TypeFilter,
  LoadingComponent,
  AnimalSearch,
} from "../../components";
import { AnimalsContext } from "../../context/AnimalsContext";
import "./AnimalDashboard.css";
import { AnimalService } from "../../services/AnimalService";
const AnimalDashboard = () => {
  const { animals, setAnimals } = useContext(AnimalsContext);

  const [adoptionFilter, setAdoptionFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [filteredAnimals, setFilteredAnimals] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [animalSearch, setAnimalSearch] = useState("");
  const [searchedAnimals, setSearchedAnimals] = useState([]);
  const [message, setMessage] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    AnimalService.getAnimals().then((response) => {
      setAnimals(response);
      setIsLoading(false);
    });
  }, [setAnimals]);

  useEffect(() => {
    var filtered = animals.filter((animal) => {
      if (
        typeFilter === "all" ||
        animal.animalType === typeFilter ||
        (typeFilter === "other" &&
          animal.animalType !== "dog" &&
          animal.animalType !== "cat")
      ) {
        if (
          adoptionFilter === "all" ||
          animal.isAdopted.toString() === adoptionFilter
        ) {
          return true;
        }
      } else return false;
    });
    setFilteredAnimals(filtered)
  }, [animals, typeFilter, adoptionFilter]);

  const handleSearch = () => {
    setIsLoading(true);
    const searchFilter = filteredAnimals.filter(
      (animal) => animal.name === animalSearch
    );
    if(searchFilter.length == 0) setMessage(true);
    else setMessage(false);
    setSearchedAnimals(searchFilter);
    setIsLoading(false);
  };
  const handleReset = () => {
    setAnimalSearch("");
    setMessage(false);
    setSearchedAnimals([]);
    setTypeFilter("all");
    setAdoptionFilter("all");
  }
  return (
    <div className="dashboard">
      <div className="filter-container">
        <AdoptedFilter
          setAdoptionFilter={setAdoptionFilter}
          adoptionFilter={adoptionFilter}
        />
        <TypeFilter setTypeFilter={setTypeFilter} typeFilter={typeFilter} />
        <AnimalSearch
          animalSearch={animalSearch}
          setAnimalSearch={setAnimalSearch}
        />
        <button onClick={handleSearch} id="searchBtn">
          Search
        </button>
        <button id="resetBtn" onClick={handleReset}>Reset</button>
        {message && (
          <p>No result.</p>
        )}
      </div>
      <div className="grid">
        {isLoading ? (
          <LoadingComponent />
        ) : (
          (searchedAnimals.length > 0 ? searchedAnimals : filteredAnimals).map((animal) => (
            <AnimalCard key={animal.id} animal={animal} setAnimals={setAnimals}/>
          ))
        )}
      </div>
    </div>
  );
};

export default AnimalDashboard;
