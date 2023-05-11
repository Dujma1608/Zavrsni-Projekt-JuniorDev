const AdoptedInput = ({ handleChange, form }) => {
  return (
    <input
      type="checkbox"
      value={form.isAdopted}
      name="isAdopted"
      checked={form.isAdopted}
      onChange={handleChange}
    />
  );
};

export default AdoptedInput;
