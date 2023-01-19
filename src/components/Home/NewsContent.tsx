import ContentWrapper from "../Common/ContentWrapper";
import { HomeCarousel } from "../../interfaces/CarouselItem";
import NewsBox from "./NewsBox";
import NaviButton from "../Common/NaviButton";

const NewsContent = () => {
  return (
    <ContentWrapper title="Ablind 소식">
      {dummy.map((item) => (
        <NewsBox item={item} key={item.id} />
      ))}
      <NaviButton
        title="더 많은 소식 보러가기"
        url="https://www.instagram.com/ablind_art/"
      />
    </ContentWrapper>
  );
};

export default NewsContent;

const dummy: Array<HomeCarousel> = [
  {
    content: "에이블라인드 아카펠라 소모임, 유니즌 완료",
    deleteImage: "",
    id: 0,
    image: "https://horosocular.s3.ap-northeast-1.amazonaws.com/slide1.png",
    link: "https://www.naver.com/",
  },
  {
    content: "⭐️️에이블라인드 대학생 기자단 1기 선발완료⭐",
    deleteImage: "",
    id: 1,
    image: "https://horosocular.s3.ap-northeast-1.amazonaws.com/slide2.png",
    link: "https://www.naver.com/",
  },
  {
    content: "💖에이블라인드 장애 예술 크리에이터 전시회 작가(작품) 모집💖",
    deleteImage: "",
    id: 2,
    image: "https://horosocular.s3.ap-northeast-1.amazonaws.com/slide3.png",
    link: "https://www.naver.com/",
  },
];
