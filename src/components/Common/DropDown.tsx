//커스텀 드롭다운 - 공용 컴포넌트
import "./DropDownStyle.scss";

interface dropDownProps {
  items: Array<string>;
  setItem: (item: string) => void;
}

const DropDown = (props: dropDownProps) => {
  const { items, setItem } = props;
  return (
    <div className="drop-down-box">
      <ul>
        {items.map((item) => (
          <li key={item} onClick={() => setItem(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
