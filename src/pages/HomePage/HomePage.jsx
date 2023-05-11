import {HomePageAnimals, HomeDonationList} from '../../components'
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepageAnimals">
      <h1 id="friend-h1">Our friends who are looking for a house</h1>
      <HomePageAnimals />
      <HomeDonationList />
    </div>
  );
};
export default HomePage;
