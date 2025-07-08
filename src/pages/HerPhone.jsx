import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import AppIcon from "./AppIcon";
import FavoriteModal from "./FavoriteModal";
import {mainApps, systemApps} from "./favorites";
import MessageApp from "./MessageApp";
import GalleryApp from "./GalleryApp";
import BandApp from "./BandApp";
import FlowersApp from "./FlowersApp";
import F1App from "./F1App";
import FoodApp from "./FoodApp";
import FruitsApp from "./FruitsApp";
import ChocolateApp from "./ChocolateApp";
import ManhwaApp from "./ManhwaApp";
import AnimeApp from "./AnimeApp";
import MovieApp from "./MovieApp";
import CarApp from "./CarApp";
import CharacterApp from "./CharacterApp";
import "./styles/HerPhone.css";
import "./styles/LockScreen.css"; 

export default function HerPhone() {
  const [locked, setLocked] = useState(true);
  const [unlocking, setUnlocking] = useState(false);
  const [selected, setSelected] = useState(null);
  const [time, setTime] = useState(new Date());
  const [lockSlidingIn, setLockSlidingIn] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleUnlock = () => {
    setUnlocking(true);
    setTimeout(() => {
      setLocked(false);
      setUnlocking(false);
    }, 800);
  };

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const formattedDate = time.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="outer-wrapper">
      <div className="phone-screen">
        {locked && (
  <div
    className={`lock-screen-container ${unlocking ? "slide-up" : ""}`}
    onClick={handleUnlock}
  >
    <video
      autoPlay
      muted
      loop
      className="lock-screen-video"
      src="/assets/lockscreen-bg.mp4" // ← Replace with your actual video path
    />
    <div className="lock-time">{`${hours}:${minutes}`}</div>
    <div className="lock-date">{formattedDate}</div>
    <div className="swipe-text">⬆️ Swipe Up to Unlock</div>
  </div>
)}


        {!locked && (
          <div className="home-screen slide-in">
            <div className="status-bar">♡ {`${hours}:${minutes}`} ✦ CHIKU'S PHONE</div>

            <div className="app-grid">
              {mainApps.map((item, index) => (
                <AppIcon
  key={index}
  item={item}
  onClick={() => {
    if (item.label === "Poems") {
      navigate("/poems"); // navigate to route
    } else {
      setSelected(item);
    }
  }}
/>

              ))}
            </div>

            <div className="dock">
              {systemApps.map((item, index) => (
  <AppIcon
    key={index}
    item={item}
    onClick={() => {
  if (item.label === "Lock") {
  setLockSlidingIn(true);
  setSelected(null); // Close any open app first

  // Wait a frame to apply the animation, THEN lock
  requestAnimationFrame(() => {
    setTimeout(() => {
      setLocked(true);
      setLockSlidingIn(false);
    }, 500); // Duration must match animation time
  });
}else {
    setSelected(item);
  }
}}

  />
))}

            </div>

            {selected && selected.label === "Gallery" ? (
  <GalleryApp onClose={() => setSelected(null)} />
) : selected && selected.label === "Songs" ? (
  <BandApp onClose={() => setSelected(null)} />
) : selected && selected.label === "Messages" ? (
  <MessageApp onClose={() => setSelected(null)} />
) :selected && selected.label === "Flowers" ? (
  <FlowersApp onClose={() => setSelected(null)} />
) :selected && selected.label === "F1" ? (
  <F1App onClose={() => setSelected(null)} />
) :selected && selected.label === "Food" ?(
 <FoodApp onClose={() => setSelected(null)} />
):selected && selected.label === "Fruits" ?(
 <FruitsApp onClose={() => setSelected(null)} />
) :selected && selected.label === "Chocolate" ?(
 <ChocolateApp onClose={() => setSelected(null)} />
):selected && selected.label === "Manhwa" ?(
 <ManhwaApp onClose={() => setSelected(null)} />
) :selected && selected.label === "Anime" ?(
 <AnimeApp onClose={() => setSelected(null)} />
) :selected && selected.label === "Movie" ?(
 <MovieApp onClose={() => setSelected(null)} />
) :selected && selected.label === "Car" ?(
 <CarApp onClose={() => setSelected(null)} />
) :selected && selected.label === "Character" ?(
 <CharacterApp onClose={() => setSelected(null)} />
): selected && selected.label === "Poems" ? (
  <PoemsApp onClose={() => setSelected(null)} />
):selected && (
  <FavoriteModal item={selected} onClose={() => setSelected(null)} />
)}


          </div>
        )}
      </div>
    </div>
  );
}