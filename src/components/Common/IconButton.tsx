//앞에 + 이모티콘이 붙는 이동 버튼 컴포넌트
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./NaviButtonStyle.scss";

interface buttonProps {
  handler: () => void;
  title: string;
}

const IconButton = (props: buttonProps) => {
  const { handler, title } = props;
  return (
    <button onClick={() => handler()} className="icon-button">
      <span className="plus-icon">
        <FontAwesomeIcon icon={faPlusCircle} />
      </span>
      <span className="title">{props.title}</span>
    </button>
  );
};

export default IconButton;
