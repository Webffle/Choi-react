import { useEffect, useState } from "react";
import style from "../../css/Notice.module.css";

const NoticePagenation = ({
  noticeCount,
  noticeId,
  setNoticePageNum,
  onClickNext,
}) => {
  // page개수를 담고 있는 빈 배열 생성
  const [page, setPage] = useState([]);

  // 만들어둔 빈 배열에 넣어줄 page 개수를 계산하는 함수
  const createPageArray = (num) => {
    let result = [];
    for (let i = 1; i < num + 1; i++) {
      result.push(i);
    }
    return result;
  };

  const handlePage = (index) => {
    setNoticePageNum(index);
    console.log(index);
  };

  // 만들어둔 빈 배열에 바로 값을 넣어주어 page 개수를 보여주기 위한 useEffect
  useEffect(() => {
    const test2 = noticeCount / 5;

    setPage(createPageArray(test2));
  }, []);

  return (
    <div className={style.pagenation}>
      <button>이전</button>
      {page.map((page, index) => (
        <button
          onClick={() => handlePage(index)}
          key={noticeId[index]}
          className={style.pagenation__number}
        >
          {page}
        </button>
      ))}
      <button onClick={onClickNext}>다음</button>
    </div>
  );
};

export default NoticePagenation;
