import React from "react";
import "./styles/AppIcon.css";

export default function AppIcon({ item, onClick }) {
  return (
    <div className="app-icon" onClick={onClick}>
      <img src={item.icon} alt={item.title} />
      <span>{item.label}</span>
    </div>
  );
}
