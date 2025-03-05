import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Landing from "./components/Landing";
import EventShowcase from "./components/EventCard";
import Events from "./components/Events";
import Hackathon from "./components/Hackathon";
import BugBounty from "./components/BugBounty";
import Quiz from "./components/Quiz";
import TypingSpeed from "./components/TypingSpeed";
import ValorantTournament from "./components/ValorantTournament";
import BGMITournament from "./components/BGMITournament";
import FIFATournament from "./components/FIFATournament";
import Brochure from "./components/Brochure";

/**
 * Component to handle Google Analytics page tracking on route changes
 */
const AnalyticsHandler = () => {
  const location = useLocation();

  useEffect(() => {
    sendPageView(location.pathname);
  }, [location]);

  return null; // This component doesn't render anything
};




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<EventShowcase />} />
        <Route path="/brochure" element={<Brochure />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/hackathon" element={<Hackathon />} />
        <Route path="/events/bug-bounty" element={<BugBounty />} />
        <Route path="/events/quiz" element={<Quiz/>} />
        <Route path="/events/typing-speed" element={<TypingSpeed />} />
        <Route path="/events/valorant-tournament" element={<ValorantTournament />} />
        <Route path="/events/bgmi-tournament" element={<BGMITournament />} />
        <Route path="/events/fifa-tournament" element={<FIFATournament />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
