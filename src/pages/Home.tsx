//index(홈) 페이지를 감싸는 컴포넌트이다.
import CarouselWrapper from "../components/Carousel/CarouselWrapper";
import HomeContentWrapper from "../components/Home/HomeContentWrapper";
import { CarouselItem } from "../interfaces/CarouselItem";

const Home = () => {
  const slides: Array<CarouselItem> = [
    {
      img: "https://horosocular.s3.ap-northeast-1.amazonaws.com/slide1.png",
      url: "https://www.naver.com/",
    },
    {
      img: "https://horosocular.s3.ap-northeast-1.amazonaws.com/slide2.png",
      url: "https://www.naver.com/",
    },
    {
      img: "https://horosocular.s3.ap-northeast-1.amazonaws.com/slide3.png",
      url: "https://www.naver.com/",
    },
  ];
  return (
    <div className="home-container">
      <CarouselWrapper items={slides} />
      <HomeContentWrapper />
    </div>
  );
};

export default Home;
