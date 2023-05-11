import "./About.css";
import { Icon } from "semantic-ui-react";
import MapContainer from "../../components/GoogleMap/MapContainer";
const About = () => {
  return (
    <div className="aboutUsContainer">
      <div className="grid">
        <div className="data-about">
          <h2>CozyHouse</h2>
          <div className="cell">
            <Icon name="phone" size="large" />
            <span>+ 385 95 5123 666</span>
          </div>
          <div className="cell">
            <Icon name="location arrow icon" size="large" />
            <span> 21000 Split, Klarina ulica 3</span>
          </div>
          <div className="cell">
            <Icon name="envelope" size="large" />
            <span> josipdujmovic12@gmail.com</span>
          </div>
        </div>
        <div className="contact-form">
          <h2>Contact us:</h2>
          <h4>Email:</h4>
          <input
            type="email"
            name="email"
            placeholder="Enter your email here..."
            onChange={(e) => e.target.value}
          />
          <h4>Message:</h4>
          <textarea
            rows="4"
            cols="25"
            placeholder="Enter your message..."
            onChange={(e) => e.target.value}
          />
        </div>
        <div className="span-2">
          <div className="MapContainer">
            <MapContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
