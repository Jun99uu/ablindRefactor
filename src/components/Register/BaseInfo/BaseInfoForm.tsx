//회원가입의 첫 번째 단계 컴포넌트

import { useState, useEffect, SetStateAction, Dispatch } from "react";
import { useRecoilState } from "recoil";
import { registerInfoState } from "../../../states/auth/registerState";
import "../InfoFormStyle.scss";

enum PwdErr {
  Default = "",
  RegFault = "영문자와 숫자를 포함한 8자 이상으로 입력해주세요.",
  SameFault = "비밀번호가 동일하지 않습니다.",
  Pass = "올바른 비밀번호입니다!",
}

enum IdErr {
  Default = "",
  SameErr = "동일한 아이디가 이미 존재합니다.",
  Pass = "사용 가능한 아이디입니다!",
}

enum AllErr {
  Default = "",
  PassErr = "모든 정보를 올바르게 입력해주세요.",
  Pass = "모든 정보가 올바르게 입력되었습니다!",
}

interface Error {
  idErr: IdErr; //아이디 중복 검사
  pwdErr: PwdErr; //패스워드 체크 검사
  allErr: AllErr; //모두 입력 검사
}

interface baseInfo {
  id: string;
  pwd: string;
  pwdc: string;
  name: string;
  number: string;
}

const BaseInfoForm = (props: {
  completed: Dispatch<SetStateAction<boolean>>;
}) => {
  const { completed } = props;
  const [info, setInfo] = useRecoilState(registerInfoState);
  const [input, setInput] = useState<baseInfo>({
    id: "",
    pwd: "",
    pwdc: "",
    name: "",
    number: "",
  });
  const [err, setErr] = useState<Error>({
    idErr: IdErr.Default,
    pwdErr: PwdErr.Default,
    allErr: AllErr.Default,
  });

  const regularExpression = (name: string, value: string) => {
    //정규식 및 pass 검사 함수
    const pwdReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/; //숫자, 영문자 포함 8자 이상

    if (name === "pwd") {
      //패스워드 입력일 때
      if (!pwdReg.test(value)) setErr({ ...err, pwdErr: PwdErr.RegFault });
      else if (input.pwdc !== value)
        setErr({ ...err, pwdErr: PwdErr.SameFault });
      else setErr({ ...err, pwdErr: PwdErr.Pass });

      return value;
    }

    if (name === "pwdc") {
      //패스워드 확인일 때
      if (input.pwd !== value) setErr({ ...err, pwdErr: PwdErr.SameFault });
      else if (input.pwd === value && pwdReg.test(input.pwd))
        setErr({ ...err, pwdErr: PwdErr.Pass });

      return value;
    }

    if (name === "number") {
      //전화번호 입력할 때
      return value
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
        .replace(/(\-{1,2})$/g, "");
    }

    return value;
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const nextInput = {
      ...input,
      [name]: regularExpression(name, value),
    };

    setInput(nextInput);
  };

  const idSameCheck = () => {
    //통신으로 동일 아이디 검사
    if (input.id !== "") {
      setErr((prev) => {
        return {
          ...err,
          idErr: prev.idErr !== IdErr.Pass ? IdErr.Pass : IdErr.Default,
        };
      });
    }
  };

  useEffect(() => {
    if (
      //모든 값 및 정규식 통과시 all pass
      err.idErr === IdErr.Pass &&
      err.pwdErr === PwdErr.Pass &&
      input.name !== "" &&
      input.number.length === 13
    )
      setErr({ ...err, allErr: AllErr.Pass });
    else setErr({ ...err, allErr: AllErr.PassErr });
  }, [input, err.idErr, err.pwdErr]);

  useEffect(() => {
    if (err.allErr === AllErr.Pass) {
      setInfo({
        ...info,
        name: input.name,
        email: input.id,
        pass: input.pwd,
        phoneNumber: input.number,
      });
      completed(true);
    }
  }, [err.allErr]);

  return (
    <ul className="register-form-layout">
      <li>
        <label htmlFor="id">아이디</label>
        <span className="id-input">
          <input
            type="text"
            id="id"
            placeholder="아이디를 정확하게 입력해주세요."
            name="id"
            onChange={onChange}
            maxLength={15}
            value={input.id}
            disabled={err.idErr === IdErr.Pass}
          />
          <button onClick={idSameCheck}>
            {err.idErr === IdErr.Pass ? "다시입력" : "중복검사"}
          </button>
        </span>
        {err.idErr !== "" ? (
          <span className={err.idErr !== IdErr.Pass ? "err" : "pass"}>
            {err.idErr}
          </span>
        ) : (
          <></>
        )}
      </li>
      <li>
        <label htmlFor="pwd">비밀번호</label>
        <input
          type="password"
          id="pwd"
          placeholder="영문자 및 숫자를 포함한 8자리 이상으로 입력해주세요."
          name="pwd"
          onChange={onChange}
          value={input.pwd}
        />
        <input
          type="password"
          id="pwdc"
          placeholder="비밀번호를 한 번 더 입력해주세요."
          name="pwdc"
          onChange={onChange}
          value={input.pwdc}
        />
        {err.pwdErr !== "" ? (
          <span className={err.pwdErr !== PwdErr.Pass ? "err" : "pass"}>
            {err.pwdErr}
          </span>
        ) : (
          <></>
        )}
      </li>
      <li>
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          placeholder="이름을 정확하게 입력해주세요."
          name="name"
          onChange={onChange}
          maxLength={10}
          value={input.name}
        />
      </li>
      <li>
        <label htmlFor="num">휴대폰 전화번호</label>
        <input
          type="text"
          id="num"
          placeholder="전화번호를 정확하게 입력해주세요."
          name="number"
          onChange={onChange}
          value={input.number}
          maxLength={13}
        />
        {err.allErr !== "" ? (
          <span className={err.allErr !== AllErr.Pass ? "err" : "pass"}>
            {err.allErr}
          </span>
        ) : (
          <></>
        )}
      </li>
    </ul>
  );
};

export default BaseInfoForm;
