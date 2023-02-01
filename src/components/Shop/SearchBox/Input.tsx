import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Input = () => {
  return (
    <div className="search-input">
      <input type="text" placeholder="상품 이름으로 검색해보세요!"></input>
      <span>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
    </div>
  );
};

export default Input;
