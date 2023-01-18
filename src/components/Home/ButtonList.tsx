import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphones,
  faCartShopping,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
// import "./HomeStyle.scss";

const ButtonList = () => {
  return (
    <ul className="button-list">
      <li>
        <button className="first-btn">
          <FontAwesomeIcon icon={faHeadphones} />
        </button>
        <span>About</span>
      </li>
      <li>
        <button className="second-btn">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
        <span>Shop</span>
      </li>
      <li>
        <button className="third-btn">
          <FontAwesomeIcon icon={faPaintBrush} />
        </button>
        <span>Artist</span>
      </li>
    </ul>
  );
};

export default ButtonList;
