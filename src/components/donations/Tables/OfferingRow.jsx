import { useContext } from "react";
import RoleContext from "../../../context/RoleContext";
import axios from "axios";
import { DonationsContext } from "../../../context/DonationsContext";
import { filterDonations } from "../../../utils/utils";
import axiosInstance from "../../../app/axiosInstance";
import { DonationService } from "../../../services/DonationService";

const OfferingRow = ({ donation }) => {
  

  const { setDonations } = useContext(DonationsContext);
  const { isAdmin } = useContext(RoleContext);

  const handleAccept = () => {
    DonationService.updateDonation(donation.id, "donated").then((res) => {
      DonationService.getDonations().then((res) => {
        const data = filterDonations(res);
        setDonations(data);
      });
    });
  };
  return (
    <tr>
      <td>{donation.item}</td>
      <td>{donation.value}$</td>
      <td>{donation.description}</td>
      <td id="btnTd">{isAdmin && <button id="offeringAccept" onClick={handleAccept}>Accept</button>}</td>
    </tr>
  );
};

export default OfferingRow;
