//상품 상세정보 페이지를 감싸는 컴포넌트이다.
import CarouselWrapper from "../components/Carousel/CarouselWrapper";
import { useState } from "react";
import { CarouselItem } from "../interfaces/CarouselItem";
import { dummyGoods } from "../interfaces/Goods";
import "../styles/pageStyle.scss";

const GoodsDetail = () => {
  const [slides, setSlides] = useState<Array<CarouselItem>>(
    dummyGoods.images.map((item) => {
      return { img: item.url, url: "" };
    })
  );
  return (
    <div className="goods-container">
      <CarouselWrapper items={slides} />
    </div>
  );
};

export default GoodsDetail;
