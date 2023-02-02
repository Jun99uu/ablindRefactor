import ArtistProfile from "./ArtistProfile";
import "./TitleBoxStyle.scss";
import { convertWon } from "../../../hooks/useCutter";

interface titleProps {
  artist: string;
  title: string;
  price: number;
}

const TitleBox = (props: titleProps) => {
  const { artist, title, price } = props;
  return (
    <div className="goods__title__box">
      <ArtistProfile name={artist} />
      <span>{title}</span>
      <span className="goods__price">{convertWon(price.toString())}원</span>
    </div>
  );
};

export default TitleBox;
