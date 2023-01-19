//문자열이 특정 길이를 넘어가면 자르고 (…)를 붙여 반환하는 hook
import { useState, useCallback, useEffect } from "react";

const useCutter = (value: string, length: number) => {
  const [str, setStr] = useState(value);

  const cutter = useCallback(() => {
    setStr((prev) =>
      prev.length > length ? `${prev.substring(0, length)}…` : prev
    );
  }, []);

  useEffect(() => {
    cutter();
  }, []);

  return [str];
};

export default useCutter;

export const convertWon = (price: string) => {
  //원화 가운데에 콤마 삽입 함수
  return price.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};
