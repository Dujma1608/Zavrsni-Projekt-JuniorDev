import LookingForRow from "./LookingForRow";
import "./Table.css";
import { useContext } from "react";
import { DonationsContext } from "../context/DonationsContext";
const LookingForTable = () => {

  const { donations, setDonations } = useContext(DonationsContext);
  const lookingForDonations = donations.lookingFor;


  return (
    <table className="lookingForTable">
      <thead>
        <tr>
          <th>Item</th>
          <th>Value</th>
          <th>Description</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {lookingForDonations.map((donation) => (
          <LookingForRow
            key={donation.id}
            donation={donation}
          />
        ))}
      </tbody>
    </table>
  );
};

export default LookingForTable;
