import { useEffect, useState } from "react";
import "./page2.css";
import youtubeIds from "../data/youtubeIds";

export default function Page2() {
  const tabRightImages = {
    1: Array.from(
      { length: 52 },
      (_, i) => `/img/2page/right${String(i + 1).padStart(2, "0")}.png`
    ),
    2: Array.from(
      { length: 4 },
      (_, i) => `/img/2page/right2-${String(i + 1).padStart(2, "0")}.png`
    ),
    3: Array.from(
      { length: 2 },
      (_, i) => `/img/2page/right3-${String(i + 1).padStart(2, "0")}.png`
    ),
  };
  const [activeTab, setActiveTab] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(1);
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/embed/sr2P3zjFLsQ"
  );

  const mainImg = `/img/2page/left${
    activeTab === 1 ? "" : `${activeTab.toString()}-`
  }${index.toString().padStart(2, "0")}.png`;
  const tabImg = `/img/2page/theater-tab-${activeTab
    .toString()
    .padStart(2, "0")}.png`;

  const changeImg = (index) => {
    setIndex(index + 1);

    const youtubeId = youtubeIds[activeTab][index];
    setVideoUrl(`https://www.youtube.com/embed/${youtubeId}`);
  };
  const changeTab = (tabIndex) => {
    const newTab = tabIndex + 1;
    setIndex(1);
    setActiveTab(newTab);
    const firstYoutubeId = youtubeIds[newTab][0];
    setVideoUrl(`https://www.youtube.com/embed/${firstYoutubeId}`);
  };

  useEffect(() => {
    // fullpage API가 있으면 fullpage 스크롤도 비활성화
    const disableFullpage = () => {
      if (window.fullpage_api) {
        try {
          window.fullpage_api.setAllowScrolling(false);
          window.fullpage_api.setKeyboardScrolling(false);
        } catch (e) {}
      }
    };
    const enableFullpage = () => {
      if (window.fullpage_api) {
        try {
          window.fullpage_api.setAllowScrolling(true);
          window.fullpage_api.setKeyboardScrolling(true);
        } catch (e) {}
      }
    };

    if (isOpen) {
      // body overflow 잠금
      document.body.style.overflow = "hidden";
      // fullpage가 있으면 스크롤 비활성화
      disableFullpage();
    } else {
      document.body.style.overflow = "";
      enableFullpage();
    }
    // 컴포넌트 언마운트 시 안전하게 복구
    return () => {
      document.body.style.overflow = "";
      enableFullpage();
    };
  }, [isOpen]);

  return (
    <div className="main-bg2">
      <div className="main-theater">
        <a className="left" onClick={() => setIsOpen(true)}>
          <img src={mainImg} />
        </a>
        <div className="right">
          <img src={tabImg}></img>
          <ul className="tab">
            {Array.from({ length: 3 }).map((_, idx) => (
              <li key={idx} onClick={() => changeTab(idx)}></li>
            ))}
          </ul>
          <div className="imgs">
            {tabRightImages[activeTab].map((src, idx) => {
              return (
                <img key={idx} src={src} onClick={() => changeImg(idx)}></img>
              );
            })}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="popup-bg">
          <div className="popup-inner">
            <img
              className="popup-top"
              src="/trickcal-home/img/2page/theater-popup-top.png"
            ></img>
            <img
              className="popup-close"
              onClick={() => setIsOpen(false)}
              src="/trickcal-home/img/2page/theater-popup-close.png"
            ></img>
            <iframe
              id="youtubePlayer"
              src={videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
