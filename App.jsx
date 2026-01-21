import { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [servico, setServico] = useState("Corte - R$25");

  function agendar() {
    if (!nome || !data || !hora) {
      alert("Preencha todos os campos");
      return;
    }

    const mensagem = `Olá, me chamo ${nome}.
Gostaria de agendar um horário:

📅 Data: ${data}
⏰ Hora: ${hora}
✂️ Serviço: ${servico}

Barbearia WZ do Corte`;

    const telefone = "5584987716386";
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank");
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>✂️ WZ do Corte</h1>
        <p>Agende seu horário online</p>
      </header>

      <main style={styles.main}>
        <label>Nome</label>
        <input
          style={styles.input}
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>Serviço</label>
        <select
          style={styles.input}
          value={servico}
          onChange={(e) => setServico(e.target.value)}
        >
          <option>Corte - R$25</option>
          <option>Corte + Barba - R$35</option>
          <option>Barba - R$10</option>
          <option>Nevou - R$90</option>
          <option>Luzes - R$80</option>
          <option>Reflexo - R$80</option>
        </select>

        <label>Data</label>
        <input
          style={styles.input}
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <label>Hora</label>
        <input
          style={styles.input}
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />

        <button style={styles.button} onClick={agendar}>
          Reservar no WhatsApp
        </button>
      </main>

      <footer style={styles.footer}>
        <p>🕘 09:30 às 20:00 | Pausa 12h–14h</p>
        <p>📍 Barbearia WZ do Corte</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0f0f0f",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    padding: "20px",
    background: "#000",
  },
  main: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    fontSize: "16px",
  },
  button: {
    marginTop: "15px",
    padding: "15px",
    background: "#25d366",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  footer: {
    textAlign: "center",
    padding: "15px",
    fontSize: "14px",
    opacity: 0.8,
  },
};