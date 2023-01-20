import { atom } from "recoil";

interface registerInfo {
  name: string;
  email: string;
  address: string;
  pass: string;
  account: string;
  account_name: string;
  phoneNumber: string;
}

const defaultInfo: registerInfo = {
  name: "",
  email: "",
  address: "",
  pass: "",
  account: "",
  account_name: "",
  phoneNumber: "",
};

export const registerInfoState = atom<registerInfo>({
  key: "registerInfo",
  default: defaultInfo,
});
