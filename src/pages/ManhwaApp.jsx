import React from "react";
import "./styles/ManhwaApp.css";

const manhwas = [
  {
    title: "Muse on Fame",
    image: "/assets/manhwa/muse.jpg",
    description: "A brilliant tale of stardom, music, and secrets."
  },
  {
    title: "Our Secret Alliance",
    image: "/assets/manhwa/secret.jpg",
    description: "Two enemies. One pact.\nA twisted web of love and war."
  },
  {
    title: "Omniscient Reader’s Viewpoint",
    image: "/assets/manhwa/orv.jpg",
    description: "When fiction becomes reality,\nhe becomes the only hope."
  },
  {
    title: "The Greatest Estate Developer",
    image: "/assets/manhwa/estate.jpg",
    description: "A genius architect stuck in a\nfantasy world?\nLet him cook."
  }
];

export default function ManhwaApp({ onClose }) {
  return (
    <div className="manhwa-app">
      <div className="manhwa-header">
        <button onClick={onClose}>←</button>
        <h3>Chiku's Favourite Manhwas</h3>
      </div>

      <div className="manhwa-list">
  {manhwas.map((manhwa, index) => (
    <div className="manhwa-card" key={index}>
  <div className="image-overlay">
    <img src={manhwa.image} alt={manhwa.title} />
    <div className="overlay-content">
      <h4>{manhwa.title}</h4>
      <p>{manhwa.description}</p>
    </div>
  </div>
</div>


  ))}
</div>

    </div>
  );
}
