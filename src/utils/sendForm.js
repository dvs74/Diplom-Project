export async function sendForm(data) {
  const token = "7806513762:AAEptZisaBN8C7qJ6e9xI7J092WPAWVq5Aw";
  const chatId = 5962269674;

  const message = `📩 Новая заявка:
Имя: ${data.name}
Телефон: ${data.phone}
Сообщение: ${data.comment}`;

  const existingLeads = JSON.parse(localStorage.getItem("leads")) || [];
  const newLead = {
    name: data.name,
    phone: data.phone,
    comment: data.comment,
    date: new Date().toLocaleString(),
  };
  localStorage.setItem("leads", JSON.stringify([...existingLeads, newLead]));

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message }),
      }
    );

    if (!response.ok) throw new Error("Ошибка при отправке");

    return { success: true };
  } catch (error) {
    console.error("Ошибка отправки в Telegram:", error);
    return { success: false, error: error.message };
  }
}
