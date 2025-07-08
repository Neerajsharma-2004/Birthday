import React from "react";
import "./styles/Modal.css";

export default function FavoriteModal({ item, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <img src={item.image} alt={item.title} />
        <h2>{item.label}</h2>
        <p>{item.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
