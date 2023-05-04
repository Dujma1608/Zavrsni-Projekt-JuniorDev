const AgeInput = ({ handleChange, updateForm }) => {
  return (
    <input
      type="text"
      value={updateForm.age}
      name="age"
      required
      onChange={handleChange}
    />
  );
};
export default AgeInput;