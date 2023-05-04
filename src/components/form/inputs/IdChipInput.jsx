const IdChipInput = ({ handleChange, updateForm }) => {
  return (
    <input
      type="checkbox"
      value={updateForm.idChip}
      name="idChip"
      checked={updateForm.idChip}
      onChange={handleChange}
    />
  );
};

export default IdChipInput;