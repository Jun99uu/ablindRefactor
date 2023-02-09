import { Menu } from "./GoodsPageWrapper";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  selected: Menu;
  setSelected: Dispatch<SetStateAction<Menu>>;
}

const MenuList = (props: Props) => {
  const { selected, setSelected } = props;
  return (
    <ul className="menu__list">
      {Object.values(Menu).map((menu, idx) => (
        <li
          key={menu}
          className={selected === menu ? "selected" : "non--selected"}
          onClick={() => setSelected(menu)}
        >
          {menu}
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
