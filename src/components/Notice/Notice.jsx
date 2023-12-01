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
      <NoticeTitle />
      <NoticeSubTitle />
      <NoticeWrap noticeData={noticeData} />
      <NoticePagenation />
    </div>
  ) : (
    <Error />
  );
};

export default Notice;
