//header와 footer가 있는 페이지의 wrapper이다.
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Shop from "../Shop";
import Subscribe from "../Subscribe";
import GoodsDetail from "../GoodsDetail";
import Artist from "../Artist";

const DefaultPageWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:goodsId" element={<GoodsDetail />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/subscribe/:artistId" element={<Artist />} />
    </Routes>
  );
};

export default DefaultPageWrapper;
