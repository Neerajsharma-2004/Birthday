import React,{useState} from "react";
import "./styles/FruitsApp.css";

const fruits = [
  {
    name: "Strawberry",
    image: "/assets/fruits/strawberry.jpg",
    description: "Sweet, juicy, and her all-time favorite 🍓"
  },
  {
    name: "Watermelon",
    image: "/assets/fruits/watermelon.jpg",
    description: "Cool and refreshing on a hot day 🍉"
  }
];

export default function FruitsApp({ onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentFruit = fruits[currentIndex];

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % fruits.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + fruits.length) % fruits.length);
  };

  return (
    <div className="fruits-swipe-app">
      <div className="fruits-header">
        <button onClick={onClose}>←</button>
        <h3>Chiku's Favorite Fruits</h3>
      </div>

      <div className="fruit-swipe-card">
        <img src={currentFruit.image} alt={currentFruit.name} />
        <h2>{currentFruit.name}</h2>
        <p>{currentFruit.description}</p>

        <div className="swipe-buttons">
          <button onClick={goPrev}>⟵</button>
          <button onClick={goNext}>⟶</button>
        </div>
      </div>
    </div>
  );
}
