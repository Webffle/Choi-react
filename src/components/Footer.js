import style from "../css/style_default.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__left}>
        <ul className={style.footer__left__title}>
          <li>회사소개</li>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>이메일 무단 수집거부</li>
          <li>FAQ</li>
        </ul>
        <p>
          상호명:한국역동(주)!대표미시: 이산, 어전 개인정부 순리책교자: 신경수
          사업자동복벤호 1141043분|등신한대법인과: 20000시용명동포,345g
          사업자창학인드 시설장주소지, 시울 영등포구 시골대로 613 191074451 M:
          00 30994210| tral: nfwoodarcckri 입금제타 : 전 13391006128604
          인국악(주)
        </p>
      </div>
      <div className={style.footer__right}>
        <div className={style.footer__right__title}>
          <p>Google Play</p>
          <p>App Store</p>
        </div>
        <div className={style.footer__right__title}>
          <p>고객감동센터</p>
          <p>080-000-0000</p>
          <p>0900- 12,00 주말 및 공유함 휴우</p>
        </div>
        <div className={style.footer__right__title}>
          <p>Insta</p>
          <p>Youtube</p>
          <p>Kakao</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
