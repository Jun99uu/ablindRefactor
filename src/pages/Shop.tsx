//쇼핑 페이지를 감싸는 컴포넌트이다.
import CarouselWrapper from "../components/Carousel/CarouselWrapper";
import { useState } from "react";
import ShopPageWrapper from "../components/Shop/ShopPageWrapper";
import { Banner } from "../interfaces/Shop";
import { CarouselItem } from "../interfaces/CarouselItem";

const Shop = () => {
  const [slides, setSlides] = useState<Array<CarouselItem>>(
    dummy.map((item) => {
      return { img: item.image, url: item.link };
    })
  );
  return (
    <div className="shop-container">
      <CarouselWrapper items={slides} />
      <ShopPageWrapper />
    </div>
  );
};

export default Shop;

const dummy: Array<Banner> = [
  {
    content: "",
    id: 0,
    image:
      "https://i.pinimg.com/564x/ae/51/02/ae51022fb4ebc90df60656db2d6a6882.jpg",
    link: "https://www.naver.com/",
  },
  {
    content: "",
    id: 1,
    image:
      "https://i.pinimg.com/564x/f4/fa/df/f4fadfc8c696d090a80897d7570ec27b.jpg",
    link: "https://www.naver.com/",
  },
  {
    content: "",
    id: 2,
    image:
      "https://i.pinimg.com/564x/5a/49/ee/5a49ee6b27903c3f1ce03ffa3845db38.jpg",
    link: "https://www.naver.com/",
  },
];
