const NameInput = ({ handleChange, form }) => {
  return (
    <input
      type="text"
      name="name"
      value={form.name}
      onChange={handleChange}
    />
  );
};
export default NameInput;