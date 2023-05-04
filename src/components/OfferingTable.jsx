import OfferingRow from "./OfferingRow";
import "./Table.css";
import { useContext } from "react";
import { DonationsContext } from "../context/DonationsContext";
const OfferingTable = () => {

  const { donations } = useContext(DonationsContext);
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
        {donations.offering.map((donation) => (
          <OfferingRow key={donation.id} donation={donation} />
        ))}
      </tbody>
    </table>
  );
};

export default OfferingTable;
