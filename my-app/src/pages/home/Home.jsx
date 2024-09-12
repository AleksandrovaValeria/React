import "./styles.css"

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
              Hi, my name is <em>Valeriya</em>
            </strong>
            <br />a frontend developer
          </h1>
          <div className="header__text">
            <p>with passion for learning and creating.</p>
          </div>
          {/* <a href="#!" className="btn">
            Download CV
          </a> */}
        </div>
      </header>

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Rest API, PHP, HTML5, CSS3, BootStrap, Figma, Pixso, Zeplin, Adobe Photoshop
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
