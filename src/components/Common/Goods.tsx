import { GoodsType } from "../../interfaces/Goods";
import useCutter, { convertWon } from "../../hooks/useCutter";
import "./GoodsStyle.scss";
import { useNavigate } from "react-router-dom";

interface goodsProps {
  item: GoodsType;
  index: number;
}

const Goods = (props: goodsProps) => {
  const { item, index } = props;
  const [name] = useCutter(item.name, 13);
  const navigate = useNavigate();

  return (
    <div
      className="goods-item-wrapper"
      onClick={() => navigate(`/shop/${item.itemId}`)}
    >
      <img src={item.images[0].url} />
      <ul>
        <li>{name}</li>
        <li>{convertWon(`${item.price}`)}원</li>
      </ul>
      <span className={`deco-circle deco-circle-${(index + 1) % 4}`} />
    </div>
  );
};

export default Goods;
