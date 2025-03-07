import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Landing from "./components/Landing";
import EventCard from "./components/EventCard";
import Events from "./components/Events";
import Hackathon from "./components/Hackathon";
import BugBounty from "./components/BugBounty";
import Quiz from "./components/Quiz";
import TypingSpeed from "./components/TypingSpeed";
import ValorantTournament from "./components/ValorantTournament";
import BGMITournament from "./components/BGMITournament";
import FIFATournament from "./components/FIFATournament";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import Merch from "./components/Merch";
import ContactUs from "./components/ContactUs";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<EventCard />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/contact" element={<ContactUs />} />
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
