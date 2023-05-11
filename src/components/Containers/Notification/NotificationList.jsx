import Notification from '../../Notifications/Card/Notification'
import './NotificationList.css'
const NotificationList = ({ notifications, setNotifications }) => {


  const compareDatesAscending = (a, b) => {
    const dateA = new Date(a.date.split("-").reverse().join("-"));
    const dateB = new Date(b.date.split("-").reverse().join("-"));
    return dateB - dateA;
  };

  notifications.sort(compareDatesAscending);
  return (
    <div className="notification-list">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          setNotifications={setNotifications}
        />
      ))}
    </div>
  );
};

export default NotificationList;
