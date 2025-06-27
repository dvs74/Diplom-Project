import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("leads")) || [];
    setLeads(stored);
  }, []);

  const clearLeads = () => {
    localStorage.removeItem("leads");
    setLeads([]);
  };

  return (
    <div className="admin">
      <h2>Заявки</h2>
      {leads.length === 0 ? (
        <p>Нет заявок</p>
      ) : (
        <ul>
          {leads.map((lead, idx) => (
            <li key={idx}>
              {lead.name} — {lead.phone}
            </li>
          ))}
        </ul>
      )}
      {leads.length > 0 && <button onClick={clearLeads}>Очистить всё</button>}
    </div>
  );
}
