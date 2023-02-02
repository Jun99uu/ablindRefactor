import TitleBox from "./TitleBox/TitleBox";
import { goodsDetail } from "./../../interfaces/Goods";
import "./GoodsPageStyle.scss";

const GoodsPageWrapper = (props: { item: goodsDetail }) => {
  const { item } = props;
  return (
    <div className="goods-page-wrapper">
      <TitleBox artist={item.author} title={item.name} price={item.price} />
    </div>
  );
};

export default GoodsPageWrapper;
