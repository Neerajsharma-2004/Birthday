import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Poems from './Poems';
import HerPhone from './pages/HerPhone';
import GlobalMusicPlayer from './GlobalMusicPlayer';

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
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
