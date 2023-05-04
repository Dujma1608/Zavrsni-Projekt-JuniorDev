const DateInput = ({ handleChange, updateForm }) => {
  return (
    <input
      type="date"
      value={updateForm.lastChecked}
      name="lastChecked"
      onChange={handleChange}
    />
  );
};

export default DateInput;