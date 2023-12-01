import style from "../../css/style_default.module.css";

const Header = () => {
  return (
    <header className={style.head}>
      <h1>ALEX's Logo</h1>
      <ul className={style.head__gnb}>
        <li>ABOUT US</li>
        <li>STORE</li>
        <li>WONDER CLUB</li>
        <li>EVENT</li>
        <li>COMMUNITY</li>
      </ul>
      <div className={style.head__sub_gnb}>
        <p>dark mode</p>
        <p>Search</p>
        <p>Alram</p>
        <p>My page</p>
      </div>
    </header>
  );
};

export default Header;
