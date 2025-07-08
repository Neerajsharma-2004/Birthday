import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Poems from './Poems';
import HerPhone from './pages/HerPhone';
import Preloader from "./pages/Preloader";
import GlobalMusicPlayer from './GlobalMusicPlayer';

// 🟢 All your assets to preload (add more as needed)
const assetsToPreload = [
  "/assets/lockscreen-bg.mp4",
  "/assets/song.mp3",
  "/assets/songs/am.mp3",
  "/assets/songs/art.mp3",
  "/assets/songs/monkey.mp3",
  "/assets/songs/swim.mp3",
  "/assets/songs/am.mp3",
  "/assets/anime/thumb-1.jpg",
  "/assets/anime/thumb-2.jpg",
  "/assets/anime/thumb-3.jpg",
  "/assets/cars/aventador.jpg",
  "/assets/cars/mclaren.jpg",
  "/assets/characters/kou.png",
  "/assets/characters/miyamura.png",
  "/assets/characters/rin.png",
  "/assets/chocolate/amul-unwrapped.jpg",
  "/assets/chocolate/amul-wrapper.png",
  "/assets/chocolate/kitkat-unwrapped.jpg",
  "/assets/chocolate/kitkat-wrapper.png",
  "/assets/f1/carlos-bg.jpg",
  "/assets/f1/carlos.jpg",
  "/assets/f1/charles-bg.jpg",
  "/assets/f1/charles.jpg",
  "/assets/f1/lando-bg.jpg",
  "/assets/f1/lando.jpg",
  "/assets/flowers/hyacinth.jpg",
  "/assets/flowers/lilies.jpg",
  "/assets/flowers/roses.jpg",
  "/assets/flowers/tulips.jpg",
  "/assets/food/curry.jpg",
  "/assets/food/noodles.jpg",
  "/assets/food/pizza.jpg",
  "/assets/fruits/strawberry.jpg",
  "/assets/fruits/watermelon.jpg",
  "/assets/gallery/photo1.jpg",
  "/assets/gallery/photo2.jpg",
  "/assets/gallery/photo3.jpg",
  "/assets/gallery/photo4.jpg",
  "/assets/gallery/photo5.jpg",
  "/assets/gallery/photo6.jpg",
  "/assets/gallery/photo7.jpg",
  "/assets/gallery/photo8.jpg",
  "/assets/gallery/photo9.jpg",
  "/assets/gallery/photo10.jpg",
  "/assets/icons/anime.png",
  "/assets/icons/book.png",
  "/assets/icons/call.png",
  "/assets/icons/choco.png",
  "/assets/icons/f1.png",
  "/assets/icons/flowers.png",
  "/assets/icons/food.png",
  "/assets/icons/fruits.png",
  "/assets/icons/gallery.png",
  "/assets/icons/hero.png",
  "/assets/icons/lock.png",
  "/assets/icons/message.png",
  "/assets/icons/movie.png",
  "/assets/icons/music.png",
  "/assets/icons/note.png",
  "/assets/icons/phone.png",
  "/assets/icons/setting.png",
  "/assets/manhwa/estate.jpg",
  "/assets/manhwa/muse.jpg",
  "/assets/manhwa/orv.jpg",
  "/assets/manhwa/secret.jpg",
  "/assets/movies/thumb-1.jpg",
  "/assets/movies/thumb-2.jpg",
  "/assets/profiles/dream.jpg",
  "/assets/profiles/Farhat.jpg",
  "/assets/profiles/fool.jpg",
  "/assets/profiles/medi.jpg",
  "/assets/profiles/mina.jpg",
  "/assets/profiles/sumi.jpg",
  "/assets/profiles/vanshi.jpg",
  "/assets/profiles/walker.jpg",
  "/assets/songs/am.jpg",
  "/assets/songs/art.jpg",
  "/assets/songs/cas.jpg",
  "/assets/songs/monkey.jpg",
  "/assets/songs/swim.jpg",
  "/assets/1.png",
  "/assets/2.png",
  "/assets/3.png",
  "/assets/4.png",
  "/assets/5.png",
  "/assets/6.png",
  "/assets/7.png",
  "/assets/8.png",
  "/assets/9.png",
  "/assets/10.png",
  "/assets/11.png",
  "/assets/12.png",
  "/assets/13.png",
  "/assets/14.png",
  "/assets/15.png",
  "/assets/16.png",
  "/assets/17.png",
  "/assets/18.png",
  "/assets/19.png",
  "/assets/20.png",
  "/assets/21.png",
  "/assets/22.png",
  "/assets/23.png",
  "/assets/24.png",
  "/stardust.png",
  "/heart.png"
];

function AppContent() {
  const location = useLocation();
  const shouldShowMusic = location.pathname === "/" || location.pathname === "/poems";

  return (
    <>
      {shouldShowMusic && <GlobalMusicPlayer />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poems" element={<Poems />} />
        <Route path="/her-phone" element={<HerPhone />} />
      </Routes>
    </>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <Router>
      {!loaded ? (
        <Preloader assets={assetsToPreload} onLoaded={() => setLoaded(true)} />
      ) : (
        <AppContent />
      )}
    </Router>
  );
}
