import { useEffect, useState } from "react";
import style from "../../css/Notice.module.css";

const NoticePagenation = () => {
  const [page, setPage] = useState([]);

  const createPageArray = (num) => {
    let result = [];

    for (let i = 1; i < num + 1; i++) {
      result.push(i);
    }
    return result;
  };

  useEffect(() => {
    const test2 = 24 / 5;

    setPage(createPageArray(test2));
  }, []);

  return (
    <div className={style.pagenation}>
      <button>이전</button>
      {page.map((page) => (
        <button className={style.pagenation__number}>{page}</button>
      ))}
      <button>다음</button>
    </div>
  );
};

export default NoticePagenation;
