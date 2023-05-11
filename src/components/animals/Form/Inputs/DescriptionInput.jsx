const DescriptionInput = ({ handleChange, form }) => {
  return (
    <textarea
      value={form.description}
      name="description"
      onChange={handleChange}
    />
  );
};

export default DescriptionInput;