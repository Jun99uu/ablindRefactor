import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphones,
  faCartShopping,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
// import "./HomeStyle.scss";

const ButtonList = () => {
  const navigate = useNavigate();
  return (
    <ul className="button-list">
      <li>
        <button className="first-btn" onClick={() => navigate("/about")}>
          <FontAwesomeIcon icon={faHeadphones} />
        </button>
        <span>About</span>
      </li>
      <li>
        <button className="second-btn" onClick={() => navigate("/shop")}>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
        <span>Shop</span>
      </li>
      <li>
        <button className="third-btn" onClick={() => navigate("/artist")}>
          <FontAwesomeIcon icon={faPaintBrush} />
        </button>
        <span>Artist</span>
      </li>
    </ul>
  );
};

export default ButtonList;
