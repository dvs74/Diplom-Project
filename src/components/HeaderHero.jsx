// src/components/HeaderHero.jsx
export default function HeaderHero() {
  return (
    <section className="header-hero">
      <div className="header-hero-overlay">
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

            {/* 🎯 Мессенджеры перемещены внутрь блока */}
            <div className="hero-messengers">
              <a
                href="https://wa.me/79991234567"
                target="_blank"
                rel="noreferrer"
                title="WhatsApp"
              >
                <img src="/icons/whatsapp.png" alt="WhatsApp" />
              </a>
              <a
                href="https://t.me/clinic_bot"
                target="_blank"
                rel="noreferrer"
                title="Telegram"
              >
                <img src="/icons/telegram.png" alt="Telegram" />
              </a>
              <a
                href="https://vk.com/clinic"
                target="_blank"
                rel="noreferrer"
                title="ВКонтакте"
              >
                <img src="/icons/vk.png" alt="ВКонтакте" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
