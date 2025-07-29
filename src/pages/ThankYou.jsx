import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

export default function ThankYou() {
  const navigate =
    useNavigate(); /*Через useNavigate() получаем функцию, чтобы  менять маршрут без перезагрузки.*/

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 6000); // через 6 сек переход на главную
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="thank-you-page">
      <div className="message-box">
        <h1>Спасибо за вашу заявку! 🎉</h1>
        <p>Мы уже работаем над тем, чтобы связаться с вами как можно скорее.</p>
        <p className="subtext">
          Вы будете автоматически перенаправлены на главную страницу.
        </p>
        {/*Тонкое предупреждение — человек знает, что произойдёт через несколько 	секунд. */}
        <button onClick={() => navigate("/")}>⏮ Вернуться сразу</button>{" "}
        {/*Альтернативный путь — пользователь может не ждать, а вернуться сам
        нажав на кнопку.*/}
      </div>
    </div>
  );
}
