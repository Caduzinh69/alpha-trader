
document.addEventListener("DOMContentLoaded", () => {
  const sinal = document.getElementById("sinal");
  setTimeout(() => {
    sinal.innerText = "📢 SINAL DE COMPRA DETECTADO!";
  }, 3000);
  setTimeout(() => {
    sinal.innerText = "📢 SINAL DE VENDA DETECTADO!";
  }, 7000);
});
