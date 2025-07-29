import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-overlay">
        <div className="footer-content">
          <p>© 2025 Центр “Здоровая Жизнь”</p>
          <p>Лицензия №123456 от Минздрава РФ</p>
          <p>г. Москва, ул. Примерная, д. 1, офис 101</p>
          <p>
            Телефон: <a href="tel:+79991234567">+7 (999) 123-45-67</a>
          </p>
        </div>
      </div>
      {
        <Link
          to="/"
          className="footer-home-link"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ⏮ Вернуться в начало страницы
        </Link>
      }
    </footer>
  );
}
