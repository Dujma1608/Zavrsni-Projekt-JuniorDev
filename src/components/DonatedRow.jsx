import { useContext } from "react";
import RoleContext from "../context/RoleContext";
import axios from "axios";
import { filterDonations } from "./utils";
import axiosInstance from "../app/axiosInstance";

const DonatedRow = ({ donation, donations, setDonations }) => {

  const { isAdmin } = useContext(RoleContext);

  const handleDelete = () => {
    axiosInstance.delete(`/donations/${donation.id}`);
    const data = {
      lookingFor: donations.lookingFor,
      offering: donations.offering,
      donated: donations.donated.filter(
        (item) => item.id !== donation.id
      ),
    };
    setDonations(data);
  };

  const handleRepeat = () => {
    axiosInstance.patch(`/donations/${donation.id}`, {
        type: "lookingFor",
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
      <td id="btnTd">
        {isAdmin && (
          <div className="optionButtons">
            <button id="donateLookingFor" onClick={handleRepeat}>Repeat</button>
            <label id="deleteLookingFor" onClick={handleDelete}>
              Delete
            </label>
          </div>
        )}
      </td>
    </tr>
  );
};

export default DonatedRow;
