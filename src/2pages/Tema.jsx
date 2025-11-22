import { useState } from "react";
import "./Tema.css";

export default function Tema() {
  const tabRightImages = {
    1: Array.from(
      { length: 32 },
      (_, i) => `/img/right${String(i + 1).padStart(2, "0")}.png`
    ),
    2: Array.from(
      { length: 10 },
      (_, i) => `/img/right2-${String(i + 1).padStart(2, "0")}.png`
    ),
    3: Array.from(
      { length: 8 },
      (_, i) => `/img/right3-${String(i + 1).padStart(2, "0")}.png`
    ),
  };

  const tabLeftImages = {
    1: Array.from(
      { length: 32 },
      (_, i) => `/img/left${String(i + 1).padStart(2, "0")}.png`
    ),
    2: Array.from(
      { length: 15 },
      (_, i) => `/img/left2-${String(i + 1).padStart(2, "0")}.png`
    ),
    3: Array.from(
      { length: 10 },
      (_, i) => `/img/left3-${String(i + 1).padStart(2, "0")}.png`
    ),
  };

  const [mainImg, setMainImg] = useState(`/img/left01.png`);
  const [tabImg, setTabImg] = useState(`/img/theater-tab-01.png`);
  const [activeTab, setActiveTab] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const changeImg = (index) => {
    setMainImg(tabLeftImages[activeTab][index]);
  };
  const changeTab = (index) => {
    const num = String(index + 1).padStart(2, "0");
    setTabImg(`/img/theater-tab-${num}.png`);
    setMainImg(tabLeftImages[index + 1][0]);
    setActiveTab(index + 1);
  };

  return (
    <div className="main-bg">
      <div className="main-theater">
        <a className="left" onClick={() => setIsOpen(true)}>
          <img src={mainImg} />
        </a>
        <div className="right">
          <img src={tabImg}></img>
          <ul className="tab">
            <li
              onClick={() => {
                changeTab(0);
              }}
            ></li>
            <li
              onClick={() => {
                changeTab(1);
              }}
            ></li>
            <li
              onClick={() => {
                changeTab(2);
              }}
            ></li>
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
            <img className="popup-top" src="/img/theater-popup-top.png"></img>
            <img
              className="popup-close"
              onClick={() => setIsOpen(false)}
              src="/img/theater-popup-close.png"
            ></img>
          </div>
        </div>
      )}
    </div>
  );
}
