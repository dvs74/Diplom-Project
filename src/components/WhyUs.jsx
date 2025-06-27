// src/components/WhyUs.jsx
const features = [
  { title: "Анонимно", desc: "Без постановки на учёт и утечки данных" },
  { title: "Круглосуточно", desc: "Помогаем 24/7, без выходных" },
  {
    title: "Опытные врачи",
    desc: "Сертифицированные специалисты с опытом от 10 лет",
  },
];

export default function WhyUs() {
  return (
    <section className="why-us">
      <h2>Почему выбирают нас</h2>
      <div className="features">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
