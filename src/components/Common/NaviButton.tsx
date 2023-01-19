//앞에 + 이모티콘이 붙는 이동 버튼 컴포넌트
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./NaviButtonStyle.scss";

interface buttonProps {
  url: string;
  title: string;
}

const NaviButton = (props: buttonProps) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(`/${props.url}`)} className="navi-button">
      <span className="plus-icon">
        <FontAwesomeIcon icon={faPlusCircle} />
      </span>
      <span className="title">{props.title}</span>
    </button>
  );
};

export default NaviButton;
