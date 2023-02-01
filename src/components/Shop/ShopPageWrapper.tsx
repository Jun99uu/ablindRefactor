import ItemBox from "./ItemBox/ItemBox";
import SearchBox from "./SearchBox/SearchBox";
import "./ShopStyle.scss";

const ShopPageWrapper = () => {
  return (
    <div className="shop-page-wrapper">
      <SearchBox />
      <ItemBox />
    </div>
  );
};

export default ShopPageWrapper;
