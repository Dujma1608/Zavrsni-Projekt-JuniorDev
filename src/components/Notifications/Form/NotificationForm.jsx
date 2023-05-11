import "./NotificationForm.css";
import { useState } from "react";
import { NotificationService } from '../../../services/NotificationService'
const NotificationForm = ({ setNotifications, setNewNotification }) => {
  const date = new Date();

  const [titleError, setTitleError] = useState("");
  const [textError, setTextError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    date: date.toLocaleDateString("en-US"),
    text: "",
    isImportant: false,
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.length < 20) {
      setTitleError("Minimum 20 characters long");
    } else if (formData.text.length < 10 || formData.text.length > 200) {
      setTextError("Between 10 and 200 characters");
    } else {
      NotificationService.addNotification(formData).then((res) => {
        NotificationService.getNotifications().then((res) => {
          setNotifications(res);
          setNewNotification(false);
          setFormData({
            title: "",
            text: "",
            isImportant: "",
          });
        });
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeCheckbox = (e) => {
    const checked = e.target.checked;
    const inputField = e.target.name;
    setFormData({ ...formData, [inputField]: checked });
  };

  return (
    <form onSubmit={handleSubmit} id="notification-form">
      <label htmlFor="title">Title: </label>
      <input
        type="text"
        name="title"
        id="title"
        required
        value={formData.title}
        onChange={handleChange}
        className="notification-input"
      />
      {titleError && (
        <p style={{ color: "red", fontWeight: "bold" }}>{titleError}</p>
      )}
      <label htmlFor="text">Text: </label>
      <textarea
        name="text"
        id="text"
        value={formData.text}
        required
        onChange={handleChange}
        className="notification-input"
      />
      {textError && (
        <p style={{ color: "red", fontWeight: "bold" }}>{textError}</p>
      )}
      <label htmlFor="important">Important: </label>
      <input
        type="checkbox"
        name="isImportant"
        id="important"
        value={formData.isImportant}
        onChange={handleChangeCheckbox}
      />
      <button type="submit" id="notification-submit">
        Submit
      </button>
    </form>
  );
};

export default NotificationForm;
