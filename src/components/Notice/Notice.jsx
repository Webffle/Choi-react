import style from "../../css/Notice.module.css";
import { useEffect, useState } from "react";
import Error from "../Error";
import { httpApi } from "../../api/httpApi";
import NoticeTitle from "./NoticeTitle";
import NoticeSubTitle from "./NoticeSubTitle";
import NoticeWrap from "./NoticeWrap";
import NoticePagenation from "./NoticePagenation";

const Notice = () => {
  // response status 관리
  const [status, setStatus] = useState();

  const [noticePageNum, setNoticePageNum] = useState(0);

  // httpApi에서 요청해서 받아온 data를 가져오는 함수
  const getAllNotice = async () => {
    // status 200 성공했을 때
    try {
      // httpApu에서 요청해서 받아온 data를 noticeAll에 담아둠

      let pageData = Number(noticePageNum) * 5;

      const noticeAll = await httpApi.get(`/notice?limit=5&offset=${pageData}`);

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

  const [noticeCount, setNoticeCount] = useState();

  const [noticeId, setNoticeId] = useState([]);

  const [next, setNext] = useState("");

  const [previous, setPrevious] = useState("");

  const onClickNext = async () => {
    const [base_url, next_url] = next.split("?");
    const noticeAll = await httpApi.get(`/notice?${next_url}`);
    const noticeArray = noticeAll.data.noticeData;
    const sortedNoticeArray = noticeArray.sort(
      (a, b) => b.noticeId - a.noticeId
    );
    setNoticeData(sortedNoticeArray);
    setNext(noticeAll.data.next);
  };

  // 받아온 noticeData를 useState에 저장
  useEffect(() => {
    // useEffect내에서 async await을 쓰기위한 함수
    const setNotice = async () => {
      // noticeData를 받아오는 변수
      const noticeData = await getAllNotice();
      const noticeArray = noticeData.noticeData;
      const noticeCount = noticeData.count;
      setNext(noticeData.next);
      setPrevious(noticeData.previous);
      const noticeIdArray = noticeArray.map((data) => data.noticeId);
      setNoticeCount(noticeCount);
      setNoticeId(noticeIdArray);
      // setNoticeCount(noticeData.count)

      // 받아온 data를 sort하는 변수
      const sortedNoticeArray = noticeArray.sort(
        (a, b) => b.noticeId - a.noticeId
      );
      // setNoticeData에 sort한 data를 저장
      setNoticeData(sortedNoticeArray);
    };
    // 함수 호출
    setNotice();
  }, [noticePageNum]);
  /**
   * status 200일 경우에 받아온 data를 이용한 component를 보여주고
   * 200이 아닐 경우에 Error component를 보여줌
   */
  return status === 200 ? (
    <div className={style.container}>
      <NoticeTitle />
      <NoticeSubTitle />
      <NoticeWrap noticeData={noticeData} />
      <NoticePagenation
        noticeCount={noticeCount}
        noticeId={noticeId}
        setNoticePageNum={setNoticePageNum}
        onClickNext={onClickNext}
      />
    </div>
  ) : (
    <Error />
  );
};

export default Notice;
