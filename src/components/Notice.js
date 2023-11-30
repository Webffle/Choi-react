import style from "../css/Notice.module.css";
import { useEffect, useState } from "react";
import Error from "./Error";
import { httpApi } from "../api/httpApi";

const Notice = () => {
  // response status 관리
  const [status, setStatus] = useState();

  // httpApi에서 요청해서 받아온 data를 가져오는 함수
  const getAllNotice = async () => {
    // status 200 성공했을 때
    try {
      // httpApu에서 요청해서 받아온 data를 noticeAll에 담아둠
      const noticeAll = await httpApi.get("");
      // response.status 코드를 200으로 저장
      setStatus(200);

      // 받아온 data의 data를 return
      return noticeAll.data;
    } catch (err) {
      // status 200이 아닌 실패했을 때
      // error의 status 코드를 status로 담아둠
      const status = err.response.status;
      // response.status 코드를 에러의 status로 저장
      setStatus(status);
    }
  };

  // noticeData 상태 관리
  const [noticeData, setNoticeData] = useState([]);

  // 받아온 noticeData를 useState에 저장
  useEffect(() => {
    // useEffect내에서 async await을 쓰기위한 함수
    const setNotice = async () => {
      // noticeData를 받아오는 변수
      const noticeArray = await getAllNotice();
      // 받아온 data를 sort하는 변수
      const sortedNoticeArray = noticeArray.sort((a, b) => b.id - a.id);
      // setNoticeData에 sort한 data를 저장
      setNoticeData(sortedNoticeArray);
    };
    // 함수 호출
    setNotice();
  }, []);
  /**
   * status 200일 경우에 받아온 data를 이용한 component를 보여주고
   * 200이 아닐 경우에 Error component를 보여줌
   */
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
            <ul key={notice.id} className={style.notice__content__text}>
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
