import style from "../../css/Notice.module.css";

const NoticePagenation = () => {
  return (
    <div className={style.pagenation}>
      <button>이전</button>
      <button className={style.pagenation__number}>1</button>
      <button className={style.pagenation__number}>2</button>
      <button>다음</button>
    </div>
  );
};

export default NoticePagenation;
