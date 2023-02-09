import TitleBox from "./TitleBox/TitleBox";
import { goodsDetail } from "./../../interfaces/Goods";
import { useState } from "react";
import "./GoodsPageStyle.scss";
import MenuList from "./MenuList";
import ContentWrapper from "./ContentWrapper";

export enum Menu {
  Info = "상세 정보",
  Review = "리뷰",
  Qna = "Q&A",
}

const GoodsPageWrapper = (props: { item: goodsDetail }) => {
  const { item } = props;
  const [selected, setSelected] = useState<Menu>(Menu.Info);

  return (
    <div className="goods-page-wrapper">
      <TitleBox artist={item.author} title={item.name} price={item.price} />
      <MenuList selected={selected} setSelected={setSelected} />
      <ContentWrapper selected={selected} detailImg={item.detailImg} />
    </div>
  );
};

export default GoodsPageWrapper;
