import { useEffect, useState } from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.min.css";
import "./App.css";
import Page1 from "./1pages/page1";
import Page2 from "./2pages/page2";
import Page3 from "./3pages/page3";
import Page4 from "./4pages/page4";
import Page5 from "./5pages/page5";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const nextPage = () => {
    if (window.fullpage_api) {
      window.fullpage_api.moveSectionDown();
    }
  };
  useEffect(() => {
    if (!loading) {
      const fp = new fullpage("#fullpage", {
        autoScrolling: true,
        scrollHorizontally: true,
      });

      return () => {
        fp.destroy("all"); // 컴포넌트 제거 시 fullpage 해제
      };
    }
  }, [loading]);

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)}></LoadingScreen>;
  }

  return (
    <>
      <div id="fullpage">
        <div className="section">
          <Page1 nextPage={nextPage}></Page1>
        </div>
        <div className="section">
          <Page2></Page2>
        </div>
        <div className="section">
          <Page3></Page3>
        </div>
        <div className="section">
          <Page4></Page4>
        </div>
        <div className="section">
          <Page5></Page5>
        </div>
      </div>

      <button className="mainBtn" onClick={openMenu}>
        <img
          src="/img/nav-button.png"
          alt="버튼이미지"
          style={{ width: "60px", height: "60px", display: "block" }}
        ></img>
      </button>
      <div className="Btns">
        <a
          className="nav-sns"
          href="https://www.youtube.com/@epidgames6350"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/nav-sns01.png" alt="youtube"></img>
        </a>
        <a
          className="nav-sns"
          href="https://cafe.naver.com/trickcal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/nav-sns02.png" alt="youtube"></img>
        </a>
        <a
          className="nav-sns"
          href="https://x.com/Trickcal_Re"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/nav-sns03.png" alt="youtube"></img>
        </a>
        <a
          className="nav-sns"
          href="https://game.naver.com/lounge/Trickcal/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/nav-sns04.png" alt="youtube"></img>
        </a>
      </div>

      <div
        className={`sidebar ${menuOpen ? "open" : ""}`}
        style={{ backgroundImage: "url(/img/nav.png)" }}
      >
        <button className="closeBtn" onClick={closeMenu}>
          <img
            src="/img/nav-close.png"
            style={{ width: "60px", height: "60px", display: "block" }}
          ></img>
        </button>
        <a
          className="logo"
          href="#section1"
          onClick={(e) => {
            e.preventDefault();
            fullpage_api.moveTo(1);
          }}
        ></a>
        <div className="menu">
          {[2, 3, 4, 5].map((num) => (
            <li
              key={num}
              onClick={(e) => {
                e.preventDefault();
                fullpage_api.moveTo(num);
              }}
            ></li>
          ))}
        </div>
        <div className="sns">
          <a
            href="https://www.youtube.com/@epidgames6350"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://cafe.naver.com/trickcal"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://x.com/Trickcal_Re"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://game.naver.com/lounge/Trickcal/home"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
        <a
          className="google"
          href="https://play.google.com/store/apps/details?id=com.epidgames.trickcalrevive"
          target="_blank"
        ></a>
        <a
          className="apple"
          href="https://apps.apple.com/kr/app/%ED%8A%B8%EB%A6%AD%EC%BB%AC-%EB%A6%AC%EB%B0%94%EC%9D%B4%EB%B8%8C/id6443824730"
          target="_blank"
        ></a>
      </div>
    </>
  );
}

export default App;
