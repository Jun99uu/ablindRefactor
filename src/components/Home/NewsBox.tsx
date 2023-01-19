import { HomeCarousel } from "../../interfaces/CarouselItem";
import "./NewsBoxStyle.scss";

interface newsProps {
  item: HomeCarousel;
}

const NewsBox = (props: newsProps) => {
  const { item } = props;
  return (
    <div className="news-box">
      <span>{item.content}</span>
      <span
        onClick={() => {
          window.open(item.link);
        }}
      >
        자세히보기
      </span>
    </div>
  );
};

export default NewsBox;
