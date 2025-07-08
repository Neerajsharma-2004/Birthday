import React from "react";
import "./styles/AnimeApp.css";

const animes = [
  {
    title: "Ao Haru Ride",
    video: "/assets/anime/ao-haru.mp4",
    description: "A sweet and emotional school romance 💙"
  },
  {
    title: "Blue Lock",
    video: "/assets/anime/blue-lock.mp4",
    description: "High-stakes football with intense rivalries ⚽🔥"
  },
  {
    title: "Jujutsu Kaisen",
    video: "/assets/anime/jujutsu-kaisen.mp4",
    description: "Curses, combat, and cool powers 💀💥"
  }
];

export default function AnimeApp({ onClose }) {
  return (
    <div className="anime-app">
      <div className="anime-header">
        <button onClick={onClose}>←</button>
        <h3>Chiku's Favorite Anime</h3>
      </div>

      <div className="anime-list">
        {animes.map((anime, index) => (
          <div className="anime-card" key={index}>
            <video
              src={anime.video}
              controls
              preload="metadata"
              poster={`/assets/anime/thumb-${index + 1}.jpg`}
            />
            <div className="anime-info">
              <h4>{anime.title}</h4>
              <p>{anime.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
