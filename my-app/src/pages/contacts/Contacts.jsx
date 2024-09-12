import "./styles.css";

export default function Contacts() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Moscow, Saint Petersburg</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p>
              <a href="tel:+79117341207">+7 (911) 73-41-207</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:aleksandrova-valeria-01@yandex.ru">aleksandrova-valeria-01@yandex.ru</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}
