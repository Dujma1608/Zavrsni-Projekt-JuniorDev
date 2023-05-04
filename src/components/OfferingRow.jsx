import { useContext } from "react";
import RoleContext from "../context/RoleContext";
import axios from "axios";
import { DonationsContext } from "../context/DonationsContext";
import { filterDonations } from "./utils";
import axiosInstance from "../app/axiosInstance";

const OfferingRow = ({ donation }) => {
  

  const { setDonations } = useContext(DonationsContext);
  const { isAdmin } = useContext(RoleContext);

  const handleAccept = () => {
    axiosInstance.patch(`/donations/${donation.id}`, {
        type: "donated",
      })
      .then((res) => {
        axiosInstance.get('/donations').then((res) => {
          const data = filterDonations(res.data);
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
