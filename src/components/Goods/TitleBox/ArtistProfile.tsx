const ArtistProfile = (props: { name: string }) => {
  const { name } = props;
  return (
    <div className="artist__profile">
      <span>{name.slice(0, 1)}</span>
      <span>{name}</span>
    </div>
  );
};

export default ArtistProfile;
