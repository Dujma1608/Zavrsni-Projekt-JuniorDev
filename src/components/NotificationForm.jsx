import "./NotificationForm.css";
import { useState } from "react";
import axios from "axios";
import axiosInstance from "../app/axiosInstance";
const NotificationForm = ({ setNotifications, setNewNotification }) => {
  const date = new Date();

  const [titleError, setTitleError] = useState('');
  const [textError, setTextError] = useState('');

  const [formData, setFormData] = useState({
    title: "",
    date: date.toLocaleDateString("en-US"),
    text: "",
    isImportant: false,
  });

  const notification = {
    title: formData.title,
    date: formData.date,
    text: formData.text,
    isImportant: formData.isImportant,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.title.length < 20){
      setTitleError("Minimum 20 characters long");
    }
    else if(formData.text.length < 10 || formData.text.length > 200){
      setTextError("Between 10 and 200 characters");
    }
    else{
      axiosInstance.post("/notifications", notification).then((res) => {
        axiosInstance.get("/notifications").then((res) => {
          setNotifications(res.data);
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
  }

  const handleChangeCheckbox = (e) => {
    const checked = e.target.checked;
    const inputField = e.target.name;
    setFormData({ ...formData, [inputField]: checked });
  };

  return (
    <form onSubmit={handleSubmit} className="notification-form">
      <div className="form-group">
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          required
          value={formData.title}
          onChange={handleChange}
          className="form-input"
        />
        {titleError && (
          <p style={{ color: "red", fontWeight: "bold" }}>{titleError}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="text">Text: </label>
        <textarea
          name="text"
          id="text"
          value={formData.text}
          required
          onChange={handleChange}
          className="form-input"
        />
        {textError && (
          <p style={{ color: "red", fontWeight: "bold" }}>{textError}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="important">Important: </label>
        <input
          type="checkbox"
          name="isImportant"
          id="important"
          value={formData.isImportant}
          onChange={handleChangeCheckbox}
          className="form-checkbox"
        />
      </div>
      <button type="submit" id="notification-submit">
        Submit
      </button>
    </form>
  );
};

export default NotificationForm;
