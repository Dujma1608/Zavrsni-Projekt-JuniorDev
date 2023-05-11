import DonatedRow from "./DonatedRow";
import "./Table.css";
import { useContext } from "react";
import { DonationsContext } from "../../../context/DonationsContext";
const DonatedTable = () => {

  const { donations, setDonations } = useContext(DonationsContext);
  const donated = donations.donated;
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Value</th>
          <th>Description</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {donated.map((donation) => (
          <DonatedRow key={donation.id} donation={donation} donations={donations} setDonations={setDonations}/>
        ))}
      </tbody>
    </table>
  );
};

export default DonatedTable;
