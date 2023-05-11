import { arrays } from "../../../../utils/arrays";
const TypeInput = ({ handleChange, form }) => {
  return (
    <select name="animalType" value={form.animalType} onChange={handleChange}>
      <option>--select animal type--</option>
      {arrays.types.map((type) => (
        <option key={type}>{type}</option>
      ))}
    </select>
  );
};
export default TypeInput;
