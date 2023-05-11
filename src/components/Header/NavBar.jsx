import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import ToggleRole from "../Toggle/ToggleRole";
import { useContext, useState } from "react";
import RoleContext from "../../context/RoleContext";
const NavBar = () => {

  const { isAdmin } = useContext(RoleContext);

   const location = useLocation();

   const links = [
     { name: "Home", path: "/" },
     { name: "Friends", path: "/animals" },
     { name: "Donations", path: "/donations" },
     { name: "Informations", path: "/information" },
     { name: "About", path: "/about" },
   ];

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
          {links.map((link) => (
            <li
              key={link.name}
              className={location.pathname === link.path ? "active" : ""}
            >
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}    
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
