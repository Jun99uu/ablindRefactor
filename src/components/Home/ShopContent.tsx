import ContentWrapper from "../Common/ContentWrapper";
import { dummy } from "../../interfaces/Goods";
import ShopGrid from "./ShopGrid";
import NaviButton from "../Common/NaviButton";

const ShopContent = () => {
  return (
    <ContentWrapper title={`당신을 위해 준비한\n특별한 굿즈`}>
      <ShopGrid items={dummy} />
      <NaviButton title="더 많은 굿즈 보러가기" url="shop" />
    </ContentWrapper>
  );
};

export default ShopContent;
