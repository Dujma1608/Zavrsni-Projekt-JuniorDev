import "./App.css";
import RoleContext from "./context/RoleContext";
import { useState, useEffect } from "react";
import { DonationsContext } from "./context/DonationsContext";
import { AnimalsContext} from "./context/AnimalsContext"
import NavBar from "./components/Header/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import HomeContainerTop from "./components/Header/HomeContainerTop";
import Footer from "./components/Footer/Footer";
function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const [donations, setDonations] = useState({
    lookingFor: [],
    offering: [],
    donated: [],
  });


  const [animals, setAnimals] = useState([]);


  const toggleRole = () => {
    setIsAdmin(!isAdmin);
    navigate("/")
  };
  return (
    <>
      <RoleContext.Provider value={{ isAdmin, toggleRole }}>
        <AnimalsContext.Provider value={{ animals, setAnimals }}>
          <div className="homeTop">
            <NavBar />
            <HomeContainerTop />
          </div>
          <DonationsContext.Provider value={{ donations, setDonations }}>
            <Outlet />
            <Footer/>
          </DonationsContext.Provider>
        </AnimalsContext.Provider>
      </RoleContext.Provider>
    </>
  );
}

export default App;
