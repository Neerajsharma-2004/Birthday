import React from "react";
import "./styles/FoodApp.css";

const foods = [
  {
    name: "Pizza",
    image: "/assets/food/pizza.jpg",
    description: "Cheesy, crispy, her comfort food ❤️"
  },
  {
    name: "Curry Rice",
    image: "/assets/food/curry.jpg",
    description: "Warm, flavorful — feels like home 🍛"
  },
  {
    name: "Noodles",
    image: "/assets/food/noodles.jpg",
    description: "Spicy, slurpy goodness 🍜"
  }
];

export default function FoodApp({ onClose }) {
  return (
    <div className="food-app">
      <div className="food-header">
        <button onClick={onClose}>←</button>
        <h3>Chiku's Favorite Foods</h3>
      </div>

      <div className="food-list">
        {foods.map((food, index) => (
          <div className="food-card" key={index}>
            <img src={food.image} alt={food.name} />
            <div className="food-info">
              <h4>{food.name}</h4>
              <p>{food.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
