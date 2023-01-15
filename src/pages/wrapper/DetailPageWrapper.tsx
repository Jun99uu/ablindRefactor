//header와 footer가 없는 (회원가입 / 장바구니 / 상품구매) 등의 페이지에서 사용되는 wrapper이다.
import { Route, Routes } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import Cart from "../Cart";
import Order from "../Order";

const DetailPageWrapper = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Order" element={<Order />} />
    </Routes>
  );
};

export default DetailPageWrapper;
