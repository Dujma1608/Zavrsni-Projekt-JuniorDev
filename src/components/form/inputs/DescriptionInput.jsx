const DescriptionInput = ({ handleChange, updateForm }) => {
  return (
    <textarea
      value={updateForm.description}
      name="description"
      onChange={handleChange}
    />
  );
};

export default DescriptionInput;