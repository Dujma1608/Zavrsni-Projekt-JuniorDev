const AgeInput = ({ handleChange, form }) => {
  return (
    <input
      type="number"
      value={form.age}
      name="age"
      required
      onChange={handleChange}
    />
  );
};
export default AgeInput;