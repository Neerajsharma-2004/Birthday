import React from "react";
import "./styles/MovieApp.css";

const movies = [
  {
    title: "Yeh Jawaani Hai Deewani",
    embedUrl: "https://www.youtube.com/embed/Rbp2XUSeUNE",
    description: "Friendship, wanderlust & a journey of self-discovery 🌄"
  },
  {
    title: "Chennai Express",
    embedUrl: "https://www.youtube.com/embed/hZGR5Sj1Bfo",
    description: "A wild train ride full of love, action & laughter 🚂💥"
  }
];

export default function MovieApp({ onClose }) {
  return (
    <div className="movie-app">
      <div className="movie-header">
        <button onClick={onClose}>←</button>
        <h3>Chiku's Favourite Movies</h3>
      </div>

      <div className="movie-list">
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <div className="video-wrapper">
              <iframe
                src={movie.embedUrl}
                title={movie.title}
                allowFullScreen
              ></iframe>
            </div>
            <div className="movie-info">
              <h4>{movie.title}</h4>
              <p>{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
