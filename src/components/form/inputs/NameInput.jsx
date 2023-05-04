const NameInput = ({ handleChange, updateForm }) => {
  return (
    <input
      type="text"
      name="name"
      value={updateForm.name}
      onChange={handleChange}
    />
  );
};
export default NameInput;