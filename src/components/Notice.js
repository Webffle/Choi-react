import style from "../css/Notice.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Error from "./Error";

const Notice = () => {
  const [status, setStatus] = useState();

  const getAllNotice = async () => {
    try {
      const noticeAll = await axios.get("http://13.125.80.120:3000");
      setStatus(200);

      return noticeAll.data;
    } catch (err) {
      const status = err.response.status;
      setStatus(status);
    }
  };

  const [noticeData, setNoticeData] = useState([]);

  useEffect(() => {
    const setNotice = async () => {
      const noticeArray = await getAllNotice();
      console.log(noticeArray);
      setNoticeData(noticeArray);
    };
    setNotice();
  }, []);

  return status === 200 ? (
    <div className={style.container}>
      <div>
        <h1 className={style.title}>CS CENTER</h1>
        <p className={style.title}>궁금한 모든 것을 확인해보세요.</p>
      </div>
      <ul className={style.sub_title}>
        <li>공지사항</li>
        <li>자주 묻는 질문</li>
        <li>1:1 문의</li>
      </ul>
      <div>
        <div className={style.notice__title}>
          <h2>공지사항</h2>
          <div>
            <select>
              <option>제목</option>
              <option>번호</option>
            </select>
            <input placeholder="검색어를 입력해주세요"></input>
            <button>검색하기</button>
          </div>
        </div>
        <div className={style.notice__content}>
          <ul className={style.notice__content__title}>
            <li>번호</li>
            <li>제목</li>
            <li>등록일</li>
          </ul>
          {noticeData.map((notice) => (
            <ul className={style.notice__content__text}>
              <li>{notice.id}</li>
              <li>{notice.title}</li>
              <li>{notice.createdAt}</li>
            </ul>
          ))}
        </div>
      </div>
      <div className={style.pagenation}>
        <button>이전</button>
        <button className={style.pagenation__number}>1</button>
        <button className={style.pagenation__number}>2</button>
        <button>다음</button>
      </div>
    </div>
  ) : (
    <Error />
  );
};

export default Notice;
