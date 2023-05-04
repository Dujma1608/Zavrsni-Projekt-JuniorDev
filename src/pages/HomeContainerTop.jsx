import { Link } from "react-router-dom";
import './HomeContainerTop.css'
import dogPic from '/assets/dogPic.png'
const HomeContainerTop = ({setActive}) => {

    return (
      <div className="homeTopContainer">
        <div className="flex">
          <div className="homePageText">
            <h1>Not only people need a house</h1>
            <p>Get yourself a friend in no time.</p>
            <Link to={"/animals"}>
              <label onClick={() => setActive("animals")}>Find a friend</label>
            </Link>
          </div>
          <div>
            <img alt="dog" src={dogPic} />
          </div>
        </div>
      </div>
    );
}

export default HomeContainerTop;