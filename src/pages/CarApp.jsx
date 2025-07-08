import React,{ useState} from "react";
import "./styles/CarApp.css";
import CarStatsModal from "./CarStatsModal";

const cars = [
  {
    name: "McLaren 720S",
    image: "/assets/cars/mclaren.jpg",
    description: "Twin-turbo V8 • 710hp • 0-100 in 2.8s ⚡",
    stats: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: "710 HP",
      topSpeed: "341 km/h",
      acceleration: "2.8s (0-100 km/h)"
    }
  },
  {
    name: "Lamborghini Aventador",
    image: "/assets/cars/aventador.jpg",
    description: "V12 engine • 770hp • Loud & Legendary 🔥",
    stats: {
      engine: "6.5L Naturally Aspirated V12",
      horsepower: "770 HP",
      topSpeed: "350 km/h",
      acceleration: "2.9s (0-100 km/h)"
    }
  }
];

export default function CarApp({ onClose }) {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <div className="car-app">
      <div className="car-header">
        <button onClick={onClose}>←</button>
        <h3>Chiku's Favourite Cars</h3>
      </div>

      <div className="car-list">
        {cars.map((car, index) => (
          <div className="car-card" key={index}>
            <img src={car.image} alt={car.name} />
            <div className="car-info">
              <h4>{car.name}</h4>
              <p>{car.description}</p>
              <button className="explore-btn" onClick={() => setSelectedCar(car)}>
                Explore More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedCar && (
        <CarStatsModal car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </div>
  );
}
