//header와 footer가 있는 페이지의 wrapper이다.
import Header from "../../components/Header/Headert";
import "./PageStyle.scss";

interface pageProps {
  children: React.ReactNode;
}

const DefaultPageWrapper = (props: pageProps) => {
  return (
    <div className="body">
      <Header />
      <div className="child">{props.children}</div>
    </div>
  );
};

export default DefaultPageWrapper;
