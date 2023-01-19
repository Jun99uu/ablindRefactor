import "./ButtonStyle.scss";

interface btnProps {
  title: string;
  handler: () => void;
}

const Button = (props: btnProps) => {
  const { title, handler } = props;
  return (
    <button onClick={handler} className="default-btn">
      {title}
    </button>
  );
};

export default Button;
