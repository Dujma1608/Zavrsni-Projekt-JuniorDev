import { useContext, useEffect, useState, useRef } from "react";
import "./Donations.css";
import {
  LookingForTable,
  OfferingTable,
  DonatedTable,
  DonationForm,
} from "../../components";
import { DonationsContext } from "../../context/DonationsContext";
import RoleContext from "../../context/RoleContext";
import { filterDonations } from "../../utils/utils";
import { DonationService } from "../../services/DonationService";
const Donations = () => {
  const donationFormDiv = useRef(null);
  const { setDonations } = useContext(DonationsContext);

  const { isAdmin } = useContext(RoleContext);
  const [newDonation, setNewDonation] = useState(false);

  useEffect(() => {
    DonationService.getDonations().then((res) => {
      const data = filterDonations(res);
      setDonations(data);
    });

    if (!isAdmin) {
      setNewDonation(false);
    }
  }, [isAdmin]);

  const handleClick = () => {
    setNewDonation(true);
    donationFormDiv.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="donations-container">
      <button id="new-donation" onClick={handleClick}>
        New Donation
      </button>
      <div className="tables-container">
        <div>
          <h2>Looking For Donations</h2>
          <LookingForTable />
        </div>
        <div>
          <h2>Offering Donations</h2>
          <OfferingTable />
        </div>
        <div>
          <h2>Donated Donations</h2>
          <DonatedTable />
        </div>
      </div>
      <div style={{ marginTop: "5px", height: "40px" }} ref={donationFormDiv}></div>
      <div className="donation-form-container">
        {newDonation && <DonationForm setNewDonation={setNewDonation} />}
      </div>
    </div>
  );
};
export default Donations;
