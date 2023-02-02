import ArtistProfile from "./ArtistProfile";
import "./TitleBoxStyle.scss";

interface titleProps {
  artist: string;
  title: string;
}

const TitleBox = (props: titleProps) => {
  const { artist, title } = props;
  return (
    <div className="goods__title__box">
      <ArtistProfile name={artist} />
      <span>{title}</span>
    </div>
  );
};

export default TitleBox;
