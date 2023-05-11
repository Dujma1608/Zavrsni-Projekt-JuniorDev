import "./ToggleRole.css";
import { useContext } from "react";
import RoleContext from "../../context/RoleContext";
const ToggleRole = () => {
  const { isAdmin, toggleRole } = useContext(RoleContext);

  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={isAdmin} onChange={toggleRole} />
        <span className="slider round"></span>
      </label>
      <label id="roleLabel">{isAdmin ? "Admin" : "User"}</label>
    </div>
  );
};
export default ToggleRole;
