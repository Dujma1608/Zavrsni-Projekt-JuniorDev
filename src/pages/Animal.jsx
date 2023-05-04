import { useParams } from "react-router-dom";
import axiosInstance from "../app/axiosInstance";
import { useContext, useState } from "react";
import { useEffect } from "react";
import "./Animal.css";
import RoleContext from "../context/RoleContext";
import UpdateAnimal from "../components/Update/UpdateAnimal";
const Animal = () => {
  const { isAdmin } = useContext(RoleContext);

  const [update, setUpdate] = useState(false);
  const [animal, setAnimal] = useState({});
  const { id } = useParams();
  const loadAnimal = () => {
    axiosInstance.get(`/animals/${id}`).then((res) => {
      setAnimal(res.data);
    });
  };
  useEffect(() => {
    if (id) loadAnimal();
  }, [id, loadAnimal]);

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
                src={`/assets/${animal.image}.png`}
              />
            </div>
            <div className="information-detail">
              <div className="detail-flex">
                <p>Name:</p>
                <h4>{animal.name}</h4>
              </div>
              <div className="detail-flex">
                <p>Animal type:</p>
                <h4>{animal.type}</h4>
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
                <h4>{animal.lastChecked}</h4>
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
