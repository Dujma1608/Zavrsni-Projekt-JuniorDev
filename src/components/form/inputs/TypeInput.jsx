import axios from "axios";
import { useState, useEffect } from "react";
const TypeInput = ({ handleChange, updateForm }) => {

    const [types, setTypes] = useState([]);

     useEffect(() => {
       axios
         .get("http://localhost:3001/types")
         .then((res) => {
           setTypes(res.data);
         })
         .catch((err) => {
           console.log(err.message);
         });
     });

  return (
    <select name="type" value={updateForm.type} onChange={handleChange}>
      {types.map((type) => (
        <option key={type}>{type}</option>
      ))}
    </select>
  );
};
export default TypeInput;