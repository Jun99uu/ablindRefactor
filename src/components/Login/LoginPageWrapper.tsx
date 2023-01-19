import Button from "../Common/Button";
import "./LoginPageStyle.scss";
import useInput from "../../hooks/useInput";

const LoginPageWrapper = () => {
  const [id, setId] = useInput("");
  const [pwd, setPwd] = useInput("");

  return (
    <div className="login-page-wrapper">
      <div className="titles">
        <span>특별한 예술가를 만나다,</span>
        <span className="logo">Ablind</span>
      </div>
      <ul>
        <li>
          <label htmlFor="id">ID</label>
          <input
            id="id"
            type="text"
            placeholder="ID를 입력해주세요."
            onChange={(e) => setId(e)}
          />
        </li>
        <li>
          <label htmlFor="pwd">Password</label>
          <input
            id="pwd"
            type="password"
            placeholder="Password를 입력해주세요."
            onChange={(e) => setPwd(e)}
          />
        </li>
      </ul>
      <div className="btns">
        <Button title={`로그인`} handler={() => console.log(id, pwd)} />
        <Button
          title={`가입하고 특별한 예술가 만나보기!`}
          handler={() => null}
        />
      </div>
    </div>
  );
};

export default LoginPageWrapper;
