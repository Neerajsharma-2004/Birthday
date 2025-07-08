import React, { useRef, useState, useEffect } from "react";
import "./GlobalMusicPlayer.css";

export default function GlobalMusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // Attempt to autoplay after mount
    const attemptPlay = async () => {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (err) {
        // Autoplay failed (likely due to browser policy)
        console.log("Autoplay blocked — waiting for user interaction.");
      }
    };
    attemptPlay();
  }, []);

  const togglePlayback = () => {
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="global-music-player">
      <audio ref={audioRef} loop>
        <source src="/assets/song.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={togglePlayback}>
        {playing ?"🔊":"🔇"}
      </button>
    </div>
  );
}
