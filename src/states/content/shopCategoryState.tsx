import { atom } from "recoil";

export enum Menus {
  All = "전체상품",
  Category = "카테고리",
  Artist = "작가",
}

export const menuState = atom<string>({
  key: "menu",
  default: Menus.All,
});

export const detailMenuState = atom<string>({
  key: "detailMenu",
  default: "",
});
