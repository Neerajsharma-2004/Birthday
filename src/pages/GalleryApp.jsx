import React, { useState } from "react";
import galleryPhotos from "./gallery";
import "./styles/GalleryApp.css";

export default function GalleryApp({ onClose }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="gallery-modal">
      {!selectedPhoto ? (
        <>
          <div className="gallery-header">
            <h3>Gallery</h3>
            <button onClick={onClose}>×</button>
          </div>
          <div className="photo-grid">
            {galleryPhotos.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Photo ${index + 1}`}
                className="grid-photo"
                onClick={() => setSelectedPhoto(src)}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="fullscreen-photo">
          <button className="back-button" onClick={() => setSelectedPhoto(null)}>←</button>
          <img src={selectedPhoto} alt="Full View" />
        </div>
      )}
    </div>
  );
}
