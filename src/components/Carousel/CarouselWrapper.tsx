//공통 캐러셀 래퍼 컴포넌트
import { EmblaOptionsType } from "embla-carousel-react";
import Carousel from "./Carousel";
import { CarouselItem } from "../../interfaces/CarouselItem";
import "./CarouselStyle.scss";

interface CarouselProps {
  items: Array<CarouselItem>;
}

const CarouselWrapper = (props: CarouselProps) => {
  const { items } = props;
  const OPTIONS: EmblaOptionsType = { align: "center", loop: true };

  return (
    <section className="sandbox__carousel">
      <Carousel slides={items} options={OPTIONS} />
    </section>
  );
};

export default CarouselWrapper;
