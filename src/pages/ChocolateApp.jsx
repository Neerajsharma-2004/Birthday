import React, { useState } from "react";
import "./styles/ChocolateApp.css";

const chocolates = [
  {
    name: "KitKat",
    image: "/assets/chocolate/kitkat-wrapper.png",
    unwrappedImage: "/assets/chocolate/kitkat-unwrapped.jpg",
    description: "Crispy wafer layers in smooth milk chocolate 🍫"
  },
  {
    name: "Amul 99% Dark",
    image: "/assets/chocolate/amul-wrapper.png",
    unwrappedImage: "/assets/chocolate/amul-unwrapped.jpg",
    description: "Bold, bitter, and intensely dark — just like her taste 💀"
  }
];

export default function ChocolateApp({ onClose }) {
  const [flipped, setFlipped] = useState(Array(chocolates.length).fill(false));

  const toggleFlip = (index) => {
    const newFlips = [...flipped];
    newFlips[index] = !newFlips[index];
    setFlipped(newFlips);
  };

  return (
    <div className="choco-app">
      <div className="choco-header">
        <button onClick={onClose}>←</button>
        <h3>Her Favourite Chocolates</h3>
      </div>

      <div className="choco-grid">
        {chocolates.map((choco, index) => (
          <div
            className={`choco-card ${flipped[index] ? "flipped" : ""}`}
            onClick={() => toggleFlip(index)}
            key={index}
          >
            <div className="choco-inner">
              <div className="choco-front">
                <img src={choco.image} alt={choco.name} />
              </div>
              <div className="choco-back">
                <img src={choco.unwrappedImage} alt={`${choco.name} unwrapped`} />
                <div className="choco-info">
                  <h4>{choco.name}</h4>
                  <p>{choco.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
