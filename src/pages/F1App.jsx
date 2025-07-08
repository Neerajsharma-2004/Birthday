import React,{useState} from "react";
import "./styles/F1App.css";

const f1Drivers = [
  {
    name: "Charles Leclerc",
    team: "Scuderia Ferrari",
    country: "Monaco",
    image: "/assets/f1/charles.jpg",
    bg: "/assets/f1/charles-bg.jpg",
    quote: "Smooth operator. Pure class on the track.",
    stats: {
      wins: 5,
      podiums: 30,
      poles: 20
    }
  },
  {
  name: "Carlos Sainz",
  team: "Ferrari",
  country: "Spain",
  image: "/assets/f1/carlos.jpg",
  bg: "/assets/f1/carlos-bg.jpg",
  quote: "Smooth Operator. Calm, composed, and quick under pressure.",
  stats: {
    wins: 2,
    podiums: 20,
    poles: 5
  }
  },
  {
    name: "Lando Norris",
    team: "McLaren",
    country: "United Kingdom",
    image: "/assets/f1/lando.jpg",
    bg: "/assets/f1/lando-bg.jpg",
    quote: "The fun one. Young, fast and fearless.",
    stats: {
      wins: 1,
      podiums: 15,
      poles: 1
    }
  }
];

export default function F1App({ onClose }) {
  const [selectedDriver, setSelectedDriver] = useState(null);

  return (
    <div className="f1-modal">
      <div className="f1-header">
        <h3>Chiku's F1 Favourites 🏎️</h3>
        <button onClick={onClose}>×</button>
      </div>

      <div className="f1-grid">
        {f1Drivers.map((driver, index) => (
          <div key={index} className="driver-card" onClick={() => setSelectedDriver(driver)}>
            <img src={driver.image} alt={driver.name} />
            <div className="driver-info">
              <h4>{driver.name}</h4>
              <p><strong>Team:</strong> {driver.team}</p>
              <p><strong>Country:</strong> {driver.country}</p>
              <p className="quote">“{driver.quote}”</p>
            </div>
          </div>
        ))}
      </div>

      {selectedDriver && (
        <div className="driver-popup">
          <div className="popup-content" style={{ backgroundImage: `url(${selectedDriver.bg})` }}>
            <div className="popup-overlay">
              <h2>{selectedDriver.name}</h2>
              <p>{selectedDriver.quote}</p>
              <ul>
                <li><strong>Team:</strong> {selectedDriver.team}</li>
                <li><strong>Country:</strong> {selectedDriver.country}</li>
                <li><strong>Wins:</strong> {selectedDriver.stats.wins}</li>
                <li><strong>Podiums:</strong> {selectedDriver.stats.podiums}</li>
                <li><strong>Pole Positions:</strong> {selectedDriver.stats.poles}</li>
              </ul>
              <button onClick={() => setSelectedDriver(null)}>← Back</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
