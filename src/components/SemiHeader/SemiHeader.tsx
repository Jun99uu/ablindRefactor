import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import "./SemiHeaderStyle.scss";
import { useNavigate } from "react-router-dom";

interface headerProps {
  title: string;
}

const SemiHeader = (props: headerProps) => {
  const { title } = props;
  const navigate = useNavigate();

  return (
    <ul className="semi-header">
      <li className="btn" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </li>
      <li className="title">{title}</li>
    </ul>
  );
};

export default SemiHeader;
