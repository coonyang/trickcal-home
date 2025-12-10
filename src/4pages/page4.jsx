import { useState } from "react";
import "./page4.css";
export default function Page4() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="main-bg4">
      <div className="char-list">
        <ul className="list-img">
          {Array.from({ length: 7 }).map((a, i) => (
            <li
              key={i}
              onClick={() => {
                setIsOpen(true);
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
              <img src="/img/4page/character-01-02.png"></img>
              <a className="sound"></a>
              <a className="change"></a>
              <ol className="view-tab">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <li key={idx} onClick={() => {}}></li>
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
              <li key={idx} onClick={() => {}}></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
