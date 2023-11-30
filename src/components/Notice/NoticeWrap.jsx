import style from "../../css/Notice.module.css";

const NoticeWrap = ({ noticeData }) => {
  return (
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
  );
};

export default NoticeWrap;
