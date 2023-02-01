import { useState } from "react";
import {
  Menus,
  menuState,
  detailMenuState,
} from "../../../states/content/shopCategoryState";
import CategoryItem from "./CategoryItem";
import { useRecoilState } from "recoil";

const Categories = () => {
  const [curCat, setCurCat] = useState<string>(Menus.All);
  const [detailCat, setDetailCat] = useState<string>("");
  const [recoilCat, setRecoilCat] = useRecoilState(menuState);
  const [recoilDetail, setRecoilDetail] = useRecoilState(detailMenuState);

  const menuSelector = (key: string) => {
    setCurCat(key);
    setRecoilCat(key);
    detailSelector("");
  };

  const detailSelector = (key: string) => {
    setDetailCat(key);
    setRecoilDetail(key);
  };

  return (
    <>
      <ul className="category-list">
        {Object.values(Menus).map((menu) => (
          <CategoryItem
            text={menu}
            selected={curCat === menu}
            handler={() => menuSelector(menu)}
            key={menu}
          />
        ))}
      </ul>
      {curCat === Menus.Artist ? (
        <ul className="category-list">
          {Artist.map((art) => (
            <CategoryItem
              text={art}
              selected={detailCat === art}
              handler={() => detailSelector(art)}
              key={art}
            />
          ))}
        </ul>
      ) : curCat === Menus.Category ? (
        <ul className="category-list">
          {Category.map((cat) => (
            <CategoryItem
              text={cat}
              selected={detailCat === cat}
              handler={() => detailSelector(cat)}
              key={cat}
            />
          ))}
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};

export default Categories;

const Category = ["폰 케이스", "스마트톡", "완구", "생필품", "데코"];
const Artist = ["최상엽", "신예찬", "조원상", "신광일"];
