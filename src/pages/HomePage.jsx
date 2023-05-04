import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import HomePageAnimals from '../components/HomePageAnimals'
import "./HomePage.css";
import HomeDonationList from "../components/HomeDonationList";

const HomePage = () => {
  return (
    <div className="homepageAnimals">
      <h1 id="friend-h1">Our friends who are looking for a house</h1>
      <HomePageAnimals />
      <HomeDonationList />
    </div>
  );
};
export default HomePage;
