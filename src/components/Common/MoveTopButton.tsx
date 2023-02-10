import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import "./MoveTopButtonStyle.scss";

const MoveTopButton = () => {
  const moveTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button onClick={moveTop} className="move__top__btn">
      <FontAwesomeIcon icon={faCaretUp} />
    </button>
  );
};

export default MoveTopButton;
