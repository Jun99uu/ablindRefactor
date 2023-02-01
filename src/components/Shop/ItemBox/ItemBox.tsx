import { dummy2 } from "../../../interfaces/Goods";
import Goods from "../../Common/Goods";
import "./ItemStyle.scss";

const ItemBox = () => {
  return (
    <div className="item-box">
      {dummy2.map((item, index) => (
        <Goods item={item} index={index} />
      ))}
    </div>
  );
};

export default ItemBox;
