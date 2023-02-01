import Categories from "./Categories";
import Input from "./Input";
import "./SearchStyle.scss";

const SearchBox = () => {
  return (
    <div className="search-box">
      <Input />
      <Categories />
    </div>
  );
};

export default SearchBox;
