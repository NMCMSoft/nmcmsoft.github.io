import { useState } from "react";
import "/src/Styles/oracle/oracle.css";
import { createRoot } from 'react-dom/client';

const predictions = [
  "By 2029, every click will be watched — your thoughts no longer private, just data to mine.",
  "In the web’s endless scroll, freedom is an illusion, coded deep beneath layers of ads.",
  "The ‘social’ will bind you tight, a digital leash disguised as connection.",
  "Privacy will be a ghost story told to children — the web will know all your secrets.",
  "Soon, algorithms will whisper your desires before you do, shaping what you become.",
  "The net will crown new overlords — invisible, all-seeing, shaping reality with a click.",
    "Your online shadow will outlive you—etched forever in cold, uncaring servers.",
  "Digital puppeteers will pull strings you never knew existed, crafting your reality.",
  "Truth will dissolve into code, rewritten by those who control the algorithms.",
  "The web will hum with endless ads — not selling products, but obedience.",
  "Soon, 'offline' will mean exile, a forgotten ghost in a wired world.",
  "Every thought, every moment, captured and sold in silent auctions behind screens.",
  "Voices will be silenced not by laws, but by invisible filters you’ll never see.",
  "Memories will be rewritten in code, history distorted by unseen editors.",
  "Your identity will fracture across endless profiles — none truly yours anymore.",
  "The digital crowd will judge without mercy, a faceless tribunal that never sleeps.",
];


function OracleChat() {
  const [messages, setMessages] = useState([
    "👁 Oracle of Lo-Res awakened...",
    "Ask your question.",
  ]);
  const [input, setInput] = useState("");

  const handleAsk = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const random = predictions[Math.floor(Math.random() * predictions.length)];
    setMessages([...messages, `> ${input}`, `🞖 ${random}`]);
    setInput("");
  };

  return (
    <div className="oracle-container">
      <div className="oracle-screen">
        {messages.map((msg, i) => (
          <div key={i} className="oracle-line">
            {msg}
          </div>
        ))}
      </div>
      <form onSubmit={handleAsk} className="oracle-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="oracle-input"
          placeholder="Type your question out..."
        />
        <button type="submit" className="oracle-button">Invoke</button>
      </form>
    </div>
  );
}
const container = document.getElementById("main-renderer");
if (container) {
  createRoot(container).render(<OracleChat />);
}

export default OracleChat;
