import DateInput from "../form/inputs/DateInput";
import DescriptionInput from "../form/inputs/DescriptionInput";
import NameInput from "../form/inputs/NameInput";
import TypeInput from "../form/inputs/TypeInput";
import BreedInput from "../form/inputs/BreedInput";
import { useNavigate, useParams } from "react-router-dom";
import '../form/Form.css'
import { useState } from "react";
import AgeInput from "../form/inputs/AgeInput";
import IdChipInput from "../form/inputs/IdChipInput";
import AdoptedFilter from "../form/Filters/AdoptedFilter";
import AdoptedInput from "../form/inputs/AdoptedInput";
import axiosInstance from "../../app/axiosInstance";

const UpdateAnimal = ({ animal, setUpdate, setAnimal }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [updateForm, setUpdateForm] = useState({
    name: animal.name,
    type: animal.type,
    age: animal.age,
    idChip: animal.idChip,
    isAdopted: animal.isAdopted,
    lastChecked: animal.lastChecked,
    image: animal.image,
    description: animal.description,
  });

  const handleUpdate = () => {
    axiosInstance.put(`/animals/${id}`, updateForm).then((resp) => {
      axiosInstance.get(`/animals/${id}`).then((res) => {
        setAnimal(res.data);
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
    setFormData({ ...formData, [inputFieldName]: checked });
  };
  return (
    <>
      <form id="animal-form" onSubmit={handleUpdate}>
        <label>Name:</label>
        <NameInput updateForm={updateForm} handleChange={handleChange} />
        <label>Type:</label>
        <TypeInput updateForm={updateForm} handleChange={handleChange} />
        <label>Breed:</label>
        <BreedInput
          updateForm={updateForm}
          handleChange={handleChange}
          type={animal.type}
        />
        <label>Age:</label>
        <AgeInput updateForm={updateForm} handleChange={handleChange} />
        <label>Last Checked:</label>
        <DateInput updateForm={updateForm} handleChange={handleChange} />
        <label>Description:</label>
        <DescriptionInput updateForm={updateForm} handleChange={handleChange} />
        <label>Chipped:</label>
        <IdChipInput
          updateForm={updateForm}
          handleChange={handleChangeChecked}
        />
        <label>Adopted:</label>
        <AdoptedInput
          updateForm={updateForm}
          handleChange={handleChangeChecked}
        />
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
