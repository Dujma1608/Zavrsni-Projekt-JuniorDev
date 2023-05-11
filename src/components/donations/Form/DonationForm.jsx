import { useState } from "react";
import './DonationForm.css'
import { useContext } from "react";
import { DonationsContext } from "../../../context/DonationsContext";
import { DonationService } from '../../../services/DonationService'
import RoleContext from "../../../context/RoleContext";
const DonationForm = ({ setNewDonation }) => {

  const { isAdmin } = useContext(RoleContext);
  const { donations, setDonations } = useContext(DonationsContext);

  const donationType = ["food", "medication", "toys", "vet expenses", "transportation", "shampoo"];

  const [formData, setFormData] = useState({
    type: "lookingFor",
    item: "food",
    value: 0,
    description: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!isAdmin) formData.type = "offering";
    DonationService.addDonation(formData).then((res) => {
      DonationService.getDonations().then((res) => {
        const newData = res.filter((donation) => {
          if (isAdmin) {
            return donation.type === "lookingFor";
          } else {
            return donation.type === "offering";
          }
        });

        const data = {
          donated: donations.donated,
        };

        if (isAdmin) {
          data.lookingFor = newData;
          data.offering = donations.offering;
        } else {
          data.lookingFor = donations.lookingFor;
          data.offering = newData;
        }

        setDonations(data);
        setNewDonation(false);
        setFormData({
          item: "",
          value: 0,
          description: "",
        });
      });
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