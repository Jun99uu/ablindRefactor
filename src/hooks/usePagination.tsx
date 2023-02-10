import { useState, useCallback, useEffect } from "react";

/**
 * 배열을 n개 단위로 잘라서 페이지네이션한다.
 * 10개 단위로는 끊지 못한다.
 * @param array 자를 배열
 * @param pages 페이지에 들어갈 아이템 수
 */
const usePagination = <T extends any[]>(array: T, counts: number) => {
  const [pagination, setPagination] = useState<Array<Array<T>>>();
  const cutter = useCallback(() => {
    const copy = JSON.parse(JSON.stringify(array));
    const newArr = [];
    const length = array.length;
    const divide =
      Math.floor(length / counts) + (Math.floor(length % counts) > 0 ? 1 : 0);

    for (let i = 0; i < divide; i++) {
      newArr.push(array.splice(0, counts));
    }

    setPagination(newArr);
  }, []);

  useEffect(() => {
    cutter();
  }, []);

  return pagination;
};

export default usePagination;
