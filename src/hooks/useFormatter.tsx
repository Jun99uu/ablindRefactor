import { useState, useCallback, useEffect } from "react";
import moment from "moment";

/**
 * 시간 정보를 현재 시간과 비교하여 표기하는 hook
 * @param createdAt 시간 정보 (string)
 */
const useFormatter = (createdAt: string) => {
  const [formatten, setFormatten] = useState("");
  const formatter = useCallback(() => {
    const nowDate = new Date();
    const date = new Date(createdAt);
    const dateByString = moment(createdAt).format("YYYY-MM-DD HH:mm:ss");
    const gapTime = date.getTime() - nowDate.getTime();
    setFormatten(dateByString);
    if (gapTime > -86400000) {
      setFormatten(moment(date).fromNow());
    } else if (gapTime < -86400000) {
      setFormatten(dateByString);
    }
  }, []);

  useEffect(() => {
    formatter();
  }, []);
  return [formatten] as [string];
};

export default useFormatter;
