import './Notification.css'
import { Important } from "../../../utils/utils";
import { useContext } from "react";
import RoleContext from "../../../context/RoleContext";
import { NotificationService } from "../../../services/NotificationService";
const Notification = ({ notification, setNotifications }) => {

  const { isAdmin } = useContext(RoleContext);
  const deleteNotification = () => {
    NotificationService.deleteNotification(notification.id).then((res) => {
      NotificationService.getNotifications().then((res) => {
        setNotifications(res);
      });
    });
  };
  const formatDate = (date) => {
    const formattedDate = date.split("-").reverse().join("/");
    return formattedDate;
  }
  return (
    <Important isImportant={notification.isImportant}>
      <div className="notification-header">
        <h3>{notification.title}</h3>
        <p>{formatDate(notification.date)}</p>
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
