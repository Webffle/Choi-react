import Header from "./components/Header";
import Footer from "./components/Footer";

import style from "./css/style_default.module.css";

const App = () => {
  return (
    <div className={style.main}>
      <Header />
      <Footer />
    </div>
  );
};

export default App;
