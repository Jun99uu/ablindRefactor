import { Menu } from "./GoodsPageWrapper";

interface Props {
  selected: Menu;
  detailImg: string;
}

const ContentWrapper = (props: Props) => {
  const { selected, detailImg } = props;
  return (
    <div className="goods-content__wrapper">
      {selected === Menu.Info ? (
        <img
          src={detailImg}
          alt="상세정보"
          className="goods-content__wrapper--detail"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ContentWrapper;
