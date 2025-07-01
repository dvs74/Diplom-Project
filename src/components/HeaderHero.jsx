import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <section className="header-hero">
      <div className="header-hero-overlay">
        <nav className="top-nav">
          <div className="nav-logo">Центр “Здоровая Жизнь”</div>

          <div className="nav-subtext">Наркологическая помощь 24/7</div>

          <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                О клинике
              </Link>
            </li>

            <li
              className="dropdown"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button>Услуги ▾</button>
              <ul className={`dropdown-menu ${servicesOpen ? "show" : ""}`}>
                <li>
                  <Link to="/services/detox" onClick={() => setMenuOpen(false)}>
                    Детоксикация
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/coding"
                    onClick={() => setMenuOpen(false)}
                  >
                    Кодирование
                  </Link>
                </li>
                <li>
                  <Link to="/services/rehab" onClick={() => setMenuOpen(false)}>
                    Реабилитация
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/consult"
                    onClick={() => setMenuOpen(false)}
                  >
                    Консультации
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/contacts" onClick={() => setMenuOpen(false)}>
                Контакты
              </Link>
            </li>

            <li>
              <a href="#form">Записаться</a>
            </li>
          </ul>
        </nav>

        {/* 📍 Основной блок */}
        <div className="header-hero-columns">
          <div className="clinic-info-centered">
            <h1 className="clinic-name">Центр “Здоровая Жизнь”</h1>
            <p className="slogan">
              Анонимное и профессиональное лечение зависимостей
            </p>

            <div className="hero-contacts">
              <a href="tel:+79991234567" className="hero-phone">
                📞 +7 (999) 123-45-67
              </a>
              <a href="#form" className="hero-call-btn">
                Заказать звонок
              </a>
            </div>

            <div className="hero-messengers">
              <a
                href="https://wa.me/79991234567"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/whatsapp.png" alt="WhatsApp" />
              </a>
              <a
                href="https://t.me/clinic_bot"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/telegram.png" alt="Telegram" />
              </a>
              <a href="https://vk.com/clinic" target="_blank" rel="noreferrer">
                <img src="/icons/vk.png" alt="ВКонтакте" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
