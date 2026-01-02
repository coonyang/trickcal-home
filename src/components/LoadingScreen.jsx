import { useEffect, useState } from "react";
import "./LoadingScreen.css";

export default function Loading({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setFadeOut(true);
          setTimeout(() => onFinish(), 300);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
    return () => clearInterval(timer);
  }, [onFinish]);

  useEffect(() => {
    const steps = [0, 20, 40, 60, 80, 100];
    steps.forEach((loadinggage, i) => {
      if (progress > loadinggage && i < steps.length - 1) {
        document.querySelector(`.text0${i + 1}`)?.classList.add("on");
        document.querySelector(`.text0${i}`)?.classList.remove("on");
      }
      if (progress >= 100) {
        document.querySelector(`.text0${i + 1}`)?.classList.add("on");
        document.querySelector(`.text0${i}`)?.classList.remove("on");
      }
    });
  }, [progress]);

  return (
    <div className="fake">
      <div className={`main-loading  ${fadeOut ? "fade-out" : ""}`}>
        <div className="loading-container">
          <div className="loading-logo">
            <img src="img/loading-logo.png"></img>
          </div>
          <div className="loading-bar">
            <div className="loading-bar-img">
              <div
                className="loading-progress"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <img
              src="img/loading-bar-chr01.png"
              className="loading-indicator1"
            ></img>
            <img
              src="img/loading-bar-chr02.png"
              className="loading-indicator2"
              style={{ left: `${progress}%` }}
            ></img>
          </div>
          <div className="text">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <img
                key={n}
                src={`img/loading-text0${n}.png`}
                className={`fade-text text0${n}`}
                alt={`text${n}`}
              ></img>
            ))}
          </div>

          <div className="loading-copyright">
            <img src="img/loading-copyright.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
