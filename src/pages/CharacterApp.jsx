import React,{ useState, useRef, useEffect } from "react";
import "./styles/CharacterApp.css";

export default function CharacterApp({ onClose }) {
  const [showSwipe, setShowSwipe] = useState(true);
  const scrollRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current.scrollLeft > 20) {
        setShowSwipe(false);
      }
    };

    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollEl) {
        scrollEl.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const characters = [
    {
      name: "Rin Itoshi",
      image: "/assets/characters/rin.png",
      quote: "I’ll score goals, no matter what it takes.",
      theme: "#0c1a3c"
    },
    {
      name: "Kou Mabuchi",
      image: "/assets/characters/kou.png",
      quote: "You’re always in my heart, even if I don’t say it.",
      theme: "#284d4d"
    },
    {
      name: "Izumi Miyamura",
      image: "/assets/characters/miyamura.png",
      quote: "You don’t have to be perfect to be loved.",
      theme: "#442c18"
    }
  ];

  return (
    <div className="character-app">
      <div className="character-header">
        <button onClick={onClose}>←</button>
        <h3>Chiku's Favorite Characters</h3>
      </div>

      <div className="character-scroll" ref={scrollRef}>
        {characters.map((char, index) => (
          <div className="character-room" style={{ backgroundColor: char.theme }} key={index}>
            <img src={char.image} alt={char.name} className="character-image" />
            <div className="character-name">{char.name}</div>
            <div className="character-quote">“{char.quote}”</div>
          </div>
        ))}
      </div>

      {showSwipe && (
        <div className="swipe-indicator">
          <span className="swipe-arrow">⟶</span>
          <span className="swipe-text">Swipe</span>
        </div>
      )}
    </div>
  );
}
