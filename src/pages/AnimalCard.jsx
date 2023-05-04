import axios from "axios";
import "./AnimalCard.css";
import styled from "styled-components";
import { useState } from "react";
import UpdateAnimal from "../components/Update/UpdateAnimal";
import axiosInstance from "../app/axiosInstance";
import { Link } from "react-router-dom";

const Card = styled.div`
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
const AnimalCard = ({ animal, setAnimals }) => {
  
  const handleAdopt = () => {
    axiosInstance
      .patch(`/animals/${animal.id}`, {
        isAdopted: true,
      })
      .then((res) => {
        axiosInstance.get("/animals").then((res) => {
          setAnimals(res.data);
        });
      });
  };
  return (
    <Card isAdopted={animal.isAdopted}>
      <img
        id="animalPic"
        alt={`animal${animal.id}`}
        src={`/assets/${animal.image}.png`}
      />
      <div>
        <h3>{animal.name}</h3>
      </div>
      <div>
        {animal.isAdopted ? (
          <p style={{ color: "red", fontWeight: "bold"}}>Adopted</p>
        ) : (
          <button id="adoptBtn" onClick={handleAdopt}>
            Adopt
          </button>
        )}
        <Link to={`/animals/${animal.id}`}>
          <label id="detail-label">Details &gt;</label>
        </Link>
      </div>
    </Card>
  );
};

export default AnimalCard;
