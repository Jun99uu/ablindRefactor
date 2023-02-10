import { ReviewInfo } from "../../../interfaces/Review";
import { useState, useEffect } from "react";
import usePagination from "../../../hooks/usePagination";
import ReviewBox from "./ReviewBox";
import IconButton from "../../Common/IconButton";

interface Props {
  reviews: Array<ReviewInfo>;
}

const ReviewWrapper = (props: Props) => {
  const { reviews } = props;
  const [copies, setCopies] = useState(JSON.parse(JSON.stringify(reviews)));
  const [openedReview, setOpenReview] = useState<ReviewInfo[]>(
    copies.splice(0, 4)
  );

  const open = () => {
    if (copies) {
      const newArr = copies.splice(0, 4);
      setOpenReview((prev) => [...prev, ...newArr]);
    }
  };

  return (
    <ul className="review__wrapper">
      {openedReview &&
        openedReview.map((review, idx) => (
          <ReviewBox review={review} key={review.reviewBoardId} />
        ))}
      {copies.length === 0 ? (
        <></>
      ) : (
        <IconButton title="리뷰 더보기" handler={() => open()} />
      )}
    </ul>
  );
};

export default ReviewWrapper;
