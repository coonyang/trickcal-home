import { useState } from "react";
import "./page5.css";
export default function Page5() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);
  const merchGroups = [7, 8];
  const deviceTypes = ["PC", "iPhone", "Galaxy", "Watch"];
  const goodsExtByItem = {
    "01": "jpg",
    "02": "png",
    "03": "jpg",
    "04": "jpg",
    "05": "jpg",
    "06": "jpg",
    "07": "jpg",
    "08": "png",
  };

  return (
    <div className="main-bg5">
      <div className="container">
        <ul>
          {activeTab === 0 && (
            <li>
              <img src="img/5page/media-paper-bg.png"></img>
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
                        <img src="img/5page/media-paper-btn.png"></img>
                      </a>
                    </li>
                  );
                })}
              </ol>
            </li>
          )}
          {activeTab === 1 && (
            <li>
              <img src="img/5page/media-merch-bg.png"></img>
              <ol className="inner-tab1">
                <li
                  onClick={() => {
                    setActiveTab2(0);
                  }}
                >
                  <img
                    src={
                      activeTab2 === 0
                        ? "/img/5page/media-merch-tab01-on.png"
                        : "/img/5page/media-merch-tab01-off.png"
                    }
                  ></img>
                </li>
                <li
                  onClick={() => {
                    setActiveTab2(1);
                  }}
                >
                  <img
                    src={
                      activeTab2 === 1
                        ? "/img/5page/media-merch-tab02-on.png"
                        : "/img/5page/media-merch-tab02-off.png"
                    }
                  ></img>
                </li>
              </ol>
              <ol className="inner-tab-cont">
                {Array.from({ length: merchGroups[activeTab2] }).map((a, i) => {
                  const groupStr = String(activeTab2 + 1).padStart(2, "0");
                  const itemStr = String(i + 1).padStart(2, "0");
                  return (
                    <li className="inner-tab2" key={`${groupStr}-${itemStr}`}>
                      <div className="inner-tab2-img">
                        <img
                          src={`/img/5page/merch${groupStr}-${itemStr}.png`}
                        ></img>
                      </div>
                      <div className="tab2-buttons">
                        {deviceTypes.map((type, idx) => (
                          <div>
                            <a
                              key={type}
                              href={`/img/5page/Goods-${groupStr}-${type}-${itemStr}.${goodsExtByItem[itemStr]}`}
                              download
                            >
                              <img
                                src={`/img/5page/media-merch-btn-0${
                                  idx + 1
                                }.png`}
                                alt="type"
                              ></img>
                            </a>
                          </div>
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </li>
          )}
        </ul>
        <ul className="page5-tab">
          <li onClick={() => setActiveTab(0)}></li>
          <li onClick={() => setActiveTab(1)}></li>
        </ul>
        <img src="img/5page/media-text.png"></img>
      </div>
    </div>
  );
}
