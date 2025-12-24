import { useState } from "react";
import "./page5.css";
export default function Page5() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);

  return (
    <div className="main-bg5">
      <div className="container">
        <ul>
          {activeTab === 0 && (
            <li>
              <img src="/img/5page/media-paper-bg.png"></img>
              <ol className="tab01-content">
                {Array.from({ length: 15 }).map((_, idx) => {
                  const fileIdx = String(idx + 1).padStart(2, "0");
                  return (
                    <li>
                      <img src={`/img/5page/wallpaper-${fileIdx}.png`}></img>
                      <a
                        href={`/img/5page/wallpaper-${fileIdx}.png`}
                        download={`wallpaper-${fileIdx}.png`}
                      >
                        <img src="/img/5page/media-paper-btn.png"></img>
                      </a>
                    </li>
                  );
                })}
              </ol>
            </li>
          )}
          {activeTab === 1 && (
            <li>
              <img src="/img/5page/media-merch-bg.png"></img>
              <ol>
                <li>
                  <img
                    src={
                      activeTab2 === 0
                        ? "/img/5page/media-merch-tab01-on.png"
                        : "/img/5page/media-merch-tab01-off.png"
                    }
                  ></img>
                </li>
              </ol>
              <ol>
                <li>
                  <img
                    src={
                      activeTab2 === 1
                        ? "/img/5page/media-merch-tab02-on.png"
                        : "/img/5page/media-merch-tab02-off.png"
                    }
                  ></img>
                </li>
              </ol>
            </li>
          )}
        </ul>
        <ul className="page5-tab">
          <li onClick={() => setActiveTab(0)}></li>
          <li onClick={() => setActiveTab(1)}></li>
        </ul>
        <img src="/img/5page/media-text.png"></img>
      </div>
    </div>
  );
}
