import axios from "axios";
import axiosInstance from "../app/axiosInstance";
import styled from "styled-components";

export const filterDonations = (donationsData) => {
    const data = {
        lookingFor: donationsData.filter(
            (donation) => donation.type === "lookingFor"
        ),
        offering: donationsData.filter(
            (donation) => donation.type === "offering"
        ),
        donated: donationsData.filter(
            (donation) => donation.type === "donated"
        ),
    };
    return data;
}

export const loadAnimal = async (animal, id) => {

    await axiosInstance.get(`/animals/${animal.id}`)
    .then()
    A
}
export const Important = styled.div`
    width: 800px;
    box-shadow: ${(props) =>
        props.isImportant ? "1px 2px 10px red" : "1px 2px 10px #888888"};
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;

    &:hover {
      transform: scale(1.02);
    }
  `;

