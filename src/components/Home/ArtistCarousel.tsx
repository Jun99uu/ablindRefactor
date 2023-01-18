import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { Artist } from "../../interfaces/ArtistInHome";
import "./ArtistCarouselStyle.scss";

type PropType = {
  slides: Artist[];
  options?: EmblaOptionsType;
};

const ArtistCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="artist__viewport" ref={emblaRef}>
      <div className="artist__container">
        {slides.map((slide) => (
          <div className="artist__slide" key={slide.artistId}>
            <div className="box">
              <img src={slide.profile} />
              <ul>
                <li>
                  <span className="intro">{slide.intro}</span>
                  <span className="name">{slide.name}</span>
                </li>
                <li className="link">자세히보기</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistCarousel;
