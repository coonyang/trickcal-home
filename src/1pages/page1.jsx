import "./page1.css";

export default function Page1({ nextPage }) {
  return (
    <div
      className="main-bg1"
      style={{ backgroundImage: `url("/img/1page/main-bg.jpg")` }}
    >
      <div className="content">
        <img
          className="main-logo"
          src="/trickcal-home/img/1page/main-logo.png"
          alt="mainLogo"
        ></img>
        <a
          className="home-google"
          href="https://play.google.com/store/apps/details?id=com.epidgames.trickcalrevive"
          target="_blank"
        ></a>
        <a
          className="home-apple"
          href="https://apps.apple.com/kr/app/%ED%8A%B8%EB%A6%AD%EC%BB%AC-%EB%A6%AC%EB%B0%94%EC%9D%B4%EB%B8%8C/id6443824730"
          target="_blank"
        ></a>
      </div>

      <img
        className="scroll"
        src="/trickcal-home/img/1page/main-scroll.png"
        alt="scroll"
        onClick={nextPage}
      ></img>
    </div>
  );
}
