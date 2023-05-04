const AdoptedInput = ({ handleChange, updateForm }) => {
  return (
    <input
      type="checkbox"
      value={updateForm.isAdopted}
      name="idChip"
      checked={updateForm.isAdopted}
      onChange={handleChange}
    />
  );
};

export default AdoptedInput;
