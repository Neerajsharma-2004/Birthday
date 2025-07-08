import React from "react";
import "./styles/AnimeApp.css";

const animes = [
  {
    title: "Ao Haru Ride",
    youtubeId: "lgGUEEaIMaQ",
    description: "A sweet and emotional school romance 💙"
  },
  {
    title: "Blue Lock",
    youtubeId: "ckEUVyKanhw",
    description: "High-stakes football with intense rivalries ⚽🔥"
  },
  {
    title: "Jujutsu Kaisen",
    youtubeId: "2docezZl574",
    description: "Curses, combat, and cool powers 💀💥"
  }
];

export default function AnimeApp({ onClose }) {
  return (
    <div className="anime-app">
      <div className="anime-header">
        <button onClick={onClose}>←</button>
        <h3>Chiku's Favourite Anime</h3>
      </div>

      <div className="anime-list">
        {animes.map((anime, index) => (
          <div className="anime-card" key={index}>
            <div className="youtube-wrapper">
              <iframe
                width="100%"
                height="215"
                src={`https://www.youtube.com/embed/${anime.youtubeId}`}
                title={anime.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
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
