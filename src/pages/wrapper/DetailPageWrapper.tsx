//header와 footer가 없는 (회원가입 / 장바구니 / 상품구매) 등의 페이지에서 사용되는 wrapper이다.
import SemiHeader from "../../components/SemiHeader/SemiHeader";
import "./PageStyle.scss";

interface pageProps {
  children: React.ReactNode;
  title: string;
}

const DetailPageWrapper = (props: pageProps) => {
  const { title } = props;
  return (
    <div className="body">
      <SemiHeader title={title} />
      {props.children}
    </div>
  );
};

export default DetailPageWrapper;
