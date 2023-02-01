import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "./PaginationStyle.scss";

interface pageProps {
  curIdx: number; //현재 페이지 인덱스
  setCurIdx: Dispatch<SetStateAction<number>>;
  pages: number; //총 페이지 수
}

const Pagination = (props: pageProps) => {
  const { curIdx, setCurIdx, pages } = props;
  const [allPages, setAllPages] = useState<Array<Array<number>>>([]);
  const [allFocuses, setAllFocuses] = useState<number>(0);
  const [curFocus, setCurFocus] = useState(0);

  const dividePages = () => {
    const pgArr = Array(pages)
      .fill(0)
      .map((v, i) => i + 1);
    const divide =
      Math.floor(pgArr.length / 5) + (Math.floor(pgArr.length % 5) > 0 ? 1 : 0);
    const newArray = [];

    for (let i = 0; i < divide; i++) {
      newArray.push(pgArr.splice(0, 5));
    }
    setAllFocuses(divide - 1);
    setAllPages(newArray);
  };

  const moveFocus = (direction: boolean) => {
    if (direction) {
      //오른쪽
      curFocus < allFocuses
        ? setCurFocus((prev) => prev + 1)
        : setCurFocus((prev) => prev);
    } else {
      //왼쪽
      curFocus > 0
        ? setCurFocus((prev) => prev - 1)
        : setCurFocus((prev) => prev);
    }
  };

  useEffect(() => {
    dividePages();
  }, []);

  useEffect(() => {
    setCurIdx(curFocus * 5);
  }, [curFocus]);

  return (
    <ul className="pagination">
      <li onClick={() => moveFocus(false)}>
        <FontAwesomeIcon icon={faCaretLeft} />
      </li>
      {allPages.length > 0 ? (
        allPages[curFocus].map((page, idx) => (
          <li
            onClick={() => setCurIdx(curFocus * 5 + idx)}
            className={
              curIdx === page - 1 ? "selected__page" : "no__selected__page"
            }
            key={page}
          >
            {page}
          </li>
        ))
      ) : (
        <></>
      )}
      <li onClick={() => moveFocus(true)}>
        <FontAwesomeIcon icon={faCaretRight} />
      </li>
    </ul>
  );
};

export default Pagination;
