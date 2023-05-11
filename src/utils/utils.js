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

export const Important = styled.div`
    width: 800px;
    box-shadow: ${(props) =>
        props.isImportant ? "1px 2px 10px red" : "1px 2px 10px #888888"};
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  `;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 2px 10px #888888;
  transition: 0.15s;
  padding: 2em;
  background-color: aliceblue;
  border-radius: 10px;
  opacity: ${(props) => (props.isAdopted ? "40%" : "100%")};

  &:hover {
    transform: scale(1.02);
  }
`;

