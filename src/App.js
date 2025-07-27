import "./App.css";
import { useState, useEffect } from "react";
import GemischteKarten from "./GemischteKarten";

function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const shuffled = GemischteKarten();
    setCards(shuffled);
  }, []);

  return (
    <div className="app">
      <h1>Memory-Spiel 🧠</h1>

      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card-inner">
              <div className="card-front">❓</div>
              <div className="card-back">{card.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
