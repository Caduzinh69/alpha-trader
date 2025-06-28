
function login() {
    const u = document.getElementById("username").value;
    const p = document.getElementById("password").value;
    if (u === "eduardo" && p === "1234") {
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("mainPanel").style.display = "block";
        simulateSignals();
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

function simulateSignals() {
    const signals = ["COMPRA", "VENDA", "COMPRA", "COMPRA", "VENDA"];
    let index = 0;
    const area = document.getElementById("signalArea");
    const history = document.getElementById("historyList");

    setInterval(() => {
        const sinal = signals[index % signals.length];
        const ativo = "EUR/USD";
        const hora = new Date().toLocaleTimeString();
        const resultado = Math.random() > 0.5 ? "WIN" : "LOSS";
        area.textContent = `📢 SINAL DE ${sinal} detectado no ${ativo}!`;

        const li = document.createElement("li");
        li.textContent = `${hora} - ${ativo} - ${sinal} - ${resultado}`;
        history.prepend(li);

        const voice = new SpeechSynthesisUtterance(`Alpha Trader detectou ${sinal} no ${ativo}`);
        speechSynthesis.speak(voice);
        index++;
    }, 8000);
}
