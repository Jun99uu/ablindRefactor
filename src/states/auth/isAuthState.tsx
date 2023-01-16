import { atom } from "recoil";

interface userInfo {
  name: string;
  profileImg: string;
  uid: number;
  token: string;
}

const defaultInfo: userInfo = {
  name: "",
  profileImg: "",
  uid: 0,
  token: "",
};

const tmpInfo: userInfo = {
  name: "이준규",
  profileImg:
    "https://i.pinimg.com/564x/5e/5a/b3/5e5ab3f0b7ac3892ad16a2ad69be22e1.jpg",
  uid: 0,
  token: "1234",
};

export const isAuthState = atom<boolean>({
  key: "isAuth",
  default: false,
});

export const userInfoState = atom<userInfo>({
  key: "userInfo",
  default: defaultInfo,
});
