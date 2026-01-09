import { useEffect, useState } from "react";
import "./page3.css";

export default function Page3() {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="main-bg3">
      <div className="story">
        <img src="img/3page/worldview-story.png"></img>
        <a
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <img src="img/3page/worldview-video.png"></img>
        </a>
      </div>
      <div className="char">
        <img src="img/3page/worldview-char.png"></img>
      </div>
      {isOpen && (
        <div className="popup-bg" onClick={() => setIsOpen(false)}>
          <div className="popup-inner-3page">
            <iframe
              id="youtubePlayer"
              src="https://www.youtube.com/embed/O9OJ5_-Put8"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="popup-btn"></div>
          </div>
        </div>
      )}
    </div>
  );
}
