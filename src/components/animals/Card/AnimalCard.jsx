import "./AnimalCard.css";
import { Link } from "react-router-dom";
import { Card } from "../../../utils/utils";
import { AnimalService } from "../../../services/AnimalService";

const AnimalCard = ({ animal, setAnimals }) => {
  
  const handleAdopt = () => {
    AnimalService.updateAnimalAdoption(animal.id, true)
      .then((res) => {
        AnimalService.getAnimals().then((data) => {
          setAnimals(data);
        });
      });
  };
  return (
    <Card isAdopted={animal.isAdopted}>
      <img
        id="animalPic"
        alt={`animal${animal.id}`}
        src={`/assets/${animal.typeBreed}.png`}
      />
      <div>
        <h3>{animal.name}</h3>
      </div>
      <div>
        {animal.isAdopted ? (
          <p style={{ color: "red", fontWeight: "bold"}}>Adopted</p>
        ) : (
          <button id="adoptBtn" onClick={handleAdopt}>
            Adopt
          </button>
        )}
        <Link to={`/animals/${animal.id}`}>
          <label id="detail-label">Details</label>
        </Link>
      </div>
    </Card>
  );
};

export default AnimalCard;
