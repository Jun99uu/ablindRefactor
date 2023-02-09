import { ReviewInfo } from "../../interfaces/Review";
import { Menu } from "./GoodsPageWrapper";
import ReviewWrapper from "./ReviewBox/ReviewWrapper";

interface Props {
  selected: Menu;
  detailImg: string;
}

const ContentWrapper = (props: Props) => {
  const { selected, detailImg } = props;

  return (
    <div className="goods-content__wrapper">
      {selected === Menu.Info ? (
        <img
          src={detailImg}
          alt="상세정보"
          className="goods-content__wrapper--detail"
        />
      ) : selected === Menu.Review ? (
        <ReviewWrapper reviews={tmpReviews} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ContentWrapper;

const tmpReviews: Array<ReviewInfo> = [
  {
    title: "",
    content:
      "상품이 너무 좋아요~ 예쁘고 맘에 쏙 드네요...\n식품의 판매 허용기한인 영업자 중심의 유통기한에서 보관방법 중수시 안전하게 섭취할 수 있는 소비기한 표시제로 변경 어쩌구",
    image:
      "https://i.pinimg.com/564x/09/f0/e8/09f0e8f40723b5a16c13b6feb4dfdfbe.jpg",
    rate: 5,
    reviewBoardId: 0,
    createdAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    updatedAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    myReview: false,
    username: "중규리",
  },
  {
    title: "",
    content:
      "상품이 너무 좋아요~ 예쁘고 맘에 쏙 드네요...\n식품의 판매 허용기한인 영업자 중심의 유통기한에서 보관방법 중수시 안전하게 섭취할 수 있는 소비기한 표시제로 변경 어쩌구",
    image:
      "https://i.pinimg.com/564x/09/f0/e8/09f0e8f40723b5a16c13b6feb4dfdfbe.jpg",
    rate: 5,
    reviewBoardId: 1,
    createdAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    updatedAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    myReview: false,
    username: "중규리",
  },
  {
    title: "",
    content:
      "상품이 너무 좋아요~ 예쁘고 맘에 쏙 드네요...\n식품의 판매 허용기한인 영업자 중심의 유통기한에서 보관방법 중수시 안전하게 섭취할 수 있는 소비기한 표시제로 변경 어쩌구",
    image:
      "https://i.pinimg.com/564x/09/f0/e8/09f0e8f40723b5a16c13b6feb4dfdfbe.jpg",
    rate: 5,
    reviewBoardId: 2,
    createdAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    updatedAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    myReview: false,
    username: "중규리",
  },
  {
    title: "",
    content:
      "상품이 너무 좋아요~ 예쁘고 맘에 쏙 드네요...\n식품의 판매 허용기한인 영업자 중심의 유통기한에서 보관방법 중수시 안전하게 섭취할 수 있는 소비기한 표시제로 변경 어쩌구",
    image:
      "https://i.pinimg.com/564x/09/f0/e8/09f0e8f40723b5a16c13b6feb4dfdfbe.jpg",
    rate: 5,
    reviewBoardId: 3,
    createdAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    updatedAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    myReview: false,
    username: "중규리",
  },
  {
    title: "",
    content:
      "상품이 너무 좋아요~ 예쁘고 맘에 쏙 드네요...\n식품의 판매 허용기한인 영업자 중심의 유통기한에서 보관방법 중수시 안전하게 섭취할 수 있는 소비기한 표시제로 변경 어쩌구",
    image:
      "https://i.pinimg.com/564x/09/f0/e8/09f0e8f40723b5a16c13b6feb4dfdfbe.jpg",
    rate: 5,
    reviewBoardId: 4,
    createdAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    updatedAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    myReview: false,
    username: "중규리",
  },
  {
    title: "",
    content:
      "상품이 너무 좋아요~ 예쁘고 맘에 쏙 드네요...\n식품의 판매 허용기한인 영업자 중심의 유통기한에서 보관방법 중수시 안전하게 섭취할 수 있는 소비기한 표시제로 변경 어쩌구",
    image:
      "https://i.pinimg.com/564x/09/f0/e8/09f0e8f40723b5a16c13b6feb4dfdfbe.jpg",
    rate: 5,
    reviewBoardId: 5,
    createdAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    updatedAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    myReview: false,
    username: "중규리",
  },
  {
    title: "",
    content:
      "상품이 너무 좋아요~ 예쁘고 맘에 쏙 드네요...\n식품의 판매 허용기한인 영업자 중심의 유통기한에서 보관방법 중수시 안전하게 섭취할 수 있는 소비기한 표시제로 변경 어쩌구",
    image:
      "https://i.pinimg.com/564x/09/f0/e8/09f0e8f40723b5a16c13b6feb4dfdfbe.jpg",
    rate: 5,
    reviewBoardId: 6,
    createdAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    updatedAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    myReview: false,
    username: "중규리",
  },
  {
    title: "",
    content:
      "상품이 너무 좋아요~ 예쁘고 맘에 쏙 드네요...\n식품의 판매 허용기한인 영업자 중심의 유통기한에서 보관방법 중수시 안전하게 섭취할 수 있는 소비기한 표시제로 변경 어쩌구",
    image:
      "https://i.pinimg.com/564x/09/f0/e8/09f0e8f40723b5a16c13b6feb4dfdfbe.jpg",
    rate: 5,
    reviewBoardId: 7,
    createdAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    updatedAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    myReview: false,
    username: "중규리",
  },
  {
    title: "",
    content:
      "상품이 너무 좋아요~ 예쁘고 맘에 쏙 드네요...\n식품의 판매 허용기한인 영업자 중심의 유통기한에서 보관방법 중수시 안전하게 섭취할 수 있는 소비기한 표시제로 변경 어쩌구",
    image:
      "https://i.pinimg.com/564x/09/f0/e8/09f0e8f40723b5a16c13b6feb4dfdfbe.jpg",
    rate: 5,
    reviewBoardId: 8,
    createdAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    updatedAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    myReview: false,
    username: "중규리",
  },
  {
    title: "",
    content:
      "상품이 너무 좋아요~ 예쁘고 맘에 쏙 드네요...\n식품의 판매 허용기한인 영업자 중심의 유통기한에서 보관방법 중수시 안전하게 섭취할 수 있는 소비기한 표시제로 변경 어쩌구",
    image:
      "https://i.pinimg.com/564x/09/f0/e8/09f0e8f40723b5a16c13b6feb4dfdfbe.jpg",
    rate: 5,
    reviewBoardId: 9,
    createdAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    updatedAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    myReview: false,
    username: "중규리",
  },
  {
    title: "",
    content:
      "상품이 너무 좋아요~ 예쁘고 맘에 쏙 드네요...\n식품의 판매 허용기한인 영업자 중심의 유통기한에서 보관방법 중수시 안전하게 섭취할 수 있는 소비기한 표시제로 변경 어쩌구",
    image:
      "https://i.pinimg.com/564x/09/f0/e8/09f0e8f40723b5a16c13b6feb4dfdfbe.jpg",
    rate: 5,
    reviewBoardId: 10,
    createdAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    updatedAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    myReview: false,
    username: "중규리",
  },
  {
    title: "",
    content:
      "상품이 너무 좋아요~ 예쁘고 맘에 쏙 드네요...\n식품의 판매 허용기한인 영업자 중심의 유통기한에서 보관방법 중수시 안전하게 섭취할 수 있는 소비기한 표시제로 변경 어쩌구",
    image:
      "https://i.pinimg.com/564x/09/f0/e8/09f0e8f40723b5a16c13b6feb4dfdfbe.jpg",
    rate: 5,
    reviewBoardId: 11,
    createdAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    updatedAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    myReview: false,
    username: "중규리",
  },
  {
    title: "",
    content:
      "상품이 너무 좋아요~ 예쁘고 맘에 쏙 드네요...\n식품의 판매 허용기한인 영업자 중심의 유통기한에서 보관방법 중수시 안전하게 섭취할 수 있는 소비기한 표시제로 변경 어쩌구",
    image:
      "https://i.pinimg.com/564x/09/f0/e8/09f0e8f40723b5a16c13b6feb4dfdfbe.jpg",
    rate: 5,
    reviewBoardId: 12,
    createdAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    updatedAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    myReview: false,
    username: "중규리",
  },
  {
    title: "",
    content:
      "상품이 너무 좋아요~ 예쁘고 맘에 쏙 드네요...\n식품의 판매 허용기한인 영업자 중심의 유통기한에서 보관방법 중수시 안전하게 섭취할 수 있는 소비기한 표시제로 변경 어쩌구",
    image:
      "https://i.pinimg.com/564x/09/f0/e8/09f0e8f40723b5a16c13b6feb4dfdfbe.jpg",
    rate: 5,
    reviewBoardId: 13,
    createdAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    updatedAt: "Thu Feb 09 2023 21:17:47 GMT+0900",
    myReview: false,
    username: "중규리",
  },
];
