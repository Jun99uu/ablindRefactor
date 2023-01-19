//홈(index)페이지에서 헤더와 푸터, 그리고 캐러셀을 제외한 콘텐츠의 wrapper 컴포넌트이다.
import "./HomeStyle.scss";
import ButtonList from "./ButtonList";
import ArtistContent from "./ArtistContent";
import ShopContent from "./ShopContent";
import NewsContent from "./NewsContent";

const HomeContentWrapper = () => {
  return (
    <div className="home-wrapper-container">
      <ButtonList />
      <ArtistContent />
      <ShopContent />
      <NewsContent />
    </div>
  );
};

export default HomeContentWrapper;
