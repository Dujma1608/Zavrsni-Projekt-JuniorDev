import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../app/axiosInstance";

const Form = () => {
  const formDiv = useRef(null);
  const navigate = useNavigate();

  const [breedSelect, setBreedSelect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [types, setTypes] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [fishes, setFishes] = useState([])
  const[parrots, setParrots] = useState([])
  const [cats, setCats] = useState([]);

  useEffect(() => {

    async function getData(){
      const [types, dogs, cats, fishes, parrots] = await Promise.all([
        axiosInstance.get("/types"),
        axiosInstance.get("/dogBreeds"),
        axiosInstance.get("/catBreeds"),
        axiosInstance.get("/fishBreeds"),
        axiosInstance.get("/parrotBreeds"),
      ]);
      setTypes(types.data);
      setDogs(dogs.data);
      setCats(cats.data);
      setFishes(fishes.data);
      setParrots(parrots.data);
    }
    if (formDiv.current) {
      formDiv.current.scrollIntoView({ behavior: "smooth" });
    }
    getData();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    age: 0,
    isAdopted: false,
    description: "",
    image: "",
    idChip: false,
    lastChecked: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);

    axios.post("http://localhost:3001/animals", formData)
    .catch(err => {
      console.log(err.message)
    });
    setFormData({
      name: "",
      type: "",
      age: 0,
      isAdopted: false,
      description: "",
      image: "",
      idChip: false,
      lastChecked: "",
    });
    setIsLoading(false);
    navigate("/animals");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;


    if(e.target.name === 'type'){
      if(e.target.value !== '--select animal--'){
        setBreedSelect(true);
      }
    }
    setFormData({ ...formData, [name]: value });
  };
  const handleChangeChecked = (e) => {
    const checked = e.target.checked;
    const inputFieldName = e.target.name;
    setFormData({ ...formData, [inputFieldName]: checked });
  };
  return (
    <div id="form-animal-container">
      {isLoading ? (
        <div>Loading........</div>
      ) : (
      <form id="animal-form" onSubmit={handleSubmit} ref={formDiv}>
        <label>Animal name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Select animal type:</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option>--select animal--</option>
          {types.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
        {breedSelect && (
          <select name="image" value={formData.image} onChange={handleChange}>
            <option>--select breed--</option>
            {formData.type === "dog" ? (
              <>
                {dogs.map((dog) => (
                  <option key={dog}>{dog}</option>
                ))}
              </>
            ) : formData.type === "cat" ? (
              <>
                {cats.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </>
            ) : formData.type === "parrot" ? (
              <>
                {parrots.map((parrot) => (
                  <option key={parrot}>{parrot}</option>
                ))}
              </>
            ) : (
              <>
                {fishes.map((fish) => (
                  <option key={fish}>{fish}</option>
                ))}
              </>
            )}
          </select>
        )}
        <label>Age:</label>
        <input
          type="number"
          value={formData.age}
          min={0}
          name="age"
          required
          onChange={handleChange}
        />
        <label>Last examination:</label>
        <input
          type="date"
          value={formData.lastChecked}
          name="lastChecked"
          onChange={handleChange}
        />
        <label>Chipped:</label>
        <input
          type="checkbox"
          value={formData.idChip}
          name="idChip"
          onChange={handleChangeChecked}
        />
        <label>Description:</label>
        <textarea
          value={formData.description}
          name="description"
          onChange={handleChange}
        />
        <button id="submit-animal" type="submit">
          Submit
        </button>
      </form>
      )}
    </div>
  );
};

export default Form;
