import "@fortawesome/fontawesome-svg-core/styles.css";
import DefaultPageWrapper from "./pages/wrapper/DefaultPageWrapper";
import DetailPageWrapper from "./pages/wrapper/DetailPageWrapper";
import "./styles/display.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Subscribe from "./pages/Subscribe";
import GoodsDetail from "./pages/GoodsDetail";
import Artist from "./pages/Artist";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Order from "./pages/Order";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <DefaultPageWrapper>
              <Home />
            </DefaultPageWrapper>
          }
        />
        <Route
          path="/shop"
          element={
            <DefaultPageWrapper>
              <Shop />
            </DefaultPageWrapper>
          }
        />
        <Route
          path="/shop/:goodsId"
          element={
            <DefaultPageWrapper>
              <GoodsDetail />
            </DefaultPageWrapper>
          }
        />
        <Route
          path="/subscribe"
          element={
            <DefaultPageWrapper>
              <Subscribe />
            </DefaultPageWrapper>
          }
        />
        <Route
          path="/subscribe/:artistId"
          element={
            <DefaultPageWrapper>
              <Artist />
            </DefaultPageWrapper>
          }
        />
        <Route
          path="/login"
          element={
            <DetailPageWrapper>
              <Login />
            </DetailPageWrapper>
          }
        />
        <Route
          path="/register"
          element={
            <DetailPageWrapper>
              <Register />
            </DetailPageWrapper>
          }
        />
        <Route
          path="/Cart"
          element={
            <DetailPageWrapper>
              <Cart />
            </DetailPageWrapper>
          }
        />
        <Route
          path="/Order"
          element={
            <DetailPageWrapper>
              <Order />
            </DetailPageWrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
