interface itemProps {
  text: string;
  selected: boolean;
  handler: () => void;
}

const CategoryItem = (props: itemProps) => {
  const { text, selected, handler } = props;
  return (
    <li
      className={
        selected
          ? "category__item category__selected"
          : "category__item category__nonselected"
      }
      onClick={handler}
    >
      {text}
    </li>
  );
};

export default CategoryItem;
