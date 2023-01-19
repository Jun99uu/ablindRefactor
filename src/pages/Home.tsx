//index(홈) 페이지를 감싸는 컴포넌트이다.
import CarouselWrapper from "../components/Carousel/CarouselWrapper";
import HomeContentWrapper from "../components/Home/HomeContentWrapper";
import { CarouselItem, HomeCarousel } from "../interfaces/CarouselItem";
import { useState } from "react";
import "../styles/pageStyle.scss";

const Home = () => {
  const [slides, setSlides] = useState<Array<CarouselItem>>(
    dummy.map((item) => {
      return { img: item.image, url: item.link };
    })
  );

  return (
    <div className="home-container">
      <CarouselWrapper items={slides} />
      <HomeContentWrapper />
    </div>
  );
};

export default Home;

const dummy: Array<HomeCarousel> = [
  {
    content: "에이블라인드 아카펠라 소모임, 유니즌 완료",
    deleteImage: "",
    id: 0,
    image: "https://horosocular.s3.ap-northeast-1.amazonaws.com/slide1.png",
    link: "https://www.naver.com/",
  },
  {
    content: "에이블라인드 아카펠라 소모임, 유니즌 완료",
    deleteImage: "",
    id: 1,
    image: "https://horosocular.s3.ap-northeast-1.amazonaws.com/slide2.png",
    link: "https://www.naver.com/",
  },
  {
    content: "에이블라인드 아카펠라 소모임, 유니즌 완료",
    deleteImage: "",
    id: 2,
    image: "https://horosocular.s3.ap-northeast-1.amazonaws.com/slide3.png",
    link: "https://www.naver.com/",
  },
];
