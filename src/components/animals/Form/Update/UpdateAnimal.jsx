import { useParams } from "react-router-dom";
import '../Form.css'
import { useEffect, useState, useRef } from "react";
import { AnimalService } from '../../../../services/AnimalService';
import {
  NameInput,
  AgeInput,
  TypeInput,
  BreedInput,
  IdChipInput,
  DescriptionInput,
  DateInput,
  AdoptedInput
} from "../../../index";



const UpdateAnimal = ({ animal, setUpdate, setAnimal }) => {
  const formDiv = useRef(null);
  const { id } = useParams();

  const [updateForm, setUpdateForm] = useState({
    name: animal.name,
    animalType: animal.animalType,
    age: animal.age,
    idChip: animal.idChip,
    isAdopted: animal.isAdopted,
    lastChecked: animal.lastChecked,
    typeBreed: animal.typeBreed,
    description: animal.description,
  });

  useEffect(()=> {
    if (formDiv.current) {
      formDiv.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [])
  const handleUpdate = () => {
    AnimalService.updateAnimal(id, updateForm).then((resp) => {
      AnimalService.getAnimal(id).then((res) => {
        setAnimal(res);
      });
    });

    setUpdate(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm({ ...updateForm, [name]: value });
  };
  const handleChangeChecked = (e) => {
    const checked = e.target.checked;
    const inputFieldName = e.target.name;
    setUpdateForm({ ...updateForm, [inputFieldName]: checked });
  };
  return (
    <>
      <form id="animal-form" onSubmit={handleUpdate} ref={formDiv}>
        <label>Name:</label>
        <NameInput form={updateForm} handleChange={handleChange} />
        <label>Type:</label>
        <TypeInput form={updateForm} handleChange={handleChange} />
        <label>Breed:</label>
        <BreedInput
          form={updateForm}
          handleChange={handleChange}
          animalType={updateForm.animalType}
        />
        <label>Age:</label>
        <AgeInput form={updateForm} handleChange={handleChange} />
        <label>Last Checked:</label>
        <DateInput form={updateForm} handleChange={handleChange} />
        <label>Description:</label>
        <DescriptionInput form={updateForm} handleChange={handleChange} />
        <label>Chipped:</label>
        <IdChipInput form={updateForm} handleChange={handleChangeChecked} />
        <label>Adopted:</label>
        <AdoptedInput form={updateForm} handleChange={handleChangeChecked} />
        <div className="updateBtns">
          <button id="updateBtn" type="submit">
            Update
          </button>
          <button id="cancel" onClick={() => setUpdate(false)}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};
export default UpdateAnimal;
