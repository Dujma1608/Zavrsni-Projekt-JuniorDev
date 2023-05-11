const IdChipInput = ({ handleChange, form }) => {
  return (
    <input
      type="checkbox"
      value={form.idChip}
      name="idChip"
      checked={form.idChip}
      onChange={handleChange}
    />
  );
};

export default IdChipInput;