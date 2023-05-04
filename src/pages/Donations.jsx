import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Donations.css";
import LookingForTable from "../components/LookingForTable";
import OfferingTable from "../components/OfferingTable";
import DonatedTable from "../components/DonatedTable";
import DonationForm from "../components/DonationForm";
import { DonationsContext } from "../context/DonationsContext";
import RoleContext from "../context/RoleContext";
import { filterDonations } from "../components/utils";
import axiosInstance from "../app/axiosInstance";
const Donations = () => {
  const { donations, setDonations } = useContext(DonationsContext);

  const { isAdmin } = useContext(RoleContext);
  const [newDonation, setNewDonation] = useState(false);

  useEffect(() => {
    axiosInstance.get('/donations').then((res) => {
      const data = filterDonations(res.data)
      setDonations(data);
    });
  }, []);

  return (
    <div className="donations-container">
      <div className="donations">
        {isAdmin && (
          <button id="new-donation" onClick={() => setNewDonation(true)}>
            New Donation
          </button>
        )}
        <div>
          <h2>Looking For Donations</h2>
          <LookingForTable />
        </div>
        <div>
          <h2>Offering Donations</h2>
          <OfferingTable />
        </div>
        <div>
          <h2>Already Donated Donations</h2>
          <DonatedTable />
        </div>
      </div>
      {newDonation && isAdmin && (
        <div className="donation-form-container">
          <DonationForm setNewDonation={setNewDonation} />
        </div>
      )}
    </div>
  );
};
export default Donations;
