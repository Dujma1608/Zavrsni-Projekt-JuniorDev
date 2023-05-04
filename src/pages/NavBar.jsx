import { Link } from "react-router-dom";
import "./NavBar.css";
import ToggleRole from "../components/ToggleRole";
import { useContext, useState } from "react";
import RoleContext from "../context/RoleContext";
const NavBar = ({active, setActive}) => {

  const { isAdmin } = useContext(RoleContext);

  return (
    <div className="header">
      <div className="logo">
        <h2>Cozy House</h2>
        <p>Shelter for pets in Split</p>
      </div>
      {isAdmin && (
        <div>
          <Link to={"/createAnimal"}>
            <label id="create-animal">Create animal</label>
          </Link>
        </div>
      )}
      <nav>
        <ul>
          <li>
            <ToggleRole />
          </li>
          <li
            className={active === "home" ? "active" : ""}
            onClick={() => setActive("home")}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={active === "animals" ? "active" : ""}
            onClick={() => setActive("animals")}
          >
            <Link to="/animals">Friends</Link>
          </li>
          <li
            className={active === "donations" ? "active" : ""}
            onClick={() => setActive("donations")}
          >
            <Link to="/donations">Donations</Link>
          </li>
          <li
            className={active === "information" ? "active" : ""}
            onClick={() => setActive("information")}
          >
            <Link to="/information">Information</Link>
          </li>
          <li
            className={active === "about" ? "active" : ""}
            onClick={() => setActive("about")}
          >
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
