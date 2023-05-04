import axios from "axios";
import RoleContext from "../context/RoleContext";
import { useContext } from "react";
import { DonationsContext } from "../context/DonationsContext";
import { filterDonations } from "./utils";
import axiosInstance from "../app/axiosInstance";

const LookingForRow = ({ donation }) => {
  const { donations, setDonations } = useContext(DonationsContext);
  const { isAdmin } = useContext(RoleContext);
  const handleDelete = () => {
    axiosInstance.delete(`/donations/${donation.id}`);
    const data = {
      lookingFor: donations.lookingFor.filter(
        (item) => item.id !== donation.id
      ),
      offering: donations.offering,
      donated: donations.donated,
    };
    setDonations(data);
  };

  const handleDonated = () => {
    axiosInstance.patch(`/donations/${donation.id}`, {
        type: "donated",
      })
      .then(res => {
        axiosInstance.get('/donations').then((res) => {

        const data = filterDonations(res.data);
        setDonations(data);
        });
      })

  };
  return (
    <tr>
      <td>{donation.item}</td>
      <td>{donation.value}$</td>
      <td>{donation.description}</td>
      <td id="btnTd">
        {isAdmin ? (
          <div className="optionButtons">
            <button id="donateLookingFor" onClick={handleDonated}>
              Donated
            </button>
            <label id="deleteLookingFor" onClick={handleDelete}>
              Delete
            </label>
          </div>
        ) : (
          <div className="optionButtons">
            <button id="donateLookingFor" onClick={handleDonated}>Donate</button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default LookingForRow;
