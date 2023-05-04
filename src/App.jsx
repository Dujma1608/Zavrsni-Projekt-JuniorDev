import "./App.css";
import RoleContext from "./context/RoleContext";
import { useState } from "react";
import { DonationsContext } from "./context/DonationsContext";
import { AnimalsContext} from "./context/AnimalsContext"
import NavBar from "./pages/NavBar";
import { Outlet } from "react-router-dom";
import HomeContainerTop from "./pages/HomeContainerTop";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const [donations, setDonations] = useState({
    lookingFor: [],
    offering: [],
    donated: [],
  });

  const [animals, setAnimals] = useState([]);
  const [active, setActive] = useState("home");

  const toggleRole = () => {
    setIsAdmin(!isAdmin);
  };
  return (
    <>
      <RoleContext.Provider value={{ isAdmin, toggleRole }}>
        <AnimalsContext.Provider value={{ animals, setAnimals }}>
          <div className="homeTop">
            <NavBar active={active} setActive={setActive} />
            <HomeContainerTop setActive={setActive} />
          </div>
          <DonationsContext.Provider value={{ donations, setDonations }}>
            <Outlet />
          </DonationsContext.Provider>
        </AnimalsContext.Provider>
      </RoleContext.Provider>
    </>
  );
}

export default App;
