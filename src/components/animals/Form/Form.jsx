import { useEffect, useState, useRef } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import LoadingComponent from "../../LoadingComponent/LoadingComponent";
import { AnimalService } from "../../../services/AnimalService";
import { NameInput, AgeInput, TypeInput, BreedInput, IdChipInput, DescriptionInput, DateInput } from '../../index'

const Form = () => {
  const formDiv = useRef(null);
  const navigate = useNavigate();

  const [breedSelect, setBreedSelect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (formDiv.current) {
      formDiv.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    animalType: "",
    age: 1,
    isAdopted: false,
    description: "",
    typeBreed: "",
    idChip: false,
    lastChecked: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      AnimalService.addAnimal(formData).catch((err) => {
        console.log(err.message);
      });
      setFormData({
        name: "",
        animalType: "",
        age: 0,
        isAdopted: false,
        description: "",
        typeBreed: "",
        idChip: false,
        lastChecked: "",
      });
      setIsLoading(false);
      navigate("/animals");
    }, 1200);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (e.target.name === "animalType") {
      if (e.target.value !== "--select animal--") {
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
    <div id="form-animal-container" ref={formDiv}>
      <form id="animal-form" onSubmit={handleSubmit}>
        <label>Animal name:</label>
        <NameInput handleChange={handleChange} form={formData} />
        <label>Select animal type:</label>
        <TypeInput handleChange={handleChange} form={formData} />
        {breedSelect && (
          <BreedInput
            form={formData}
            handleChange={handleChange}
            animalType={formData.animalType}
          />
        )}
        <label>Age:</label>
        <AgeInput form={formData} handleChange={handleChange} />
        <label>Last examination:</label>
        <DateInput handleChange={handleChange} form={formData} />
        <label>Chipped:</label>
        <IdChipInput handleChange={handleChangeChecked} form={formData} />
        <label>Description:</label>
        <DescriptionInput handleChange={handleChange} form={formData} />
        <button id="submit-animal" type="submit" disabled={isLoading}>
          {isLoading ? <LoadingComponent /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
