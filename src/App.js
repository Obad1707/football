import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PlayerMenu from "./PlayerMenu";
import PlayerProfile from "./PlayerProfile";  
import CareerTimeline from "./CareerTimeline";
import HighlightsMedia from "./HighlightsMedia";
import PlayerInGames from "./PlayerInGames";
import { useTranslation } from "react-i18next";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PlayerMenu />} />
        <Route path="/player/:playerId" element={<PlayerProfile/>} />
        <Route path="/player/:playerId/career-timeline" element={<CareerTimeline />} />
        <Route path="/player/:playerId/highlights-media" element={<HighlightsMedia />} />
        <Route path="/player/:playerId/games" element={<PlayerInGames />} />
      </Routes>
      <Footer />
    </>
  );
}
