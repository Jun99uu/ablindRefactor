import Button from "../Common/Button";
import "./LoginPageStyle.scss";

const LoginPageWrapper = () => {
  return (
    <div className="login-page-wrapper">
      <div className="titles">
        <span>특별한 예술가를 만나다,</span>
        <span className="logo">Ablind</span>
      </div>
      <ul>
        <li>
          <label htmlFor="id">ID</label>
          <input type="text" placeholder="ID를 입력해주세요." />
        </li>
        <li>
          <label htmlFor="id">Password</label>
          <input type="password" placeholder="Password를 입력해주세요." />
        </li>
      </ul>
      <div className="btns">
        <Button title={`로그인`} handler={() => null} />
        <Button
          title={`가입하고 특별한 예술가 만나보기!`}
          handler={() => null}
        />
      </div>
    </div>
  );
};

export default LoginPageWrapper;
