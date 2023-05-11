import { useContext, useEffect, useState } from "react";
import RoleContext from "../../context/RoleContext";
import { NotificationList, NotificationForm } from "../../components";
import './Notifications.css'
import { NotificationService } from "../../services/NotificationService";

const Notifications = () => {

  const { isAdmin } = useContext(RoleContext);
  const [newNotification, setNewNotification] = useState(false)
  const [notifications, setNotifications] = useState([])

  useEffect(()=> {
    NotificationService.getNotifications().then(res => {
      setNotifications(res)
    })
    if (!isAdmin) {
      setNewNotification(false);
    }
  }, [isAdmin])


  return (
    <div className="notifications-container">
      <div>
        {isAdmin && (
          <button
            id="new-notification"
            onClick={() => setNewNotification(true)}
          >
            New Notification
          </button>
        )}
        <h1>Notifications:</h1>
        <NotificationList
          notifications={notifications}
          setNotifications={setNotifications}
        />
      </div>
      {newNotification && isAdmin && (
        <div className="notification-form-container">
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
