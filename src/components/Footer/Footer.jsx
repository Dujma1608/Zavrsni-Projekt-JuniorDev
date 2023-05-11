import "./Footer.css";
import { Icon } from "semantic-ui-react";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerFlex">
        <div className="contact">
          <h2>Cozy House</h2>
          <p> +385 95 5123 666</p>
          <p>21000 Split, Klarina ulica 3</p>
          <p></p>
        </div>
        <div className="donation">
          <h2>Donations</h2>
          <p>Make a donation</p>
        </div>
        <div className="information">
          <h2>Information</h2>
          <p>Informations</p>
        </div>
      </div>
      <div className="footerFlexIcons">
        <Icon name="twitter" size="large" />
        <Icon name="facebook" size="large" />
        <Icon name="instagram" size="large" />
        <Icon name="linkedin" size="large" />
      </div>
    </div>
  );
};

export default Footer;
