// src/components/ContactForm.jsx
import { useState } from "react";
import { sendForm } from "../utils/sendForm"; // вспомогательная функция

export default function ContactForm() {
  const [data, setData] = useState({ name: "", phone: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendForm(data).then(() => {
      setSubmitted(true);
      setData({ name: "", phone: "", comment: "" });
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} id="form">
      <h2>Оставьте заявку</h2>
      {submitted && (
        <p className="success">
          Спасибо! Мы свяжемся с вами в ближайшее время.
        </p>
      )}

      <input
        type="text"
        name="name"
        placeholder="Ваше имя"
        value={data.name}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Телефон"
        value={data.phone}
        onChange={handleChange}
        required
      />
      <textarea
        name="comment"
        placeholder="Комментарий (необязательно)"
        value={data.comment}
        onChange={handleChange}
      />
      <button type="submit">Отправить</button>
    </form>
  );
}
