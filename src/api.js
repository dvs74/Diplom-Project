export function sendForm(data) {
  console.log("Заявка отправлена:", data);
  return Promise.resolve({ success: true });
}
