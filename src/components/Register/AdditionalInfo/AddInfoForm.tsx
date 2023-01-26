import DropDown from "../../Common/DropDown";
import { useState, useEffect, SetStateAction, Dispatch } from "react";
import { useRecoilState } from "recoil";
import { registerInfoState } from "../../../states/auth/registerState";
import "../InfoFormStyle.scss";
import AddressBox from "./AddressBox";

export interface addInfo {
  bank: string;
  account: string;
  address: string;
  zoneCode: string;
  detail: string;
  privacy1: boolean;
  privacy2: boolean;
}

const banks = [
  "NH농협",
  "카카오뱅크",
  "KB국민",
  "우리",
  "부산은행",
  "신한은행",
  "BNK경남은행",
  "케이뱅크",
  "DGB대구",
  "광주은행",
  "KDB산업",
  "SC재일",
  "IBK기업",
  "하나",
  "전북은행",
  "SH수협",
  "제주은행",
];

const AddInfoForm = (props: {
  completed: Dispatch<SetStateAction<boolean>>;
}) => {
  const { completed } = props;
  const [info, setInfo] = useRecoilState(registerInfoState);
  const [input, setInput] = useState<addInfo>({
    bank: "",
    account: "",
    address: "",
    zoneCode: "",
    detail: "",
    privacy1: false,
    privacy2: false,
  });
  const [accountDrop, setAccountDrop] = useState(false);
  const [postDrop, setPostDrop] = useState(false);
  const [allPass, setAllPass] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    const nextInput = {
      ...input,
      [name]: name === "privacy1" || name === "privacy2" ? checked : value,
    };

    setInput(nextInput);
  };

  useEffect(() => {
    console.log(input);
    if (
      input.account !== "" &&
      input.address !== "" &&
      input.bank !== "" &&
      input.detail !== "" &&
      input.zoneCode !== "" &&
      input.privacy1 &&
      input.privacy2
    ) {
      setAllPass(true);
      setInfo({
        ...info,
        address: `${input.address}__${input.zoneCode}__${input.detail}`,
        account: input.account,
        account_name: input.bank,
      });
      completed(true);
    }
  }, [input]);

  return (
    <ul className="register-form-layout">
      <li>
        <label htmlFor="bank">환불 계좌</label>
        <span className="account-input">
          <input
            type="text"
            id="bank"
            onClick={() => {
              setAccountDrop(true);
            }}
            value={input.bank}
            placeholder="환불 계좌의 은행을 선택해주세요."
          />
          {accountDrop ? (
            <DropDown
              items={banks}
              setItem={(item: string) => {
                setInput({ ...input, bank: item });
                setAccountDrop(false);
              }}
            />
          ) : (
            <></>
          )}
        </span>
        <input
          type="text"
          id="account"
          name="account"
          value={input.account}
          placeholder="환불 계좌번호를 입력해주세요."
          onChange={onChange}
        />
      </li>
      <li>
        <label htmlFor="address">주소</label>
        <input
          type="text"
          id="address"
          value={input.address}
          onClick={() => setPostDrop(true)}
          placeholder="굿즈를 받아볼 주소를 등록해주세요."
        />
        <input
          type="text"
          id="zoneConde"
          name="zoneCode"
          value={input.zoneCode}
          onClick={() => setPostDrop(true)}
          placeholder="우편 번호를 입력해주세요."
        />
        {postDrop ? (
          <AddressBox input={input} setInput={setInput} setPost={setPostDrop} />
        ) : (
          <></>
        )}
        <input
          type="text"
          id="detail"
          name="detail"
          onChange={onChange}
          value={input.detail}
          placeholder="상세 주소를 입력해주세요."
        />
      </li>
      <ul className="check-ul">
        <li className="check-line">
          <input
            type="checkbox"
            id="privacy1"
            name="privacy1"
            onChange={onChange}
          />
          <label htmlFor="privacy1">
            <span onClick={() => window.open("")}>개인정보 처리 방침</span>을
            확인하였으며, 이에 동의합니다.
          </label>
        </li>
        <li className="check-line">
          <input
            type="checkbox"
            id="privacy2"
            name="privacy2"
            onChange={onChange}
          />
          <label htmlFor="privacy2">
            <span onClick={() => window.open("")}>이용약관</span>을
            확인하였으며, 이에 동의합니다.
          </label>
        </li>
      </ul>
      <span className={allPass ? "pass" : "err"}>
        {allPass ? "모든 정보가 입력되었습니다!" : "모든 정보를 입력해주세요."}
      </span>
    </ul>
  );
};

export default AddInfoForm;
