import { useState, useEffect } from "react";
import "./page4.css";
export default function Page4() {
  const [isOpen, setIsOpen] = useState(false);
  const [viewImg, setViewImg] = useState(1);
  const [viewImgTab, setViewImgTab] = useState(1);
  const [isSkin, setIsSkin] = useState(false);
  const [hasSkin, setHasSkin] = useState(false);
  const baseImg = `/img/4page/character-${viewImg
    .toString()
    .padStart(2, "0")}-${viewImgTab.toString().padStart(2, "0")}`;

  const showImg = `${baseImg}${isSkin ? "-skin" : ""}.png`;
  const skinImg = `${baseImg}-skin.png`;

  const tabCount = {
    1: 3,
    2: 3,
    3: 3,
    4: 3,
    5: 3,
    6: 3,
    7: 4,
  };

  useEffect(() => {
    const img = new Image();
    img.src = skinImg;

    img.onload = () => setHasSkin(true);
    img.onerror = () => setHasSkin(false);
  }, [viewImg, viewImgTab]);

  return (
    <div className="main-bg4">
      <div className="char-list">
        <ul className="list-img">
          {Array.from({ length: 7 }).map((a, i) => (
            <li
              key={i}
              onClick={() => {
                setIsOpen(true);
                setViewImg(i + 1);
                setViewImgTab(1);
                setIsSkin(false);
              }}
            >
              <img
                src={`/img/4page/character-${String(i + 1).padStart(
                  2,
                  "0"
                )}.png`}
              ></img>
            </li>
          ))}
        </ul>
        <img src="/img/4page/character-text.png"></img>
      </div>
      {isOpen && (
        <div className="view">
          <ul>
            <li>
              <img src={showImg}></img>
              <a className="sound"></a>
              {hasSkin && (
                <a
                  className="change"
                  onClick={() => setIsSkin((prev) => !prev)}
                ></a>
              )}
              <ol
                className="view-tab"
                style={{
                  width: tabCount[viewImg] === 4 ? "25%" : "19%",
                }}
              >
                {Array.from({ length: tabCount[viewImg] }).map((_, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setViewImgTab(idx + 1);
                      setIsSkin(false);
                    }}
                  ></li>
                ))}
              </ol>
              <button
                className="view-close"
                onClick={() => {
                  setIsOpen(false);
                }}
              ></button>
            </li>
          </ul>
          <ul className="view-mark">
            {Array.from({ length: 7 }).map((_, idx) => (
              <li
                key={idx}
                onClick={() => {
                  setViewImg(idx + 1);
                  setIsSkin(false);
                  setViewImgTab(1);
                }}
              ></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
