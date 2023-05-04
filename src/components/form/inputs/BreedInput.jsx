import axiosInstance from "../../../app/axiosInstance";
import { useState, useEffect } from "react";
const BreedInput = ({ handleChange, updateForm, type }) => {
  const [dogs, setDogs] = useState([]);
  const [fishes, setFishes] = useState([]);
  const [parrots, setParrots] = useState([]);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    async function getData() {
      const [dogs, cats, fishes, parrots] = await Promise.all([
        axiosInstance.get("/dogBreeds"),
        axiosInstance.get("/catBreeds"),
        axiosInstance.get("/fishBreeds"),
        axiosInstance.get("/parrotBreeds"),
      ]);
      setDogs(dogs.data);
      setCats(cats.data);
      setFishes(fishes.data);
      setParrots(parrots.data);
    }
    getData();
  }, []);

  return (
    <select name="image" value={updateForm.image} onChange={handleChange}>
      {type === "dog" ? (
        <>
          {dogs.map((dog) => (
            <option key={dog}>{dog}</option>
          ))}
        </>
      ) : type === "cat" ? (
        <>
          {cats.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </>
      ) : type === "parrot" ? (
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
  );
};
export default BreedInput;
