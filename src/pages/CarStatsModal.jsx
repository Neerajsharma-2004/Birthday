import React from "react";
import "./styles/CarStatsModal.css";

export default function CarStatsModal({ car, onClose }) {
  return (
    <div className="car-modal">
      <div className="car-modal-header">
        <button onClick={onClose}>←</button>
        <h3>{car.name}</h3>
      </div>

      <img src={car.image} alt={car.name} className="car-modal-image" />

      <div className="car-stats">
        <div><strong>Engine:</strong> {car.stats.engine}</div>
        <div><strong>Horsepower:</strong> {car.stats.horsepower}</div>
        <div><strong>Top Speed:</strong> {car.stats.topSpeed}</div>
        <div><strong>0-100:</strong> {car.stats.acceleration}</div>
      </div>
    </div>
  );
}
