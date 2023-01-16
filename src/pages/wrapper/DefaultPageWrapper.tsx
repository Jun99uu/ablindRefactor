//header와 footer가 있는 페이지의 wrapper이다.
import Footer from "../../components/Footer/Footer";
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
      <Footer />
    </div>
  );
};

export default DefaultPageWrapper;
