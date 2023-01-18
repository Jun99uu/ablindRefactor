//홈(index) 페이지에 존재하는 예술가 컴포넌트
import ContentWrapper from "../Common/ContentWrapper";
import { EmblaOptionsType } from "embla-carousel-react";
import ArtistCarousel from "./ArtistCarousel";
import "./ArtistCarouselStyle.scss";

const ArtistContent = () => {
  const tmpArtist = [
    {
      artistId: 0,
      intro: "바이올리니스트",
      name: "신예찬",
      profile:
        "https://i.pinimg.com/564x/09/f0/e8/09f0e8f40723b5a16c13b6feb4dfdfbe.jpg",
    },
    {
      artistId: 1,
      intro: "바이올리니스트",
      name: "신예찬",
      profile:
        "https://i.pinimg.com/736x/6b/e8/78/6be878e3101cd6f9537b467b5f118ee0.jpg",
    },
    {
      artistId: 2,
      intro: "바이올리니스트",
      name: "신예찬",
      profile:
        "https://i.pinimg.com/564x/dc/34/a7/dc34a7331607ce1732c88b24331b91d2.jpg",
    },
    {
      artistId: 3,
      intro: "바이올리니스트",
      name: "신예찬",
      profile:
        "https://i.pinimg.com/564x/e5/d1/e1/e5d1e123de21f9fd67a52944d7fa4b5e.jpg",
    },
    {
      artistId: 4,
      intro: "바이올리니스트",
      name: "신예찬",
      profile:
        "https://i.pinimg.com/564x/5d/f9/8a/5df98aad7b458dda98e141d6e3be14da.jpg",
    },
  ];
  const OPTIONS: EmblaOptionsType = {
    dragFree: true,
    containScroll: "trimSnaps",
  };

  return (
    <div className="artist-content">
      <ContentWrapper title={`Ablind에서만 만나볼 수 있는\n특별한 예술가들`}>
        <></>
      </ContentWrapper>
      <section className="artist-carousel-wrapper">
        <ArtistCarousel slides={tmpArtist} options={OPTIONS} />
      </section>
    </div>
  );
};

export default ArtistContent;
