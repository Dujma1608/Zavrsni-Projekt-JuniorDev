import { useState, useEffect } from "react";
import './DonationForm.css'
import { useContext } from "react";
import { DonationsContext } from "../context/DonationsContext";
import axios from 'axios'
const DonationForm = ({ setNewDonation }) => {

  const { donations, setDonations } = useContext(DonationsContext);

  const donationType = ["food", "medication", "toys", "vet expenses"];

  const [formData, setFormData] = useState({
    type: "lookingFor",
    item: "food",
    value: "",
    description: "",
  });
  const donation = {
    type: formData.type,
    item: formData.item,
    value: formData.value,
    description: formData.description,
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/donations/", donation).then((res) => {
      axios.get("http://localhost:3001/donations").then(res => {

      const newData = res.data.filter(donation => donation.type === 'lookingFor');

      const data = {
        lookingFor: newData,
        offering: donations.offering,
        donated: donations.donated
      }
      setDonations(data)
        setNewDonation(false);
        setFormData({
          item: "",
          value: "",
          description: "",
        });
      })
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <form id="donation-form" onSubmit={handleSubmit}>
      <label>Select donation item:</label>
      <select name="item" value={formData.item} onChange={handleChange} >
        {donationType.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <label>Select the cost of donation:</label>
      <input
        type="number"
        name="value"
        min='0'
        value={formData.value}
        onChange={handleChange}
        required
      />
      <label>Description:</label>
      <textarea
      id="textarea"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <div className="buttons">
        <button id="submit">Submit</button>
        <button id="cancel" onClick={() => setNewDonation(false)}>Cancel</button>
      </div>
    </form>
  );
};

export default DonationForm;