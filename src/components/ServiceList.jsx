// src/components/ServiceList.jsx
import { Link } from "react-router-dom";

const services = [
  {
    title: "Вывод из запоя",
    description:
      "Вывод из запоя — это комплексная медицинская процедура, направленная на прекращение многодневного употребления алкоголя и восстановление организма после тяжёлой интоксикации.",
    price: "от 4 900 ₽",
    slug: "/services/detox",
  },
  {
    title: "Кодирование",
    description:
      "Кодирование от алкоголизма — это метод лечения зависимости, при котором человеку создают устойчивую установку на полное воздержание от спиртного на определённый срок. Оно может быть медикаментозным, психологическим или комбинированным.",
    price: "от 7 000 ₽",
    slug: "/services/coding",
  },
  {
    title: "Реабилитация",
    description:
      "Реабилитация — это второй этап лечения, после детоксикации и/или кодирования. Её цель — не просто очистить организм, а помочь человеку вернуться к полноценной жизни без зависимости.",
    price: "от 8 000 ₽",
    slug: "/services/rehab",
  },
];

export default function ServiceList() {
  return (
    <div className="service-list">
      {services.map((s, i) => (
        <Link key={i} to={s.slug} className="service-card">
          <h3>{s.title}</h3>
          <p>{s.description}</p>
          <p className="price">{s.price}</p>
        </Link>
      ))}
    </div>
  );
}
