import Header from "./components/DefaultUI/Header";
import Footer from "./components/DefaultUI/Footer";
import Notice from "./components/Notice/Notice";

import style from "./css/style_default.module.css";

const App = () => {
  return (
    <div className={style.main}>
      <Header />
      <Notice />
      <Footer />
    </div>
  );
};

export default App;
