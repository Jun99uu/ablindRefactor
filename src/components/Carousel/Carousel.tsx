import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { CarouselItem } from "../../interfaces/CarouselItem";
import "./CarouselStyle.scss";

type PropType = {
  slides: Array<CarouselItem>;
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <img className="embla__slide__img" src={slide.img} />
              {slide.url !== "" ? (
                <span
                  className="embla__slide__link"
                  onClick={() => window.open(`${slide.url}`)}
                >
                  자세히보기
                </span>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
