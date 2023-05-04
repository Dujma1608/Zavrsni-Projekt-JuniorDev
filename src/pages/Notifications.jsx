import { useContext, useEffect, useState } from "react";
import RoleContext from "../context/RoleContext";
import NotificationList from "../components/NotificationList";
import axios from "axios";
import './Notifications.css'
import NotificationForm from "../components/NotificationForm";
import axiosInstance from "../app/axiosInstance";

const Notifications = () => {

  const { isAdmin } = useContext(RoleContext);
  const [newNotification, setNewNotification] = useState(false)
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    axiosInstance.get('/notifications')
    .then(res => {
      setNotifications(res.data)
    })
  }, [])

  return (
    <div className="notifications-container">
        {isAdmin && (
          <button
            id="new-notification"
            onClick={() => setNewNotification(true)}
          >
            New Notification
          </button>
        )}
        <NotificationList
          notifications={notifications}
          setNotifications={setNotifications}
        />
      {newNotification && (
        <div>
          <NotificationForm
            setNotifications={setNotifications}
            setNewNotification={setNewNotification}
          />
        </div>
      )}
    </div>
  );
};
export default Notifications;
