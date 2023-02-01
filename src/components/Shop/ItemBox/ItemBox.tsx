import { dummy2, GoodsType } from "../../../interfaces/Goods";
import Goods from "../../Common/Goods";
import Pagination from "../../Common/Pagination";
import { useState, useEffect } from "react";
import "./ItemStyle.scss";

const ItemBox = () => {
  const [curIdx, setCurIdx] = useState(0);
  const [items, setItems] = useState<Array<Array<GoodsType>>>([]);

  const divideItems = () => {
    const divide =
      Math.floor(dummy2.length / 8) +
      (Math.floor(dummy2.length % 8) > 0 ? 1 : 0);
    const newArray = [];

    for (let i = 0; i < divide; i++) {
      newArray.push(dummy2.splice(0, 8));
    }
    setItems(newArray);
  };

  useEffect(() => {
    divideItems();
  }, []);

  return (
    <>
      <div className="item-box">
        {items.length > 0 ? (
          items[curIdx].map((item, index) => (
            <Goods item={item} index={index} key={`${index}-${item.itemId}`} />
          ))
        ) : (
          <></>
        )}
      </div>
      <Pagination
        curIdx={curIdx}
        setCurIdx={setCurIdx}
        pages={Math.floor(dummy2.length / 8 + 1)}
      />
    </>
  );
};

export default ItemBox;
