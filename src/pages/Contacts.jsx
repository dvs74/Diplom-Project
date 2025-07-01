export default function Contacts() {
  return (
    <section
      style={{ padding: "3rem 1rem", maxWidth: "800px", margin: "0 auto" }}
    >
      <h2>Контакты</h2>
      <p>Мы всегда на связи и готовы ответить на ваши вопросы:</p>

      <ul style={{ lineHeight: "1.8", marginTop: "1rem" }}>
        <li>
          <strong>Телефон:</strong>{" "}
          <a href="tel:+79991234567">+7 (999) 123-45-67</a>
        </li>
        <li>
          <strong>WhatsApp:</strong>{" "}
          <a href="https://wa.me/79991234567" target="_blank" rel="noreferrer">
            wa.me/79991234567
          </a>
        </li>
        <li>
          <strong>Telegram:</strong>{" "}
          <a href="https://t.me/clinic_bot" target="_blank" rel="noreferrer">
            @clinic_bot
          </a>
        </li>
        <li>
          <strong>ВКонтакте:</strong>{" "}
          <a href="https://vk.com/clinic" target="_blank" rel="noreferrer">
            vk.com/clinic
          </a>
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@clinic.ru">info@clinic.ru</a>
        </li>
        <li>
          <strong>Адрес:</strong> г. Москва, ул. Здоровья, д. 1
        </li>
      </ul>
    </section>
  );
}
