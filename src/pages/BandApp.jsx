import React, { useState, useRef, useEffect } from "react";
import favoriteSongs from "./band";
import "./styles/BandApp.css";

export default function BandApp({ onClose }) {
  const [current, setCurrent] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (current && isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [current, isPlaying]);

  const handlePlay = (song) => {
    if (current?.id === song.id) {
      setIsPlaying(true); // resume if same song
    } else {
      setCurrent(song);
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="band-modal">
      <div className="band-header">
        <h3>Favorites 🎧</h3>
        <button onClick={onClose}>×</button>
      </div>

      <div className="song-list">
        {favoriteSongs.map((song) => (
          <div key={song.id} className="song-item">
            <img src={song.cover} alt={song.title} className="song-cover" />
            <div className="song-info">
              <h4>{song.title}</h4>
              <p>{song.artist}</p>
              {current?.id === song.id && isPlaying ? (
                <button onClick={handlePause}>⏸ Pause</button>
              ) : (
                <button onClick={() => handlePlay(song)}>▶️ Play</button>
              )}
            </div>
          </div>
        ))}
      </div>

      {current && (
        <audio
          ref={audioRef}
          src={current.file}
          onEnded={() => {
            setIsPlaying(false);
            setCurrent(null);
          }}
        />
      )}
    </div>
  );
}
