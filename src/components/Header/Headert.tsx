//헤더 wrapper 컴포넌트
import { useRecoilValue } from "recoil";
import { isAuthState, userInfoState } from "../../states/auth/isAuthState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./HeaderStyle.scss";

const Header = () => {
  const isAuth = useRecoilValue(isAuthState);
  const userInfo = useRecoilValue(userInfoState);
  const navigate = useNavigate();

  return (
    <ul className="header-ul">
      <li>
        {isAuth ? (
          <img src={userInfo.profileImg} className="profile-img" />
        ) : (
          <></>
        )}
      </li>
      <li className="logo" onClick={() => navigate("/")}>
        Ablind
      </li>
      <li>
        {isAuth ? (
          <span className="menu">
            <FontAwesomeIcon icon={faBars} />
          </span>
        ) : (
          <span className="login" onClick={() => navigate("/login")}>
            Login
          </span>
        )}
      </li>
    </ul>
  );
};

export default Header;
