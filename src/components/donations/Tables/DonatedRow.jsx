import { useContext } from "react";
import RoleContext from "../../../context/RoleContext";
import { filterDonations } from "../../../utils/utils";
import { DonationService } from "../../../services/DonationService";

const DonatedRow = ({ donation, donations, setDonations }) => {

  const { isAdmin } = useContext(RoleContext);

  const handleDelete = () => {
    DonationService.deleteDonation(donation.id)
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
    DonationService.updateDonation(donation.id, "lookingFor").then((res) => {
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
