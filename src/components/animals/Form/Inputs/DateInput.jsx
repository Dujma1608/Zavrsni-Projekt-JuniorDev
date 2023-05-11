const DateInput = ({ handleChange, form }) => {
  return (
    <input
      type="date"
      value={form.lastChecked}
      name="lastChecked"
      onChange={handleChange}
    />
  );
};

export default DateInput;