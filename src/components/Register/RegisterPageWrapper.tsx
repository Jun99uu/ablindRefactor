import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Common/Button";
import BaseInfoForm from "./BaseInfo/BaseInfoForm";
import "./RegisterPageStyle.scss";

enum Stage {
  First = `반가워요!\n간단한 정보만 입력하고 특별한 예술가를 만나보세요!`,
  Second = `굿즈 주문 시 필요한 주소를 입력해주세요.\n잘못된 정보로 인해 발생하는 문제에 대해서는\nAblind가 책임지지 않습니다 :(`,
  Third = `이제 Ablind를 마음껏 즐겨주세요!`,
}

const RegisterPageWrapper = () => {
  const [stage, setStage] = useState(Stage.First);
  const [firstCompleted, setFirstCompleted] = useState(false);
  const [secondCompleted, setSecondCompleted] = useState(false);
  const navigate = useNavigate();

  const nextStage = () => {
    stage === Stage.First && firstCompleted
      ? setStage(Stage.Second)
      : stage === Stage.Second && secondCompleted
      ? setStage(Stage.Third)
      : setStage((prev) => prev);
  };

  return (
    <div className="register-wrapper">
      <div className="title-box">
        <span className="title">
          {stage === Stage.First ? (
            <>
              어서오세요, <span className="register-logo">Ablind</span> 입니다!
            </>
          ) : stage === Stage.Second ? (
            <>주문 시 필요한 정보를 입력해주세요.</>
          ) : (
            <>회원가입이 완료되었습니다!</>
          )}
        </span>
        <span className="subtitle">{stage}</span>
      </div>
      {stage === Stage.First ? (
        <BaseInfoForm completed={setFirstCompleted} />
      ) : stage === Stage.Second ? (
        <></>
      ) : (
        <></>
      )}
      <div className="btn-box">
        {stage === Stage.Third ? (
          <></>
        ) : (
          <Button title="다음 단계로" handler={nextStage} />
        )}
        <Button title="로그인 화면으로" handler={() => navigate("/login")} />
      </div>
    </div>
  );
};

export default RegisterPageWrapper;
