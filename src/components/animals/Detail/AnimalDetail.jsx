import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { useEffect } from "react";
import './AnimalDetail.css'
import RoleContext from "../../../context/RoleContext";
import UpdateAnimal from '../Form/Update/UpdateAnimal'
import { AnimalService } from '../../../services/AnimalService'
const Animal = () => {
  const { isAdmin } = useContext(RoleContext);

  const [update, setUpdate] = useState(false);
  const [animal, setAnimal] = useState(null);
  const { id } = useParams();

  const loadAnimal = async () => {
    await AnimalService.getAnimal(id).then((res) => {
      setAnimal(res);
    });
  };
  useEffect(() => {
    if (id) loadAnimal();
  }, [id, loadAnimal]);
  if (!animal) {
    return <div>Loading...</div>;
  }

  const formatDate = (date) => {
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString("en-GB");
    console.log(formattedDate);
    return formattedDate;
  };
  
  return (
    <div className="animal-container">
      <h1>Get to know your friend a little bit more.</h1>
      {update ? (
        <UpdateAnimal
          animal={animal}
          setUpdate={setUpdate}
          setAnimal={setAnimal}
        />
      ) : (
        <div className="animal-detail">
          <div className="animal-container-inward">
            <div>
              <img
                id="detail-pic"
                alt={animal.id}
                src={`/assets/${animal.typeBreed}.png`}
              />
            </div>
            <div className="information-detail">
              <div className="detail-flex">
                <p>Name:</p>
                <h4>{animal.name}</h4>
              </div>
              <div className="detail-flex">
                <p>Animal type:</p>
                <h4>{animal.animalType}</h4>
              </div>
            </div>
            <div className="information-detail">
              <div className="detail-flex">
                <p>Age:</p>
                <h4>{animal.age}</h4>
              </div>
              <div className="detail-flex">
                <p>Description:</p>
                <h4>{animal.description}</h4>
              </div>
              <div className="detail-flex">
                <p>Last examination:</p>
                <h4>{formatDate(animal.lastChecked)}</h4>
              </div>
            </div>
            {animal.isAdopted && (
              <div id="adopt-label">
                <label>Adopted</label>
              </div>
            )}
          </div>
          {isAdmin && (
            <button id="editBtn" onClick={() => setUpdate(true)}>
              Edit
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Animal;
