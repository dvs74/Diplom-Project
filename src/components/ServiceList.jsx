// src/components/ServiceList.jsx
const services = [
  {
    title: "Вывод из запоя",
    description:
      "Капельницы на дому и в стационаре, снятие интоксикации, восстановление после алкоголя.",
    price: "от 4 900 ₽",
  },
  {
    title: "Кодирование",
    description:
      "Медикаментозные и психологические методики: Эспераль, Торпедо, Двойной блок.",
    price: "от 7 000 ₽",
  },
  {
    title: "Реабилитация",
    description:
      "Долгосрочные восстановительные программы в стационаре. Комплексная поддержка.",
    price: "от 8 000 ₽",
  },
];

export default function ServiceList() {
  return (
    <div className="service-list">
      {services.map((s, i) => (
        <div key={i} className="service-card">
          <h3>{s.title}</h3>
          <p>{s.description}</p>
          <p className="price">{s.price}</p>
        </div>
      ))}
    </div>
  );
}
