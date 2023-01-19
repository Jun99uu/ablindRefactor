import { GoodsType } from "../../interfaces/Goods";
import Goods from "../Common/Goods";
import "./ShopContentStyle.scss";

interface gridProps {
  items: Array<GoodsType>;
}

const ShopGrid = (props: gridProps) => {
  const { items } = props;
  return (
    <div className="goods-grid-layout">
      {items.map((item, index) => (
        <Goods item={item} key={item.itemId} index={index} />
      ))}
    </div>
  );
};

export default ShopGrid;
