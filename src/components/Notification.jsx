import axios from "axios";
import "../pages/Notifications.css";
import { Important } from "./utils";
import { useContext } from "react";
import RoleContext from "../context/RoleContext";
import axiosInstance from "../app/axiosInstance";
const Notification = ({ notification, setNotifications }) => {

  const { isAdmin } = useContext(RoleContext);
  const deleteNotification = () => {
    axiosInstance.delete(`/notifications/${notification.id}`).then((res) => {
      axiosInstance.get("/notifications").then((res) => {
        setNotifications(res.data);
      });
    });
  };
  return (
    <Important isImportant={notification.isImportant}>
      <div className="notification-header">
        <h3>{notification.title}</h3>
        <p>{notification.date}</p>
      </div>
      <div className="notification-body">
        {notification.text}
        {isAdmin && (
          <button id="notification-delete" onClick={deleteNotification}>
            Delete
          </button>
        )}
      </div>
    </Important>
  );
};

export default Notification;
