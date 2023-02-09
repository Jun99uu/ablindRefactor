import { ReviewInfo } from "../../../interfaces/Review";
import useFormatter from "../../../hooks/useFormatter";
import useCutter from "../../../hooks/useCutter";
import { useState } from "react";

interface Props {
  review: ReviewInfo;
}

const ReviewBox = (props: Props) => {
  const { review } = props;
  const [open, setOpen] = useState(false);
  const [formatten] = useFormatter(review.createdAt);
  const [content] = useCutter(review.content, 50);

  return (
    <div className="reivew__box">
      <ul onClick={() => setOpen((prev) => !prev)}>
        <li className="review__box--name">{review.username}</li>
        <li className="review__box--date">{formatten}</li>
        <li className="review__content">{open ? review.content : content}</li>
      </ul>
      <img
        src={review.image}
        alt="리뷰 이미지"
        onClick={() => window.open(review.image)}
      />
    </div>
  );
};

export default ReviewBox;
