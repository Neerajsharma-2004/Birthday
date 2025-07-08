import React from "react";
import "./styles/MovieApp.css";

const movies = [
  {
    title: "Yeh Jawaani Hai Deewani",
    video: "/assets/movies/yjhd.mp4",
    description: "Friendship, wanderlust & a journey of self-discovery 🌄"
  },
  {
    title: "Chennai Express",
    video: "/assets/movies/chennai.mp4",
    description: "A wild train ride full of love, action & laughter 🚂💥"
  }
];

export default function MovieApp({ onClose }) {
  return (
    <div className="movie-app">
      <div className="movie-header">
        <button onClick={onClose}>←</button>
        <h3>Chiku's Favorite Movies</h3>
      </div>

      <div className="movie-list">
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <video
              src={movie.video}
              controls
              preload="metadata"
              poster={`/assets/movies/thumb-${index + 1}.jpg`}
            />
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
