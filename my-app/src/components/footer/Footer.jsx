import "./styles.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item"><a href="https://t.me/aleksandrova_valeriya" target="_blank" rel="noreferrer"><img src="/img/icons/tg.svg" alt="Link" /></a></li>
            <li className="social__item"><a href="https://github.com/AleksandrovaValeria" target="_blank" rel="noreferrer"><img src="/img/icons/gitHub.svg" alt="Link" /></a></li>
          </ul>
          <div className="copyright">
            <p>© 2024</p>
          </div>
        </div>
      </div>
    </footer>
  )
}