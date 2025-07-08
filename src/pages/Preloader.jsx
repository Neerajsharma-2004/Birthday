import React, { useEffect, useState } from "react";
import "./styles/Preloader.css"; // ← Add this
export default function Preloader({ assets = [], onLoaded }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;

    const handleAssetLoad = () => {
      loadedCount++;
      setProgress(Math.round((loadedCount / assets.length) * 100));
      if (loadedCount === assets.length) {
        setTimeout(() => onLoaded(), 500);
      }
    };

    assets.forEach((url) => {
      const ext = url.split(".").pop();
      if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) {
        const img = new Image();
        img.onload = handleAssetLoad;
        img.onerror = handleAssetLoad;
        img.src = url;
      } else if (["mp3", "wav", "ogg"].includes(ext)) {
        const audio = new Audio();
        audio.oncanplaythrough = handleAssetLoad;
        audio.onerror = handleAssetLoad;
        audio.src = url;
      } else if (["mp4", "webm"].includes(ext)) {
        const video = document.createElement("video");
        video.oncanplaythrough = handleAssetLoad;
        video.onerror = handleAssetLoad;
        video.src = url;
      } else {
        handleAssetLoad(); // fallback
      }
    });
  }, [assets, onLoaded]);

  return (
    <div className="preloader">
      <div className="loader-text">Loading {progress}%</div>
    </div>
  );
}
