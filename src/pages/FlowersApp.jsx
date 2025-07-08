import React from "react";
import "./styles/FlowersApp.css";

const flowers = [
  {
    name: "Purple Hyacinth",
    image: "/assets/flowers/hyacinth.jpg",
    note: "Symbol of sorrow and forgiveness, but so beautiful."
  },
  {
    name: "Tulips",
    image: "/assets/flowers/tulips.jpg",
    note: "Elegant and timeless, like her."
  },
  {
    name: "Lilies",
    image: "/assets/flowers/lilies.jpg",
    note: "Graceful and pure – just like her vibe."
  },
  {
    name: "Roses",
    image: "/assets/flowers/roses.jpg",
    note: "Classic beauty that never goes out of style."
  }
];

export default function FlowersApp({ onClose }) {
  return (
    <div className="flowers-modal">
        
      <div className="flowers-header">
        <h3>Chiku's Favorite Flowers 🌸</h3>
        <button onClick={onClose}>×</button>
      </div>
      <div className="flowers-grid">
        {flowers.map((flower, index) => (
          <div key={index} className="flower-card">
            <img src={flower.image} alt={flower.name} />
            <h4>{flower.name}</h4>
            <p>{flower.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
