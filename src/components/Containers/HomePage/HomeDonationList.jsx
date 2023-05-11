import './HomeDonationList.css'
import { Icon } from 'semantic-ui-react'
const HomeDonationList = () => {
    return (
      <div className="home-donation-list">
        <h1>You can help our shelter</h1>
        <div className="first-row">
          <div className="cell">
            <Icon name="food" size="big" />
            <p>Pet food</p>
          </div>
          <div className="cell">
            <Icon name="bus" size="big" />
            <p>Transportation</p>
          </div>
          <div className="cell">
            <Icon name="futbol" size="big" />
            <p>Toys</p>
          </div>
          <div className="cell">
            <Icon name="tint" size="big" />
            <p>Shampoos</p>
          </div>
        </div>
        <div className="second-row">
          <div className="cell">
            <Icon name="pills" size="big" />
            <p>Vitamins</p>
          </div>
          <div className="cell">
            <Icon name="syringe" size="big" />
            <p>Medicines</p>
          </div>
          <div className="cell">
            <Icon name="warehouse" size="big" />
            <p>Sleeping area</p>
          </div>
        </div>
      </div>
    );
}

export default HomeDonationList;